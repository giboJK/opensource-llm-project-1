"""STEP 7: Cloud API 모델 비교 실험 실행기.

- STEP 5에서 미리 선정한 5개 질문(data/questions.json의 used_in_cloud_compare=true)에
  Cloud 모델 1개를 각 1회 적용합니다.
- 로컬 모델의 동일 질문 2회 결과(results/local/raw.jsonl)와 비교할 수 있도록
  같은 question_id로 저장합니다.
- 비용은 실제 단가(PRICE_PER_1K_*)를 채운 뒤 코드로 계산합니다. 실행 전후
  Cloud 콘솔의 실제 사용량 내역도 별도로 확인해 기록하세요(추정치와 구분).

API 키는 코드/저장소/로그/스크린샷에 남기지 않습니다. .env(커밋 금지)에서 읽거나
실행 시 입력받습니다.
"""

import os
import sys
import time
from pathlib import Path

from dotenv import load_dotenv
from openai import OpenAI

sys.path.append(str(Path(__file__).parent))
from utils import append_jsonl, load_questions, new_run_id, now_iso  # noqa: E402

load_dotenv()

CLOUD_MODEL = os.getenv("CLOUD_MODEL", "gpt-4o-mini")
CLOUD_BASE_URL = os.getenv("CLOUD_BASE_URL") or None

# ↓↓↓ 실제 단가로 교체하세요 (모델 가격 페이지 확인, 통화 단위 명시) ↓↓↓
PRICE_PER_1K_INPUT_TOKENS = 0.0
PRICE_PER_1K_OUTPUT_TOKENS = 0.0
CURRENCY = "USD"

RESULTS_PATH = Path("results/cloud/raw.jsonl")


def estimate_cost(prompt_tokens: int, completion_tokens: int) -> float:
    return (
        prompt_tokens / 1000 * PRICE_PER_1K_INPUT_TOKENS
        + completion_tokens / 1000 * PRICE_PER_1K_OUTPUT_TOKENS
    )


def call_cloud(client: OpenAI, question_text: str) -> dict:
    record: dict = {
        "model": CLOUD_MODEL,
        "question_text": question_text,
        "timestamp": now_iso(),
    }
    try:
        start = time.perf_counter()
        response = client.chat.completions.create(
            model=CLOUD_MODEL,
            messages=[{"role": "user", "content": question_text}],
        )
        elapsed = time.perf_counter() - start
        usage = response.usage
        prompt_tokens = usage.prompt_tokens if usage else None
        completion_tokens = usage.completion_tokens if usage else None

        record.update(
            {
                "success": True,
                "error": None,
                "response_text": response.choices[0].message.content,
                "elapsed_sec": elapsed,
                "prompt_tokens": prompt_tokens,
                "completion_tokens": completion_tokens,
                "total_tokens": usage.total_tokens if usage else None,
                "estimated_cost": (
                    estimate_cost(prompt_tokens, completion_tokens)
                    if prompt_tokens is not None and completion_tokens is not None
                    else None
                ),
                "currency": CURRENCY,
            }
        )
    except Exception as e:  # noqa: BLE001
        record.update({"success": False, "error": str(e), "response_text": None, "elapsed_sec": None})
    return record


def main():
    run_id = new_run_id()
    questions = [q for q in load_questions() if q.get("used_in_cloud_compare")]

    if len(questions) != 5:
        print(f"[경고] used_in_cloud_compare=true 인 질문이 {len(questions)}개입니다. STEP 5/7 기준(5개)을 확인하세요.")

    api_key = os.getenv("CLOUD_API_KEY")
    if not api_key:
        from getpass import getpass

        api_key = getpass("Cloud API Key: ")

    client = OpenAI(api_key=api_key, base_url=CLOUD_BASE_URL)

    for q in questions:
        print(f"[Cloud] {q['id']}")
        record = call_cloud(client, q["input"])
        record.update({"run_id": run_id, "question_id": q["id"], "question_type": q.get("type"), "rep": 1})
        append_jsonl(RESULTS_PATH, record)

    print(f"\n완료. 결과 파일: {RESULTS_PATH}")
    print("실행 전후 Cloud 콘솔의 실제 사용량/비용도 별도로 확인해 docs/04_results_analysis.md에 기록하세요.")


if __name__ == "__main__":
    main()
