"""공통 유틸: 결과를 JSONL로 저장/기록하기, 시간 단위 변환 등.

프로젝트의 모든 실험 스크립트는 원본 응답과 측정값을 이 함수들을 통해
JSONL(파일당 한 줄에 레코드 하나) 형식으로 남깁니다. 나중에 다시 읽어서
비교표/평균을 계산할 수 있어야 하므로, 성공/실패와 관계없이 시도한 모든
호출을 기록합니다.
"""

from __future__ import annotations

import json
import os
import time
from datetime import datetime, timezone
from pathlib import Path
from typing import Any


def now_iso() -> str:
    """UTC ISO8601 타임스탬프."""
    return datetime.now(timezone.utc).isoformat()


def ns_to_s(nanoseconds: int | None) -> float | None:
    """나노초 -> 초. 값이 없으면 None을 그대로 반환(0으로 채우지 않음)."""
    if nanoseconds is None:
        return None
    return nanoseconds / 1_000_000_000


def tokens_per_second(eval_count: int | None, eval_duration_ns: int | None) -> float | None:
    """생성 토큰 수 / 생성 구간(초). 계산 불가 사유가 있으면 None."""
    if not eval_count or not eval_duration_ns or eval_duration_ns <= 0:
        return None
    eval_duration_s = ns_to_s(eval_duration_ns)
    if not eval_duration_s:
        return None
    return eval_count / eval_duration_s


def bytes_to_mib(num_bytes: int | None) -> float | None:
    if num_bytes is None:
        return None
    return num_bytes / 1_048_576


def append_jsonl(path: str | Path, record: dict[str, Any]) -> None:
    """레코드 하나를 JSONL 파일 끝에 추가합니다. 폴더가 없으면 만듭니다."""
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a", encoding="utf-8") as f:
        f.write(json.dumps(record, ensure_ascii=False) + "\n")


def read_jsonl(path: str | Path) -> list[dict[str, Any]]:
    path = Path(path)
    if not path.exists():
        return []
    records = []
    with path.open("r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line:
                records.append(json.loads(line))
    return records


def load_questions(path: str | Path = "data/questions.json") -> list[dict[str, Any]]:
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    return data["questions"]


class Timer:
    """with Timer() as t: ... 로 감싸면 t.elapsed_sec에 경과 시간(초)이 남습니다."""

    def __enter__(self):
        self._start = time.perf_counter()
        return self

    def __exit__(self, *exc):
        self.elapsed_sec = time.perf_counter() - self._start
        return False


def new_run_id() -> str:
    return datetime.now().strftime("%Y%m%d_%H%M%S")
