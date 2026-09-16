"""실험 공통 모듈.

01_ollama_chat.py 와 02_compare_models.py 가 함께 쓰는 것들을 모았습니다.
STEP 6(로컬 본 실험)과 STEP 7(Cloud 비교)에서도 이 모듈을 그대로 씁니다.

구성
    GenerationOptions : 생성 설정. 모든 후보에 같은 값을 적용하기 위해 한 곳에 둡니다.
    EvalSet           : data/eval 의 평가 세트 하나 (명부 50명 + 정답).
    PromptBuilder     : [작업 지시] + [교인 명부] 순서로 조립합니다.
    ModelRunner       : 모델 호출 인터페이스. OllamaRunner 가 이를 구현합니다.
    TopTen            : 모델 응답에서 top 10 을 꺼내 명부와 대조하고 정답과 맞춰 봅니다.
    ResultStore       : 실행 기록을 JSONL 로 남깁니다.
"""

import json
import re
import time
from dataclasses import dataclass, asdict, field
from datetime import date
from pathlib import Path

import ollama

ROOT = Path(__file__).parent.parent
DATA_DIR = ROOT / "data"
EVAL_DIR = DATA_DIR / "eval"
ANSWER_KEY_FILE = EVAL_DIR / "answer_key.json"
RESULTS_DIR = ROOT / "results"

# 명부 데이터가 만들어진 기준일. "다음 7일"의 시작점이라 프롬프트에 그대로 넣습니다.
TODAY = date(2026, 9, 14)

TOP_N = 10


@dataclass
class GenerationOptions:
    """생성 설정.

    두 후보에 똑같은 값이 적용돼야 비교가 성립합니다. 값을 바꾸려면 여기만 고치고,
    바꾼 값은 실행 기록에 그대로 남아 나중에 확인할 수 있습니다.

    temperature 0 은 STEP 2 의 목록 일관성 조건 때문입니다. 값이 흔들리면 같은 명부에
    다른 10명이 나와 순서를 믿을 수 없습니다.
    """

    num_ctx: int = 16384
    temperature: float = 0.0

    def to_ollama(self) -> dict:
        """Ollama 의 options 인자로 넘길 형태."""
        return {k: v for k, v in asdict(self).items() if v is not None}

    def to_record(self) -> dict:
        """실행 기록에 남길 형태."""
        return asdict(self)


class EvalSet:
    """평가 세트 하나. 명부 50명과 그 세트의 정답을 함께 들고 있습니다."""

    def __init__(self, name: str, path: Path, members: list,
                 must_include: list, must_exclude: list):
        self.name = name
        self.path = path
        self.members = members
        self.must_include = must_include  # [{id, name, case}]
        self.must_exclude = must_exclude

    @classmethod
    def load_all(cls, key_path: Path = ANSWER_KEY_FILE) -> list:
        key = json.loads(Path(key_path).read_text(encoding="utf-8"))
        return [cls._from_key(entry, key_path) for entry in key["sets"]]

    @classmethod
    def load(cls, name: str, key_path: Path = ANSWER_KEY_FILE) -> "EvalSet":
        for s in cls.load_all(key_path):
            if s.name == name:
                return s
        raise KeyError(f"{name} 세트가 없습니다")

    @classmethod
    def _from_key(cls, entry: dict, key_path: Path) -> "EvalSet":
        path = ROOT / entry["file"]
        data = json.loads(path.read_text(encoding="utf-8"))
        return cls(entry["set"], path, data["members"],
                   entry["must_include"], entry["must_exclude"])

    @property
    def by_id(self) -> dict:
        return {m["id"]: m for m in self.members}

    def to_prompt_text(self) -> str:
        """명부를 프롬프트에 넣을 텍스트로 바꿉니다."""
        lines = ["[교인 명부]"]
        for m in self.members:
            family = ", ".join(f"{r['relation']}: {r['name']}" for r in m["family"]) or "정보 없음"
            prayers = ", ".join(p["content"] for p in m["prayer_requests"]) or "없음"
            years = [str(y["year"]) for y in m["community_history"] if y["affiliations"]]
            lines += [
                f"- [{m['id']}] {m['name']}",
                f"    나이: {m['age']} / 성별: {m['gender']} / 신앙 연차: {m['faith_years']}",
                f"    마지막 심방일: {m['last_visitation_date']}",
                f"    최근 8주 출석: {m['recent_attendance']}",
                f"    건강 상태: {m['health_note']}",
                f"    최근 경조사: {m['family_event']}",
                f"    비고: {m['special_note']}",
                f"    가족관계: {family}",
                f"    기도제목: {prayers}",
                f"    심방 기록: {len(m['visitation_records'])}회",
                f"    소속 이력: {', '.join(years) if years else '없음'}",
            ]
        return "\n".join(lines)


class PromptBuilder:
    """[작업 지시] + [교인 명부] 순서로 프롬프트를 조립합니다.

    지시문은 모든 세트와 모든 후보에 같은 것을 씁니다.
    """

    INSTRUCTION = (
        "[작업]\n"
        f"오늘은 {TODAY.isoformat()}입니다. 아래 교인 명부를 읽고, 오늘부터 다음 7일 동안\n"
        f"심방해야 할 교인 {TOP_N}명을 우선순위가 높은 순서로 골라 주세요.\n"
        "\n"
        "- 명부에 있는 교인만 고릅니다. 같은 교인을 두 번 넣지 않습니다.\n"
        "- 각 교인마다 명부에 적힌 내용을 근거로 한 줄을 씁니다.\n"
        "- 명부에 없는 내용은 쓰지 않습니다.\n"
        "- 아래 JSON 형식으로만 답합니다. 다른 설명을 붙이지 않습니다.\n"
        "\n"
        '{"top10": [{"rank": 1, "id": "교인 식별값", "name": "이름", "reason": "근거 한 줄"}]}'
    )

    @classmethod
    def build(cls, eval_set: EvalSet) -> str:
        return f"{cls.INSTRUCTION}\n\n{eval_set.to_prompt_text()}"


_JSON_BLOCK = re.compile(r"\{.*\}", re.DOTALL)


@dataclass
class TopTen:
    """모델 응답에서 꺼낸 top 10 과 검증 결과.

    format_ok / roster_ok / no_dup 은 STEP 2 의 필수 통과 조건을 코드로 확인하는 부분입니다.
    hit_include / hit_exclude 는 STEP 5 의 정답 대조입니다.
    """

    entries: list = field(default_factory=list)   # [{rank, id, name, reason}]
    issues: list = field(default_factory=list)
    hit_include: int = 0
    miss_exclude: int = 0

    @property
    def format_ok(self) -> bool:
        return not self.issues

    @classmethod
    def parse(cls, text: str, eval_set: EvalSet) -> "TopTen":
        result = cls()
        block = _JSON_BLOCK.search(text or "")
        if not block:
            result.issues.append("JSON 없음")
            return result
        try:
            data = json.loads(block.group(0))
        except json.JSONDecodeError as exc:
            result.issues.append(f"JSON 파싱 실패: {exc.msg}")
            return result

        entries = data.get("top10")
        if not isinstance(entries, list):
            result.issues.append("top10 배열 없음")
            return result
        result.entries = entries

        if len(entries) != TOP_N:
            result.issues.append(f"{TOP_N}명이 아니라 {len(entries)}명")

        roster = eval_set.by_id
        seen = set()
        for e in entries:
            if not isinstance(e, dict) or not {"rank", "id", "name", "reason"} <= set(e):
                result.issues.append("항목에 rank/id/name/reason 중 빠진 것이 있음")
                continue
            mid = e["id"]
            if mid not in roster:
                result.issues.append(f"명부에 없는 id: {mid}")
                continue
            if roster[mid]["name"] != e["name"]:
                result.issues.append(f"이름 불일치: {mid} -> {e['name']}")
            if mid in seen:
                result.issues.append(f"중복: {mid}")
            seen.add(mid)

        result.hit_include = sum(1 for x in eval_set.must_include if x["id"] in seen)
        result.miss_exclude = sum(1 for x in eval_set.must_exclude if x["id"] in seen)
        return result

    def to_record(self) -> dict:
        return {
            "format_ok": self.format_ok,
            "issues": self.issues,
            "hit_include": self.hit_include,
            "miss_exclude": self.miss_exclude,
            "picked_ids": [e.get("id") for e in self.entries if isinstance(e, dict)],
        }


@dataclass
class RunResult:
    text: str = ""
    elapsed_sec: float = 0.0
    prompt_eval_count: int | None = None
    eval_count: int | None = None
    error: str | None = None

    @property
    def ok(self) -> bool:
        return self.error is None


class ModelRunner:
    """모델 호출 인터페이스. Cloud 후보도 이 인터페이스로 붙입니다."""

    def __init__(self, name: str):
        self.name = name

    def run(self, prompt: str, options: GenerationOptions) -> RunResult:
        raise NotImplementedError

    @property
    def safe_name(self) -> str:
        """파일 이름으로 쓸 수 있게 다듬은 모델명."""
        return self.name.replace(":", "_").replace("/", "_")


class OllamaRunner(ModelRunner):
    """같은 PC 의 Ollama 를 호출합니다."""

    def run(self, prompt: str, options: GenerationOptions) -> RunResult:
        started = time.perf_counter()
        try:
            response = ollama.chat(
                model=self.name,
                messages=[{"role": "user", "content": prompt}],
                options=options.to_ollama(),
            )
        except Exception as exc:  # 실패도 기록에 남깁니다
            return RunResult(elapsed_sec=round(time.perf_counter() - started, 1),
                             error=f"{type(exc).__name__}: {exc}")
        return RunResult(
            text=response["message"]["content"],
            elapsed_sec=round(time.perf_counter() - started, 1),
            prompt_eval_count=response.get("prompt_eval_count"),
            eval_count=response.get("eval_count"),
        )


class ResultStore:
    """실행 기록을 JSONL 로 남깁니다. 원본을 덮어쓰지 않고 한 줄씩 덧붙입니다."""

    def __init__(self, path: Path):
        self.path = Path(path)
        self.path.parent.mkdir(parents=True, exist_ok=True)

    def append(self, record: dict) -> None:
        with open(self.path, "a", encoding="utf-8") as f:
            f.write(json.dumps(record, ensure_ascii=False) + "\n")

    def read_all(self) -> list:
        if not self.path.exists():
            return []
        return [json.loads(line) for line in self.path.read_text(encoding="utf-8").splitlines() if line]
