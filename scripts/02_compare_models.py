"""로컬 후보 두 모델을 같은 조건으로 돌려 비교합니다.

평가 세트 10개(data/eval/set01~set10) x 후보 모델을 순회하며 한 번에 하나씩 실행하고,
결과를 JSONL 로 쌓은 뒤 터미널에 비교 표를 출력합니다.

표의 포함/제외는 STEP 5 정답 대조입니다.
    포함 — 반드시 top 10 에 들어가야 할 5명 중 몇 명이 들어왔는가 (많을수록 좋음)
    제외 — 반드시 빠져야 할 5명 중 몇 명이 들어왔는가 (0이어야 함)

실행:
    uv run scripts/02_compare_models.py                       # 10세트 x 후보 2개
    uv run scripts/02_compare_models.py --sets set01,set02
    uv run scripts/02_compare_models.py --models gemma3:4b
    uv run scripts/02_compare_models.py --sets set01 --repeat 5   # 목록 일관성 확인
"""

import argparse
from datetime import datetime

from experiment import (
    RESULTS_DIR,
    EvalSet,
    GenerationOptions,
    OllamaRunner,
    PromptBuilder,
    ResultStore,
    TopTen,
)

# --- 비교할 로컬 후보 (STEP 3 에서 선정) ---
MODELS = [
    "qwen3:4b-instruct-2507-q4_K_M",
    "gemma3:4b",
]


def parse_args():
    p = argparse.ArgumentParser(description="로컬 후보 모델 비교 실행")
    p.add_argument("--sets", type=str, default=None,
                   help="쉼표로 구분한 세트 이름 (기본: 10개 전부)")
    p.add_argument("--models", type=str, default=None,
                   help="쉼표로 구분한 모델 태그 (기본: 후보 2개 전부)")
    p.add_argument("--repeat", type=int, default=1,
                   help="같은 세트를 몇 번 돌릴지 (기본 1). 목록 일관성 확인에 씁니다")
    p.add_argument("--num-ctx", type=int, default=None, help="컨텍스트 길이 (기본 16384)")
    return p.parse_args()


def print_summary(rows: list, runners: list) -> None:
    print(f"\n{'모델':<32} {'세트':<7} {'회차':>4} {'시간(초)':>9} "
          f"{'포함':>5} {'제외':>5} {'형식':>5}")
    print("-" * 78)
    for r in rows:
        if r.get("error"):
            print(f"{r['model']:<32} {r['set']:<7} {r['attempt']:>4} "
                  f"{r['elapsed_sec']:>9} {'실패':>5} {'':>5} {'':>5}")
            continue
        v = r["validation"]
        print(f"{r['model']:<32} {r['set']:<7} {r['attempt']:>4} {r['elapsed_sec']:>9} "
              f"{v['hit_include']:>5} {v['miss_exclude']:>5} "
              f"{'OK' if v['format_ok'] else 'NG':>5}")

    ok = [r for r in rows if not r.get("error")]
    if not ok:
        return
    print("-" * 78)
    for runner in runners:
        mine = [r for r in ok if r["model"] == runner.name]
        if not mine:
            continue
        inc = sum(r["validation"]["hit_include"] for r in mine)
        exc = sum(r["validation"]["miss_exclude"] for r in mine)
        bad = sum(1 for r in mine if not r["validation"]["format_ok"])
        avg = sum(r["elapsed_sec"] for r in mine) / len(mine)
        worst = max(r["elapsed_sec"] for r in mine)
        print(f"{runner.name:<32} 포함 {inc}/{len(mine) * 5}  "
              f"제외 위반 {exc}  형식 미달 {bad}회  "
              f"평균 {avg:.1f}초 / 최대 {worst:.1f}초")

    for runner in runners:
        picks = {}
        for r in (x for x in ok if x["model"] == runner.name):
            picks.setdefault(r["set"], set()).add(tuple(sorted(r["validation"]["picked_ids"])))
        unstable = [s for s, v in picks.items() if len(v) > 1]
        if any(len(v) > 1 for v in picks.values()):
            print(f"{runner.name:<32} 목록이 흔들린 세트: {', '.join(sorted(unstable))}")


def main():
    args = parse_args()
    options = GenerationOptions(num_ctx=args.num_ctx or 16384)
    runners = [OllamaRunner(s.strip()) for s in (args.models or ",".join(MODELS)).split(",")]

    all_sets = EvalSet.load_all()
    if args.sets:
        wanted = [s.strip() for s in args.sets.split(",")]
        sets = [s for s in all_sets if s.name in wanted]
    else:
        sets = all_sets

    total = len(runners) * len(sets) * args.repeat
    print(f"\n세트 {len(sets)}개 x 모델 {len(runners)}개 x {args.repeat}회 = 총 {total}회 실행")
    print(f"num_ctx {options.num_ctx:,} / temperature {options.temperature}\n")

    stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    store = ResultStore(RESULTS_DIR / "local" / f"top10_{stamp}.jsonl")

    rows, done = [], 0
    for runner in runners:
        for eval_set in sets:
            prompt = PromptBuilder.build(eval_set)
            for attempt in range(1, args.repeat + 1):
                done += 1
                print(f"[{done}/{total}] {runner.name} / {eval_set.name} "
                      f"({attempt}/{args.repeat}) ... ", end="", flush=True)
                result = runner.run(prompt, options)
                if not result.ok:
                    print(f"실패 ({result.error})")
                    validation = None
                else:
                    parsed = TopTen.parse(result.text, eval_set)
                    validation = parsed.to_record()
                    print(f"{result.elapsed_sec}초  "
                          f"포함 {parsed.hit_include}/5  제외위반 {parsed.miss_exclude}"
                          + ("" if parsed.format_ok else f"  [형식: {parsed.issues[0]}]"))

                record = {
                    "run_at": datetime.now().isoformat(timespec="seconds"),
                    "model": runner.name,
                    "set": eval_set.name,
                    "attempt": attempt,
                    "options": options.to_record(),
                    "prompt_chars": len(prompt),
                    "elapsed_sec": result.elapsed_sec,
                    "prompt_eval_count": result.prompt_eval_count,
                    "eval_count": result.eval_count,
                    "validation": validation,
                    "answer": result.text,
                    "error": result.error,
                }
                rows.append(record)
                store.append(record)

    print_summary(rows, runners)
    print(f"\n저장: {store.path}")


if __name__ == "__main__":
    main()
