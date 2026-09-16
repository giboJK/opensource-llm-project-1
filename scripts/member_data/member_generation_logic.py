"""가상 교인 한 명을 만드는 로직 모음 (전부 합성 데이터, 실제 인물과 무관).

직접 실행하는 파일이 아닙니다. sample_member_generator.py 가 이 함수들을 가져다
평가 세트를 조립합니다.

가구 단위로 사람을 만듭니다. 1인 가구, 부부, 자녀가 있는 가정, 3대가 함께인 가정을
확률로 섞어 뽑고, 그 안에서 배우자·자녀·부모·조부모를 서로 연결합니다.

사람마다 붙는 것
    prayer_requests      기도제목. 나이와 성별에 맞는 주제만, 1인당 평균 6개(최소 0, 최대 15)
    visitation_records   심방 기록. last_visitation_date 에서 평균 약 3개월 간격으로 역산
    community_history    소속 공동체. 연도별 0~2개(무소속 가능), 만 4세부터
    family / family_note 세트 안의 가족관계, 없으면 사유

앞뒤가 맞도록 거는 제약
    - 건강·경조사·비고는 나이를 봅니다. 7세에게 "자녀 결혼"이 붙지 않습니다.
    - 소속 이력과 기도제목 등록일은 신앙 연차를 넘지 않습니다.
    - 비고란에는 그 사람에 대한 사실만 적습니다. 판단이나 지시는 넣지 않습니다.
      "심방 필요" 같은 문구가 들어가면 모델이 명부에 적힌 답을 따라 읽게 되어
      채점이 의미를 잃습니다.

일부는 담당자 입력이 빠진 '정보 부족' 교인으로 만듭니다. 실제 교회 명부를 재현한 것입니다.
"""

import random
import string
from datetime import date, timedelta

RANDOM_SEED = 42
TODAY = date(2026, 9, 14)
HISTORY_YEARS = 3  # 심방 기록 / 소속 이력 모두 최근 3년 기준
UNKNOWN_RATIO = 0.10  # 기록이 거의 비어 있는 '정보 부족' 교인 비율 (권장 0.08~0.12)

SURNAMES = list("김이박최정강조윤장임한오신권황안송전홍유고문양손배백")
GIVEN_SYLLABLES = list(
    "민서도지하유시준우현아은율채훈호재연원진경선영수빈솔담결온율"
    "규태건우진서윤아름결이재하람로하나엘결가온다인"
)

# (문구, 붙을 수 있는 최소 나이).
#
# 나이를 안 보고 뽑으면 7세에게 "자녀 결혼", 2세에게 "손주 출생"이 붙습니다. 말이 안 되는
# 기록이 명부에 섞이면 모델이 헷갈리고 채점 결과도 그만큼 흐려집니다.
HEALTH_NOTES = [
    ("특이사항 없음", 0), ("특이사항 없음", 0), ("특이사항 없음", 0), ("특이사항 없음", 0),
    ("만성 질환으로 정기 검진 중", 0),
    ("알레르기로 병원 통원 중", 0),
    ("최근 골절로 깁스 중", 6),
    ("가벼운 우울감을 호소함", 14),
    ("최근 무릎 수술 후 재활 중", 18),
    ("당뇨 관리 중", 20),
    ("최근 건강검진에서 이상 소견 발견", 20),
    ("고혈압으로 정기 통원 중", 30),
]
FAMILY_EVENTS = [
    ("없음", 0), ("없음", 0), ("없음", 0), ("없음", 0), ("없음", 0),
    ("최근 이사", 0),
    ("반려동물 사망", 0),
    ("동생이 태어남", 0),
    ("가족 간 갈등을 최근 언급함", 12),
    ("배우자 별세", 35),
    ("자녀 입시로 가정 내 스트레스", 35),
    ("자녀 결혼", 45),
    ("손주 출생", 45),
]
SPECIAL_NOTES = [
    ("특이사항 없음", 0), ("특이사항 없음", 0), ("특이사항 없음", 0), ("특이사항 없음", 0),
    ("장기 결석 중, 사유 확인 필요", 0),
    ("타 지역 이주 예정", 0),
    ("연락처가 최근 변경됨", 18),
    ("최근 새신자로 등록", 18),
    ("봉사팀 리더로 활동 중", 22),
]

# 12세 이하용 비고. 사실만 적고 판단 지침은 넣지 않습니다.
CHILD_SPECIAL_NOTES = [
    ("보호자와 함께 출석", 0), ("보호자와 함께 출석", 0), ("보호자와 함께 출석", 0),
    ("교육부 소속으로 활동 중", 0), ("최근 출석이 줄어듦", 0), ("정보 없음", 0),
]

CHILD_NOTE_MAX_AGE = 12   # 이 나이 이하는 자녀용 비고를 씁니다
MIN_COMMUNITY_AGE = 4     # 이 나이부터 공동체에 소속됩니다


def pick_for_age(pool: list, age: int) -> str:
    """나이에 맞는 문구만 추려서 뽑습니다."""
    ok = [text for text, min_age in pool if age >= min_age]
    return random.choice(ok)

_used_names: set = set()


def random_name() -> str:
    for _ in range(50):
        name = random.choice(SURNAMES) + random.choice(GIVEN_SYLLABLES) + random.choice(GIVEN_SYLLABLES)
        if name not in _used_names:
            _used_names.add(name)
            return name
    name = random.choice(SURNAMES) + random.choice(GIVEN_SYLLABLES) + random.choice(GIVEN_SYLLABLES) + "2"
    _used_names.add(name)
    return name


def random_past_date_or_missing(max_months_back: int, missing_ratio: float) -> str:
    if random.random() < missing_ratio:
        return random.choice(["기록 없음", "정보 없음"])
    days_back = random.randint(7, max_months_back * 30)
    return (TODAY - timedelta(days=days_back)).isoformat()


def random_attendance(is_child: bool, missing_ratio: float = 0.08) -> str:
    if random.random() < missing_ratio:
        return "정보 없음"
    weeks = random.randint(0, 8)
    if is_child:
        return f"부모와 함께 최근 8주 중 {weeks}주 출석"
    return f"최근 8주 중 {weeks}주 출석"


def base_profile_fields(age: int, is_child: bool, force_insufficient: bool = False) -> dict:
    """가족 구조 생성용 공통 필드(신앙연차/심방일/출석/건강/경조사/비고)."""
    if is_child:
        faith_years = "해당없음(자녀)"
        last_visit = "해당없음"
    else:
        max_faith = max(0, age - 10)
        faith_years = random.randint(0, min(max_faith, 60))
        last_visit = random_past_date_or_missing(max_months_back=20, missing_ratio=0.12)

    if force_insufficient:
        return {
            "faith_years": faith_years,
            "last_visitation_date": "정보 없음",
            "recent_attendance": "정보 없음",
            "health_note": "정보 없음",
            "family_event": "정보 없음",
            "special_note": "정보 없음",
        }

    # 자녀에게는 상태를 서술하는 문구만 붙입니다. "보호자 기준으로 판단하라" 같은 안내 문구를
    # 넣으면 모델이 판단하는 대신 문서에 적힌 지시를 따라 읽게 되어 채점이 무의미해집니다.
    #
    # 어느 풀을 쓸지는 is_child 가 아니라 나이로 정합니다. 가구 생성기마다 is_child 기준이
    # 달라(13세 미만) 13~18세가 성인 풀을 쓰면서 "최근 새신자로 등록"이 붙는 일이 있었습니다.
    note_pool = CHILD_SPECIAL_NOTES if age <= CHILD_NOTE_MAX_AGE else SPECIAL_NOTES
    special_note = pick_for_age(note_pool, age)
    if special_note == "최근 새신자로 등록":
        faith_years = random.choice([0, 0, 1])

    return {
        "faith_years": faith_years,
        "last_visitation_date": last_visit,
        "recent_attendance": random_attendance(is_child),
        "health_note": pick_for_age(HEALTH_NOTES, age),
        "family_event": pick_for_age(FAMILY_EVENTS, age),
        "special_note": special_note,
    }


# --- 가구(household) 생성기 ---
# 각 생성기는 (members, relations)를 반환합니다.
#   members: [{"name":..,"age":..,"gender":..,**base_profile_fields()}, ...] (household 내 로컬 인덱스 순서)
#   relations: [(i, j, "i가 j에게 갖는 관계"), ...]  (양방향 모두 명시)

def make_single_household() -> tuple[list, list]:
    age = random.randint(19, 90)
    gender = random.choice(["남", "여"])
    is_insufficient = random.random() < 0.08
    m = {"name": random_name(), "age": age, "gender": gender, **base_profile_fields(age, False, is_insufficient)}
    return [m], []


def make_couple_household() -> tuple[list, list]:
    age1 = random.randint(27, 85)
    age2 = max(19, age1 + random.randint(-6, 6))
    g1, g2 = random.sample(["남", "여"], 2)
    m1 = {"name": random_name(), "age": age1, "gender": g1, **base_profile_fields(age1, False)}
    m2 = {"name": random_name(), "age": age2, "gender": g2, **base_profile_fields(age2, False)}
    relations = [(0, 1, "배우자"), (1, 0, "배우자")]
    return [m1, m2], relations


def _child_to_parent_relation(parent_gender: str) -> str:
    return "아버지" if parent_gender == "남" else "어머니"


def make_family_household(n_children: int | None = None) -> tuple[list, list]:
    age1 = random.randint(28, 55)
    age2 = max(24, age1 + random.randint(-5, 5))
    g1, g2 = random.sample(["남", "여"], 2)
    parent1 = {"name": random_name(), "age": age1, "gender": g1, **base_profile_fields(age1, False)}
    parent2 = {"name": random_name(), "age": age2, "gender": g2, **base_profile_fields(age2, False)}
    members = [parent1, parent2]
    relations = [(0, 1, "배우자"), (1, 0, "배우자")]

    if n_children is None:
        n_children = random.choice([1, 1, 2, 2, 3])
    max_child_age = max(0, min(age1, age2) - 20)
    for _ in range(n_children):
        c_age = random.randint(0, max(0, min(max_child_age, 19)))
        c_gender = random.choice(["남", "여"])
        is_child = c_age < 13
        child = {"name": random_name(), "age": c_age, "gender": c_gender,
                 **base_profile_fields(c_age, is_child)}
        idx = len(members)
        members.append(child)
        relations.append((0, idx, "자녀"))
        relations.append((idx, 0, _child_to_parent_relation(g1)))
        relations.append((1, idx, "자녀"))
        relations.append((idx, 1, _child_to_parent_relation(g2)))
    return members, relations


def make_single_parent_household() -> tuple[list, list]:
    p_age = random.randint(28, 60)
    p_gender = random.choice(["남", "여"])
    parent = {"name": random_name(), "age": p_age, "gender": p_gender, **base_profile_fields(p_age, False)}
    members = [parent]
    relations = []
    n_children = random.choice([1, 1, 2])
    max_child_age = max(0, p_age - 20)
    for _ in range(n_children):
        c_age = random.randint(0, max(0, min(max_child_age, 19)))
        c_gender = random.choice(["남", "여"])
        is_child = c_age < 13
        child = {"name": random_name(), "age": c_age, "gender": c_gender,
                 **base_profile_fields(c_age, is_child)}
        idx = len(members)
        members.append(child)
        relations.append((0, idx, "자녀"))
        relations.append((idx, 0, _child_to_parent_relation(p_gender)))
    return members, relations


def make_three_generation_household() -> tuple[list, list]:
    # 조부모 1~2명 + 부모 부부 + 자녀 1~2명
    fam_members, fam_relations = make_family_household(n_children=random.choice([1, 1, 2]))
    n_grandparents = random.choice([1, 2])
    gp_start = len(fam_members)
    for k in range(n_grandparents):
        gp_age = random.randint(65, 90)
        gp_gender = "남" if k == 0 else "여"
        gp = {"name": random_name(), "age": gp_age, "gender": gp_gender, **base_profile_fields(gp_age, False)}
        idx = len(fam_members)
        fam_members.append(gp)
        # 부모(parent1=index 0)의 부모로 연결
        fam_relations.append((0, idx, _child_to_parent_relation(gp_gender)))
        fam_relations.append((idx, 0, "자녀"))
        # 자녀들과는 조부모<->손주 관계
        for i, m in enumerate(fam_members[:gp_start]):
            if i >= 2:  # 자녀 인덱스만 (0,1은 부모 부부)
                grandchild_rel = "손자" if m["gender"] == "남" else "손녀"
                fam_relations.append((idx, i, grandchild_rel))
                fam_relations.append((i, idx, "할아버지" if gp_gender == "남" else "할머니"))
    return fam_members, fam_relations


HOUSEHOLD_GENERATORS = [
    (make_single_household, 0.30),
    (make_couple_household, 0.20),
    (make_family_household, 0.30),
    (make_single_parent_household, 0.10),
    (make_three_generation_household, 0.10),
]


def pick_household_generator():
    r = random.random()
    acc = 0.0
    for gen, weight in HOUSEHOLD_GENERATORS:
        acc += weight
        if r <= acc:
            return gen
    return HOUSEHOLD_GENERATORS[0][0]


COMMUNITIES = {
    "교육부": ["유치부", "초등부", "중고등부", "대학청년부"],
    "행정부": ["재정팀", "홍보팀", "시설관리팀", "서기팀"],
    "봉사부": ["주방봉사팀", "안내팀", "찬양팀", "미디어팀"],
}
EDUCATION_BY_AGE = [
    (0, 6, "유치부"),
    (7, 12, "초등부"),
    (13, 18, "중고등부"),
    (19, 29, "대학청년부"),
]
NON_EDUCATION_COMMUNITIES = [
    (dept, name) for dept, names in COMMUNITIES.items() if dept != "교육부" for name in names
]

# --- 기도제목 ---
PRAYER_TOPICS = [
    "건강 회복", "가족 관계 회복", "자녀 신앙 성장", "취업/이직", "시험 합격",
    "재정적 어려움 해결", "결혼/배우자를 위한 기도", "임신과 순산", "우울감 극복",
    "직장 내 어려움", "관계 회복(친구/가족)", "부모님 건강", "자녀 진로 결정",
    "이사/거주 문제", "질병 치유 감사", "선교지를 위한 기도", "교회 공동체를 위한 기도",
    "학업 성취", "군 복무 중인 자녀", "은퇴 후 삶에 대한 인도하심",
]
PRAYER_STATUS_CHOICES = ["진행 중"] * 6 + ["응답됨"] * 3 + ["계속 기도 중"] * 1

# 기도제목별 (최소 나이, 최대 나이, 성별). 나이에 맞지 않는 제목이 붙지 않게 거릅니다
# (예: 29세에게 "군 복무 중인 자녀", 8세에게 "취업/이직").
PRAYER_TOPIC_RULES = {
    "취업/이직": (20, 70, None),
    "시험 합격": (8, 40, None),
    "학업 성취": (7, 30, None),
    "직장 내 어려움": (20, 70, None),
    "결혼/배우자를 위한 기도": (20, 60, None),
    "임신과 순산": (20, 45, "여"),
    "자녀 신앙 성장": (25, 99, None),
    "자녀 진로 결정": (35, 75, None),
    "군 복무 중인 자녀": (40, 80, None),
    "부모님 건강": (10, 70, None),
    "은퇴 후 삶에 대한 인도하심": (55, 99, None),
    "재정적 어려움 해결": (20, 99, None),
    "이사/거주 문제": (20, 99, None),
    "우울감 극복": (13, 99, None),
    "가족 관계 회복": (13, 99, None),
    "관계 회복(친구/가족)": (8, 99, None),
    "선교지를 위한 기도": (13, 99, None),
}


def topics_for(age: int, gender: str) -> list:
    """나이/성별에 맞는 기도제목만 추립니다."""
    out = []
    for t in PRAYER_TOPICS:
        lo, hi, g = PRAYER_TOPIC_RULES.get(t, (0, 99, None))
        if lo <= age <= hi and (g is None or g == gender):
            out.append(t)
    return out or ["건강 회복", "교회 공동체를 위한 기도"]

# --- 심방 기록 요약 문구 ---
VISIT_SUMMARIES = [
    "안부 인사와 근황을 나눔", "최근 건강 상태를 확인함", "기도제목을 나누고 함께 기도함",
    "가정 형편에 대해 이야기함", "신앙생활에 대해 격려함", "자녀 양육에 대한 고민을 나눔",
    "최근 겪은 어려움에 대해 위로함", "감사한 일들을 함께 나눔",
    "공동체 참여에 대해 이야기함", "특별한 이슈 없이 짧게 인사만 나눔",
]

NO_RECORD_VALUES = {"정보 없음", "기록 없음", "심방 기록 없음", "해당없음", "해당없음(자녀)"}


def generate_prayer_requests(earliest_date: date, age: int = 40, gender: str = "여",
                             faith_years=99) -> list:
    """인원당 평균 6개(최소 0, 최대 15) 기도제목을 생성합니다 (나이/성별에 맞는 주제만).

    등록일은 신앙 연차를 넘어가지 않습니다(신앙 1년차에게 3년 전 기도제목이 붙는 모순 방지)."""
    count = round(random.triangular(0, 15, 3))  # mean = (0+15+3)/3 = 6
    count = max(0, min(15, count))
    topics = topics_for(age, gender)
    years_known = faith_years if isinstance(faith_years, int) else 99
    joined = TODAY - timedelta(days=365 * max(0, years_known))
    earliest_date = max(earliest_date, joined)
    span_days = max(1, (TODAY - earliest_date).days)
    requests = []
    for i in range(count):
        added = earliest_date + timedelta(days=random.randint(0, span_days))
        requests.append({
            "id": f"p{i + 1:02d}",
            "content": random.choice(topics),
            "added_date": added.isoformat(),
            "status": random.choice(PRAYER_STATUS_CHOICES),
        })
    requests.sort(key=lambda r: r["added_date"])
    return requests


def generate_visitation_records(last_visit_value, prayer_requests: list) -> list:
    """last_visitation_date를 마지막 기록으로 삼아, 평균 약 90일(3달) 간격으로
    과거로 역산하며 최근 HISTORY_YEARS년치 심방 기록을 만듭니다."""
    if last_visit_value in NO_RECORD_VALUES:
        return []
    try:
        last_date = date.fromisoformat(last_visit_value)
    except ValueError:
        return []

    earliest = last_date - timedelta(days=365 * HISTORY_YEARS)
    dates = [last_date]
    cursor = last_date
    while True:
        gap = random.randint(60, 120)  # 평균 90일 (3달)에 한 번
        cursor = cursor - timedelta(days=gap)
        if cursor < earliest:
            break
        dates.append(cursor)
    dates.sort()

    records = []
    for d in dates:
        eligible = [p for p in prayer_requests if p["added_date"] <= d.isoformat()]
        n_discussed = min(len(eligible), random.choice([0, 0, 1, 1, 2]))
        discussed = random.sample(eligible, n_discussed) if n_discussed else []
        records.append({
            "date": d.isoformat(),
            "summary": random.choice(VISIT_SUMMARIES),
            "prayer_requests_discussed": [p["id"] for p in discussed],
        })
    return records


def _education_community_for_age(age: int) -> str | None:
    for lo, hi, name in EDUCATION_BY_AGE:
        if lo <= age <= hi:
            return name
    return None


def generate_community_history(current_age: int, faith_years=99) -> list:
    """최근 HISTORY_YEARS개년 각각에 대해 0~2개(무소속 가능)의 소속 공동체를 배정합니다.

    신앙 연차보다 오래된 해에는 소속 이력을 만들지 않습니다
    (예: 지난주에 처음 온 사람에게 3년치 소속 이력이 붙는 모순 방지).

    MIN_COMMUNITY_AGE 미만인 해에도 만들지 않습니다. 그러지 않으면 2세에게 3년치 유치부
    소속 이력이 붙습니다."""
    birth_year_est = TODAY.year - current_age
    years = [TODAY.year - (HISTORY_YEARS - 1) + i for i in range(HISTORY_YEARS)]
    # faith_years는 "해당없음(자녀)" 처럼 문자열일 수 있어 숫자일 때만 제약으로 씁니다
    years_known = faith_years if isinstance(faith_years, int) else 99
    first_year = TODAY.year - max(0, years_known) + 1
    history = []
    for year in years:
        age_in_year = year - birth_year_est
        if age_in_year < MIN_COMMUNITY_AGE or year < first_year:
            history.append({"year": year, "affiliations": []})
            continue

        edu_community = _education_community_for_age(age_in_year)
        affiliations = []

        if edu_community is not None:
            # 미취학~대학청년부 나이는 대체로 교육부 소속, 가끔 무소속
            if random.random() < 0.85:
                affiliations.append({"department": "교육부", "community": edu_community})
            # 청년부 나이대는 봉사부에도 추가로 속할 수 있음
            if edu_community == "대학청년부" and random.random() < 0.3:
                dept, name = random.choice(NON_EDUCATION_COMMUNITIES)
                affiliations.append({"department": dept, "community": name})
        else:
            if random.random() < 0.75:  # 나머지 성인은 대부분 행정부/봉사부 중 1개 이상
                dept, name = random.choice(NON_EDUCATION_COMMUNITIES)
                affiliations.append({"department": dept, "community": name})
                if random.random() < 0.25:  # 최대 2개까지 중복 소속 가능
                    dept2, name2 = random.choice(NON_EDUCATION_COMMUNITIES)
                    if (dept2, name2) != (dept, name):
                        affiliations.append({"department": dept2, "community": name2})

        history.append({"year": year, "affiliations": affiliations})
    return history


ID_ALPHABET = string.ascii_letters + string.digits  # 영문 대소문자 + 숫자 (62자)
ID_LENGTH = 6


def make_member_ids(count: int, seed: int) -> list:
    """영문 대소문자와 숫자를 섞은 6자리 ID를 count개 만듭니다 (중복 없음).

    순번이 드러나는 m001 같은 ID는 실제 교인 번호처럼 보이지 않고, 앞에 있는 사람이
    먼저 등록된 사람이라는 정보까지 모델에게 알려 줍니다. 전용 난수기를 따로 쓰기 때문에
    인원수(300/500/1000)가 달라져도 앞쪽 인물의 ID는 같게 나옵니다.
    """
    rng = random.Random(seed)
    seen, ids = set(), []
    while len(ids) < count:
        mid = "".join(rng.choice(ID_ALPHABET) for _ in range(ID_LENGTH))
        if mid in seen:
            continue
        seen.add(mid)
        ids.append(mid)
    return ids


UNKNOWN_BASE_FIELDS = ["health_note", "family_event", "special_note", "last_visitation_date"]


def apply_unknown_members(all_members: list, ratio: float, curated_count: int = 0) -> list:
    """기록이 거의 비어 있는 '정보 부족' 교인을 비율만큼 만듭니다.

    실제 교회 명부에서 담당자 입력이 빠진 성도를 재현한 것입니다. 두 단계로 나눕니다.
      - 전면 미기재: 출석까지 포함해 판단 근거가 전부 "정보 없음"
      - 기본만 있음: 출석 기록만 남고 건강/경조사/비고/심방/기도제목/소속은 비어 있음

    curated_count 는 앞에서부터 기본 필드를 건드리지 않을 인원 수입니다. 기본값 0 이면
    전원이 대상입니다.
    """
    # 가구 생성 단계에서 이미 기본 정보가 비어 있는 인물도 같은 코호트로 묶습니다
    # (출석은 "정보 없음"인데 기도제목만 잔뜩 있는 앞뒤 안 맞는 상태를 막습니다).
    forced = [i for i, m in enumerate(all_members)
              if i >= curated_count and m["recent_attendance"] == "정보 없음"]
    forced = sorted(set(forced))
    target = round(len(all_members) * ratio)
    pool = [i for i in range(curated_count, len(all_members)) if i not in set(forced)]
    extra = max(0, target - len(forced))
    chosen = forced + random.sample(pool, min(extra, len(pool)))

    for idx in chosen:
        m = all_members[idx]
        m["prayer_requests"] = []
        m["visitation_records"] = []
        m["community_history"] = []
        if idx < curated_count:
            continue  # 커리티드 인물은 기본 필드를 그대로 둡니다
        for f in UNKNOWN_BASE_FIELDS:
            m[f] = "정보 없음"
        if random.random() < 0.5:  # 절반은 출석 기록마저 없음
            m["recent_attendance"] = "정보 없음"
        if not m["family"]:
            m["family_note"] = "정보 없음"
    return sorted(all_members[i]["id"] for i in chosen)
