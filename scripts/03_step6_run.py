"""STEP 6. 로컬 모델 품질·성능 측정.

모델 2개 x 세트 10개 x 세트당 2회 = 모델당 본 실험 20회.
모델당 워밍업 1회는 따로 돌리고 본 집계에서 뺍니다.

워밍업을 나누는 이유는 첫 호출에 모델 로딩 시간이 섞이기 때문입니다. 로딩 지연과 로드된
상태의 응답 지연을 같이 평균 내면 둘 다 틀린 값이 됩니다.

측정 불가 값은 0 으로 채우지 않고 사유를 남깁니다.

기록은 후보별 폴더에 따로 쌓습니다.
    본 실험   results/local/<모델명>/step6_{시각}.jsonl
    워밍업    results/local/<모델명>/warmup/step6_warmup_{시각}.jsonl
    실행 환경 results/local/<모델명>/run_meta_{시각}.json

실행:
    uv run scripts/03_step6_run.py
    uv run scripts/03_step6_run.py --models gemma3:4b --sets set01,set02
"""

import argparse
import json
from datetime import datetime

from experiment import (
    PromptBuilder as _PB,
    EvalSet,
    GenerationOptions,
    OllamaRunner,
    PromptBuilder,
    ResultStore,
    TopTen,
    model_profile,
    vram_snapshot,
)

MODELS = [
    "qwen3:4b-instruct-2507-q4_K_M",
    "gemma3:4b",
]
REPEAT = 2
WARMUP_SET = "set01"


def parse_args():
    p = argparse.ArgumentParser(description="STEP 6 본 실험 실행")
    p.add_argument("--models", type=str, default=None, help="쉼표로 구분한 모델 태그")
    p.add_argument("--sets", type=str, default=None, help="쉼표로 구분한 세트 이름")
    p.add_argument("--repeat", type=int, default=REPEAT, help=f"세트당 반복 (기본 {REPEAT})")
    p.add_argument("--num-ctx", type=int, default=16384)
    return p.parse_args()


def make_record(phase, runner, eval_set, attempt, options, prompt, result, parsed):
    return {
        "phase": phase,
        "run_at": datetime.now().isoformat(timespec="seconds"),
        "model": runner.name,
        "set": eval_set.name,
        "attempt": attempt,
        "options": options.to_record(),
        "prompt_chars": len(prompt),
        "perf": result.to_record(),
        "validation": None if parsed is None else parsed.to_record(),
        "answer": result.text,
        "error": result.error,
    }


def avg(values):
    """(평균, n). 값이 없으면 (None, 0). 없는 값을 0 으로 채우지 않습니다."""
    vals = [v for v in values if v is not None]
    return (round(sum(vals) / len(vals), 1), len(vals)) if vals else (None, 0)


def show(label, pair, unit=""):
    value, n = pair
    return f"{label} {'측정 불가' if value is None else f'{value}{unit}'} (n={n})"


def print_report(main_rows, warm_rows, profiles, vram, runners):
    print("\n" + "=" * 78)
    print("실행 조건")
    print("=" * 78)
    for r in runners:
        p, v = profiles[r.name], vram[r.name]
        print(f"  {r.name}")
        print(f"    digest {p['digest']} / {p['quantization_level']} / {p['parameter_size']}"
              f" / context_length {p['context_length']}")
        print(f"    VRAM {p_or(v['size_vram_mib'], 'MiB')} of {p_or(v['size_mib'], 'MiB')}"
              f"  적재 {v['processor'] or v['note']}")

    print("\n" + "=" * 78)
    print("품질 (STEP 5 기준) — 워밍업 제외")
    print("=" * 78)
    for r in runners:
        mine = [x for x in main_rows if x["model"] == r.name]
        ok = [x for x in mine if not x["error"] and x["validation"]]
        inc = avg([x["validation"]["hit_include"] for x in ok])
        exc = avg([x["validation"]["miss_exclude"] for x in ok])
        inc_max = ok[0]["validation"]["include_total"] if ok else 0
        fmt_ng = sum(1 for x in ok if not x["validation"]["format_ok"])
        print(f"  {r.name}")
        print(f"    호출 성공 {len(ok)}/{len(mine)}")
        print(f"    {show('포함', inc)} / {inc_max}점 만점   "
              f"{show('제외 위반', exc)}   형식 미달 {fmt_ng}회")

    print("\n" + "=" * 78)
    print("성능 — 워밍업 제외")
    print("=" * 78)
    for r in runners:
        ok = [x for x in main_rows if x["model"] == r.name and not x["error"]]
        warm = [x for x in warm_rows if x["model"] == r.name and not x["error"]]
        print(f"  {r.name}")
        print(f"    {show('전체 응답 시간', avg([x['perf']['elapsed_sec'] for x in ok]), '초')}")
        print(f"    {show('로딩 시간', avg([x['perf']['load_sec'] for x in ok]), '초')}"
              f"   워밍업 1회: {warm[0]['perf']['load_sec'] if warm else '없음'}초")
        print(f"    {show('생성 속도', avg([x['perf']['tokens_per_sec'] for x in ok]), ' tok/s')}")
        print(f"    {show('출력 토큰', avg([x['perf']['eval_count'] for x in ok]), '개')}")
        notes = [x["perf"]["speed_note"] for x in ok if x["perf"]["speed_note"]]
        if notes:
            print(f"    속도 계산 불가 {len(notes)}건: {notes[0]}")

    fails = [x for x in main_rows if x["error"]]
    if fails:
        print("\n" + "=" * 78)
        print(f"호출 실패 {len(fails)}건 (품질 점수와 별도. 성공 응답으로 대체하지 않음)")
        print("=" * 78)
        for x in fails:
            print(f"  {x['model']} / {x['set']} #{x['attempt']}: {x['error']}")


def p_or(value, unit):
    return "측정 불가" if value is None else f"{value}{unit}"


def main():
    args = parse_args()
    options = GenerationOptions(num_ctx=args.num_ctx)
    runners = [OllamaRunner(s.strip()) for s in (args.models or ",".join(MODELS)).split(",")]

    all_sets = EvalSet.load_all()
    if args.sets:
        wanted = [s.strip() for s in args.sets.split(",")]
        sets = [s for s in all_sets if s.name in wanted]
    else:
        sets = all_sets

    stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    stores = {
        r.name: (ResultStore(r.results_dir / f"step6_{stamp}.jsonl"),
                 ResultStore(r.results_dir / "warmup" / f"step6_warmup_{stamp}.jsonl"))
        for r in runners
    }

    per_model = len(sets) * args.repeat
    print(f"\nSTEP 6  모델 {len(runners)}개 x 세트 {len(sets)}개 x {args.repeat}회 "
          f"= 모델당 {per_model}회 (워밍업 별도 1회)")
    print(f"num_ctx {options.num_ctx:,} / temperature {options.temperature} / "
          f"출력 한도 {options.num_predict if options.num_predict is not None else '지정 안 함'}\n")

    main_rows, warm_rows, profiles, vram = [], [], {}, {}
    done, total = 0, len(runners) * per_model

    for runner in runners:
        main_store, warm_store = stores[runner.name]
        profiles[runner.name] = model_profile(runner.name)

        warm_set = next((s for s in all_sets if s.name == WARMUP_SET), sets[0])
        print(f"[워밍업] {runner.name} / {warm_set.name} ... ", end="", flush=True)
        wprompt = PromptBuilder.build(warm_set)
        wresult = runner.run(wprompt, options)
        wparsed = TopTen.parse(wresult.text, warm_set) if wresult.ok else None
        print(f"{wresult.elapsed_sec}초 (로딩 {wresult.load_sec}초)" if wresult.ok
              else f"실패 ({wresult.error})")
        wrec = make_record("warmup", runner, warm_set, 1, options, wprompt, wresult, wparsed)
        warm_rows.append(wrec)
        warm_store.append(wrec)

        # 로드된 직후에 재야 실제 점유가 잡힙니다.
        vram[runner.name] = vram_snapshot(runner.name)

        # 실행 조건을 파일로 남깁니다. 터미널에만 찍고 말면 나중에 확인할 수 없습니다.
        meta_path = runner.results_dir / f"run_meta_{stamp}.json"
        meta_path.write_text(json.dumps({
            "captured": "실행 시점",
            "run_at": datetime.now().isoformat(timespec="seconds"),
            "model": runner.name,
            "profile": profiles[runner.name],
            "vram": vram[runner.name],
            "options": options.to_record(),
            "sets": [s.name for s in sets],
            "repeat": args.repeat,
            "warmup_set": warm_set.name,
            "instruction": _PB.INSTRUCTION,
            "prompt_chars": len(wprompt),
        }, ensure_ascii=False, indent=2), encoding="utf-8")

        for eval_set in sets:
            prompt = PromptBuilder.build(eval_set)
            for attempt in range(1, args.repeat + 1):
                done += 1
                print(f"[{done}/{total}] {runner.name} / {eval_set.name} #{attempt} ... ",
                      end="", flush=True)
                result = runner.run(prompt, options)
                parsed = TopTen.parse(result.text, eval_set) if result.ok else None
                if result.ok:
                    print(f"{result.elapsed_sec}초  포함 {parsed.hit_include}/"
                          f"{parsed.include_total}  제외위반 {parsed.miss_exclude}  "
                          f"{result.tokens_per_sec or '속도 미상'} tok/s")
                else:
                    print(f"실패 ({result.error})")
                rec = make_record("main", runner, eval_set, attempt, options, prompt, result, parsed)
                main_rows.append(rec)
                main_store.append(rec)

    print_report(main_rows, warm_rows, profiles, vram, runners)
    print(f"\n본 실험: {main_store.path}")
    print(f"워밍업:  {warm_store.path}")


if __name__ == "__main__":
    main()
