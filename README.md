# 오픈소스 LLM 활용 프로젝트

교인 명부를 근거로 다음 7일 동안 심방해야 할 교인 top 10을 뽑는 작업에, 로컬에서 돌릴 수 있는
오픈소스 모델을 고릅니다.

## 진행 상태

- [x] STEP 1. 문제 정의 (`docs/step1.md`)
- [x] STEP 2. 모델 요구사항 정의 (`docs/step2.md`)
- [x] STEP 3. 후보 모델 탐색 (`docs/step3.md`)
- [x] STEP 4. 모델 실행 환경 확인
- [x] STEP 5. 평가 세트와 채점 기준 (`docs/step5.md`, `data/eval/`)
- [ ] STEP 6. 로컬 모델 비교 실험
- [ ] STEP 7. Local–Cloud 비교
- [ ] STEP 8. 최종 모델 선정 및 발표

## 폴더 구조

```
.
├── docs/
│   ├── step1.md                        # 문제 정의
│   ├── step2.md                        # 모델 요구사항
│   ├── step3.md                        # 후보 모델
│   └── step5.md                        # 평가 세트와 채점 기준
├── data/
│   ├── eval/
│   │   ├── set01.json ~ set10.json     # 평가 세트 10개 (각 50명)
│   │   └── answer_key.json             # 세트별 정답 (포함 5명 / 제외 5명)
│   └── sample_congregation_members.md  # 데이터 설명
├── scripts/
│   ├── experiment.py                   # 공통 모듈 (세트 로드, 프롬프트, 호출, 채점)
│   ├── 01_ollama_chat.py               # 세트 하나 돌려 응답 확인
│   ├── 02_compare_models.py            # 10세트 x 후보 비교 실행
│   ├── generate_eval_sets.py           # 평가 세트 생성
│   └── generate_sample_congregation.py # 명부 생성 부품
└── results/
    ├── local/                          # 로컬 실험 결과 (JSONL)
    └── cloud/                          # Cloud 비교 결과 (JSONL)
```

## 환경 설정

Windows + VS Code + uv + Python 3.12. 모델은 Ollama로 돌립니다.

```powershell
uv sync
copy .env.example .env
```

`.env`는 커밋하지 않습니다.

## 실행

```powershell
# 평가 세트 다시 만들기 (시드 고정이라 항상 같은 결과)
uv run scripts/generate_eval_sets.py

# 세트 하나로 응답 확인
uv run scripts/01_ollama_chat.py

# 본 실험: 10세트 x 후보 2개 = 20회
uv run scripts/02_compare_models.py

# 목록 일관성 확인: 같은 세트를 5회
uv run scripts/02_compare_models.py --sets set01 --repeat 5
```

## 평가 세트

고정 문제 10개는 명부 10개입니다.

| 항목 | 값 |
|---|---|
| 파일 | `data/eval/set01.json` ~ `set10.json` |
| 세트당 인원 | 50명 |
| 세트당 명부 크기 | 약 10,200~10,700토큰 |
| 정답 | 세트당 반드시 포함 10명(급성 5 / 만성 5), 반드시 제외 5명 |

자세한 구성은 [data/sample_congregation_members.md](data/sample_congregation_members.md)를
참고하세요. 채점 기준은 [docs/step5.md](docs/step5.md)에 있습니다.

## 재실행 확인

- [ ] (이름) — 로컬 실행 확인 완료 (날짜: )
- [ ] (이름) — Cloud 실행 확인 완료 (날짜: )

## 참고

원본 실험 기록(JSONL)은 그대로 보존하고, 실패와 재시도도 같은 파일에 남깁니다.
