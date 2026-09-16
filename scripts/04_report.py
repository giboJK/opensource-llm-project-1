"""실험 기록을 브라우저에서 볼 수 있게 후보별 폴더에 화면을 깔아 줍니다.

여기서는 아무것도 집계하지 않습니다. 원본 JSONL 과 그 실행에 쓰인 정답을 그대로 실어 주고,
평균과 판정은 report.html 이 열릴 때 브라우저에서 계산합니다. 보는 방식을 바꾸려면
scripts/report_template.html 만 고치면 되고 이 스크립트는 건드릴 필요가 없습니다.

후보 폴더에 만들어지는 것
    records.js    원본 실행 기록 + 정답 (window.RECORDS / WARMUP / ANSWER_KEY / REPORT_META)
    report.html   report_template.html 을 그대로 복사한 화면

report.html 을 더블클릭하면 열립니다. 데이터를 fetch 가 아니라 <script src> 로 읽기 때문에
file:/// 에서도 동작합니다.

실행:
    uv run scripts/04_report.py
    uv run scripts/04_report.py --models gemma3:4b
"""

import argparse
import json
from datetime import datetime
from pathlib import Path

from experiment import EvalSet, model_results_dir, safe_name

MODELS = ["qwen3:4b-instruct-2507-q4_K_M", "gemma3:4b"]
TEMPLATE = Path(__file__).parent / "report_template.html"

TITLE = "STEP 6 결과"
TASK = "교인 명부 50명을 읽고 다음 7일 심방 대상 top 10을 순위와 근거로 뽑기"

# 잘못 고른 사람을 화면에 설명할 때 쓰는 명부 항목. 정답에 오른 인물만 실어 파일을 가볍게 둡니다.
MEMBER_FIELDS = ["name", "age", "recent_attendance", "health_note",
                 "family_event", "special_note", "last_visitation_date"]


def read_jsonl(path: Path) -> list:
    return [json.loads(l) for l in path.open(encoding="utf-8") if l.strip()]


def load_records(model: str):
    d = model_results_dir(model)
    main = sorted(d.glob("step6_*.jsonl"))
    warm = sorted((d / "warmup").glob("step6_warmup_*.jsonl"))
    rows = [r for p in main for r in read_jsonl(p)]
    wrows = [r for p in warm for r in read_jsonl(p)]
    return rows, wrows, (main[-1].name if main else None)


def answer_key_for(set_names: set, sets: dict) -> dict:
    """화면이 채점에 쓸 정답. 쓰인 세트만 담습니다."""
    key = {}
    for name in sorted(set_names):
        s = sets[name]
        roster = s.by_id
        wanted = [x["id"] for x in s.must_include] + [x["id"] for x in s.must_exclude]
        key[name] = {
            "must_include": s.must_include,
            "must_exclude": s.must_exclude,
            "members": {i: {f: roster[i][f] for f in MEMBER_FIELDS}
                        for i in wanted if i in roster},
        }
    return key


def write_records(model: str, rows: list, wrows: list, source: str, sets: dict) -> Path:
    d = model_results_dir(model)
    meta = {
        "title": TITLE,
        "task": TASK,
        "model": model,
        "run_at": datetime.fromisoformat(rows[0]["run_at"]).strftime("%Y-%m-%d %H:%M"),
        "source": source,
        "rerun": f"uv run scripts/03_step6_run.py --models {model}",
        "generated_at": datetime.now().isoformat(timespec="seconds"),
    }
    key = answer_key_for({r["set"] for r in rows}, sets)

    def dump(name, value):
        return f"window.{name} = " + json.dumps(value, ensure_ascii=False, indent=2) + ";\n"

    body = ("// 실험 원본 기록입니다. 집계값은 들어 있지 않습니다.\n"
            "// report.html 이 열릴 때 이 값을 읽어 직접 계산해 그립니다.\n\n"
            + dump("REPORT_META", meta)
            + dump("RECORDS", rows)
            + dump("WARMUP", wrows)
            + dump("ANSWER_KEY", key))
    path = d / "records.js"
    path.write_text(body, encoding="utf-8")
    return path


def main():
    p = argparse.ArgumentParser(description="실험 기록을 브라우저에서 보는 화면으로")
    p.add_argument("--models", type=str, default=None)
    args = p.parse_args()
    models = [s.strip() for s in (args.models or ",".join(MODELS)).split(",")]
    sets = {s.name: s for s in EvalSet.load_all()}
    template = TEMPLATE.read_text(encoding="utf-8")

    for model in models:
        rows, wrows, source = load_records(model)
        if not rows:
            print(f"{model}: 기록 없음")
            continue
        d = model_results_dir(model)
        records = write_records(model, rows, wrows, source, sets)
        page = d / "report.html"
        page.write_text(template, encoding="utf-8")
        print(f"{safe_name(model)}")
        print(f"   {records.name}  ({records.stat().st_size // 1024} KB, 기록 {len(rows)}건)")
        print(f"   {page}")


if __name__ == "__main__":
    main()
