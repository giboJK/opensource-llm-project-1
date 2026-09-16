"""results/ 아래를 훑어 실험 목록을 만들고, 브라우저에서 볼 화면을 깔아 줍니다.

file:/// 에서는 브라우저가 폴더 목록을 읽을 수 없습니다. 그래서 이 스크립트가 미리 훑어
index_data.js 에 적어 둡니다.

여기서는 아무것도 집계하지 않습니다. 원본 기록과 실행 조건을 그대로 실어 주고,
평균과 판정은 index.html 이 열릴 때 브라우저에서 계산합니다.

만들어지는 것
    results/index_data.js   local/cloud 아래의 모델·실행 목록 + 원본 기록 + 실험 설계
    results/index.html      그 값을 읽어 그리는 화면

results/index.html 을 더블클릭하면 열립니다.

실행:
    uv run scripts/05_results_index.py
"""

import argparse
import json
from datetime import datetime
from pathlib import Path

from experiment import (
    CLOUD_RESULTS_DIR,
    LOCAL_RESULTS_DIR,
    RESULTS_DIR,
    EvalSet,
    PromptBuilder,
)

TEMPLATE = Path(__file__).parent / "results_index_template.html"

TASK = "교인 명부 50명을 읽고, 다음 7일 동안 심방해야 할 교인 top 10을 순위와 근거로 뽑는다"
SAMPLE_SET = "set01"

MEMBER_FIELDS = ["name", "age", "recent_attendance", "health_note",
                 "family_event", "special_note", "last_visitation_date"]


def read_jsonl(path: Path) -> list:
    return [json.loads(l) for l in path.open(encoding="utf-8") if l.strip()]


def stamp_of(path: Path) -> str:
    """step6_20260916_135505.jsonl -> 20260916_135505"""
    return path.stem.split("_", 1)[1]


def pretty_stamp(stamp: str) -> str:
    try:
        return datetime.strptime(stamp, "%Y%m%d_%H%M%S").strftime("%Y-%m-%d %H:%M")
    except ValueError:
        return stamp


def scan_model(model_dir: Path) -> dict | None:
    """모델 폴더 하나에서 실행 목록을 모읍니다."""
    runs = []
    for main in sorted(model_dir.glob("step6_*.jsonl")):
        stamp = stamp_of(main)
        warm = model_dir / "warmup" / f"step6_warmup_{stamp}.jsonl"
        meta = model_dir / f"run_meta_{stamp}.json"
        rows = read_jsonl(main)
        if not rows:
            continue
        runs.append({
            "id": stamp,
            "label": pretty_stamp(stamp),
            "file": main.name,
            "meta": json.loads(meta.read_text(encoding="utf-8")) if meta.exists() else None,
            "records": rows,
            "warmup": read_jsonl(warm) if warm.exists() else [],
        })
    if not runs:
        return None
    return {"model": runs[-1]["records"][0]["model"], "folder": model_dir.name, "runs": runs}


def scan_scope(root: Path, label: str) -> dict:
    models = []
    if root.exists():
        for d in sorted(p for p in root.iterdir() if p.is_dir()):
            found = scan_model(d)
            if found:
                models.append(found)
    return {"scope": root.name, "label": label, "models": models}


def build_design(sets: dict) -> dict:
    """실험 설계. 결과보다 먼저 보여 줄 부분입니다."""
    sample = sets[SAMPLE_SET]
    key = {}
    for name in sorted(sets):
        s = sets[name]
        roster = s.by_id
        wanted = [x["id"] for x in s.must_include] + [x["id"] for x in s.must_exclude]
        key[name] = {
            "must_include": s.must_include,
            "must_exclude": s.must_exclude,
            "members": {i: {f: roster[i][f] for f in MEMBER_FIELDS}
                        for i in wanted if i in roster},
        }
    return {
        "task": TASK,
        "instruction": PromptBuilder.INSTRUCTION,
        "sample_set": SAMPLE_SET,
        "sample_prompt": PromptBuilder.build(sample),
        "sets": [{"name": n,
                  "members": len(sets[n].members),
                  "must_include": len(sets[n].must_include),
                  "must_exclude": len(sets[n].must_exclude),
                  "chars": len(sets[n].to_prompt_text())} for n in sorted(sets)],
        "answer_key": key,
        "pass_line": {"include": 7, "exclude": 0, "elapsed": 60},
    }


def main():
    p = argparse.ArgumentParser(description="results 목록 화면 만들기")
    p.add_argument("--out", type=Path, default=RESULTS_DIR)
    args = p.parse_args()

    sets = {s.name: s for s in EvalSet.load_all()}
    payload = {
        "generated_at": datetime.now().isoformat(timespec="seconds"),
        "design": build_design(sets),
        "scopes": [scan_scope(LOCAL_RESULTS_DIR, "로컬"),
                   scan_scope(CLOUD_RESULTS_DIR, "Cloud")],
    }

    args.out.mkdir(parents=True, exist_ok=True)
    data = args.out / "index_data.js"
    data.write_text(
        "// results/ 아래를 훑어 만든 목록입니다. 집계값은 들어 있지 않습니다.\n"
        "// index.html 이 열릴 때 이 값을 읽어 직접 계산해 그립니다.\n\n"
        "window.RESULTS_INDEX = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8")
    page = args.out / "index.html"
    page.write_text(TEMPLATE.read_text(encoding="utf-8"), encoding="utf-8")

    for sc in payload["scopes"]:
        runs = sum(len(m["runs"]) for m in sc["models"])
        print(f"{sc['label']:<6} 모델 {len(sc['models'])}개 / 실행 {runs}건")
        for m in sc["models"]:
            print(f"   {m['model']}: " + ", ".join(r["label"] for r in m["runs"]))
    print(f"\n{data.name}  ({data.stat().st_size // 1024} KB)")
    print(page)


if __name__ == "__main__":
    main()
