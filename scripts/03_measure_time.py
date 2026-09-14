"""STEP 4: 전체 응답 시간 측정 예제.

2번 선행 가이드에서 작성한 03_measure_time.py가 이미 있다면 그 내용으로
덮어써서 이어 쓰세요. 아래는 동일한 역할의 기본 템플릿입니다: 요청 직전부터
최종 응답 수신 직후까지(elapsed)를 측정합니다.
"""

import time

import ollama

MODEL = "llama3.2:3b"
QUESTION = "너는 어떤 모델이고, 한국어로 자기소개를 한 문단으로 해줘."

if __name__ == "__main__":
    start = time.perf_counter()
    response = ollama.chat(
        model=MODEL,
        messages=[{"role": "user", "content": QUESTION}],
    )
    elapsed = time.perf_counter() - start

    print("=== 응답 ===")
    print(response["message"]["content"])

    print(f"\n전체 응답 시간(elapsed): {elapsed:.3f}초")
    print("load_duration(ns):", response.get("load_duration"))
    print("eval_count:", response.get("eval_count"))
    print("eval_duration(ns):", response.get("eval_duration"))

    # 해석 예시:
    # - elapsed: 요청부터 최종 응답까지 걸린 전체 시간(초)
    # - load_duration: 모델을 메모리에 올리는 데 걸린 시간(나노초) -> /1e9 하면 초
    # - eval_count / (eval_duration / 1e9) = 초당 생성 토큰 수(tokens/s)
