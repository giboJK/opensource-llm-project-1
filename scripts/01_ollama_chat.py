"""같은 PC의 Ollama를 Python으로 호출해 응답 한 건을 받아 파일로 저장합니다 (STEP 4 확인용).

Windows -> Python -> localhost의 Ollama -> 로컬 모델 경로를 사용합니다.
MODEL 을 후보 태그로 바꿔가며 한 번에 하나씩 실행합니다.

실행:
    uv run scripts/01_ollama_chat.py
"""

import json
import time
from datetime import datetime
from pathlib import Path

import ollama

# --- 실행 설정 (후보를 바꿀 때 MODEL 만 교체) ---
MODEL = "qwen3:4b-instruct-2507-q4_K_M"
NUM_CTX = 16384
MEMBER_LIMIT = 30

ROOT = Path(__file__).parent.parent
DATA_PATH = ROOT / "data" / "congregation_300_3y.json"
OUT_DIR = ROOT / "results" / "local"

# --- 입력 1. 사용자 정보 ---
USER_INFO = """[사용자 정보]
- 이 공동체에 새로 부임한 목사입니다.
- 부임 2주 차이며, 전임자에게 받은 인수인계 기록이 거의 없습니다.
- 공동체 전체를 맡고 있습니다.
- 심방에 쓸 수 있는 시간은 주당 2~3건입니다."""

# --- 입력 3. 질문 ---
QUESTION = """나 이제 새로 부임했는데 정보가 너무 없어. 이 공동체에 대해 요약해주고, \
심방 일정을 세우는데 후보 2개 부탁해."""


def format_members(members: list) -> str:
    """명부를 프롬프트용 텍스트로 만듭니다."""
    lines = ["[교인 명부]"]
    for m in members:
        family = ", ".join(f"{r['relation']}: {r['name']}" for r in m["family"]) or "정보 없음"
        prayers = ", ".join(p["content"] for p in m["prayer_requests"]) or "없음"
        years = [str(y["year"]) for y in m["community_history"] if y["affiliations"]]
        lines += [
            f"- [{m['id']}] {m['name']}",
            f"    나이: {m['age']} / 성별: {m['gender']} / 신앙 연차: {m['faith_years']}",
            f"    마지막 심방일: {m['last_visitation_date']}",
            f"    최근 8주 출석: {m['recent_attendance']}",
            f"    건강 상태: {m['health_note']}",
            f"    최근 경조사: {m['family_event']}",
            f"    비고: {m['special_note']}",
            f"    가족관계: {family}",
            f"    기도제목: {prayers}",
            f"    심방 기록: {len(m['visitation_records'])}회",
            f"    소속 이력: {', '.join(years) if years else '없음'}",
        ]
    return "\n".join(lines)


def main():
    with open(DATA_PATH, encoding="utf-8") as f:
        members = json.load(f)["members"][:MEMBER_LIMIT]

    prompt = f"{USER_INFO}\n\n{format_members(members)}\n\n[질문]\n{QUESTION}"

    started = time.perf_counter()
    response = ollama.chat(
        model=MODEL,
        messages=[{"role": "user", "content": prompt}],
        options={"num_ctx": NUM_CTX},
    )
    elapsed = time.perf_counter() - started

    answer = response["message"]["content"]
    print(f"모델: {MODEL}")
    print(f"전체 응답 시간: {elapsed:.1f}초")
    print(f"입력 토큰(prompt_eval_count): {response.get('prompt_eval_count')}")
    print(f"출력 토큰(eval_count): {response.get('eval_count')}")
    print("-" * 60)
    print(answer)

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    record = {
        "run_at": datetime.now().isoformat(timespec="seconds"),
        "model": MODEL,
        "num_ctx": NUM_CTX,
        "member_limit": MEMBER_LIMIT,
        "data_file": DATA_PATH.name,
        "prompt_chars": len(prompt),
        "elapsed_sec": round(elapsed, 1),
        "prompt_eval_count": response.get("prompt_eval_count"),
        "eval_count": response.get("eval_count"),
        "question": QUESTION,
        "answer": answer,
    }
    out_path = OUT_DIR / f"step4_{MODEL.replace(':', '_').replace('/', '_')}.jsonl"
    with open(out_path, "a", encoding="utf-8") as f:
        f.write(json.dumps(record, ensure_ascii=False) + "\n")
    print("-" * 60)
    print(f"저장: {out_path}")


if __name__ == "__main__":
    main()
