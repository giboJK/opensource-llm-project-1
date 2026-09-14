"""STEP 4/7: 단일 Cloud(Luna 등 OpenAI 호환 API) 호출 예제.

2번 선행 가이드에서 작성한 02_luna_chat.py가 이미 있다면 이 파일을
그 내용으로 덮어써서 그대로 이어 쓰세요. 아래는 OpenAI 호환 API를
가정한 기본 템플릿입니다.

API 키는 절대 코드/저장소/로그/스크린샷에 남기지 않습니다.
아래처럼 실행 시 터미널에서 안 보이게 입력받거나, .env 파일(커밋 금지)에서 읽으세요.
"""

import os
from getpass import getpass

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()  # .env 파일이 있으면 CLOUD_API_KEY 등을 읽어옵니다

# ↓↓↓ 여기 값을 바꿔가며 실행하세요 ↓↓↓
MODEL = os.getenv("CLOUD_MODEL", "gpt-4o-mini")
QUESTION = "너는 어떤 모델이고, 한국어로 자기소개를 한 문단으로 해줘."

if __name__ == "__main__":
    api_key = os.getenv("CLOUD_API_KEY") or getpass("Cloud API Key: ")
    base_url = os.getenv("CLOUD_BASE_URL") or None

    client = OpenAI(api_key=api_key, base_url=base_url)

    response = client.chat.completions.create(
        model=MODEL,
        messages=[{"role": "user", "content": QUESTION}],
    )

    print("=== 응답 ===")
    print(response.choices[0].message.content)

    print("\n=== 토큰 사용량(원본) ===")
    usage = response.usage
    print("prompt_tokens:", usage.prompt_tokens if usage else None)
    print("completion_tokens:", usage.completion_tokens if usage else None)
    print("total_tokens:", usage.total_tokens if usage else None)
