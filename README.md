# 오픈소스 LLM 활용 프로젝트

로컬 LLM(Ollama) 2개를 비교하고, Cloud API 모델 1개를 소규모로 함께 비교하여
특정 Use Case에 가장 적합한 모델 1개를 선정하는 팀 프로젝트입니다.

## 팀 정보

| 이름 | 역할/담당 |
|---|---|
| (이름 입력) | (담당 작업 입력) |
| (이름 입력) | (담당 작업 입력) |

## 프로젝트 진행 상태

- [ ] STEP 1. 문제 정의 (`docs/00_use_case.md`)
- [ ] STEP 2. 모델 요구사항 정의 (`docs/01_requirements.md`)
- [ ] STEP 3. 후보 모델 탐색 (`docs/02_candidate_models.md`)
- [ ] STEP 4. 모델 실행 환경 확인 (`scripts/01_ollama_chat.py` 실행 확인)
- [ ] STEP 5. 평가 질문/기준 확정 (`data/questions.json`, `docs/03_evaluation.md`)
- [ ] STEP 6. 로컬 모델 비교 실험 (`scripts/run_local_experiment.py`)
- [ ] STEP 7. Local–Cloud 비교 (`scripts/run_cloud_experiment.py`)
- [ ] STEP 8. 최종 모델 선정 및 발표 (`docs/05_final_selection.md`)

## 폴더 구조

```
.
├── README.md
├── pyproject.toml            # uv 프로젝트 설정 (Python 3.12)
├── .env.example               # API 키 등 환경변수 예시 (실제 .env는 커밋 금지)
├── docs/
│   ├── 00_use_case.md         # STEP 1 문제 정의
│   ├── 01_requirements.md     # STEP 2 필수 통과 조건 / 선호 우선순위
│   ├── 02_candidate_models.md # STEP 3 후보 모델 비교표
│   ├── 03_evaluation.md       # STEP 5 평가 질문 + 채점 기준
│   ├── 04_results_analysis.md # STEP 6/7 결과 해석
│   └── 05_final_selection.md  # STEP 8 최종 선정 보고서
├── data/
│   └── questions.json         # 고정 질문 10개 (+ Cloud 비교용 5개 표시)
├── scripts/
│   ├── utils.py                # 공통 유틸 (JSONL 저장, 시간 변환 등)
│   ├── 01_ollama_chat.py       # 2번 가이드: 단일 Ollama 호출 예제
│   ├── 02_cloud_chat.py        # 2번 가이드: 단일 Cloud(Luna 등) 호출 예제
│   ├── 03_measure_time.py      # 2번 가이드: 전체 응답 시간 측정 예제
│   ├── run_local_experiment.py # STEP 6: 로컬 모델 2개 본 실험 실행
│   └── run_cloud_experiment.py # STEP 7: Cloud 모델 비교 실험 실행
└── results/
    ├── local/                  # 로컬 모델 본 실험 원본 결과 (JSONL)
    │   └── warmup/             # 워밍업 호출 결과 (본 실험과 분리)
    └── cloud/                  # Cloud 모델 비교 결과 (JSONL)
```

## 환경 설정

이 프로젝트는 2번 선행 가이드(Python으로 Ollama/Luna 호출하기)에서 준비한
**Windows + VS Code + uv + Python 3.12** 환경을 그대로 이어서 사용합니다.

```powershell
# 프로젝트 폴더에서
uv sync
```

`.env.example`을 복사해 `.env`를 만들고 실제 API 키를 입력하세요. **`.env`는 절대 커밋하지 않습니다.**

```powershell
copy .env.example .env
```

## 실행 방법

1. Ollama가 실행 중인지 확인: `ollama list`, `ollama ps`
2. 후보 로컬 모델 다운로드: `ollama pull <model:tag>`
3. 단일 호출 확인: `uv run scripts/01_ollama_chat.py`
4. 질문/기준 확정 후 본 실험 실행: `uv run scripts/run_local_experiment.py`
5. Cloud 비교 실행: `uv run scripts/run_cloud_experiment.py`
6. 결과는 `results/local/*.jsonl`, `results/cloud/*.jsonl`에 원본 그대로 저장됩니다.

## 재실행 확인

- [ ] (이름) — 로컬 실행 확인 완료 (날짜: )
- [ ] (이름) — Cloud 실행 확인 완료 (날짜: )

## 참고

- 모델 가중치 파일, API 키, 가상환경(.venv)은 저장소에 올리지 않습니다.
- 원본 실험 기록(JSON/JSONL)은 그대로 보존하고, 실패/워밍업/재시도는 본 실험과 구분해 별도 기록합니다.
