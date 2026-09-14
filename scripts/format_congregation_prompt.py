"""data/congregation_300_3y.json 을 모델 프롬프트용 텍스트로 변환합니다.

300명 전체를 그대로 프롬프트에 넣으면 매우 길어지므로(수천 단어), 필요하면
--limit 으로 앞에서부터 N명만, --ids 로 특정 ID만 뽑아 쓸 수 있습니다. 두 로컬
후보를 비교할 때는 반드시 같은 옵션(같은 인원 범위)을 동일하게 적용하세요.

각 인물마다 기본 정보 + 가족관계 + 기도제목 + 최근 3년 소속 이력을 출력합니다.
심방 기록(visitation_records)은 --full-history 를 주지 않는 한 "횟수/마지막 날짜/평균
간격"으로 요약합니다 (전체 기록을 다 나열하면 너무 길어지기 때문).

사용 예:
    uv run scripts/format_congregation_prompt.py                     # 전체 300명 (요약형)
    uv run scripts/format_congregation_prompt.py --limit 30           # 앞 30명만
    uv run scripts/format_congregation_prompt.py --ids OhbVrp,bfnoGM,Z3aWZk # 특정 인물만
    uv run scripts/format_congregation_prompt.py --limit 10 --full-history  # 심방 기록 전체 나열
    uv run scripts/format_congregation_prompt.py --limit 30 > data/_congregation_prompt_block.txt

출력된 텍스트를 01_ollama_chat.py / 02_cloud_chat.py / run_local_experiment.py 의
질문 앞에 "문서"로 붙여서 사용하세요 (요약/문서 QA 방식).
"""

import argparse
import json
from datetime import date
from pathlib import Path

DATA_PATH = Path(__file__).parent.parent / "data" / "congregation_300_3y.json"

FIELD_LABELS = {
    "age": "나이",
    "gender": "성별",
    "faith_years": "신앙 연차",
    "last_visitation_date": "마지막 심방일",
    "recent_attendance": "최근 8주 출석",
    "health_note": "건강 상태",
    "family_event": "최근 경조사",
    "special_note": "비고",
}


def format_family(m: dict) -> str:
    if m.get("family"):
        parts = [f"{r['relation']}: {r['name']}({r['member_id']})" for r in m["family"]]
        return ", ".join(parts)
    return m.get("family_note") or "정보 없음"


def format_prayer_requests(m: dict) -> str:
    reqs = m.get("prayer_requests") or []
    if not reqs:
        return "없음"
    return ", ".join(f"{r['content']}({r['status']})" for r in reqs)


def format_visitation_summary(m: dict) -> str:
    recs = m.get("visitation_records") or []
    if not recs:
        return "기록 없음"
    dates = [date.fromisoformat(r["date"]) for r in recs]
    if len(dates) > 1:
        gaps = [(b - a).days for a, b in zip(dates, dates[1:])]
        avg_gap = round(sum(gaps) / len(gaps))
        return f"최근 3년간 총 {len(recs)}회 (평균 간격 약 {avg_gap}일), 마지막 심방일: {dates[-1].isoformat()}"
    return f"최근 3년간 총 {len(recs)}회, 마지막 심방일: {dates[-1].isoformat()}"


def format_visitation_full(m: dict) -> str:
    recs = m.get("visitation_records") or []
    if not recs:
        return "        (심방 기록 없음)"
    lines = []
    for r in recs:
        discussed = ", ".join(r["prayer_requests_discussed"]) or "없음"
        lines.append(f"        - {r['date']}: {r['summary']} (관련 기도제목: {discussed})")
    return "\n".join(lines)


def format_community_history(m: dict) -> str:
    ch = m.get("community_history") or []
    parts = []
    for y in ch:
        if y["affiliations"]:
            names = ", ".join(f"{a['department']}/{a['community']}" for a in y["affiliations"])
        else:
            names = "무소속"
        parts.append(f"{y['year']}년: {names}")
    return " | ".join(parts) if parts else "정보 없음"


def build_prompt_block(members: list, full_history: bool) -> str:
    lines = ["다음은 우리 공동체 교인 목록입니다 (전부 가상의 인물입니다).\n"]
    for m in members:
        lines.append(f"- [{m['id']}] {m['name']}")
        for key, label in FIELD_LABELS.items():
            lines.append(f"    {label}: {m.get(key, '정보 없음')}")
        lines.append(f"    가족관계: {format_family(m)}")
        lines.append(f"    기도제목: {format_prayer_requests(m)}")
        lines.append(f"    소속 이력(최근 3개년): {format_community_history(m)}")
        if full_history:
            lines.append("    심방 기록 전체:")
            lines.append(format_visitation_full(m))
        else:
            lines.append(f"    심방 기록 요약: {format_visitation_summary(m)}")
    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(description="교인 목록을 프롬프트용 텍스트로 변환")
    parser.add_argument("--limit", type=int, default=None, help="앞에서부터 N명만 사용")
    parser.add_argument("--ids", type=str, default=None, help="쉼표로 구분한 특정 ID만 사용 (6자리 영숫자, 예: OhbVrp,bfnoGM)")
    parser.add_argument("--full-history", action="store_true", help="심방 기록을 요약 대신 전체 나열")
    parser.add_argument("--data", type=str, default=None,
                        help="사용할 교인 데이터 JSON 경로 (기본 data/congregation_300_3y.json)")
    args = parser.parse_args()

    data_path = args.data or DATA_PATH
    with open(data_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    members = data["members"]

    if args.ids:
        wanted = {s.strip() for s in args.ids.split(",") if s.strip()}
        members = [m for m in members if m["id"] in wanted]
    elif args.limit is not None:
        members = members[: args.limit]

    print(build_prompt_block(members, args.full_history))


if __name__ == "__main__":
    main()
