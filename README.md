# 오픈소스 LLM 활용 프로젝트

교인 명부를 근거로 다음 7일 동안 심방해야 할 교인 top 10을 뽑는 작업에, 로컬에서 돌릴 수 있는
오픈소스 모델을 고릅니다.

## 진행 상태

- [x] STEP 1. 문제 정의 (`docs/step1.md`)
- [x] STEP 2. 모델 요구사항 정의 (`docs/step2.md`)
- [x] STEP 3. 후보 모델 탐색 (`docs/step3.md`)
- [x] STEP 4. 모델 실행 환경 확인
- [x] STEP 5. 평가 세트와 채점 기준 (`docs/step5.md`, `data/eval/`)
- [x] STEP 6. 로컬 모델 품질·성능 측정 (`docs/step6.md`)
- [x] STEP 7. Local–Cloud 비교 (`docs/step7.md`)
- [x] STEP 8. 최종 모델 선정 및 발표 (`docs/step8.md`)

## 폴더 구조

```
.
├── docs/
│   ├── step1.md                        # 문제 정의
│   ├── step2.md                        # 모델 요구사항
│   ├── step3.md                        # 후보 모델
│   ├── step5.md                        # 평가 세트와 채점 기준
│   ├── step6.md                        # 로컬 모델 측정 결과
│   ├── step7.md                        # Local–Cloud 비교
│   └── step8.md                        # 최종 모델 선정
├── data/
│   ├── eval/
│   │   ├── set01.json ~ set10.json     # 평가 세트 10개 (각 50명)
│   │   └── answer_key.json             # 세트별 정답 (포함 5명 / 제외 5명)
│   └── eval_data.md                    # 평가 세트 데이터 설명
├── scripts/
│   ├── experiment.py                   # 공통 모듈 (세트 로드, 프롬프트, 호출, 채점)
│   ├── 01_ollama_chat.py               # 세트 하나 돌려 응답 확인
│   ├── 02_compare_models.py            # 10세트 x 후보 비교 실행
│   ├── 03_step6_run.py                 # STEP 6 본 실험 (워밍업 분리, 성능 측정)
│   ├── 04_report.py                    # 후보 한 명짜리 화면
│   ├── 05_results_index.py             # results/ 전체를 훑어 목록 화면 만들기
│   ├── report_template.html            # 후보 화면 (여기만 고치면 보는 방식이 바뀜)
│   ├── results_index_template.html     # 목록 화면
│   └── member_data/
│       ├── sample_member_generator.py  # 평가 세트 생성 (실행)
│       └── member_generation_logic.py  # 교인 한 명을 만드는 로직 (import 전용)
└── results/                            # 후보 이름으로 폴더를 나눠 저장
    ├── index.html                      # 전체 실험을 모델·날짜로 훑어보는 화면
    ├── local/
    │   ├── qwen3_4b-instruct-2507-q4_K_M/
    │   │   ├── step6_{시각}.jsonl      # 본 실험 (원본 기록)
    │   │   ├── run_meta_{시각}.json     # 그 실행의 환경 (모델 digest, VRAM, 생성 설정)
    │   │   ├── report.html             # 이 후보만 보는 화면
    │   │   ├── records.js              # 그 화면이 읽는 원본 기록
    │   │   └── warmup/                 # 워밍업 (본 집계에서 분리)
    │   └── gemma3_4b/
    └── cloud/
        └── {모델명}/
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
uv run scripts/member_data/sample_member_generator.py

# 세트 하나로 응답 확인
uv run scripts/01_ollama_chat.py

# STEP 6 본 실험: 10세트 x 후보 2개 x 2회 = 40회 (워밍업 별도)
uv run scripts/03_step6_run.py

# 결과를 브라우저에서 보기
uv run scripts/05_results_index.py   # results/index.html — 모델·날짜로 훑어보기
uv run scripts/04_report.py          # 후보별 report.html

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

자세한 구성은 [data/eval_data.md](data/eval_data.md)를
참고하세요. 채점 기준은 [docs/step5.md](docs/step5.md)에 있습니다.

## 재실행 확인

- [ ] (이름) — 로컬 실행 확인 완료 (날짜: )
- [ ] (이름) — Cloud 실행 확인 완료 (날짜: )

## 참고

원본 실험 기록(JSONL)은 그대로 보존하고, 실패와 재시도도 같은 파일에 남깁니다.
