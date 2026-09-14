# 오픈소스 LLM 활용 프로젝트

로컬 LLM(Ollama) 2개를 비교하고, Cloud API 모델 1개를 소규모로 함께 비교하여
특정 Use Case에 가장 적합한 모델 1개를 선정하는 팀 프로젝트입니다.

## 팀 정보

| 이름 | 역할/담당 |
|---|---|
| (이름 입력) | (담당 작업 입력) |
| (이름 입력) | (담당 작업 입력) |

## 프로젝트 진행 상태

- [x] STEP 1. 문제 정의 (`docs/00_use_case.md`)
- [x] STEP 2. 모델 요구사항 정의 (`docs/01_requirements.md`)
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
│   ├── questions.json                  # 고정 질문 10개 (+ Cloud 비교용 5개 표시)
│   ├── congregation_300_3y.json        # 입력 문서: 가상 교인 명부 300명 / 이력 3년 (기본)
│   ├── congregation_500_5y.json        # 규모 비교용 500명 / 5년
│   ├── congregation_1000_10y.json      # 규모 비교용 1000명 / 10년
│   └── sample_congregation_members.md  # 명부 데이터 설명 (구성/필드/사용법)
├── scripts/
│   ├── utils.py                        # 공통 유틸 (JSONL 저장, 시간 변환 등)
│   ├── 01_ollama_chat.py               # 2번 가이드: 단일 Ollama 호출 예제
│   ├── 02_cloud_chat.py                # 2번 가이드: 단일 Cloud(Luna 등) 호출 예제
│   ├── 03_measure_time.py              # 2번 가이드: 전체 응답 시간 측정 예제
│   ├── generate_sample_congregation.py # 입력 문서(가상 명부) 생성
│   ├── format_congregation_prompt.py   # 명부를 프롬프트용 텍스트로 변환
│   ├── run_local_experiment.py         # STEP 6: 로컬 모델 2개 본 실험 실행
│   └── run_cloud_experiment.py         # STEP 7: Cloud 모델 비교 실험 실행
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
4. 입력 문서(명부)를 프롬프트용 텍스트로 변환:
   `uv run scripts/format_congregation_prompt.py --limit 30 > data/_prompt_block.txt`
5. 질문/기준 확정 후 본 실험 실행: `uv run scripts/run_local_experiment.py`
6. Cloud 비교 실행: `uv run scripts/run_cloud_experiment.py`
6. 결과는 `results/local/*.jsonl`, `results/cloud/*.jsonl`에 원본 그대로 저장됩니다.

## 입력 문서 (가상 교인 명부)

질문 10개는 "교인 명부를 읽고 심방 대상을 고르는" 작업이라, 질문과 함께 명부를 문서로 넣어 줍니다.
명부는 전부 합성 데이터이며 실제 인물과 무관합니다.

| 데이터셋 | 인원 | 이력 연차 | 용도 |
|---|---|---|---|
| `congregation_300_3y.json` | 300명 | 3년 | 기본 실험 (스크립트 기본값) |
| `congregation_500_5y.json` | 500명 | 5년 | DB 규모별 비교 |
| `congregation_1000_10y.json` | 1000명 | 10년 | DB 규모별 비교 |

```powershell
# 다시 만들기 (시드 고정이라 항상 같은 결과)
uv run scripts/generate_sample_congregation.py --total 300 --years 3 --out data/congregation_300_3y.json

# 프롬프트용 텍스트로 변환 (앞 30명만, 다른 데이터셋은 --data 로 지정)
uv run scripts/format_congregation_prompt.py --limit 30
```

- 각 인물은 기본 정보, 출석, 건강, 경조사, 가족관계, 기도제목, 심방기록, 소속이력을 가집니다.
- 전체의 10%는 담당자 입력이 빠져 기록이 거의 비어 있는 교인입니다. 모델이 정보 부족을
  인정하는지 보기 위한 구간입니다.
- ID는 영문 대소문자와 숫자를 섞은 6자리입니다. 세 데이터셋에서 같은 사람은 같은 ID를 씁니다.
- 데이터 파일에는 명부만 넣습니다. 생성 조건이나 정답지처럼 실제 교회 DB에 없을 항목은
  저장하지 않습니다.
- 자세한 구성은 [data/sample_congregation_members.md](data/sample_congregation_members.md) 참고.

> **주의**: 앞 30명만 넣어도 입력이 약 1만 토큰입니다. Ollama 기본 컨텍스트로는 문서 앞부분이
> 잘린 채 답이 나오므로 `num_ctx`를 명시하고 응답의 `prompt_eval_count`로 확인하세요.

## 재실행 확인

- [ ] (이름) — 로컬 실행 확인 완료 (날짜: )
- [ ] (이름) — Cloud 실행 확인 완료 (날짜: )

## 참고

- 모델 가중치 파일, API 키, 가상환경(.venv)은 저장소에 올리지 않습니다.
- 원본 실험 기록(JSON/JSONL)은 그대로 보존하고, 실패/워밍업/재시도는 본 실험과 구분해 별도 기록합니다.
