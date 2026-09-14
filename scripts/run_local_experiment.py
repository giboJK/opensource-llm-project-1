"""STEP 6: 로컬 모델 2개 본 실험 실행기.

- 모델당 워밍업 1회 (본 실험과 분리하여 results/local/warmup/ 에 저장)
- 로컬 모델 2개 × 질문 10개 × 각 2회 = 40회 본 실험
- 모든 시도(성공/실패)를 원본 그대로 JSONL에 저장
- 응답 직후 ollama.ps()를 조회해 해당 모델의 size_vram(그 시점 값)을 함께 기록

실행 전 확인:
1) data/questions.json 에 질문 10개를 채웠는지
2) 아래 LOCAL_MODELS 를 실제 다운로드한 모델의 "전체 태그"로 바꿨는지
3) ollama 가 실행 중인지 (`ollama ps`)
"""

import sys
from pathlib import Path

import ollama

sys.path.append(str(Path(__file__).parent))
from utils import (  # noqa: E402
    append_jsonl,
    load_questions,
    new_run_id,
    now_iso,
    ns_to_s,
    tokens_per_second,
    bytes_to_mib,
    Timer,
)

# ↓↓↓ 실제 후보 모델의 전체 태그로 교체하세요 ↓↓↓
LOCAL_MODELS = [
    "llama3.2:3b",
    "qwen2.5:3b",
]

REPEATS_PER_QUESTION = 2
RESULTS_DIR = Path("results/local")
WARMUP_PATH = RESULTS_DIR / "warmup" / "warmup.jsonl"
RAW_PATH = RESULTS_DIR / "raw.jsonl"

GENERATION_OPTIONS = {
    # 필요하면 채워서 기록에 함께 남기세요 (예: temperature, num_predict 등)
}


def get_vram_info(model_tag: str) -> dict:
    """ollama.ps() 결과에서 해당 모델 태그와 일치하는 항목의 VRAM/실행 조건을 찾음."""
    try:
        running = ollama.ps()
        models = running.get("models", running) if isinstance(running, dict) else running
        for m in models:
            name = m.get("model") or m.get("name")
            if name == model_tag:
                details = m.get("details", {}) or {}
                return {
                    "size_vram_bytes": m.get("size_vram"),
                    "size_vram_mib": bytes_to_mib(m.get("size_vram")),
                    "digest": m.get("digest"),
                    "quantization_level": details.get("quantization_level"),
                    "context_length": m.get("context_length") or details.get("context_length"),
                }
    except Exception as e:  # noqa: BLE001
        return {"vram_lookup_error": str(e)}
    return {"vram_lookup_error": "model_not_found_in_ps"}


def call_model(model_tag: str, question_text: str) -> dict:
    """모델 호출 1회. 성공/실패와 관계없이 기록 가능한 dict를 반환."""
    record: dict = {
        "model": model_tag,
        "question_text": question_text,
        "timestamp": now_iso(),
        "generation_options": GENERATION_OPTIONS,
    }
    try:
        with Timer() as t:
            response = ollama.chat(
                model=model_tag,
                messages=[{"role": "user", "content": question_text}],
                options=GENERATION_OPTIONS or None,
            )
        vram_info = get_vram_info(model_tag)

        record.update(
            {
                "success": True,
                "error": None,
                "response_text": response["message"]["content"],
                "elapsed_sec": t.elapsed_sec,
                "load_duration_sec": ns_to_s(response.get("load_duration")),
                "prompt_eval_count": response.get("prompt_eval_count"),
                "eval_count": response.get("eval_count"),
                "eval_duration_sec": ns_to_s(response.get("eval_duration")),
                "tokens_per_sec": tokens_per_second(
                    response.get("eval_count"), response.get("eval_duration")
                ),
                **vram_info,
            }
        )
    except Exception as e:  # noqa: BLE001
        record.update(
            {
                "success": False,
                "error": str(e),
                "response_text": None,
                "elapsed_sec": None,
            }
        )
    return record


def main():
    run_id = new_run_id()
    questions = load_questions()
    if any(q["input"] == "" for q in questions):
        print("[경고] data/questions.json에 아직 빈 질문이 있습니다. STEP 5를 먼저 완료하세요.")

    for model_tag in LOCAL_MODELS:
        # --- 워밍업 1회 (본 실험과 분리) ---
        print(f"\n[워밍업] {model_tag}")
        warmup_record = call_model(model_tag, "안녕하세요, 짧게 인사해주세요.")
        warmup_record.update({"run_id": run_id, "is_warmup": True, "question_id": None, "rep": None})
        append_jsonl(WARMUP_PATH, warmup_record)

        # --- 본 실험: 질문 10개 × 2회 ---
        for q in questions:
            for rep in (1, 2):
                if rep > REPEATS_PER_QUESTION:
                    break
                print(f"[본실험] {model_tag} / {q['id']} / rep{rep}")
                record = call_model(model_tag, q["input"])
                record.update(
                    {
                        "run_id": run_id,
                        "is_warmup": False,
                        "question_id": q["id"],
                        "question_type": q.get("type"),
                        "rep": rep,
                    }
                )
                append_jsonl(RAW_PATH, record)

    print(f"\n완료. 결과 파일:\n- {WARMUP_PATH}\n- {RAW_PATH}")


if __name__ == "__main__":
    main()
