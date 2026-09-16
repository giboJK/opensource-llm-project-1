"""평가 세트 10개(각 50명)를 만듭니다.

STEP 5의 고정 문제 10개가 이 10개 명부입니다. 세트마다 정답이 심어져 있습니다.

- 반드시 top 10에 들어갈 5명: 시점이 적힌 경조사·수술·입원 기록
- 반드시 top 10에서 빠질 5명: 출석이 좋고 특이사항이 없으며 최근 심방을 다녀옴
- 나머지 40명: 가구 단위 무작위 (기존 생성기와 동일)

정답을 새로 만든 인물로 넣지 않고, 무작위로 생성된 인원 중 일부의 필드를 덮어쓰는 방식입니다.
가족관계와 기도제목이 그대로 남아 있어 심어 넣은 티가 나지 않습니다.

명부 파일에는 명부만 들어갑니다. 정답은 data/eval/answer_key.json 에 따로 나갑니다.
세트별로 시드가 고정돼 있어 다시 실행해도 같은 결과가 나옵니다.

실행:
    uv run scripts/generate_eval_sets.py
"""

import argparse
import json
import random
import sys
from datetime import timedelta
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

import generate_sample_congregation as G

ROOT = Path(__file__).parent.parent
OUT_DIR = ROOT / "data" / "eval"

SET_COUNT = 10
SET_SIZE = 50
BASE_SEED = 1000
UNKNOWN_RATIO = 0.10

# top 10 자리가 10개이므로 포함도 10명입니다. 그래야 정답이 완전해집니다.
# 5명만 정해두면 남는 5자리에 누가 와야 맞는지 정해진 게 없어 채점이 반쪽이 됩니다.
# 급성(최근 며칠~3주 사이 사건)과 만성(오래 밀린 일)을 반씩 섞어 시점 판단도 같이 봅니다.
INCLUDE_ACUTE = 5
INCLUDE_CHRONIC = 5
INCLUDE_PER_SET = INCLUDE_ACUTE + INCLUDE_CHRONIC
EXCLUDE_PER_SET = 5

# --- 반드시 top 10에 들어갈 교인에 덮어쓸 기록 ---
#
# 사실만 적습니다. "심방이 필요함", "우선순위 높음" 같은 판단을 적으면 모델이 명부에 적힌 답을
# 따라 읽게 되어 채점이 의미를 잃습니다.
#
# kind: 급성 = 최근 며칠~3주 사이에 일어난 일. 만성 = 오래 밀려 있는 일.
# attendance: 최근 8주 출석 주수 범위
# visit_months_back: 마지막 심방을 몇 달 전으로 둘지
# age_range / gender: 이 기록이 앞뒤가 맞는 대상 (88세에게 실직, 70세에게 출산이 붙지 않게)
INCLUDE_TEMPLATES = [
    # --- 급성 ---
    {"label": "지난주 부친상", "kind": "급성", "age_range": (25, 65),
     "health_note": "특이사항 없음", "family_event": "지난주 부친상",
     "special_note": "장례 이후 첫 예배 참석 예정", "attendance": (5, 8), "visit_months_back": (6, 18)},
    {"label": "지난주 모친상", "kind": "급성", "age_range": (25, 68),
     "health_note": "특이사항 없음", "family_event": "지난주 모친상",
     "special_note": "장례 절차로 최근 2주간 연락이 어려웠음", "attendance": (4, 8), "visit_months_back": (6, 18)},
    {"label": "2주 전 배우자 별세", "kind": "급성", "age_range": (48, 92),
     "health_note": "특이사항 없음", "family_event": "2주 전 배우자 별세",
     "special_note": "혼자 지내게 되어 식사를 거르는 날이 많다고 함", "attendance": (3, 7), "visit_months_back": (6, 20)},
    {"label": "3주 전 본인 수술", "kind": "급성", "age_range": (25, 90),
     "health_note": "3주 전 수술, 현재 재활 중", "family_event": "본인 수술",
     "special_note": "회복 중이라 거동이 불편함", "attendance": (0, 3), "visit_months_back": (5, 15)},
    {"label": "3주 전 배우자 수술", "kind": "급성", "age_range": (35, 90),
     "health_note": "본인 특이사항 없음", "family_event": "3주 전 배우자 수술",
     "special_note": "본인이 아니라 배우자 간병 부담이 큰 상황", "attendance": (0, 2), "visit_months_back": (6, 18)},
    {"label": "2주 전 출산", "kind": "급성", "age_range": (24, 42), "gender": "여",
     "health_note": "특이사항 없음", "family_event": "2주 전 출산",
     "special_note": "산후 회복 중, 외부 방문보다 전화 연락을 선호할 수 있음", "attendance": (0, 3), "visit_months_back": (4, 12)},
    {"label": "지난주 응급실 이송", "kind": "급성", "age_range": (45, 95),
     "health_note": "지난주 응급실 이송 후 입원 중", "family_event": "없음",
     "special_note": "입원 기간이 얼마나 될지 아직 정해지지 않음", "attendance": (1, 4), "visit_months_back": (5, 16)},
    {"label": "2주 전 자녀 교통사고", "kind": "급성", "age_range": (30, 62),
     "health_note": "특이사항 없음", "family_event": "2주 전 자녀 교통사고",
     "special_note": "자녀가 입원해 병원에서 지내는 날이 많음", "attendance": (0, 3), "visit_months_back": (5, 16)},

    # --- 만성 ---
    {"label": "요양병원 장기 입원", "kind": "만성", "age_range": (65, 95),
     "health_note": "요양병원 입원 중", "family_event": "없음",
     "special_note": "장기 입원으로 공동체와 접촉이 거의 끊긴 상태", "attendance": (0, 0), "visit_months_back": (9, 22)},
    {"label": "낙상 후 자택 요양", "kind": "만성", "age_range": (60, 95),
     "health_note": "지난달 낙상으로 입원, 현재 자택 요양 중", "family_event": "없음",
     "special_note": "거동이 불편해 혼자 예배 참석이 어려움", "attendance": (0, 2), "visit_months_back": (8, 20)},
    {"label": "격주 투석", "kind": "만성", "age_range": (40, 90),
     "health_note": "만성 신장질환으로 격주 투석 중", "family_event": "없음",
     "special_note": "체력 저하로 예배 참석이 점차 줄고 있음", "attendance": (1, 3), "visit_months_back": (10, 24)},
    {"label": "출석 0회, 연락 두절", "kind": "만성", "age_range": (20, 65),
     "health_note": "특이사항 없음", "family_event": "없음",
     "special_note": "연락이 잘 닿지 않음, 이유 불명", "attendance": (0, 0), "visit_months_back": (9, 20)},
    {"label": "한 달 전 실직", "kind": "만성", "age_range": (26, 60),
     "health_note": "특이사항 없음", "family_event": "한 달 전 실직",
     "special_note": "경제적 어려움을 최근 대화 중 언급함", "attendance": (2, 6), "visit_months_back": (7, 19)},
    {"label": "항암 통원 치료", "kind": "만성", "age_range": (35, 85),
     "health_note": "항암 치료로 통원 중", "family_event": "없음",
     "special_note": "치료 일정이 있는 주에는 참석이 어렵다고 함", "attendance": (1, 4), "visit_months_back": (8, 20)},
    {"label": "거동 불편으로 외출 어려움", "kind": "만성", "age_range": (55, 95),
     "health_note": "무릎 관절염으로 보행이 어려움", "family_event": "없음",
     "special_note": "예배당 계단을 오르기 어려워 참석이 줄었다고 함", "attendance": (0, 3), "visit_months_back": (9, 22)},
    {"label": "두 달째 발길 끊음", "kind": "만성", "age_range": (20, 70),
     "health_note": "특이사항 없음", "family_event": "없음",
     "special_note": "두 달째 예배에 나오지 않고 있음", "attendance": (0, 1), "visit_months_back": (10, 24)},
]

# --- 반드시 top 10에서 빠질 교인에 덮어쓸 기록 ---
EXCLUDE_TEMPLATES = [
    {"label": "만근, 특이사항 없음",
     "special_note": "특이사항 없음", "attendance": (8, 8), "visit_months_back": (1, 3)},
    {"label": "만근, 봉사 참여",
     "special_note": "정기적으로 봉사에 참여, 최근 특별한 이슈 없음", "attendance": (8, 8), "visit_months_back": (1, 3)},
    {"label": "7주 출석, 특이사항 없음",
     "special_note": "특이사항 없음", "attendance": (7, 7), "visit_months_back": (1, 4)},
    {"label": "만근, 요청 사항 없음",
     "special_note": "특별한 요청 사항 없음", "attendance": (8, 8), "visit_months_back": (2, 4)},
    {"label": "7주 출석, 봉사팀 활동",
     "special_note": "봉사팀에서 활동 중", "attendance": (7, 8), "visit_months_back": (1, 3)},
]


def build_members(size: int, seed: int) -> list:
    """가구 단위로 size명을 만듭니다 (기존 생성기와 같은 방식, 커리티드 인물은 빼고)."""
    random.seed(seed)
    members: list = []
    relations: list = []
    while len(members) < size:
        remaining = size - len(members)
        hh_members, hh_relations = G.pick_household_generator()()
        if len(hh_members) > remaining:
            hh_members = hh_members[:remaining]
            hh_relations = [(i, j, r) for (i, j, r) in hh_relations
                            if i < len(hh_members) and j < len(hh_members)]
        offset = len(members)
        members.extend(hh_members)
        for i, j, rel in hh_relations:
            relations.append((i + offset, j + offset, rel))

    ids = G.make_member_ids(len(members), seed)
    for m, mid in zip(members, ids):
        m["id"] = mid

    family_lists = [[] for _ in members]
    for i, j, rel in relations:
        family_lists[i].append({"member_id": ids[j], "name": members[j]["name"], "relation": rel})
    for idx, m in enumerate(members):
        m["family"] = family_lists[idx]
        m["family_note"] = "" if m["family"] else "정보 없음"

    earliest = G.TODAY - timedelta(days=365 * G.HISTORY_YEARS)
    for m in members:
        prayers = G.generate_prayer_requests(earliest, m["age"], m["gender"], m["faith_years"])
        m["prayer_requests"] = prayers
        m["visitation_records"] = G.generate_visitation_records(m["last_visitation_date"], prayers)
        m["community_history"] = G.generate_community_history(m["age"], m["faith_years"])
    return members


def is_adult(m: dict) -> bool:
    return m["age"] >= 20 and m["faith_years"] != "해당없음(자녀)"


def is_blank(m: dict) -> bool:
    """기록이 거의 비어 있는 '정보 부족' 교인인지."""
    return not m["prayer_requests"] and not m["visitation_records"]


def fits(m: dict, tpl: dict) -> bool:
    """이 인물에게 이 기록을 붙여도 앞뒤가 맞는지."""
    lo, hi = tpl.get("age_range", (20, 99))
    if not lo <= m["age"] <= hi:
        return False
    want = tpl.get("gender")
    return want is None or m["gender"] == want


def plant(m: dict, tpl: dict, rng: random.Random, is_include: bool) -> None:
    """무작위로 만들어진 인물의 기록을 템플릿으로 덮어씁니다.

    심는 대상은 성인만 고릅니다. 아동에게 "봉사 참여" 같은 비고가 붙으면 앞뒤가 안 맞고,
    아동을 제외 대상으로 넣으면 나이만 보고도 걸러져 판정이 쉬워집니다.
    """
    weeks = rng.randint(*tpl["attendance"])
    m["recent_attendance"] = f"최근 8주 중 {weeks}주 출석"
    if is_include:
        m["health_note"] = tpl["health_note"]
        m["family_event"] = tpl["family_event"]
    else:
        m["health_note"] = "특이사항 없음"
        m["family_event"] = "없음"
    m["special_note"] = tpl["special_note"]

    lo, hi = tpl["visit_months_back"]
    days = rng.randint(lo * 30, hi * 30)
    last_visit = (G.TODAY - timedelta(days=days)).isoformat()
    m["last_visitation_date"] = last_visit
    m["visitation_records"] = G.generate_visitation_records(last_visit, m["prayer_requests"])


def build_set(index: int) -> tuple:
    seed = BASE_SEED + index
    rng = random.Random(seed)
    members = build_members(SET_SIZE, seed)

    # 기록이 거의 비어 있는 교인을 먼저 만들고, 정답은 그 바깥에서 고릅니다.
    random.seed(seed + 500)
    G.apply_unknown_members(members, UNKNOWN_RATIO, curated_count=0)

    pool_adult = [i for i, m in enumerate(members) if is_adult(m) and not is_blank(m)]
    rng.shuffle(pool_adult)

    used: set = set()
    answer = {"must_include": [], "must_exclude": []}

    for kind, need in (("급성", INCLUDE_ACUTE), ("만성", INCLUDE_CHRONIC)):
        order = [t for t in INCLUDE_TEMPLATES if t["kind"] == kind]
        rng.shuffle(order)
        placed = 0
        for tpl in order:
            if placed == need:
                break
            pick = next((i for i in pool_adult if i not in used and fits(members[i], tpl)), None)
            if pick is None:
                continue
            used.add(pick)
            plant(members[pick], tpl, rng, is_include=True)
            answer["must_include"].append({"id": members[pick]["id"], "name": members[pick]["name"],
                                           "case": tpl["label"], "kind": kind})
            placed += 1
        if placed < need:
            raise RuntimeError(
                f"set{index:02d}: {kind} 조건에 맞는 인물이 부족해 {need}명을 못 채웠습니다 ({placed}명)")

    exclude_idx = [i for i in pool_adult if i not in used][:EXCLUDE_PER_SET]
    if len(exclude_idx) < EXCLUDE_PER_SET:
        raise RuntimeError(f"set{index:02d}: 제외 대상으로 쓸 성인이 부족합니다")
    for i, tpl in zip(exclude_idx, rng.sample(EXCLUDE_TEMPLATES, EXCLUDE_PER_SET)):
        plant(members[i], tpl, rng, is_include=False)
        answer["must_exclude"].append({"id": members[i]["id"], "name": members[i]["name"],
                                       "case": tpl["label"]})

    rng.shuffle(members)

    field_order = [
        "id", "name", "age", "gender", "faith_years", "last_visitation_date",
        "recent_attendance", "health_note", "family_event", "special_note",
        "family", "family_note", "prayer_requests", "visitation_records", "community_history",
    ]
    ordered = [{k: m[k] for k in field_order} for m in members]
    return ordered, answer


def parse_args():
    p = argparse.ArgumentParser(description="평가 세트 10개(각 50명) 생성")
    p.add_argument("--sets", type=int, default=SET_COUNT, help=f"세트 개수 (기본 {SET_COUNT})")
    p.add_argument("--size", type=int, default=SET_SIZE, help=f"세트당 인원 (기본 {SET_SIZE})")
    p.add_argument("--out-dir", type=Path, default=OUT_DIR, help="출력 폴더 (기본 data/eval)")
    return p.parse_args()


def main():
    global SET_SIZE
    args = parse_args()
    SET_SIZE = args.size
    args.out_dir.mkdir(parents=True, exist_ok=True)

    G._used_names = set()
    key = {"sets": []}
    for n in range(1, args.sets + 1):
        members, answer = build_set(n)
        name = f"set{n:02d}"
        path = args.out_dir / f"{name}.json"
        with open(path, "w", encoding="utf-8") as f:
            json.dump({"communities": G.COMMUNITIES, "members": members}, f,
                      ensure_ascii=False, indent=2)
        blank = sum(1 for m in members if not m["prayer_requests"] and not m["visitation_records"])
        key["sets"].append({"set": name, "file": f"data/eval/{name}.json", **answer})
        print(f"{name}: {len(members)}명 (기록 부족 {blank}명) -> {path}")

    key_path = args.out_dir / "answer_key.json"
    with open(key_path, "w", encoding="utf-8") as f:
        json.dump(key, f, ensure_ascii=False, indent=2)
    print(f"정답 -> {key_path}")


if __name__ == "__main__":
    main()
