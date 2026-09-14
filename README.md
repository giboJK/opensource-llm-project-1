# 오픈소스 LLM 활용 프로젝트

## 프로젝트 진행 상태

- [x] STEP 1. 문제 정의 (`docs/00_use_case.md`)
- [ ] STEP 2. 모델 요구사항 정의
- [ ] STEP 3. 후보 모델 탐색
- [ ] STEP 4. 모델 실행 환경 확인
- [ ] STEP 5. 평가 질문/기준 확정 (`data/questions.json`)
- [ ] STEP 6. 로컬 모델 비교 실험
- [ ] STEP 7. Local–Cloud 비교
- [ ] STEP 8. 최종 모델 선정 및 발표

> 각 단계의 문서와 스크립트는 그 단계를 시작할 때 만듭니다.

## 폴더 구조

```
.
├── README.md
├── pyproject.toml            # uv 프로젝트 설정 (Python 3.12)
├── .env.example              # API 키 등 환경변수 예시 (실제 .env는 커밋 금지)
├── docs/
│   └── 00_use_case.md        # STEP 1 문제 정의
├── data/
│   ├── questions.json                  # 고정 질문 10개 (+ Cloud 비교용 5개 표시)
│   ├── congregation_300_3y.json        # 가상 교인 명부 300명 / 이력 3년 (기본)
│   ├── congregation_500_5y.json        # 규모 비교용 500명 / 5년
│   ├── congregation_1000_10y.json      # 규모 비교용 1000명 / 10년
│   └── sample_congregation_members.md  # 명부 데이터 설명 (구성/필드)
├── scripts/
│   └── generate_sample_congregation.py # 가상 교인 명부 생성
└── results/
    ├── local/                # 로컬 모델 실험 결과 (JSONL)
    │   └── warmup/           # 워밍업 호출 결과 (본 실험과 분리)
    └── cloud/                # Cloud 모델 비교 결과 (JSONL)
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

지금 저장소에 있는 실행 대상은 명부 생성 스크립트 하나입니다.

```powershell
uv run scripts/generate_sample_congregation.py
```

실험 실행 스크립트는 해당 단계에서 만듭니다.

## 입력 문서

질문 10개는 "데이터를 읽고 심방 대상을 고르는" 작업이라, 질문과 함께 가상의 명부를 문서로 넣어 줍니다.

| 데이터셋 | 인원 | 이력 연차 | 용도 |
|---|---|---|---|
| `congregation_300_3y.json` | 300명 | 3년 | 기본 (스크립트 기본값) |
| `congregation_500_5y.json` | 500명 | 5년 | DB 규모별 비교 |
| `congregation_1000_10y.json` | 1000명 | 10년 | DB 규모별 비교 |

```powershell
# 다시 만들기 (시드 고정이라 항상 같은 결과)
uv run scripts/generate_sample_congregation.py --total 300 --years 3 --out data/congregation_300_3y.json
```

- 각 인물은 기본 정보, 출석, 건강, 경조사, 가족관계, 기도제목, 심방기록, 소속이력을 가집니다.
- 전체의 10%는 기록이 비어 있는 교인입니다.
- 자세한 구성은 [data/sample_congregation_members.md](data/sample_congregation_members.md) 참고.

## 재실행 확인

- [ ] (이름) — 로컬 실행 확인 완료 (날짜: )
- [ ] (이름) — Cloud 실행 확인 완료 (날짜: )

## 참고

- 원본 실험 기록(JSON/JSONL)은 그대로 보존하고, 실패/워밍업/재시도는 본 실험과 구분해 별도 기록합니다.
