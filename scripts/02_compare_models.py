"""로컬 후보 두 모델을 같은 조건으로 돌려 비교합니다 (STEP 4 비교용).

모델 x 질문 x 명부 인원수를 순회하며 한 번에 하나씩 실행하고,
결과를 JSONL로 쌓은 뒤 터미널에 비교 표를 출력합니다.

실행:
    uv run scripts/02_compare_models.py                 # 명부 인원을 번호로 고름
    uv run scripts/02_compare_models.py --size 1        # 1번(30명)으로 바로 실행
    uv run scripts/02_compare_models.py --size 1 --questions q1,q3
    uv run scripts/02_compare_models.py --size 2 --models gemma3:4b
"""

import argparse
import json
import time
from datetime import datetime
from pathlib import Path

import ollama

# --- 비교할 로컬 후보 (STEP 3에서 선정) ---
MODELS = [
    "qwen3:4b-instruct-2507-q4_K_M",
    "gemma3:4b",
]

# --- 명부 인원 선택지: 번호 -> (인원 수, num_ctx) ---
SIZE_OPTIONS = {
    1: (30, 16384),
    2: (100, 32768),
    3: (300, 65536),
}

ROOT = Path(__file__).parent.parent
DATA_PATH = ROOT / "data" / "congregation_300_3y.json"
QUESTION_PATH = ROOT / "data" / "step4_questions.json"
OUT_DIR = ROOT / "results" / "local"

USER_INFO = """[사용자 정보]
- 이 공동체에 새로 부임한 목사입니다.
- 부임 2주 차이며, 전임자에게 받은 인수인계 기록이 거의 없습니다.
- 공동체 전체를 맡고 있습니다.
- 심방에 쓸 수 있는 시간은 주당 2~3건입니다."""


def format_members(members: list) -> str:
    lines = ["[교인 명부]"]
    for m in members:
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


def choose_size() -> int:
    """명부 인원을 번호로 고릅니다."""
    print("명부 인원을 고르세요.")
    for num, (count, ctx) in SIZE_OPTIONS.items():
        print(f"  {num}. {count}명  (num_ctx {ctx:,})")
    while True:
        raw = input("번호: ").strip()
        if raw.isdigit() and int(raw) in SIZE_OPTIONS:
            return int(raw)
        print(f"{list(SIZE_OPTIONS)} 중에서 고르세요.")


def parse_args():
    p = argparse.ArgumentParser(description="로컬 후보 모델 비교 실행")
    p.add_argument("--size", type=int, choices=list(SIZE_OPTIONS),
                   help="명부 인원 번호 (1=30명, 2=100명, 3=300명). 생략하면 물어봅니다")
    p.add_argument("--models", type=str, default=None,
                   help="쉼표로 구분한 모델 태그 (기본: 후보 2개 전부)")
    p.add_argument("--questions", type=str, default=None,
                   help="쉼표로 구분한 질문 id (기본: 전부)")
    p.add_argument("--num-ctx", type=int, default=None,
                   help="컨텍스트 길이를 직접 지정 (기본: 인원수에 맞춘 값)")
    return p.parse_args()


def main():
    args = parse_args()
    size_no = args.size or choose_size()
    member_limit, num_ctx = SIZE_OPTIONS[size_no]
    if args.num_ctx:
        num_ctx = args.num_ctx

    models = [s.strip() for s in args.models.split(",")] if args.models else list(MODELS)

    questions = json.loads(QUESTION_PATH.read_text(encoding="utf-8"))["questions"]
    if args.questions:
        wanted = {s.strip() for s in args.questions.split(",")}
        questions = [q for q in questions if q["id"] in wanted]

    members = json.loads(DATA_PATH.read_text(encoding="utf-8"))["members"][:member_limit]
    document = format_members(members)

    total = len(models) * len(questions)
    print(f"\n명부 {member_limit}명 / num_ctx {num_ctx:,} / 모델 {len(models)}개 "
          f"/ 질문 {len(questions)}개 = 총 {total}회 실행\n")

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    out_path = OUT_DIR / f"compare_{member_limit}명_{stamp}.jsonl"

    rows = []
    done = 0
    for model in models:
        for q in questions:
            done += 1
            print(f"[{done}/{total}] {model} / {q['id']} {q['label']} ... ", end="", flush=True)
            prompt = f"{USER_INFO}\n\n{document}\n\n[질문]\n{q['text']}"
            started = time.perf_counter()
            try:
                response = ollama.chat(
                    model=model,
                    messages=[{"role": "user", "content": prompt}],
                    options={"num_ctx": num_ctx},
                )
                elapsed = time.perf_counter() - started
                record = {
                    "run_at": datetime.now().isoformat(timespec="seconds"),
                    "model": model,
                    "question_id": q["id"],
                    "question_label": q["label"],
                    "member_limit": member_limit,
                    "num_ctx": num_ctx,
                    "prompt_chars": len(prompt),
                    "elapsed_sec": round(elapsed, 1),
                    "prompt_eval_count": response.get("prompt_eval_count"),
                    "eval_count": response.get("eval_count"),
                    "question": q["text"],
                    "answer": response["message"]["content"],
                    "error": None,
                }
                print(f"{elapsed:.1f}초")
            except Exception as exc:  # 실패도 기록에 남깁니다
                elapsed = time.perf_counter() - started
                record = {
                    "run_at": datetime.now().isoformat(timespec="seconds"),
                    "model": model,
                    "question_id": q["id"],
                    "question_label": q["label"],
                    "member_limit": member_limit,
                    "num_ctx": num_ctx,
                    "elapsed_sec": round(elapsed, 1),
                    "error": f"{type(exc).__name__}: {exc}",
                }
                print(f"실패 ({type(exc).__name__})")

            rows.append(record)
            with open(out_path, "a", encoding="utf-8") as f:
                f.write(json.dumps(record, ensure_ascii=False) + "\n")

    print(f"\n{'모델':<32} {'질문':<14} {'인원':>5} {'시간(초)':>9} {'입력':>7} {'출력':>7}")
    print("-" * 80)
    for r in rows:
        if r.get("error"):
            print(f"{r['model']:<32} {r['question_label']:<14} {r['member_limit']:>5} "
                  f"{r['elapsed_sec']:>9} {'실패':>7} {'':>7}")
        else:
            print(f"{r['model']:<32} {r['question_label']:<14} {r['member_limit']:>5} "
                  f"{r['elapsed_sec']:>9} {r['prompt_eval_count']:>7} {r['eval_count']:>7}")

    ok = [r for r in rows if not r.get("error")]
    if ok:
        print("-" * 80)
        for model in models:
            mine = [r for r in ok if r["model"] == model]
            if mine:
                avg = sum(r["elapsed_sec"] for r in mine) / len(mine)
                worst = max(r["elapsed_sec"] for r in mine)
                print(f"{model:<32} 평균 {avg:>6.1f}초 / 최대 {worst:>6.1f}초")
    print(f"\n저장: {out_path}")


if __name__ == "__main__":
    main()
