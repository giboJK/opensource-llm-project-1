"""평가 세트 하나를 후보 모델 하나에 넣어 응답을 눈으로 확인합니다 (동작 확인용).

Windows -> Python -> localhost 의 Ollama -> 로컬 모델 경로를 사용합니다.
후보를 바꿀 때는 MODEL 만 교체합니다. 본 실험은 02_compare_models.py 로 돌립니다.

실행:
    uv run scripts/01_ollama_chat.py
"""

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

# --- 실행 설정 (후보를 바꿀 때 MODEL 만 교체) ---
MODEL = "qwen3:4b-instruct-2507-q4_K_M"
SET_NAME = "set01"
OPTIONS = GenerationOptions(num_ctx=16384)


def main():
    eval_set = EvalSet.load(SET_NAME)
    prompt = PromptBuilder.build(eval_set)

    runner = OllamaRunner(MODEL)
    result = runner.run(prompt, OPTIONS)

    print(f"모델: {MODEL}")
    print(f"세트: {eval_set.name} ({len(eval_set.members)}명)")
    print(f"전체 응답 시간: {result.elapsed_sec}초")
    print(f"입력 토큰(prompt_eval_count): {result.prompt_eval_count}")
    print(f"출력 토큰(eval_count): {result.eval_count}")
    print("-" * 60)

    if not result.ok:
        print(f"실패: {result.error}")
        return

    parsed = TopTen.parse(result.text, eval_set)
    print(result.text)
    print("-" * 60)
    print(f"형식: {'OK' if parsed.format_ok else ' / '.join(parsed.issues)}")
    print(f"반드시 포함 5명 중 {parsed.hit_include}명 포함")
    print(f"반드시 제외 5명 중 {parsed.miss_exclude}명 포함 (0이어야 함)")

    store = ResultStore(RESULTS_DIR / "local" / f"check_{runner.safe_name}.jsonl")
    store.append({
        "run_at": datetime.now().isoformat(timespec="seconds"),
        "model": MODEL,
        "set": eval_set.name,
        "attempt": 1,
        "options": OPTIONS.to_record(),
        "prompt_chars": len(prompt),
        "elapsed_sec": result.elapsed_sec,
        "prompt_eval_count": result.prompt_eval_count,
        "eval_count": result.eval_count,
        "validation": parsed.to_record(),
        "answer": result.text,
        "error": result.error,
    })
    print("-" * 60)
    print(f"저장: {store.path}")


if __name__ == "__main__":
    main()
