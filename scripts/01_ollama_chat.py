"""STEP 4: 단일 Ollama 호출 예제.

2번 선행 가이드에서 작성한 01_ollama_chat.py가 이미 있다면 이 파일을
그 내용으로 덮어써서 그대로 이어 쓰세요. 아래는 동일한 역할을 하는
기본 템플릿입니다: MODEL과 QUESTION을 바꿔서 실행하면 됩니다.
"""

import ollama

# ↓↓↓ 여기 두 값을 바꿔가며 실행하세요 ↓↓↓
MODEL = "llama3.2:3b"  # 실제 다운로드한 모델의 "전체 태그"로 교체
QUESTION = "너는 어떤 모델이고, 한국어로 자기소개를 한 문단으로 해줘."

if __name__ == "__main__":
    response = ollama.chat(
        model=MODEL,
        messages=[{"role": "user", "content": QUESTION}],
    )

    print("=== 응답 ===")
    print(response["message"]["content"])

    print("\n=== 측정값(원본) ===")
    print("model:", response.get("model"))
    print("load_duration(ns):", response.get("load_duration"))
    print("prompt_eval_count:", response.get("prompt_eval_count"))
    print("eval_count:", response.get("eval_count"))
    print("eval_duration(ns):", response.get("eval_duration"))

    print("\n=== 현재 메모리에 적재된 모델 (client.ps()) ===")
    print(ollama.ps())
