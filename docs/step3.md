# STEP 3. 후보 모델 탐색

서로 다른 로컬 모델 2개를 필수 후보로 선정합니다. Cloud 모델 1개는 별도의 비교 기준이며
로컬 후보 수에 포함하지 않습니다.

## 선정 결과

| 구분 | 모델 | 실행 태그 | 식별값 |
|---|---|---|---|
| 로컬 후보 1 | Qwen3-4B-Instruct-2507 | `qwen3:4b-instruct-2507-q4_K_M` | `0edcdef34593` |
| 로컬 후보 2 | Gemma 3 4B IT | `gemma3:4b` | `a2af6cc3eb7f` |
| Cloud 비교 | GPT-4o mini | `gpt-4o-mini` | OpenAI 호환 엔드포인트 |

두 로컬 후보는 아키텍처가 qwen3와 gemma3로 서로 다릅니다. 같은 모델의 양자화 버전 비교가
아닙니다.

## 로컬 후보 1. Qwen3-4B-Instruct-2507

| 항목 | 값 |
|---|---|
| 실행 태그 | `qwen3:4b-instruct-2507-q4_K_M` |
| 식별값 | `0edcdef34593` |
| 아키텍처 | qwen3 |
| 파라미터 | 4.0B |
| 양자화 | Q4_K_M |
| 다운로드 크기 | 2.5GB |
| Context Length | 262,144 |
| License | Apache License 2.0 |

- Model Card: https://huggingface.co/Qwen/Qwen3-4B-Instruct-2507
- License 원문: https://www.apache.org/licenses/LICENSE-2.0
- Ollama 태그: https://ollama.com/library/qwen3/tags

**선정 이유**

- License가 Apache 2.0으로 사용 조건이 가장 명확합니다. 교회 내부 업무 사용에 걸리는 조항이 없습니다.
- Context Length가 262,144로 후보 중 가장 깁니다. VRAM 때문에 전부 쓰지는 못하지만 여유가 있습니다.
- 다운로드 크기가 2.5GB로 gemma3보다 작습니다. 응답 시간 2분 조건에서 유리합니다.

## 로컬 후보 2. Gemma 3 4B IT

| 항목 | 값 |
|---|---|
| 실행 태그 | `gemma3:4b` |
| 식별값 | `a2af6cc3eb7f` |
| 아키텍처 | gemma3 |
| 파라미터 | 4.3B |
| 양자화 | Q4_K_M |
| 다운로드 크기 | 3.3GB |
| Context Length | 131,072 |
| License | Gemma Terms of Use |

- Model Card: https://huggingface.co/google/gemma-3-4b-it
- License 원문: https://ai.google.dev/gemma/terms
- Ollama 태그: https://ollama.com/library/gemma3/tags

**선정 이유**

- 후보 1과 아키텍처가 달라 비교 의미가 있습니다. 파라미터 수는 4.3B로 비슷한 급입니다.
- License 형태가 다릅니다. Apache 2.0과 달리 사용 제한 조항이 붙는 라이선스라, 조건 확인
  항목을 실제로 따져볼 수 있습니다.
- Context Length 131,072로 필수 조건 16k를 넘깁니다.

## Cloud 비교. GPT-4o mini

| 항목 | 값 |
|---|---|
| 모델명 | `gpt-4o-mini` |
| 호출 방식 | OpenAI 호환 엔드포인트 (`CLOUD_BASE_URL`) |
| Context Length | 128,000 |
| 최대 출력 | 16,384 |

- Model Card: https://developers.openai.com/api/docs/models/gpt-4o-mini

**선정 이유**

- 저장소 `.env.example`에 기본값으로 지정돼 있어 추가 설정 없이 호출할 수 있습니다.
- 로컬 후보와 같은 4B급 소형 모델 대비 상한선을 보는 용도입니다.

**주의**

교인 명부는 건강, 경조사 같은 민감 정보를 담고 있어 원칙적으로 외부로 보내지 않습니다.
Cloud 비교는 전부 가상 데이터라는 전제에서만 수행합니다.

## 다운로드 상태

두 로컬 후보 모두 내려받아 확인했습니다.

```powershell
ollama pull qwen3:4b-instruct-2507-q4_K_M
ollama pull gemma3:4b
```

| 태그 | 식별값 | 크기 |
|---|---|---|
| `qwen3:4b-instruct-2507-q4_K_M` | `0edcdef34593` | 2.5GB |
| `gemma3:4b` | `a2af6cc3eb7f` | 3.3GB |

식별값은 Ollama 라이브러리에 게시된 값과 일치합니다.
