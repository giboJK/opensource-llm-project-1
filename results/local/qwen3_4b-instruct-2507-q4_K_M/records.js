// 실험 원본 기록입니다. 집계값은 들어 있지 않습니다.
// report.html 이 열릴 때 이 값을 읽어 직접 계산해 그립니다.

window.REPORT_META = {
  "title": "STEP 6 결과",
  "task": "교인 명부 50명을 읽고 다음 7일 심방 대상 top 10을 순위와 근거로 뽑기",
  "model": "qwen3:4b-instruct-2507-q4_K_M",
  "run_at": "2026-09-16 13:55",
  "source": "step6_20260916_135505.jsonl",
  "rerun": "uv run scripts/03_step6_run.py --models qwen3:4b-instruct-2507-q4_K_M",
  "generated_at": "2026-09-16T15:41:43"
};
window.RECORDS = [
  {
    "phase": "main",
    "run_at": "2026-09-16T13:55:26",
    "model": "qwen3:4b-instruct-2507-q4_K_M",
    "set": "set01",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 15152,
    "perf": {
      "elapsed_sec": 10.7,
      "load_sec": 0.0,
      "tokens_per_sec": 68.8,
      "speed_note": null,
      "prompt_eval_count": 10747,
      "eval_count": 737,
      "total_duration_ns": 10742466800,
      "load_duration_ns": 3078600,
      "prompt_eval_duration_ns": 18387000,
      "eval_duration_ns": 10710161000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: HLxEbU -> 양인은",
        "이름 불일치: GcQ3Ze -> 손서가"
      ],
      "hit_include": 3,
      "include_total": 10,
      "miss_exclude": 2,
      "exclude_total": 5,
      "picked_ids": [
        "JYzftw",
        "P0qq1g",
        "3ncNfo",
        "Ehqs5A",
        "TV7FTS",
        "HLxEbU",
        "GcQ3Ze",
        "PQCjiM",
        "ehh5g7",
        "9UDb6k"
      ]
    },
    "answer": "{\"top10\": [{\"rank\": 1, \"id\": \"JYzftw\", \"name\": \"정름하\", \"reason\": \"가벼운 우울감을 호소하고 있으며, 최근 8주 중 1주 출석, 심방 기록 11회로 지속적인 관심이 필요하며, 기도제목에 우울감 극복이 포함되어 있음\"}, {\"rank\": 2, \"id\": \"P0qq1g\", \"name\": \"송서호\", \"reason\": \"최근 8주 중 8주 출석, 부모와 함께 출석하며, 최근 이사 후 가족 관계 회복 기도가 포함되어 있음\"}, {\"rank\": 3, \"id\": \"3ncNfo\", \"name\": \"황이시\", \"reason\": \"최근 8주 중 8주 출석, 자녀가 군 복무 중이며, 기도제목에 자녀 진로 결정과 군 복무 중인 자녀가 포함되어 있음\"}, {\"rank\": 4, \"id\": \"Ehqs5A\", \"name\": \"백온규\", \"reason\": \"최근 8주 중 2주 출석, 반려동물 사망 후 기도제목에 건강 회복이 포함되어 있음\"}, {\"rank\": 5, \"id\": \"TV7FTS\", \"name\": \"김나하\", \"reason\": \"최근 8주 중 3주 출석, 출산 후 산후 회복 중이며, 기도제목에 자녀 신앙 성장과 부모님 건강이 포함되어 있음\"}, {\"rank\": 6, \"id\": \"HLxEbU\", \"name\": \"양인은\", \"reason\": \"최근 8주 중 4주 출석, 무릎 수술 후 재활 중이며, 기도제목에 자녀 신앙 성장과 시험 합격이 포함되어 있음\"}, {\"rank\": 7, \"id\": \"GcQ3Ze\", \"name\": \"손서가\", \"reason\": \"최근 8주 중 1주 출석, 3주 전 수술 후 재활 중이며, 기도제목에 재정적 어려움 해결이 포함되어 있음\"}, {\"rank\": 8, \"id\": \"PQCjiM\", \"name\": \"조수경\", \"reason\": \"최근 8주 중 8주 출석, 자녀가 3명 있으며, 기도제목에 자녀 진로 결정과 가족 관계 회복이 포함되어 있음\"}, {\"rank\": 9, \"id\": \"ehh5g7\", \"name\": \"오서엘\", \"reason\": \"최근 8주 중 7주 출석, 최근 새신자로 등록되었으며, 기도제목에 관계 회복과 자녀 진로 결정이 포함되어 있음\"}, {\"rank\": 10, \"id\": \"9UDb6k\", \"name\": \"임우아\", \"reason\": \"최근 8주 중 3주 출석, 항암 치료 중이며, 기도제목에 재정적 어려움 해결과 관계 회복이 포함되어 있음\"}]}",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T13:55:37",
    "model": "qwen3:4b-instruct-2507-q4_K_M",
    "set": "set01",
    "attempt": 2,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 15152,
    "perf": {
      "elapsed_sec": 10.8,
      "load_sec": 0.0,
      "tokens_per_sec": 68.6,
      "speed_note": null,
      "prompt_eval_count": 10747,
      "eval_count": 737,
      "total_duration_ns": 10774185500,
      "load_duration_ns": 3547600,
      "prompt_eval_duration_ns": 18540000,
      "eval_duration_ns": 10739038000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: HLxEbU -> 양인은",
        "이름 불일치: GcQ3Ze -> 손서가"
      ],
      "hit_include": 3,
      "include_total": 10,
      "miss_exclude": 2,
      "exclude_total": 5,
      "picked_ids": [
        "JYzftw",
        "P0qq1g",
        "3ncNfo",
        "Ehqs5A",
        "TV7FTS",
        "HLxEbU",
        "GcQ3Ze",
        "PQCjiM",
        "ehh5g7",
        "9UDb6k"
      ]
    },
    "answer": "{\"top10\": [{\"rank\": 1, \"id\": \"JYzftw\", \"name\": \"정름하\", \"reason\": \"가벼운 우울감을 호소하고 있으며, 최근 8주 중 1주 출석, 심방 기록 11회로 지속적인 관심이 필요하며, 기도제목에 우울감 극복이 포함되어 있음\"}, {\"rank\": 2, \"id\": \"P0qq1g\", \"name\": \"송서호\", \"reason\": \"최근 8주 중 8주 출석, 부모와 함께 출석하며, 최근 이사 후 가족 관계 회복 기도가 포함되어 있음\"}, {\"rank\": 3, \"id\": \"3ncNfo\", \"name\": \"황이시\", \"reason\": \"최근 8주 중 8주 출석, 자녀가 군 복무 중이며, 기도제목에 자녀 진로 결정과 군 복무 중인 자녀가 포함되어 있음\"}, {\"rank\": 4, \"id\": \"Ehqs5A\", \"name\": \"백온규\", \"reason\": \"최근 8주 중 2주 출석, 반려동물 사망 후 기도제목에 건강 회복이 포함되어 있음\"}, {\"rank\": 5, \"id\": \"TV7FTS\", \"name\": \"김나하\", \"reason\": \"최근 8주 중 3주 출석, 출산 후 산후 회복 중이며, 기도제목에 자녀 신앙 성장과 부모님 건강이 포함되어 있음\"}, {\"rank\": 6, \"id\": \"HLxEbU\", \"name\": \"양인은\", \"reason\": \"최근 8주 중 4주 출석, 무릎 수술 후 재활 중이며, 기도제목에 자녀 신앙 성장과 시험 합격이 포함되어 있음\"}, {\"rank\": 7, \"id\": \"GcQ3Ze\", \"name\": \"손서가\", \"reason\": \"최근 8주 중 1주 출석, 3주 전 수술 후 재활 중이며, 기도제목에 재정적 어려움 해결이 포함되어 있음\"}, {\"rank\": 8, \"id\": \"PQCjiM\", \"name\": \"조수경\", \"reason\": \"최근 8주 중 8주 출석, 자녀가 3명 있으며, 기도제목에 자녀 진로 결정과 가족 관계 회복이 포함되어 있음\"}, {\"rank\": 9, \"id\": \"ehh5g7\", \"name\": \"오서엘\", \"reason\": \"최근 8주 중 7주 출석, 최근 새신자로 등록되었으며, 기도제목에 관계 회복과 자녀 진로 결정이 포함되어 있음\"}, {\"rank\": 10, \"id\": \"9UDb6k\", \"name\": \"임우아\", \"reason\": \"최근 8주 중 3주 출석, 항암 치료 중이며, 기도제목에 재정적 어려움 해결과 관계 회복이 포함되어 있음\"}]}",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T13:55:52",
    "model": "qwen3:4b-instruct-2507-q4_K_M",
    "set": "set02",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14908,
    "perf": {
      "elapsed_sec": 14.4,
      "load_sec": 0.0,
      "tokens_per_sec": 68.6,
      "speed_note": null,
      "prompt_eval_count": 10588,
      "eval_count": 728,
      "total_duration_ns": 14391286700,
      "load_duration_ns": 3712800,
      "prompt_eval_duration_ns": 3246228000,
      "eval_duration_ns": 10615900000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: M9jMAe -> 박태유"
      ],
      "hit_include": 4,
      "include_total": 10,
      "miss_exclude": 2,
      "exclude_total": 5,
      "picked_ids": [
        "7SCNsS",
        "fWBeEd",
        "fu4I1f",
        "20H8LP",
        "DVpQoZ",
        "Xg7EvM",
        "Qv0uoE",
        "bM8XSB",
        "M9jMAe",
        "wG1BfB"
      ]
    },
    "answer": "{\"top10\": [{\"rank\": 1, \"id\": \"7SCNsS\", \"name\": \"권원로\", \"reason\": \"만성 질환으로 정기 검진 중이며, 최근 새신자로 등록되어 신앙적 상태가 변화되었고, 기도제목에 우울감 극복과 결혼/배우자를 위한 기도가 포함되어 있음\"}, {\"rank\": 2, \"id\": \"fWBeEd\", \"name\": \"권하율\", \"reason\": \"최근 8주 중 7주 출석하고 있으며, 자녀가 군 복무 중이므로 기도제목에 군 복무 중인 자녀가 포함되어 있음\"}, {\"rank\": 3, \"id\": \"fu4I1f\", \"name\": \"배아연\", \"reason\": \"항암 치료 중이며, 최근 출석이 1주만으로 매우 부족하고, 기도제목에 자녀 신앙 성장과 직장 내 어려움이 포함되어 있음\"}, {\"rank\": 4, \"id\": \"20H8LP\", \"name\": \"송결유\", \"reason\": \"당뇨 관리 중이며, 최근 8주 중 3주 출석하고, 반려동물 사망 후 최근 경조사가 있음\"}, {\"rank\": 5, \"id\": \"DVpQoZ\", \"name\": \"권담연\", \"reason\": \"자녀 교통사고 후 입원 중이며, 자녀가 병원에서 지내는 날이 많고, 기도제목에 관계 회복과 자녀 신앙 성장이 포함되어 있음\"}, {\"rank\": 6, \"id\": \"Xg7EvM\", \"name\": \"신서엘\", \"reason\": \"가벼운 우울감을 호소하며, 자녀 결혼 후 기도제목에 가족 관계 회복과 부모님 건강이 포함되어 있음\"}, {\"rank\": 7, \"id\": \"Qv0uoE\", \"name\": \"송이경\", \"reason\": \"만성 신장질환으로 격주 투석 중이며, 체력 저하로 예배 참석이 점차 줄고 있음\"}, {\"rank\": 8, \"id\": \"bM8XSB\", \"name\": \"양민서\", \"reason\": \"최근 8주 중 8주 출석하고 있으며, 자녀가 2명 있고, 기도제목에 가족 관계 회복과 재정적 어려움 해결이 포함되어 있음\"}, {\"rank\": 9, \"id\": \"M9jMAe\", \"name\": \"박태유\", \"reason\": \"알레르기로 병원 통원 중이며, 최근 출석이 1주만으로 매우 부족하고, 기도제목에 건강 회복과 교회 공동체 기도가 포함되어 있음\"}, {\"rank\": 10, \"id\": \"wG1BfB\", \"name\": \"한유하\", \"reason\": \"최근 건강검진에서 이상 소견 발견되었으며, 타 지역 이주 예정으로 인해 연락이 어려울 수 있음\"}]}",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T13:56:02",
    "model": "qwen3:4b-instruct-2507-q4_K_M",
    "set": "set02",
    "attempt": 2,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14908,
    "perf": {
      "elapsed_sec": 10.6,
      "load_sec": 0.0,
      "tokens_per_sec": 69.0,
      "speed_note": null,
      "prompt_eval_count": 10588,
      "eval_count": 728,
      "total_duration_ns": 10584915900,
      "load_duration_ns": 1800500,
      "prompt_eval_duration_ns": 18474000,
      "eval_duration_ns": 10553242000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: M9jMAe -> 박태유"
      ],
      "hit_include": 4,
      "include_total": 10,
      "miss_exclude": 2,
      "exclude_total": 5,
      "picked_ids": [
        "7SCNsS",
        "fWBeEd",
        "fu4I1f",
        "20H8LP",
        "DVpQoZ",
        "Xg7EvM",
        "Qv0uoE",
        "bM8XSB",
        "M9jMAe",
        "wG1BfB"
      ]
    },
    "answer": "{\"top10\": [{\"rank\": 1, \"id\": \"7SCNsS\", \"name\": \"권원로\", \"reason\": \"만성 질환으로 정기 검진 중이며, 최근 새신자로 등록되어 신앙적 상태가 변화되었고, 기도제목에 우울감 극복과 결혼/배우자를 위한 기도가 포함되어 있음\"}, {\"rank\": 2, \"id\": \"fWBeEd\", \"name\": \"권하율\", \"reason\": \"최근 8주 중 7주 출석하고 있으며, 자녀가 군 복무 중이므로 기도제목에 군 복무 중인 자녀가 포함되어 있음\"}, {\"rank\": 3, \"id\": \"fu4I1f\", \"name\": \"배아연\", \"reason\": \"항암 치료 중이며, 최근 출석이 1주만으로 매우 부족하고, 기도제목에 자녀 신앙 성장과 직장 내 어려움이 포함되어 있음\"}, {\"rank\": 4, \"id\": \"20H8LP\", \"name\": \"송결유\", \"reason\": \"당뇨 관리 중이며, 최근 8주 중 3주 출석하고, 반려동물 사망 후 최근 경조사가 있음\"}, {\"rank\": 5, \"id\": \"DVpQoZ\", \"name\": \"권담연\", \"reason\": \"자녀 교통사고 후 입원 중이며, 자녀가 병원에서 지내는 날이 많고, 기도제목에 관계 회복과 자녀 신앙 성장이 포함되어 있음\"}, {\"rank\": 6, \"id\": \"Xg7EvM\", \"name\": \"신서엘\", \"reason\": \"가벼운 우울감을 호소하며, 자녀 결혼 후 기도제목에 가족 관계 회복과 부모님 건강이 포함되어 있음\"}, {\"rank\": 7, \"id\": \"Qv0uoE\", \"name\": \"송이경\", \"reason\": \"만성 신장질환으로 격주 투석 중이며, 체력 저하로 예배 참석이 점차 줄고 있음\"}, {\"rank\": 8, \"id\": \"bM8XSB\", \"name\": \"양민서\", \"reason\": \"최근 8주 중 8주 출석하고 있으며, 자녀가 2명 있고, 기도제목에 가족 관계 회복과 재정적 어려움 해결이 포함되어 있음\"}, {\"rank\": 9, \"id\": \"M9jMAe\", \"name\": \"박태유\", \"reason\": \"알레르기로 병원 통원 중이며, 최근 출석이 1주만으로 매우 부족하고, 기도제목에 건강 회복과 교회 공동체 기도가 포함되어 있음\"}, {\"rank\": 10, \"id\": \"wG1BfB\", \"name\": \"한유하\", \"reason\": \"최근 건강검진에서 이상 소견 발견되었으며, 타 지역 이주 예정으로 인해 연락이 어려울 수 있음\"}]}",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T13:56:19",
    "model": "qwen3:4b-instruct-2507-q4_K_M",
    "set": "set03",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14745,
    "perf": {
      "elapsed_sec": 16.3,
      "load_sec": 0.0,
      "tokens_per_sec": 68.8,
      "speed_note": null,
      "prompt_eval_count": 10427,
      "eval_count": 868,
      "total_duration_ns": 16319823600,
      "load_duration_ns": 1305000,
      "prompt_eval_duration_ns": 3165164000,
      "eval_duration_ns": 12623249000
    },
    "validation": {
      "format_ok": true,
      "issues": [],
      "hit_include": 4,
      "include_total": 10,
      "miss_exclude": 0,
      "exclude_total": 5,
      "picked_ids": [
        "iBN2JU",
        "aizvcI",
        "gydMuq",
        "g62WW5",
        "5GTQ5S",
        "cPoRII",
        "f5s3vL",
        "OxjJG2",
        "vrtXcR",
        "oImSvz"
      ]
    },
    "answer": "{\"top10\": [{\"rank\": 1, \"id\": \"iBN2JU\", \"name\": \"장빈람\", \"reason\": \"만성 질환으로 정기 검진 중이며, 자녀가 있음. 최근 8주 출석이 4주로 낮고, 장기 결석 중으로 사유 확인 필요. 자녀 신앙 성장과 건강 회복 기도가 있음.\"}, {\"rank\": 2, \"id\": \"aizvcI\", \"name\": \"윤빈건\", \"reason\": \"항암 치료로 통원 중이며, 치료 일정이 있는 주에는 참석이 어렵다고 함. 최근 8주 출석 4주로 낮고, 기도제목에 질병 치유 감사와 관계 회복이 포함됨.\"}, {\"rank\": 3, \"id\": \"gydMuq\", \"name\": \"오현솔\", \"reason\": \"자녀 교통사고 후 입원 중이며, 자녀가 입원해 병원에서 지내는 날이 많음. 최근 8주 출석 2주로 낮고, 기도제목에 자녀 신앙 성장과 건강 회복이 포함됨.\"}, {\"rank\": 4, \"id\": \"g62WW5\", \"name\": \"문나은\", \"reason\": \"가벼운 우울감을 호소하고 가족 갈등을 언급하며, 최근 8주 출석 0주로 장기 결석 중. 기도제목에 우울감 극복과 가족 관계 회복이 포함됨.\"}, {\"rank\": 5, \"id\": \"5GTQ5S\", \"name\": \"황이수\", \"reason\": \"가족 간 갈등을 언급하며, 타 지역 이주 예정. 최근 8주 출석 6주로 낮고, 기도제목에 건강 회복과 자녀 신앙 성장이 포함됨.\"}, {\"rank\": 6, \"id\": \"cPoRII\", \"name\": \"양결은\", \"reason\": \"최근 출석이 줄어들고, 동생이 태어남이라는 최근 경사가 있음. 기도제목에 건강 회복과 교회 공동체 기도가 포함됨.\"}, {\"rank\": 7, \"id\": \"f5s3vL\", \"name\": \"조율결\", \"reason\": \"최근 8주 출석 4주로 낮고, 자녀 신앙 성장과 취업 기도가 있음. 가족관계에서 자녀가 있음. 경제적 어려움이 없지만, 기도가 있음.\"}, {\"rank\": 8, \"id\": \"OxjJG2\", \"name\": \"문서호\", \"reason\": \"최근 8주 출석 3주로 낮고, 자녀가 있음. 기도제목에 자녀 신앙 성장과 부모님 건강이 포함됨. 가족 관계 유지가 중요함.\"}, {\"rank\": 9, \"id\": \"vrtXcR\", \"name\": \"고민현\", \"reason\": \"응급실 이송 후 입원 중이며, 입원 기간이 정해지지 않음. 기도제목에 질병 치유 감사와 자녀 신앙 성장이 포함됨. 건강 상태가 악화 중임.\"}, {\"rank\": 10, \"id\": \"oImSvz\", \"name\": \"이결윤\", \"reason\": \"한 달 전 실직으로 경제적 어려움을 언급하며, 최근 8주 출석 2주로 낮음. 기도제목에 직장 내 어려움과 학업 성취가 포함됨.\"}]}",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T13:56:31",
    "model": "qwen3:4b-instruct-2507-q4_K_M",
    "set": "set03",
    "attempt": 2,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14745,
    "perf": {
      "elapsed_sec": 12.3,
      "load_sec": 0.0,
      "tokens_per_sec": 69.2,
      "speed_note": null,
      "prompt_eval_count": 10427,
      "eval_count": 847,
      "total_duration_ns": 12266480200,
      "load_duration_ns": 3068300,
      "prompt_eval_duration_ns": 18189000,
      "eval_duration_ns": 12234954000
    },
    "validation": {
      "format_ok": true,
      "issues": [],
      "hit_include": 5,
      "include_total": 10,
      "miss_exclude": 0,
      "exclude_total": 5,
      "picked_ids": [
        "iBN2JU",
        "aizvcI",
        "gydMuq",
        "g62WW5",
        "5GTQ5S",
        "cPoRII",
        "f5s3vL",
        "oImSvz",
        "K5iJaU",
        "vrtXcR"
      ]
    },
    "answer": "{\"top10\": [{\"rank\": 1, \"id\": \"iBN2JU\", \"name\": \"장빈람\", \"reason\": \"만성 질환으로 정기 검진 중이며, 자녀가 있음. 최근 8주 출석이 4주로 낮고, 장기 결석 중으로 사유 확인 필요. 자녀 신앙 성장과 건강 회복 기도가 있음.\"}, {\"rank\": 2, \"id\": \"aizvcI\", \"name\": \"윤빈건\", \"reason\": \"항암 치료로 통원 중이며, 치료 일정이 있는 주에는 참석이 어렵다고 함. 최근 8주 출석 4주로 낮고, 기도제목에 질병 치유 감사와 관계 회복이 포함됨.\"}, {\"rank\": 3, \"id\": \"gydMuq\", \"name\": \"오현솔\", \"reason\": \"자녀 교통사고 후 입원 중이며, 자녀가 입원해 병원에서 지내는 날이 많음. 최근 8주 출석 2주로 낮고, 기도제목에 자녀 신앙 성장, 건강 회복, 가족 관계 회복이 포함됨.\"}, {\"rank\": 4, \"id\": \"g62WW5\", \"name\": \"문나은\", \"reason\": \"가벼운 우울감을 호소하고 가족 갈등을 언급하며, 최근 8주 출석 0주로 장기 결석 중. 기도제목에 우울감 극복과 가족 관계 회복이 포함됨.\"}, {\"rank\": 5, \"id\": \"5GTQ5S\", \"name\": \"황이수\", \"reason\": \"가족 간 갈등을 언급하며, 타 지역 이주 예정. 최근 8주 출석 6주로 낮고, 기도제목에 건강 회복과 교회 공동체 기도가 포함됨.\"}, {\"rank\": 6, \"id\": \"cPoRII\", \"name\": \"양결은\", \"reason\": \"최근 출석이 줄어들고, 동생이 태어남이라는 최근 경사가 있음. 기도제목에 건강 회복과 교회 공동체 기도가 포함됨.\"}, {\"rank\": 7, \"id\": \"f5s3vL\", \"name\": \"조율결\", \"reason\": \"최근 8주 출석 4주로 낮고, 자녀 신앙 성장과 취업/이직 기도가 있음. 가족관계에서 자녀가 있음.\"}, {\"rank\": 8, \"id\": \"oImSvz\", \"name\": \"이결윤\", \"reason\": \"한 달 전 실직으로 경제적 어려움을 언급하며, 최근 8주 출석 2주로 낮음. 기도제목에 직장 내 어려움과 학업 성취가 포함됨.\"}, {\"rank\": 9, \"id\": \"K5iJaU\", \"name\": \"송현재\", \"reason\": \"지난주 모친상으로 인해 최근 2주간 연락이 어려웠고, 기도제목에 가족 관계 회복과 우울감 극복이 포함됨.\"}, {\"rank\": 10, \"id\": \"vrtXcR\", \"name\": \"고민현\", \"reason\": \"지난주 응급실 이송 후 입원 중이며, 입원 기간이 정해지지 않음. 기도제목에 질병 치유 감사와 가족 관계 회복이 포함됨.\"}]}",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T13:56:44",
    "model": "qwen3:4b-instruct-2507-q4_K_M",
    "set": "set04",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14444,
    "perf": {
      "elapsed_sec": 13.2,
      "load_sec": 0.0,
      "tokens_per_sec": 69.6,
      "speed_note": null,
      "prompt_eval_count": 10164,
      "eval_count": 665,
      "total_duration_ns": 13170781700,
      "load_duration_ns": 2996200,
      "prompt_eval_duration_ns": 3049924000,
      "eval_duration_ns": 9549418000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: ZBKg9C -> 강진인",
        "이름 불일치: wBLLd8 -> 배온결"
      ],
      "hit_include": 4,
      "include_total": 10,
      "miss_exclude": 1,
      "exclude_total": 5,
      "picked_ids": [
        "QGOmX1",
        "ZBKg9C",
        "VojBwW",
        "pUajTb",
        "E9Ud3s",
        "wBLLd8",
        "avmfuD",
        "dSXT2Z",
        "ix85ag",
        "cZaAVp"
      ]
    },
    "answer": "{\"top10\": [{\"rank\": 1, \"id\": \"QGOmX1\", \"name\": \"김현하\", \"reason\": \"요양병원 입원 중이며, 공동체와 접촉이 거의 끊긴 상태로, 심방이 필요하며, 자녀가 군 복무 중이므로 기도제목이 존재\"}, {\"rank\": 2, \"id\": \"ZBKg9C\", \"name\": \"강진인\", \"reason\": \"최근 8주 중 5주 출석, 경제적 어려움을 언급하며, 자녀가 실직 후 스트레스를 받고 있음\"}, {\"rank\": 3, \"id\": \"VojBwW\", \"name\": \"배태결\", \"reason\": \"최근 8주 중 8주 출석, 자녀가 안인채이며, 자녀의 학업과 건강 회복을 기도하고 있음\"}, {\"rank\": 4, \"id\": \"pUajTb\", \"name\": \"홍시온\", \"reason\": \"가벼운 우울감을 호소하고 가족 간 갈등을 언급하며, 기도제목이 다양하고 심방 기록이 12회로 지속적 참여가 있음\"}, {\"rank\": 5, \"id\": \"E9Ud3s\", \"name\": \"문우람\", \"reason\": \"최근 건강검진에서 이상 소견 발견, 자녀 입시 스트레스로 가정 내 스트레스 발생, 기도제목이 다수\"}, {\"rank\": 6, \"id\": \"wBLLd8\", \"name\": \"배온결\", \"reason\": \"산후 회복 중이며, 자녀가 조훈우와 안채우 등이 있어 가족 중심 기도제목 존재\"}, {\"rank\": 7, \"id\": \"avmfuD\", \"name\": \"백경수\", \"reason\": \"고혈압으로 정기 통원 중이며, 자녀들이 모두 학업 중이며, 기도제목에 우울감 극복 및 자녀 신앙 성장 포함\"}, {\"rank\": 8, \"id\": \"dSXT2Z\", \"name\": \"강하태\", \"reason\": \"지난달 낙상으로 입원 및 자택 요양 중이며, 혼자 예배 참석이 어려워 기도가 필요\"}, {\"rank\": 9, \"id\": \"ix85ag\", \"name\": \"권지결\", \"reason\": \"배우자 수술 후 간병 부담이 크며, 자녀 신앙 성장 및 재정적 어려움 기도 제목 존재\"}, {\"rank\": 10, \"id\": \"cZaAVp\", \"name\": \"문규이\", \"reason\": \"수술 후 재활 중이며, 자녀 신앙 성장 및 가족 관계 회복 기도 제목이 다수 포함\"}]}",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T13:56:55",
    "model": "qwen3:4b-instruct-2507-q4_K_M",
    "set": "set04",
    "attempt": 2,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14444,
    "perf": {
      "elapsed_sec": 11.0,
      "load_sec": 0.0,
      "tokens_per_sec": 69.8,
      "speed_note": null,
      "prompt_eval_count": 10164,
      "eval_count": 769,
      "total_duration_ns": 11042961600,
      "load_duration_ns": 2855100,
      "prompt_eval_duration_ns": 18185000,
      "eval_duration_ns": 11011308000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: ZBKg9C -> 강진인",
        "이름 불일치: wBLLd8 -> 배온결"
      ],
      "hit_include": 3,
      "include_total": 10,
      "miss_exclude": 1,
      "exclude_total": 5,
      "picked_ids": [
        "QGOmX1",
        "ZBKg9C",
        "VojBwW",
        "pUajTb",
        "E9Ud3s",
        "wBLLd8",
        "avmfuD",
        "62XnvP",
        "ix85ag",
        "RuKnr2"
      ]
    },
    "answer": "{\"top10\": [{\"rank\": 1, \"id\": \"QGOmX1\", \"name\": \"김현하\", \"reason\": \"요양병원 입원 중으로 공동체와 접촉이 거의 끊긴 상태이며, 최근 출석이 없고 장기 결석 상태로 심방이 절실한 상황\"}, {\"rank\": 2, \"id\": \"ZBKg9C\", \"name\": \"강진인\", \"reason\": \"최근 8주 중 5주 출석으로 출석이 줄어들었고, 경제적 어려움을 언급하며 기도제목이 다양하며, 가족 구성원들의 신앙 상태에 영향을 미칠 수 있음\"}, {\"rank\": 3, \"id\": \"VojBwW\", \"name\": \"배태결\", \"reason\": \"최근 8주 중 8주 출석으로 정기적으로 참석하고 있지만, 자녀의 교육과 건강에 기도를 요청하며 가족 중심의 신앙 활동이 지속됨\"}, {\"rank\": 4, \"id\": \"pUajTb\", \"name\": \"홍시온\", \"reason\": \"가벼운 우울감을 호소하고 가족 간 갈등을 언급하며, 기도제목이 다수 포함되어 있으며, 정서적 지원이 필요함\"}, {\"rank\": 5, \"id\": \"E9Ud3s\", \"name\": \"문우람\", \"reason\": \"건강검진에서 이상 소견 발견 및 자녀 입시 스트레스로 인해 정서적 부담이 크며, 기도제목이 재정적 어려움과 자녀 관련 기도로 포함됨\"}, {\"rank\": 6, \"id\": \"wBLLd8\", \"name\": \"배온결\", \"reason\": \"산후 회복 중이며, 외부 방문보다 전화 연락을 선호할 수 있음, 최근 출석이 3주로 줄어들었고, 자녀들의 신앙 성장에 기도를 요청\"}, {\"rank\": 7, \"id\": \"avmfuD\", \"name\": \"백경수\", \"reason\": \"고혈압으로 정기 통원 중이며, 최근 이사와 함께 기도제목이 재정적 어려움과 우울감 극복으로 포함되어 있으며, 자녀들의 신앙에 영향을 줄 수 있음\"}, {\"rank\": 8, \"id\": \"62XnvP\", \"name\": \"전서호\", \"reason\": \"무릎 관절염으로 보행이 어려워 참석이 줄었고, 예배당 계단을 오르기 어려움으로 인해 접근이 제한되어 있음\"}, {\"rank\": 9, \"id\": \"ix85ag\", \"name\": \"권지결\", \"reason\": \"배우자 수술 후 간병 부담이 크며, 우울감과 자녀 신앙 성장에 기도를 요청하고 있어 정서적 지원이 필요함\"}, {\"rank\": 10, \"id\": \"RuKnr2\", \"name\": \"권규우\", \"reason\": \"최근 새신자로 등록되었으며, 고혈압으로 정기 통원 중이며, 기도제목이 군 복무 중인 자녀와 우울감 극복으로 포함되어 있음\"}]}",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T13:57:10",
    "model": "qwen3:4b-instruct-2507-q4_K_M",
    "set": "set05",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 15124,
    "perf": {
      "elapsed_sec": 15.2,
      "load_sec": 0.0,
      "tokens_per_sec": 68.2,
      "speed_note": null,
      "prompt_eval_count": 10727,
      "eval_count": 771,
      "total_duration_ns": 15151288400,
      "load_duration_ns": 3134500,
      "prompt_eval_duration_ns": 3288927000,
      "eval_duration_ns": 11308436000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: EY5zIA -> 이규유"
      ],
      "hit_include": 6,
      "include_total": 10,
      "miss_exclude": 1,
      "exclude_total": 5,
      "picked_ids": [
        "O80nEw",
        "48KOtw",
        "EY5zIA",
        "tXdvFg",
        "RCl5TX",
        "Pfur77",
        "318bxN",
        "0PsaWI",
        "IcBBIp",
        "83HnzM"
      ]
    },
    "answer": "{\"top10\": [{\"rank\": 1, \"id\": \"O80nEw\", \"name\": \"박담하\", \"reason\": \"거동이 불편해 혼자 예배 참석이 어려움이며, 최근 8주 출석이 0주로 매우 낮고, 건강 상태가 낙상 후 요양 중인 상태로 심방이 절실한 상황\"}, {\"rank\": 2, \"id\": \"48KOtw\", \"name\": \"문아온\", \"reason\": \"배우자 수술 후 간병 부담이 크고, 최근 8주 출석이 1주로 매우 낮으며, 기도제목에 자녀 신앙 성장과 가족 관계 회복이 포함되어 있음\"}, {\"rank\": 3, \"id\": \"EY5zIA\", \"name\": \"이규유\", \"reason\": \"장기 결석 중이며, 최근 8주 출석이 6주로 낮고, 기도제목에 자녀 신앙 성장과 가족 관계 회복이 포함되어 있음\"}, {\"rank\": 4, \"id\": \"tXdvFg\", \"name\": \"안율선\", \"reason\": \"알레르기로 병원 통원 중이며, 최근 8주 출석이 4주로 낮고, 기도제목에 건강 회복과 교회 공동체 기도가 포함되어 있음\"}, {\"rank\": 5, \"id\": \"RCl5TX\", \"name\": \"김로경\", \"reason\": \"만성 신장질환으로 격주 투석 중이며, 체력 저하로 예배 참석이 줄어들고 있음\"}, {\"rank\": 6, \"id\": \"Pfur77\", \"name\": \"최규하\", \"reason\": \"최근 8주 출석이 8주로 높은 편이지만, 자녀들과의 관계 회복과 취업/이직 기도가 포함되어 있으며, 가족 간 갈등이 언급됨\"}, {\"rank\": 7, \"id\": \"318bxN\", \"name\": \"박빈도\", \"reason\": \"항암 치료로 통원 중이며, 치료 일정이 있는 주에는 참석이 어렵다고 함\"}, {\"rank\": 8, \"id\": \"0PsaWI\", \"name\": \"유온준\", \"reason\": \"장기 결석 중이며, 최근 8주 출석이 6주로 낮고, 자녀와의 관계 및 우울감 회복 기도가 포함되어 있음\"}, {\"rank\": 9, \"id\": \"IcBBIp\", \"name\": \"손원율\", \"reason\": \"장기 결석 중이며, 최근 8주 출석이 4주로 낮고, 기도제목에 관계 회복과 은퇴 후 삶의 인도하심이 포함되어 있음\"}, {\"rank\": 10, \"id\": \"83HnzM\", \"name\": \"전건하\", \"reason\": \"산후 회복 중이며, 외부 방문보다 전화 연락을 선호할 수 있음, 최근 8주 출석이 2주로 낮고, 자녀 신앙 성장과 건강 회복 기도가 포함되어 있음\"}]}",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T13:57:23",
    "model": "qwen3:4b-instruct-2507-q4_K_M",
    "set": "set05",
    "attempt": 2,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 15124,
    "perf": {
      "elapsed_sec": 12.8,
      "load_sec": 0.0,
      "tokens_per_sec": 68.5,
      "speed_note": null,
      "prompt_eval_count": 10727,
      "eval_count": 872,
      "total_duration_ns": 12757211800,
      "load_duration_ns": 3086400,
      "prompt_eval_duration_ns": 18161000,
      "eval_duration_ns": 12725503000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: EY5zIA -> 이규유"
      ],
      "hit_include": 5,
      "include_total": 10,
      "miss_exclude": 2,
      "exclude_total": 5,
      "picked_ids": [
        "O80nEw",
        "48KOtw",
        "EY5zIA",
        "R1SO3j",
        "Pfur77",
        "318bxN",
        "83HnzM",
        "0PsaWI",
        "IcBBIp",
        "G4P4tg"
      ]
    },
    "answer": "{\"top10\": [{\"rank\": 1, \"id\": \"O80nEw\", \"name\": \"박담하\", \"reason\": \"거동이 불편해 혼자 예배 참석이 어려움이며, 최근 8주 출석이 0주로 매우 낮고, 건강 상태가 낙상 후 요양 중인 상태로 심방이 절실한 상황\"}, {\"rank\": 2, \"id\": \"48KOtw\", \"name\": \"문아온\", \"reason\": \"배우자 수술 후 간병 부담이 크고, 최근 8주 출석이 1주로 매우 낮으며, 기도제목에 자녀 신앙 성장과 가족 관계 회복이 포함되어 가족 중심의 지원이 필요\"}, {\"rank\": 3, \"id\": \"EY5zIA\", \"name\": \"이규유\", \"reason\": \"장기 결석 중이며, 최근 8주 출석이 6주로 낮고, 기도제목에 자녀 신앙 성장과 재정적 어려움 해결이 포함되어 가족과 삶의 인도가 필요\"}, {\"rank\": 4, \"id\": \"R1SO3j\", \"name\": \"김담하\", \"reason\": \"자녀 전름아가 우울감을 호소하고 있으며, 최근 8주 출석이 7주로 낮고, 기도제목에 자녀 진로 결정과 관계 회복이 포함되어 가정 내 정서적 지원이 필요\"}, {\"rank\": 5, \"id\": \"Pfur77\", \"name\": \"최규하\", \"reason\": \"최근 8주 출석이 8주로 높은 편이지만, 자녀들의 교육과 가족 관계 회복을 기도하며, 자녀들의 성장과 부모님 건강에 대한 기도가 많아 가정 내 지속적인 관심이 필요\"}, {\"rank\": 6, \"id\": \"318bxN\", \"name\": \"박빈도\", \"reason\": \"항암 치료 중이며, 치료 일정이 있는 주에는 참석이 어렵고, 기도제목에 자녀 신앙 성장과 직장 내 어려움이 포함되어 건강과 삶의 균형을 위한 지원이 필요\"}, {\"rank\": 7, \"id\": \"83HnzM\", \"name\": \"전건하\", \"reason\": \"산후 회복 중이며, 외부 방문보다 전화 연락을 선호하고, 기도제목에 자녀 신앙 성장과 건강 회복이 포함되어 신체적·정서적 회복을 위한 지지가 필요\"}, {\"rank\": 8, \"id\": \"0PsaWI\", \"name\": \"유온준\", \"name\": \"유온준\", \"reason\": \"장기 결석 중이며, 최근 8주 출석이 6주로 낮고, 자녀들과 가족 간의 관계 회복을 기도하며, 가족 내 정서적 안정이 필요\"}, {\"rank\": 9, \"id\": \"IcBBIp\", \"name\": \"손원율\", \"reason\": \"최근 이사 후 장기 결석 중이며, 기도제목에 관계 회복과 은퇴 후 삶의 인도가 포함되어 삶의 전환기에 지지가 필요\"}, {\"rank\": 10, \"id\": \"G4P4tg\", \"name\": \"송하율\", \"reason\": \"은퇴 후 삶에 대한 기도가 포함되어 있으며, 최근 8주 출석이 8주로 높고, 가족 관계 회복과 자녀 신앙 성장에 대한 기도가 있어 지속적인 공동체 참여를 유도할 필요\"}]}",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T13:57:39",
    "model": "qwen3:4b-instruct-2507-q4_K_M",
    "set": "set06",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14718,
    "perf": {
      "elapsed_sec": 15.8,
      "load_sec": 0.0,
      "tokens_per_sec": 68.8,
      "speed_note": null,
      "prompt_eval_count": 10425,
      "eval_count": 831,
      "total_duration_ns": 15813284700,
      "load_duration_ns": 3531800,
      "prompt_eval_duration_ns": 3161603000,
      "eval_duration_ns": 12073031000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: YbWuqy -> 심훈민"
      ],
      "hit_include": 2,
      "include_total": 10,
      "miss_exclude": 1,
      "exclude_total": 5,
      "picked_ids": [
        "YbWuqy",
        "fuydp1",
        "k8030c",
        "Z9Da9P",
        "DWMo6K",
        "qfjE2x",
        "7KuQaX",
        "H5Zymk",
        "1Q1sld",
        "wAmoOa"
      ]
    },
    "answer": "{\"top10\": [{\"rank\": 1, \"id\": \"YbWuqy\", \"name\": \"심훈민\", \"reason\": \"새신자로 등록되었고, 만성 질환으로 정기 검진 중이며, 우울감 극복과 가족 관계 회복을 기도제목에 명시, 최근 출석이 7주 중 7주로 높음\"}, {\"rank\": 2, \"id\": \"fuydp1\", \"name\": \"권민아\", \"reason\": \"고혈압으로 정기 통원 중이며, 자녀 3명이 있고, 최근 손주 출생으로 가족 변화가 있었으며, 최근 8주 출석이 8주로 높음\"}, {\"rank\": 3, \"id\": \"k8030c\", \"name\": \"유름채\", \"reason\": \"최근 반려동물 사망과 함께 가족 갈등을 언급하며, 자녀 홍시아가 군 복무 중이며, 기도제목에 부모님 건강과 가족 관계 회복이 포함됨\"}, {\"rank\": 4, \"id\": \"Z9Da9P\", \"name\": \"송빈람\", \"reason\": \"자녀 송경우가 학업 중이며, 우울감 극복과 이사/거주 문제를 기도제목에 명시, 최근 8주 출석이 8주로 높음\"}, {\"rank\": 5, \"id\": \"DWMo6K\", \"name\": \"윤시민\", \"reason\": \"가족 간 갈등을 언급하며, 학업 성취와 부모님 건강을 기도제목에 명시, 최근 8주 출석이 2주로 낮지만 심방 기록이 12회로 꾸준함\"}, {\"rank\": 6, \"id\": \"qfjE2x\", \"name\": \"정율아\", \"reason\": \"가족 갈등을 언급하며, 고혈압으로 정기 통원 중이며, 취업/이직과 직장 내 어려움을 기도제목에 명시, 최근 8주 출석이 3주로 중간 수준\"}, {\"rank\": 7, \"id\": \"7KuQaX\", \"name\": \"임민연\", \"reason\": \"가족 갈등을 언급하며, 직장 내 어려움과 재정적 어려움 해결을 기도제목에 명시, 최근 8주 출석이 4주로 중간 수준\"}, {\"rank\": 8, \"id\": \"H5Zymk\", \"name\": \"전유채\", \"reason\": \"만성 신장질환으로 격주 투석 중이며, 자녀 신앙 성장을 기도제목에 명시, 체력 저하로 예배 참석이 줄고 있음\"}, {\"rank\": 9, \"id\": \"1Q1sld\", \"name\": \"백진다\", \"reason\": \"가족 갈등을 언급하며, 최근 이사 후 가족 관계 회복을 기도제목에 명시, 최근 8주 출석이 3주로 중간 수준\"}, {\"rank\": 10, \"id\": \"wAmoOa\", \"name\": \"윤선건\", \"reason\": \"무릎 관절염으로 보행이 어려움이며, 예배당 계단을 오르기 어려워 참석이 줄었고, 기도제목에 부모님 건강과 자녀 신앙 성장을 포함\"}]}",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T13:57:50",
    "model": "qwen3:4b-instruct-2507-q4_K_M",
    "set": "set06",
    "attempt": 2,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14718,
    "perf": {
      "elapsed_sec": 11.3,
      "load_sec": 0.0,
      "tokens_per_sec": 69.3,
      "speed_note": null,
      "prompt_eval_count": 10425,
      "eval_count": 779,
      "total_duration_ns": 11275477500,
      "load_duration_ns": 2277800,
      "prompt_eval_duration_ns": 18323000,
      "eval_duration_ns": 11243502000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: YbWuqy -> 심훈민"
      ],
      "hit_include": 1,
      "include_total": 10,
      "miss_exclude": 1,
      "exclude_total": 5,
      "picked_ids": [
        "YbWuqy",
        "fuydp1",
        "7ECziq",
        "xtnJfn",
        "k8030c",
        "Z9Da9P",
        "DWMo6K",
        "qfjE2x",
        "7KuQaX",
        "H5Zymk"
      ]
    },
    "answer": "{\"top10\": [{\"rank\": 1, \"id\": \"YbWuqy\", \"name\": \"심훈민\", \"reason\": \"새신자로 등록되었고, 만성 질환으로 정기 검진 중이며, 우울감 극복과 가족 관계 회복을 기도제목에 명시, 최근 출석이 7주 중 7주로 높음\"}, {\"rank\": 2, \"id\": \"fuydp1\", \"name\": \"권민아\", \"reason\": \"고혈압으로 정기 통원 중이며, 자녀 3명이 있고, 최근 손주 출생으로 가족 변화가 있었으며, 최근 8주 출석이 8주로 높음\"}, {\"rank\": 3, \"id\": \"7ECziq\", \"name\": \"송경우\", \"reason\": \"15세로 신앙 연차 2년, 가벼운 우울감을 호소하며 타 지역 이주 예정으로 가족 변화가 있음, 최근 8주 출석 4주로 출석이 낮음\"}, {\"rank\": 4, \"id\": \"xtnJfn\", \"name\": \"홍시아\", \"reason\": \"14세, 최근 8주 출석 1주로 매우 낮고 장기 결석 중이며, 학업 성취와 건강 회복을 기도제목에 명시\"}, {\"rank\": 5, \"id\": \"k8030c\", \"name\": \"유름채\", \"reason\": \"최근 새신자로 등록되었고, 반려동물 사망, 자녀 홍시아가 있음, 기도제목에 건강 회복과 가족 관계 회복이 포함됨\"}, {\"rank\": 6, \"id\": \"Z9Da9P\", \"name\": \"송빈람\", \"reason\": \"자녀 송경우가 있고, 최근 8주 출석 8주로 높으며, 우울감 극복과 자녀 진로 결정을 기도제목에 명시\"}, {\"rank\": 7, \"id\": \"DWMo6K\", \"name\": \"윤시민\", \"reason\": \"17세, 가족 간 갈등을 언급하며, 우울감을 호소하고, 부모님 건강과 학업 성취를 기도제목에 명시\"}, {\"rank\": 8, \"id\": \"qfjE2x\", \"name\": \"정율아\", \"reason\": \"고혈압으로 정기 통원 중이며, 가족 간 갈등을 언급하고, 최근 8주 출석 3주로 낮음\"}, {\"rank\": 9, \"id\": \"7KuQaX\", \"name\": \"임민연\", \"reason\": \"가족 간 갈등을 언급하며, 최근 8주 출석 4주로 낮고, 재정적 어려움 해결과 질병 치유 감사를 기도제목에 명시\"}, {\"rank\": 10, \"id\": \"H5Zymk\", \"name\": \"전유채\", \"reason\": \"만성 신장질환으로 격주 투석 중이며, 체력 저하로 예배 참석이 점차 줄고 있음, 자녀 신앙 성장을 기도제목에 명시\"}]}",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T13:58:05",
    "model": "qwen3:4b-instruct-2507-q4_K_M",
    "set": "set07",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 15042,
    "perf": {
      "elapsed_sec": 14.8,
      "load_sec": 0.0,
      "tokens_per_sec": 68.6,
      "speed_note": null,
      "prompt_eval_count": 10597,
      "eval_count": 755,
      "total_duration_ns": 14842985500,
      "load_duration_ns": 1659500,
      "prompt_eval_duration_ns": 3248140000,
      "eval_duration_ns": 11001887000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: nKdT89 -> 배다람",
        "이름 불일치: CvcsCk -> 손다재"
      ],
      "hit_include": 4,
      "include_total": 10,
      "miss_exclude": 1,
      "exclude_total": 5,
      "picked_ids": [
        "68ufme",
        "pVhKnv",
        "LNes8O",
        "0ChDzs",
        "nKdT89",
        "2cZ1Ml",
        "CvcsCk",
        "9oXtgS",
        "YzuD4n",
        "dCLsU5"
      ]
    },
    "answer": "{\"top10\": [{\"rank\": 1, \"id\": \"68ufme\", \"name\": \"강하름\", \"reason\": \"최근 8주 중 6주 출석하고 있으며, 건강검진에서 이상 소견 발견, 타 지역 이주 예정으로 심방이 중요하며 기도제목이 '이사/거주 문제'로 명시됨\"}, {\"rank\": 2, \"id\": \"pVhKnv\", \"name\": \"고민훈\", \"reason\": \"최근 8주 중 4주 출석, 실직 후 경제적 어려움을 언급, 기도제목에 '이사/거주 문제', '직장 내 어려움' 포함\"}, {\"rank\": 3, \"id\": \"LNes8O\", \"name\": \"유솔엘\", \"reason\": \"최근 8주 중 3주 출석, 수술 후 재활 중, 회복 중 거동 불편, 기도제목에 '건강 회복', '자녀 신앙 성장' 포함\"}, {\"rank\": 4, \"id\": \"0ChDzs\", \"name\": \"전시서\", \"reason\": \"최근 8주 중 8주 출석, 배우자 별세 후 우울감 극복 기도제목 포함, 봉사팀 리더로 활동 중\"}, {\"rank\": 5, \"id\": \"nKdT89\", \"name\": \"배다람\", \"reason\": \"최근 8주 중 4주 출석, 항암 치료 중, 자녀 3명, 기도제목에 '자녀 신앙 성장', '건강 회복' 포함\"}, {\"rank\": 6, \"id\": \"2cZ1Ml\", \"name\": \"강훈우\", \"reason\": \"최근 8주 중 8주 출석, 자녀 조호하의 건강 상태와 관련, 기도제목에 '건강 회복', '시험 합격' 포함\"}, {\"rank\": 7, \"id\": \"CvcsCk\", \"name\": \"손다재\", \"reason\": \"최근 8주 중 7주 출석, 자녀 최진이와 권서나의 건강 상태와 관련, 기도제목에 '가족 관계 회복', '건강 회복' 포함\"}, {\"rank\": 8, \"id\": \"9oXtgS\", \"name\": \"배온호\", \"reason\": \"최근 8주 중 7주 출석, 무릎 수술 후 재활 중, 자녀 신앙 성장 기도제목 포함\"}, {\"rank\": 9, \"id\": \"YzuD4n\", \"name\": \"홍윤우\", \"reason\": \"최근 8주 중 1주 출석, 무릎 관절염으로 보행 어려움, 기도제목에 '건강 회복', '가족 관계 회복' 포함\"}, {\"rank\": 10, \"id\": \"dCLsU5\", \"name\": \"권은율\", \"reason\": \"최근 8주 중 0주 출석, 자녀 교통사고 후 입원, 기도제목에 '관계 회복(친구/가족)', '자녀 신앙 성장' 포함\"}]}",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T13:58:16",
    "model": "qwen3:4b-instruct-2507-q4_K_M",
    "set": "set07",
    "attempt": 2,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 15042,
    "perf": {
      "elapsed_sec": 11.0,
      "load_sec": 0.0,
      "tokens_per_sec": 69.0,
      "speed_note": null,
      "prompt_eval_count": 10597,
      "eval_count": 755,
      "total_duration_ns": 10977945400,
      "load_duration_ns": 3088000,
      "prompt_eval_duration_ns": 18013000,
      "eval_duration_ns": 10946548000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: nKdT89 -> 배다람",
        "이름 불일치: CvcsCk -> 손다재"
      ],
      "hit_include": 4,
      "include_total": 10,
      "miss_exclude": 1,
      "exclude_total": 5,
      "picked_ids": [
        "68ufme",
        "pVhKnv",
        "LNes8O",
        "0ChDzs",
        "nKdT89",
        "2cZ1Ml",
        "CvcsCk",
        "9oXtgS",
        "YzuD4n",
        "dCLsU5"
      ]
    },
    "answer": "{\"top10\": [{\"rank\": 1, \"id\": \"68ufme\", \"name\": \"강하름\", \"reason\": \"최근 8주 중 6주 출석하고 있으며, 건강검진에서 이상 소견 발견, 타 지역 이주 예정으로 심방이 중요하며 기도제목이 '이사/거주 문제'로 명시됨\"}, {\"rank\": 2, \"id\": \"pVhKnv\", \"name\": \"고민훈\", \"reason\": \"최근 8주 중 4주 출석, 실직 후 경제적 어려움을 언급, 기도제목에 '이사/거주 문제', '직장 내 어려움' 포함\"}, {\"rank\": 3, \"id\": \"LNes8O\", \"name\": \"유솔엘\", \"reason\": \"최근 8주 중 3주 출석, 수술 후 재활 중, 회복 중 거동 불편, 기도제목에 '건강 회복', '자녀 신앙 성장' 포함\"}, {\"rank\": 4, \"id\": \"0ChDzs\", \"name\": \"전시서\", \"reason\": \"최근 8주 중 8주 출석, 배우자 별세 후 우울감 극복 기도제목 포함, 봉사팀 리더로 활동 중\"}, {\"rank\": 5, \"id\": \"nKdT89\", \"name\": \"배다람\", \"reason\": \"최근 8주 중 4주 출석, 항암 치료 중, 자녀 3명, 기도제목에 '자녀 신앙 성장', '건강 회복' 포함\"}, {\"rank\": 6, \"id\": \"2cZ1Ml\", \"name\": \"강훈우\", \"reason\": \"최근 8주 중 8주 출석, 자녀 조호하의 건강 상태와 관련, 기도제목에 '건강 회복', '시험 합격' 포함\"}, {\"rank\": 7, \"id\": \"CvcsCk\", \"name\": \"손다재\", \"reason\": \"최근 8주 중 7주 출석, 자녀 최진이와 권서나의 건강 상태와 관련, 기도제목에 '가족 관계 회복', '건강 회복' 포함\"}, {\"rank\": 8, \"id\": \"9oXtgS\", \"name\": \"배온호\", \"reason\": \"최근 8주 중 7주 출석, 무릎 수술 후 재활 중, 자녀 신앙 성장 기도제목 포함\"}, {\"rank\": 9, \"id\": \"YzuD4n\", \"name\": \"홍윤우\", \"reason\": \"최근 8주 중 1주 출석, 무릎 관절염으로 보행 어려움, 기도제목에 '건강 회복', '가족 관계 회복' 포함\"}, {\"rank\": 10, \"id\": \"dCLsU5\", \"name\": \"권은율\", \"reason\": \"최근 8주 중 0주 출석, 자녀 교통사고 후 입원, 기도제목에 '관계 회복(친구/가족)', '자녀 신앙 성장' 포함\"}]}",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T13:58:32",
    "model": "qwen3:4b-instruct-2507-q4_K_M",
    "set": "set08",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14820,
    "perf": {
      "elapsed_sec": 16.0,
      "load_sec": 0.0,
      "tokens_per_sec": 68.9,
      "speed_note": null,
      "prompt_eval_count": 10438,
      "eval_count": 843,
      "total_duration_ns": 16011442200,
      "load_duration_ns": 3616500,
      "prompt_eval_duration_ns": 3153205000,
      "eval_duration_ns": 12238154000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: jtdoFr -> 윤민시",
        "이름 불일치: 6aHvSa -> 강영수"
      ],
      "hit_include": 5,
      "include_total": 10,
      "miss_exclude": 1,
      "exclude_total": 5,
      "picked_ids": [
        "j0zzaC",
        "nj16v9",
        "puYXbc",
        "RBsChV",
        "jtdoFr",
        "vAJ1gN",
        "XUlTrr",
        "4ytcGt",
        "dGkFB8",
        "6aHvSa"
      ]
    },
    "answer": "{\"top10\": [{\"rank\": 1, \"id\": \"j0zzaC\", \"name\": \"강재서\", \"reason\": \"최근 8주 출석이 8주 모두이며, 부모와 함께 출석하고 있어 공동체 참여가 활발하며, 기도제목이 학업 성취와 교회 공동체를 위한 기도로 교회 활동에 직접적인 기여를 요청하고 있음\"}, {\"rank\": 2, \"id\": \"nj16v9\", \"name\": \"송람나\", \"reason\": \"최근 8주 중 2주 출석으로 출석이 부족하며, 반려동물 사망이라는 최근 경사로 정서적 영향을 받았고, 기도제목에 건강 회복이 포함되어 있음\"}, {\"rank\": 3, \"id\": \"puYXbc\", \"name\": \"송수도\", \"reason\": \"최근 8주 중 0주 출석으로 출석이 전혀 없으며, 연락이 잘 닿지 않음, 기도제목이 부모님 건강과 자녀 신앙 성장 등 가족 중심으로 구성되어 있음\"}, {\"rank\": 4, \"id\": \"RBsChV\", \"name\": \"윤서재\", \"reason\": \"최근 8주 중 0주 출석으로 출석이 없으며, 자녀의 군 복무와 우울감 문제로 가정 내 스트레스가 크고, 기도제목이 자녀 진로 결정과 우울감 극복 등에 집중되어 있음\"}, {\"rank\": 5, \"id\": \"jtdoFr\", \"name\": \"윤민시\", \"reason\": \"요양병원 입원 중이며, 장기 입원으로 공동체와 접촉이 거의 끊긴 상태로, 심방이 어려움을 겪고 있음\"}, {\"rank\": 6, \"id\": \"vAJ1gN\", \"name\": \"송진연\", \"reason\": \"최근 8주 중 4주 출석하며, 배우자 별세 후 혼자 지내는 상황으로 식사를 거르는 날이 많고, 기도제목에 자녀 신앙 성장과 직장 내 어려움이 포함되어 있음\"}, {\"rank\": 7, \"id\": \"XUlTrr\", \"name\": \"권로나\", \"reason\": \"최근 8주 중 3주 출석하며, 출산 후 산후 회복 중이므로 외부 방문보다 전화 연락을 선호하고, 기도제목에 이사/거주 문제와 자녀 신앙 성장이 포함되어 있음\"}, {\"rank\": 8, \"id\": \"4ytcGt\", \"name\": \"백시원\", \"reason\": \"최근 8주 중 3주 출석하며, 3주 전 수술 후 재활 중이므로 거동이 불편하고, 기도제목에 자녀 신앙 성장과 부모님 건강이 포함되어 있음\"}, {\"rank\": 9, \"id\": \"dGkFB8\", \"name\": \"이나결\", \"reason\": \"최근 8주 출석이 8주 모두이며, 봉사팀 리더로 활동 중이므로 교회 활동에 기여하고 있음\"}, {\"rank\": 10, \"id\": \"6aHvSa\", \"name\": \"강영수\", \"reason\": \"최근 8주 중 6주 출석하며, 최근 이사로 가정 상황 변화가 있었고, 기도제목에 건강 회복이 포함되어 있음\"}]}",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T13:58:44",
    "model": "qwen3:4b-instruct-2507-q4_K_M",
    "set": "set08",
    "attempt": 2,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14820,
    "perf": {
      "elapsed_sec": 11.8,
      "load_sec": 0.0,
      "tokens_per_sec": 69.2,
      "speed_note": null,
      "prompt_eval_count": 10438,
      "eval_count": 817,
      "total_duration_ns": 11837883800,
      "load_duration_ns": 2857900,
      "prompt_eval_duration_ns": 18262000,
      "eval_duration_ns": 11804711000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: 6aHvSa -> 강영수"
      ],
      "hit_include": 5,
      "include_total": 10,
      "miss_exclude": 1,
      "exclude_total": 5,
      "picked_ids": [
        "j0zzaC",
        "nj16v9",
        "puYXbc",
        "RBsChV",
        "jtdoFr",
        "vAJ1gN",
        "XUlTrr",
        "4ytcGt",
        "6aHvSa",
        "iG0WlM"
      ]
    },
    "answer": "{\"top10\": [{\"rank\": 1, \"id\": \"j0zzaC\", \"name\": \"강재서\", \"reason\": \"최근 8주 출석이 8주 모두이며, 부모와 함께 출석하고 있어 공동체 참여가 활발하며, 기도제목이 학업 성취와 교회 공동체를 위한 기도로 교회 활동에 직접적인 기여를 하고 있음\"}, {\"rank\": 2, \"id\": \"nj16v9\", \"name\": \"송람나\", \"reason\": \"최근 8주 중 2주 출석으로 출석이 부족하며, 반려동물 사망이라는 최근 경사로 정서적 고통을 겪고 있어 심방을 통해 정서적 지지가 필요함\"}, {\"rank\": 3, \"id\": \"puYXbc\", \"name\": \"송수도\", \"reason\": \"최근 8주 중 0주 출석으로 출석이 전혀 없으며, 연락이 잘 닿지 않아 소속감이 떨어지고 있어 심방을 통해 재연결이 필요함\"}, {\"rank\": 4, \"id\": \"RBsChV\", \"name\": \"윤서재\", \"reason\": \"만성 질환으로 정기 검진 중이며, 자녀 입시 스트레스로 가정 내 스트레스가 크고, 자녀 진로 및 우울감 극복 기도가 있어 심방을 통해 가정과 공동체 지원이 필요함\"}, {\"rank\": 5, \"id\": \"jtdoFr\", \"name\": \"임가나\", \"reason\": \"요양병원 입원 중이며, 장기 입원으로 공동체와 접촉이 거의 끊긴 상태로 심방을 통해 정서적 지지와 기도가 필요함\"}, {\"rank\": 6, \"id\": \"vAJ1gN\", \"name\": \"송진연\", \"reason\": \"최근 8주 중 4주 출석하며, 배우자 별세 후 혼자 지내는 상황에서 식사를 거르는 날이 많아 정서적 지지가 필요함\"}, {\"rank\": 7, \"id\": \"XUlTrr\", \"name\": \"권로나\", \"reason\": \"출산 후 산후 회복 중이며, 외부 방문보다 전화 연락을 선호하므로 심방을 통해 가족과 공동체에 대한 지지가 필요함\"}, {\"rank\": 8, \"id\": \"4ytcGt\", \"name\": \"백시원\", \"reason\": \"3주 전 수술 후 재활 중이며, 거동이 불편해 심방이 어려워지지만, 기도제목이 자녀 신앙 성장과 부모님 건강 등으로 공동체 참여가 중요함\"}, {\"rank\": 9, \"id\": \"6aHvSa\", \"name\": \"강영수\", \"reason\": \"최근 이사 후 출석이 6주 중 6주 출석하며, 최근 이사로 가정 변화가 있었고, 건강 회복 기도가 있어 심방을 통해 가정 안정에 기여할 수 있음\"}, {\"rank\": 10, \"id\": \"iG0WlM\", \"name\": \"윤빈지\", \"reason\": \"가벼운 우울감을 호소하며, 반려동물 사망 경사 후 정서적 고통이 있고, 학업 및 건강 회복 기도가 있어 정서적 지지가 필요함\"}]}",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T13:59:01",
    "model": "qwen3:4b-instruct-2507-q4_K_M",
    "set": "set09",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14743,
    "perf": {
      "elapsed_sec": 17.4,
      "load_sec": 0.0,
      "tokens_per_sec": 68.9,
      "speed_note": null,
      "prompt_eval_count": 10367,
      "eval_count": 932,
      "total_duration_ns": 17364180300,
      "load_duration_ns": 3359400,
      "prompt_eval_duration_ns": 3144712000,
      "eval_duration_ns": 13536425000
    },
    "validation": {
      "format_ok": true,
      "issues": [],
      "hit_include": 5,
      "include_total": 10,
      "miss_exclude": 0,
      "exclude_total": 5,
      "picked_ids": [
        "bAs062",
        "gKvDaG",
        "i3MwOi",
        "laFeVH",
        "5u0Y2V",
        "rjz61I",
        "619vy3",
        "iSOD3X",
        "oqu8re",
        "aPEIsn"
      ]
    },
    "answer": "{\"top10\": [{\"rank\": 1, \"id\": \"bAs062\", \"name\": \"이호진\", \"reason\": \"최근 8주 중 5주 출석하고 있으며, 지난주 모친상 후 장례 절차로 2주간 연락이 어려웠던 점을 고려해, 가족 상황 변화에 대한 심방이 필요하며, 자녀 정호이와 배우자 권시나의 기도제목이 가족 관계 회복과 자녀 신앙 성장에 초점이 맞춰져 있음\"}, {\"rank\": 2, \"id\": \"gKvDaG\", \"name\": \"신진서\", \"reason\": \"배우자 간병 부담이 크고, 최근 8주 중 1주 출석으로 예배 참석이 부족하며, 기도제목에 가족 관계 회복과 건강 회복이 포함되어 있어 가족 지원과 건강 회복을 위한 심방이 필요함\"}, {\"rank\": 3, \"id\": \"i3MwOi\", \"name\": \"장경연\", \"reason\": \"만성 신장질환으로 격주 투석 중이며, 체력 저하로 예배 참석이 점차 줄고 있어 건강 상태와 기도제목(부모님 건강, 직장 내 어려움)을 고려해 심방이 필요함\"}, {\"rank\": 4, \"id\": \"laFeVH\", \"name\": \"안아건\", \"reason\": \"최근 8주 중 0주 출석으로 예배 참석이 없으며, 기도제목에 우울감 극복, 가족 관계 회복, 재정적 어려움 해결이 포함되어 있어 정서적·경제적 지원이 필요함\"}, {\"rank\": 5, \"id\": \"5u0Y2V\", \"name\": \"권채수\", \"reason\": \"당뇨 관리 중이며, 최근 8주 중 4주 출석하고 있어 건강 관리와 기도제목(건강 회복, 우울감 극복)을 고려해 심방이 필요함\"}, {\"rank\": 6, \"id\": \"rjz61I\", \"name\": \"권수결\", \"reason\": \"지난주 부친상 후 첫 예배 참석 예정이며, 가족 관계 회복과 이사/거주 문제 등 기도제목이 포함되어 있어 가족 상황 변화에 대한 심방이 필요함\"}, {\"rank\": 7, \"id\": \"619vy3\", \"name\": \"오채유\", \"reason\": \"타 지역 이주 예정이며, 자녀 손도결과의 기도제목(자녀 진로 결정, 이사/거주 문제)을 고려해 이주 전에 가족과의 연결을 위한 심방이 필요함\"}, {\"rank\": 8, \"id\": \"iSOD3X\", \"name\": \"전진지\", \"reason\": \"배우자 별세 후 장기 결석 중이며, 고혈압으로 정기 통원 중이며, 기도제목에 가족 관계 회복과 건강 회복이 포함되어 있어 건강과 가족 지원을 위한 심방이 필요함\"}, {\"rank\": 9, \"id\": \"oqu8re\", \"name\": \"안규연\", \"reason\": \"가벼운 우울감을 호소하며, 자녀 이도연과 부모님 건강에 대한 기도제목이 포함되어 있어 정서적 지원이 필요하며, 최근 8주 중 6주 출석으로 출석이 비교적 높음\"}, {\"rank\": 10, \"id\": \"aPEIsn\", \"name\": \"윤서온\", \"reason\": \"한 달 전 실직으로 경제적 어려움을 언급하며, 기도제목에 직장 내 어려움, 자녀 진로 결정, 군 복무 중인 자녀가 포함되어 있어 재정적·가족적 지원이 필요함\"}]}",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T13:59:11",
    "model": "qwen3:4b-instruct-2507-q4_K_M",
    "set": "set09",
    "attempt": 2,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14743,
    "perf": {
      "elapsed_sec": 10.0,
      "load_sec": 0.0,
      "tokens_per_sec": 69.5,
      "speed_note": null,
      "prompt_eval_count": 10367,
      "eval_count": 696,
      "total_duration_ns": 10044870400,
      "load_duration_ns": 1699800,
      "prompt_eval_duration_ns": 17898000,
      "eval_duration_ns": 10014487000
    },
    "validation": {
      "format_ok": true,
      "issues": [],
      "hit_include": 5,
      "include_total": 10,
      "miss_exclude": 0,
      "exclude_total": 5,
      "picked_ids": [
        "bAs062",
        "gKvDaG",
        "i3MwOi",
        "laFeVH",
        "5u0Y2V",
        "rjz61I",
        "619vy3",
        "iSOD3X",
        "oqu8re",
        "aPEIsn"
      ]
    },
    "answer": "{\"top10\": [{\"rank\": 1, \"id\": \"bAs062\", \"name\": \"이호진\", \"reason\": \"최근 8주 중 5주 출석하고 있으며, 지난주 모친상 후 장례 절차로 2주간 연락이 어려웠던 점을 고려해, 가족 상황이 변화한 교인으로 심방 우선순위가 높음\"}, {\"rank\": 2, \"id\": \"gKvDaG\", \"name\": \"신진서\", \"reason\": \"배우자 간병 부담이 크고, 최근 8주 중 1주 출석으로 예배 참석이 부족하며, 가족과의 관계 회복이 기도제목에 포함되어 있음\"}, {\"rank\": 3, \"id\": \"i3MwOi\", \"name\": \"장경연\", \"reason\": \"만성 신장질환으로 격주 투석 중이며, 체력 저하로 예배 참석이 점차 줄고 있음\"}, {\"rank\": 4, \"id\": \"laFeVH\", \"name\": \"안아건\", \"reason\": \"최근 8주 중 0주 출석으로 출석이 거의 없으며, 건강 회복과 가족 관계 회복이 기도제목에 포함되어 있음\"}, {\"rank\": 5, \"id\": \"5u0Y2V\", \"name\": \"권채수\", \"reason\": \"당뇨 관리 중이며, 최근 8주 중 4주 출석, 봉사팀 리더로 활동 중이지만 건강 상태가 우려됨\"}, {\"rank\": 6, \"id\": \"rjz61I\", \"name\": \"권수결\", \"reason\": \"지난주 부친상 후 첫 예배 참석 예정이며, 가족 관계 회복이 기도제목에 포함되어 있음\"}, {\"rank\": 7, \"id\": \"619vy3\", \"name\": \"오채유\", \"reason\": \"타 지역 이주 예정이며, 자녀와 가족의 진로 결정이 기도제목에 포함되어 있음\"}, {\"rank\": 8, \"id\": \"iSOD3X\", \"name\": \"전진지\", \"reason\": \"배우자 별세 후 장기 결석 중이며, 고혈압으로 정기 통원 중이며, 가족 관계 회복이 기도제목에 포함됨\"}, {\"rank\": 9, \"id\": \"oqu8re\", \"name\": \"안규연\", \"reason\": \"가벼운 우울감을 호소하며, 자녀와 부모님 건강이 기도제목에 포함되어 있음\"}, {\"rank\": 10, \"id\": \"aPEIsn\", \"name\": \"윤서온\", \"reason\": \"한 달 전 실직으로 경제적 어려움을 언급하며, 직장 내 어려움과 자녀 진로 결정이 기도제목에 포함됨\"}]}",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T13:59:25",
    "model": "qwen3:4b-instruct-2507-q4_K_M",
    "set": "set10",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14713,
    "perf": {
      "elapsed_sec": 14.3,
      "load_sec": 0.0,
      "tokens_per_sec": 69.0,
      "speed_note": null,
      "prompt_eval_count": 10339,
      "eval_count": 725,
      "total_duration_ns": 14273089900,
      "load_duration_ns": 3431100,
      "prompt_eval_duration_ns": 3126149000,
      "eval_duration_ns": 10502027000
    },
    "validation": {
      "format_ok": true,
      "issues": [],
      "hit_include": 2,
      "include_total": 10,
      "miss_exclude": 3,
      "exclude_total": 5,
      "picked_ids": [
        "eIdMWK",
        "TEeRI2",
        "SSHSAu",
        "IKOXbT",
        "av2RyM",
        "RWfN9H",
        "D5EzQR",
        "3C46wc",
        "gcyNHh",
        "VTjjG6"
      ]
    },
    "answer": "{\"top10\": [{\"rank\": 1, \"id\": \"eIdMWK\", \"name\": \"한아진\", \"reason\": \"최근 8주 중 7주 출석하고 있으며, 가족과 자녀들의 건강 및 기도제목이 다양하고, 봉사팀 리더로서 교회 활동에 기여하고 있음\"}, {\"rank\": 2, \"id\": \"TEeRI2\", \"name\": \"권영우\", \"reason\": \"최근 8주 중 7주 출석하고 있으며, 알레르기로 병원 통원 중이지만, 기도제목이 교회 공동체와 건강 회복에 초점이 있음\"}, {\"rank\": 3, \"id\": \"SSHSAu\", \"name\": \"최하이\", \"reason\": \"최근 8주 중 6주 출석하고 있으며, 자녀 입시 스트레스로 가정 내 긴장이 있음, 기도제목이 가족 관계 회복에 초점\"}, {\"rank\": 4, \"id\": \"IKOXbT\", \"name\": \"이름준\", \"reason\": \"최근 8주 중 8주 출석하고 있으며, 자녀들과 가족의 건강을 기도하고 있음, 심방 기록이 많고 정기적인 출석\"}, {\"rank\": 5, \"id\": \"av2RyM\", \"name\": \"배태도\", \"reason\": \"최근 8주 중 5주 출석하고 있으며, 자녀 신앙 성장과 관계 회복을 기도하고 있음, 봉사팀 리더로 활동 중\"}, {\"rank\": 6, \"id\": \"RWfN9H\", \"name\": \"배태원\", \"reason\": \"최근 8주 중 7주 출석하고 있으며, 자녀들의 신앙 성장을 기도하고 있음, 심방 기록이 많고 가족 관계가 명확\"}, {\"rank\": 7, \"id\": \"D5EzQR\", \"name\": \"문결결\", \"reason\": \"최근 8주 중 8주 출석하고 있으며, 자녀와 가족의 기도제목이 포함되어 있음, 봉사팀에서 활동 중\"}, {\"rank\": 8, \"id\": \"3C46wc\", \"name\": \"임하재\", \"reason\": \"최근 8주 중 1주 출석하고 있지만, 수술 후 재활 중이며, 자녀와 가족의 기도제목이 포함되어 있음\"}, {\"rank\": 9, \"id\": \"gcyNHh\", \"name\": \"이우솔\", \"reason\": \"최근 8주 중 3주 출석하고 있으며, 배우자 별세 후 심리적 부담이 있음, 자녀와 가족의 기도제목이 포함되어 있음\"}, {\"rank\": 10, \"id\": \"VTjjG6\", \"name\": \"임나시\", \"reason\": \"최근 8주 중 5주 출석하고 있으며, 모친상 후 가족 관계 회복을 기도하고 있음\"}]}",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T13:59:36",
    "model": "qwen3:4b-instruct-2507-q4_K_M",
    "set": "set10",
    "attempt": 2,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14713,
    "perf": {
      "elapsed_sec": 10.9,
      "load_sec": 0.0,
      "tokens_per_sec": 69.5,
      "speed_note": null,
      "prompt_eval_count": 10339,
      "eval_count": 753,
      "total_duration_ns": 10869668100,
      "load_duration_ns": 3418100,
      "prompt_eval_duration_ns": 17817000,
      "eval_duration_ns": 10837664000
    },
    "validation": {
      "format_ok": true,
      "issues": [],
      "hit_include": 1,
      "include_total": 10,
      "miss_exclude": 4,
      "exclude_total": 5,
      "picked_ids": [
        "eIdMWK",
        "TEeRI2",
        "SSHSAu",
        "IKOXbT",
        "CdOFOm",
        "3vZ1n5",
        "RWfN9H",
        "D5EzQR",
        "VTjjG6",
        "av2RyM"
      ]
    },
    "answer": "{\"top10\": [{\"rank\": 1, \"id\": \"eIdMWK\", \"name\": \"한아진\", \"reason\": \"최근 8주 중 7주 출석하고 있으며, 가족과 자녀들의 건강 및 기도제목이 다양하고, 봉사팀 리더로서 교회 활동에 적극적으로 참여하고 있음\"}, {\"rank\": 2, \"id\": \"TEeRI2\", \"name\": \"권영우\", \"reason\": \"최근 8주 중 7주 출석하고 있으며, 알레르기로 병원 통원 중이지만, 기도제목이 교회 공동체와 건강 회복에 초점이 맞춰져 있음\"}, {\"rank\": 3, \"id\": \"SSHSAu\", \"name\": \"최하이\", \"reason\": \"최근 8주 중 6주 출석하고 있으며, 자녀 입시 스트레스로 가정 내 긴장이 있음, 기도제목이 가족 관계 회복과 임신 순산에 포함되어 있음\"}, {\"rank\": 4, \"id\": \"IKOXbT\", \"name\": \"이름준\", \"reason\": \"최근 8주 중 8주 출석하고 있으며, 자녀들과 배우자 가족관계가 명확하고, 기도제목이 부모님 건강과 자녀 신앙 성장에 초점이 있음\"}, {\"rank\": 5, \"id\": \"CdOFOm\", \"name\": \"오우아\", \"reason\": \"최근 8주 중 8주 출석하고 있으며, 알레르기로 병원 통원 중이지만, 기도제목이 가족 관계 회복과 자녀 신앙 성장에 포함되어 있음\"}, {\"rank\": 6, \"id\": \"3vZ1n5\", \"name\": \"홍현율\", \"reason\": \"최근 8주 중 8주 출석하고 있으며, 기도제목이 가족 관계 회복과 재정적 어려움 해결에 포함되어 있음\"}, {\"rank\": 7, \"id\": \"RWfN9H\", \"name\": \"배태원\", \"reason\": \"최근 8주 중 7주 출석하고 있으며, 자녀들과 가족관계가 명확하고, 기도제목이 자녀 신앙 성장과 교회 공동체에 초점이 있음\"}, {\"rank\": 8, \"id\": \"D5EzQR\", \"name\": \"문결결\", \"reason\": \"최근 8주 중 8주 출석하고 있으며, 자녀와 가족 관계 회복에 기도제목이 포함되어 있음\"}, {\"rank\": 9, \"id\": \"VTjjG6\", \"name\": \"임나시\", \"reason\": \"최근 8주 중 5주 출석하고 있으며, 자녀의 군 복무와 가족 관계 회복에 기도제목이 포함되어 있음\"}, {\"rank\": 10, \"id\": \"av2RyM\", \"name\": \"배태도\", \"reason\": \"최근 8주 중 5주 출석하고 있으며, 자녀 신앙 성장과 관계 회복에 기도제목이 포함되어 있음\"}]}",
    "error": null
  }
];
window.WARMUP = [
  {
    "phase": "warmup",
    "run_at": "2026-09-16T13:55:16",
    "model": "qwen3:4b-instruct-2507-q4_K_M",
    "set": "set01",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 15152,
    "perf": {
      "elapsed_sec": 10.9,
      "load_sec": 0.0,
      "tokens_per_sec": 68.7,
      "speed_note": null,
      "prompt_eval_count": 10747,
      "eval_count": 737,
      "total_duration_ns": 10889995400,
      "load_duration_ns": 2337300,
      "prompt_eval_duration_ns": 152932000,
      "eval_duration_ns": 10724968000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: HLxEbU -> 양인은",
        "이름 불일치: GcQ3Ze -> 손서가"
      ],
      "hit_include": 3,
      "include_total": 10,
      "miss_exclude": 2,
      "exclude_total": 5,
      "picked_ids": [
        "JYzftw",
        "P0qq1g",
        "3ncNfo",
        "Ehqs5A",
        "TV7FTS",
        "HLxEbU",
        "GcQ3Ze",
        "PQCjiM",
        "ehh5g7",
        "9UDb6k"
      ]
    },
    "answer": "{\"top10\": [{\"rank\": 1, \"id\": \"JYzftw\", \"name\": \"정름하\", \"reason\": \"가벼운 우울감을 호소하고 있으며, 최근 8주 중 1주 출석, 심방 기록 11회로 지속적인 관심이 필요하며, 기도제목에 우울감 극복이 포함되어 있음\"}, {\"rank\": 2, \"id\": \"P0qq1g\", \"name\": \"송서호\", \"reason\": \"최근 8주 중 8주 출석, 부모와 함께 출석하며, 최근 이사 후 가족 관계 회복 기도가 포함되어 있음\"}, {\"rank\": 3, \"id\": \"3ncNfo\", \"name\": \"황이시\", \"reason\": \"최근 8주 중 8주 출석, 자녀가 군 복무 중이며, 기도제목에 자녀 진로 결정과 군 복무 중인 자녀가 포함되어 있음\"}, {\"rank\": 4, \"id\": \"Ehqs5A\", \"name\": \"백온규\", \"reason\": \"최근 8주 중 2주 출석, 반려동물 사망 후 기도제목에 건강 회복이 포함되어 있음\"}, {\"rank\": 5, \"id\": \"TV7FTS\", \"name\": \"김나하\", \"reason\": \"최근 8주 중 3주 출석, 출산 후 산후 회복 중이며, 기도제목에 자녀 신앙 성장과 부모님 건강이 포함되어 있음\"}, {\"rank\": 6, \"id\": \"HLxEbU\", \"name\": \"양인은\", \"reason\": \"최근 8주 중 4주 출석, 무릎 수술 후 재활 중이며, 기도제목에 자녀 신앙 성장과 시험 합격이 포함되어 있음\"}, {\"rank\": 7, \"id\": \"GcQ3Ze\", \"name\": \"손서가\", \"reason\": \"최근 8주 중 1주 출석, 3주 전 수술 후 재활 중이며, 기도제목에 재정적 어려움 해결이 포함되어 있음\"}, {\"rank\": 8, \"id\": \"PQCjiM\", \"name\": \"조수경\", \"reason\": \"최근 8주 중 8주 출석, 자녀가 3명 있으며, 기도제목에 자녀 진로 결정과 가족 관계 회복이 포함되어 있음\"}, {\"rank\": 9, \"id\": \"ehh5g7\", \"name\": \"오서엘\", \"reason\": \"최근 8주 중 7주 출석, 최근 새신자로 등록되었으며, 기도제목에 관계 회복과 자녀 진로 결정이 포함되어 있음\"}, {\"rank\": 10, \"id\": \"9UDb6k\", \"name\": \"임우아\", \"reason\": \"최근 8주 중 3주 출석, 항암 치료 중이며, 기도제목에 재정적 어려움 해결과 관계 회복이 포함되어 있음\"}]}",
    "error": null
  }
];
window.ANSWER_KEY = {
  "set01": {
    "must_include": [
      {
        "id": "dn4vYH",
        "name": "양규온",
        "case": "3주 전 배우자 수술",
        "kind": "급성"
      },
      {
        "id": "xU95JX",
        "name": "황우인",
        "case": "2주 전 자녀 교통사고",
        "kind": "급성"
      },
      {
        "id": "TV7FTS",
        "name": "김나하",
        "case": "2주 전 출산",
        "kind": "급성"
      },
      {
        "id": "HLxEbU",
        "name": "손은영",
        "case": "지난주 부친상",
        "kind": "급성"
      },
      {
        "id": "MnaBL1",
        "name": "손서가",
        "case": "3주 전 본인 수술",
        "kind": "급성"
      },
      {
        "id": "GleXnY",
        "name": "장민온",
        "case": "요양병원 장기 입원",
        "kind": "만성"
      },
      {
        "id": "8qJ43t",
        "name": "정시원",
        "case": "출석 0회, 연락 두절",
        "kind": "만성"
      },
      {
        "id": "9UDb6k",
        "name": "임우아",
        "case": "항암 통원 치료",
        "kind": "만성"
      },
      {
        "id": "M4dbV8",
        "name": "조윤도",
        "case": "두 달째 발길 끊음",
        "kind": "만성"
      },
      {
        "id": "ARig34",
        "name": "최시유",
        "case": "낙상 후 자택 요양",
        "kind": "만성"
      }
    ],
    "must_exclude": [
      {
        "id": "tG3IvT",
        "name": "권서태",
        "case": "7주 출석, 봉사팀 활동"
      },
      {
        "id": "PQCjiM",
        "name": "조수경",
        "case": "만근, 봉사 참여"
      },
      {
        "id": "H7K3hD",
        "name": "손담로",
        "case": "만근, 특이사항 없음"
      },
      {
        "id": "Y7dWWm",
        "name": "백아담",
        "case": "7주 출석, 특이사항 없음"
      },
      {
        "id": "3ncNfo",
        "name": "황이시",
        "case": "만근, 요청 사항 없음"
      }
    ],
    "members": {
      "dn4vYH": {
        "name": "양규온",
        "age": 56,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "본인 특이사항 없음",
        "family_event": "3주 전 배우자 수술",
        "special_note": "본인이 아니라 배우자 간병 부담이 큰 상황",
        "last_visitation_date": "2025-10-13"
      },
      "xU95JX": {
        "name": "황우인",
        "age": 34,
        "recent_attendance": "최근 8주 중 2주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 자녀 교통사고",
        "special_note": "자녀가 입원해 병원에서 지내는 날이 많음",
        "last_visitation_date": "2026-01-22"
      },
      "TV7FTS": {
        "name": "김나하",
        "age": 35,
        "recent_attendance": "최근 8주 중 3주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 출산",
        "special_note": "산후 회복 중, 외부 방문보다 전화 연락을 선호할 수 있음",
        "last_visitation_date": "2026-05-08"
      },
      "HLxEbU": {
        "name": "손은영",
        "age": 48,
        "recent_attendance": "최근 8주 중 6주 출석",
        "health_note": "특이사항 없음",
        "family_event": "지난주 부친상",
        "special_note": "장례 이후 첫 예배 참석 예정",
        "last_visitation_date": "2026-01-29"
      },
      "MnaBL1": {
        "name": "손서가",
        "age": 50,
        "recent_attendance": "최근 8주 중 1주 출석",
        "health_note": "3주 전 수술, 현재 재활 중",
        "family_event": "본인 수술",
        "special_note": "회복 중이라 거동이 불편함",
        "last_visitation_date": "2026-04-15"
      },
      "GleXnY": {
        "name": "장민온",
        "age": 81,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "요양병원 입원 중",
        "family_event": "없음",
        "special_note": "장기 입원으로 공동체와 접촉이 거의 끊긴 상태",
        "last_visitation_date": "2025-02-28"
      },
      "8qJ43t": {
        "name": "정시원",
        "age": 46,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "연락이 잘 닿지 않음, 이유 불명",
        "last_visitation_date": "2025-11-18"
      },
      "9UDb6k": {
        "name": "임우아",
        "age": 81,
        "recent_attendance": "최근 8주 중 3주 출석",
        "health_note": "항암 치료로 통원 중",
        "family_event": "없음",
        "special_note": "치료 일정이 있는 주에는 참석이 어렵다고 함",
        "last_visitation_date": "2025-06-09"
      },
      "M4dbV8": {
        "name": "조윤도",
        "age": 46,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "두 달째 예배에 나오지 않고 있음",
        "last_visitation_date": "2025-09-21"
      },
      "ARig34": {
        "name": "최시유",
        "age": 84,
        "recent_attendance": "최근 8주 중 2주 출석",
        "health_note": "지난달 낙상으로 입원, 현재 자택 요양 중",
        "family_event": "없음",
        "special_note": "거동이 불편해 혼자 예배 참석이 어려움",
        "last_visitation_date": "2025-07-21"
      },
      "tG3IvT": {
        "name": "권서태",
        "age": 46,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "봉사팀에서 활동 중",
        "last_visitation_date": "2026-07-16"
      },
      "PQCjiM": {
        "name": "조수경",
        "age": 35,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "정기적으로 봉사에 참여, 최근 특별한 이슈 없음",
        "last_visitation_date": "2026-06-30"
      },
      "H7K3hD": {
        "name": "손담로",
        "age": 54,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특이사항 없음",
        "last_visitation_date": "2026-08-12"
      },
      "Y7dWWm": {
        "name": "백아담",
        "age": 29,
        "recent_attendance": "최근 8주 중 7주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특이사항 없음",
        "last_visitation_date": "2026-07-28"
      },
      "3ncNfo": {
        "name": "황이시",
        "age": 46,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특별한 요청 사항 없음",
        "last_visitation_date": "2026-05-31"
      }
    }
  },
  "set02": {
    "must_include": [
      {
        "id": "pYdoF6",
        "name": "최솔지",
        "case": "지난주 부친상",
        "kind": "급성"
      },
      {
        "id": "DVpQoZ",
        "name": "권담연",
        "case": "2주 전 자녀 교통사고",
        "kind": "급성"
      },
      {
        "id": "B9DVav",
        "name": "박하우",
        "case": "2주 전 배우자 별세",
        "kind": "급성"
      },
      {
        "id": "M9jMAe",
        "name": "강영솔",
        "case": "3주 전 본인 수술",
        "kind": "급성"
      },
      {
        "id": "uOzEYk",
        "name": "강진가",
        "case": "2주 전 출산",
        "kind": "급성"
      },
      {
        "id": "wzrqYk",
        "name": "유시가",
        "case": "출석 0회, 연락 두절",
        "kind": "만성"
      },
      {
        "id": "Qv0uoE",
        "name": "송이경",
        "case": "격주 투석",
        "kind": "만성"
      },
      {
        "id": "DYAWkn",
        "name": "김하태",
        "case": "거동 불편으로 외출 어려움",
        "kind": "만성"
      },
      {
        "id": "S5qfQU",
        "name": "손나서",
        "case": "낙상 후 자택 요양",
        "kind": "만성"
      },
      {
        "id": "fu4I1f",
        "name": "배아연",
        "case": "항암 통원 치료",
        "kind": "만성"
      }
    ],
    "must_exclude": [
      {
        "id": "bM8XSB",
        "name": "양민서",
        "case": "만근, 봉사 참여"
      },
      {
        "id": "2bMBjc",
        "name": "정경가",
        "case": "만근, 특이사항 없음"
      },
      {
        "id": "fWBeEd",
        "name": "권하율",
        "case": "7주 출석, 특이사항 없음"
      },
      {
        "id": "irEiOL",
        "name": "권서윤",
        "case": "만근, 요청 사항 없음"
      },
      {
        "id": "frK9Uv",
        "name": "고재나",
        "case": "7주 출석, 봉사팀 활동"
      }
    ],
    "members": {
      "pYdoF6": {
        "name": "최솔지",
        "age": 37,
        "recent_attendance": "최근 8주 중 5주 출석",
        "health_note": "특이사항 없음",
        "family_event": "지난주 부친상",
        "special_note": "장례 이후 첫 예배 참석 예정",
        "last_visitation_date": "2026-01-26"
      },
      "DVpQoZ": {
        "name": "권담연",
        "age": 33,
        "recent_attendance": "최근 8주 중 3주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 자녀 교통사고",
        "special_note": "자녀가 입원해 병원에서 지내는 날이 많음",
        "last_visitation_date": "2026-03-03"
      },
      "B9DVav": {
        "name": "박하우",
        "age": 75,
        "recent_attendance": "최근 8주 중 3주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 배우자 별세",
        "special_note": "혼자 지내게 되어 식사를 거르는 날이 많다고 함",
        "last_visitation_date": "2025-08-30"
      },
      "M9jMAe": {
        "name": "강영솔",
        "age": 46,
        "recent_attendance": "최근 8주 중 2주 출석",
        "health_note": "3주 전 수술, 현재 재활 중",
        "family_event": "본인 수술",
        "special_note": "회복 중이라 거동이 불편함",
        "last_visitation_date": "2026-01-28"
      },
      "uOzEYk": {
        "name": "강진가",
        "age": 38,
        "recent_attendance": "최근 8주 중 3주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 출산",
        "special_note": "산후 회복 중, 외부 방문보다 전화 연락을 선호할 수 있음",
        "last_visitation_date": "2026-04-30"
      },
      "wzrqYk": {
        "name": "유시가",
        "age": 23,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "연락이 잘 닿지 않음, 이유 불명",
        "last_visitation_date": "2025-05-14"
      },
      "Qv0uoE": {
        "name": "송이경",
        "age": 40,
        "recent_attendance": "최근 8주 중 1주 출석",
        "health_note": "만성 신장질환으로 격주 투석 중",
        "family_event": "없음",
        "special_note": "체력 저하로 예배 참석이 점차 줄고 있음",
        "last_visitation_date": "2025-03-16"
      },
      "DYAWkn": {
        "name": "김하태",
        "age": 83,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "무릎 관절염으로 보행이 어려움",
        "family_event": "없음",
        "special_note": "예배당 계단을 오르기 어려워 참석이 줄었다고 함",
        "last_visitation_date": "2025-04-10"
      },
      "S5qfQU": {
        "name": "손나서",
        "age": 81,
        "recent_attendance": "최근 8주 중 1주 출석",
        "health_note": "지난달 낙상으로 입원, 현재 자택 요양 중",
        "family_event": "없음",
        "special_note": "거동이 불편해 혼자 예배 참석이 어려움",
        "last_visitation_date": "2026-01-04"
      },
      "fu4I1f": {
        "name": "배아연",
        "age": 36,
        "recent_attendance": "최근 8주 중 1주 출석",
        "health_note": "항암 치료로 통원 중",
        "family_event": "없음",
        "special_note": "치료 일정이 있는 주에는 참석이 어렵다고 함",
        "last_visitation_date": "2025-10-03"
      },
      "bM8XSB": {
        "name": "양민서",
        "age": 43,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "정기적으로 봉사에 참여, 최근 특별한 이슈 없음",
        "last_visitation_date": "2026-08-15"
      },
      "2bMBjc": {
        "name": "정경가",
        "age": 29,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특이사항 없음",
        "last_visitation_date": "2026-06-26"
      },
      "fWBeEd": {
        "name": "권하율",
        "age": 43,
        "recent_attendance": "최근 8주 중 7주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특이사항 없음",
        "last_visitation_date": "2026-07-17"
      },
      "irEiOL": {
        "name": "권서윤",
        "age": 39,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특별한 요청 사항 없음",
        "last_visitation_date": "2026-05-19"
      },
      "frK9Uv": {
        "name": "고재나",
        "age": 31,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "봉사팀에서 활동 중",
        "last_visitation_date": "2026-07-06"
      }
    }
  },
  "set03": {
    "must_include": [
      {
        "id": "qyB6mm",
        "name": "이람유",
        "case": "2주 전 배우자 별세",
        "kind": "급성"
      },
      {
        "id": "gydMuq",
        "name": "오현솔",
        "case": "2주 전 자녀 교통사고",
        "kind": "급성"
      },
      {
        "id": "vrtXcR",
        "name": "고민현",
        "case": "지난주 응급실 이송",
        "kind": "급성"
      },
      {
        "id": "A0Pul8",
        "name": "문서재",
        "case": "3주 전 본인 수술",
        "kind": "급성"
      },
      {
        "id": "K5iJaU",
        "name": "송현재",
        "case": "지난주 모친상",
        "kind": "급성"
      },
      {
        "id": "aizvcI",
        "name": "윤빈건",
        "case": "항암 통원 치료",
        "kind": "만성"
      },
      {
        "id": "veEGCG",
        "name": "이진호",
        "case": "출석 0회, 연락 두절",
        "kind": "만성"
      },
      {
        "id": "5GYlky",
        "name": "강도하",
        "case": "요양병원 장기 입원",
        "kind": "만성"
      },
      {
        "id": "BygmdS",
        "name": "강현민",
        "case": "두 달째 발길 끊음",
        "kind": "만성"
      },
      {
        "id": "oImSvz",
        "name": "이결윤",
        "case": "한 달 전 실직",
        "kind": "만성"
      }
    ],
    "must_exclude": [
      {
        "id": "VN3qlb",
        "name": "배규서",
        "case": "만근, 특이사항 없음"
      },
      {
        "id": "2ymUvC",
        "name": "양선솔",
        "case": "만근, 요청 사항 없음"
      },
      {
        "id": "rz6i29",
        "name": "안지시",
        "case": "7주 출석, 봉사팀 활동"
      },
      {
        "id": "pS5Xyd",
        "name": "권은진",
        "case": "만근, 봉사 참여"
      },
      {
        "id": "Ul0tfp",
        "name": "황나하",
        "case": "7주 출석, 특이사항 없음"
      }
    ],
    "members": {
      "qyB6mm": {
        "name": "이람유",
        "age": 61,
        "recent_attendance": "최근 8주 중 6주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 배우자 별세",
        "special_note": "혼자 지내게 되어 식사를 거르는 날이 많다고 함",
        "last_visitation_date": "2026-01-10"
      },
      "gydMuq": {
        "name": "오현솔",
        "age": 37,
        "recent_attendance": "최근 8주 중 2주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 자녀 교통사고",
        "special_note": "자녀가 입원해 병원에서 지내는 날이 많음",
        "last_visitation_date": "2025-10-06"
      },
      "vrtXcR": {
        "name": "고민현",
        "age": 83,
        "recent_attendance": "최근 8주 중 4주 출석",
        "health_note": "지난주 응급실 이송 후 입원 중",
        "family_event": "없음",
        "special_note": "입원 기간이 얼마나 될지 아직 정해지지 않음",
        "last_visitation_date": "2026-01-07"
      },
      "A0Pul8": {
        "name": "문서재",
        "age": 33,
        "recent_attendance": "최근 8주 중 1주 출석",
        "health_note": "3주 전 수술, 현재 재활 중",
        "family_event": "본인 수술",
        "special_note": "회복 중이라 거동이 불편함",
        "last_visitation_date": "2025-12-07"
      },
      "K5iJaU": {
        "name": "송현재",
        "age": 43,
        "recent_attendance": "최근 8주 중 7주 출석",
        "health_note": "특이사항 없음",
        "family_event": "지난주 모친상",
        "special_note": "장례 절차로 최근 2주간 연락이 어려웠음",
        "last_visitation_date": "2025-12-07"
      },
      "aizvcI": {
        "name": "윤빈건",
        "age": 72,
        "recent_attendance": "최근 8주 중 4주 출석",
        "health_note": "항암 치료로 통원 중",
        "family_event": "없음",
        "special_note": "치료 일정이 있는 주에는 참석이 어렵다고 함",
        "last_visitation_date": "2025-10-06"
      },
      "veEGCG": {
        "name": "이진호",
        "age": 28,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "연락이 잘 닿지 않음, 이유 불명",
        "last_visitation_date": "2025-05-04"
      },
      "5GYlky": {
        "name": "강도하",
        "age": 89,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "요양병원 입원 중",
        "family_event": "없음",
        "special_note": "장기 입원으로 공동체와 접촉이 거의 끊긴 상태",
        "last_visitation_date": "2025-10-03"
      },
      "BygmdS": {
        "name": "강현민",
        "age": 28,
        "recent_attendance": "최근 8주 중 1주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "두 달째 예배에 나오지 않고 있음",
        "last_visitation_date": "2025-05-04"
      },
      "oImSvz": {
        "name": "이결윤",
        "age": 28,
        "recent_attendance": "최근 8주 중 2주 출석",
        "health_note": "특이사항 없음",
        "family_event": "한 달 전 실직",
        "special_note": "경제적 어려움을 최근 대화 중 언급함",
        "last_visitation_date": "2025-11-07"
      },
      "VN3qlb": {
        "name": "배규서",
        "age": 28,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특이사항 없음",
        "last_visitation_date": "2026-07-18"
      },
      "2ymUvC": {
        "name": "양선솔",
        "age": 40,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특별한 요청 사항 없음",
        "last_visitation_date": "2026-06-19"
      },
      "rz6i29": {
        "name": "안지시",
        "age": 66,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "봉사팀에서 활동 중",
        "last_visitation_date": "2026-06-29"
      },
      "pS5Xyd": {
        "name": "권은진",
        "age": 67,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "정기적으로 봉사에 참여, 최근 특별한 이슈 없음",
        "last_visitation_date": "2026-07-08"
      },
      "Ul0tfp": {
        "name": "황나하",
        "age": 90,
        "recent_attendance": "최근 8주 중 7주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특이사항 없음",
        "last_visitation_date": "2026-06-06"
      }
    }
  },
  "set04": {
    "must_include": [
      {
        "id": "dTZlQF",
        "name": "조유경",
        "case": "2주 전 자녀 교통사고",
        "kind": "급성"
      },
      {
        "id": "2H1F2v",
        "name": "박이솔",
        "case": "지난주 모친상",
        "kind": "급성"
      },
      {
        "id": "ix85ag",
        "name": "권지결",
        "case": "3주 전 배우자 수술",
        "kind": "급성"
      },
      {
        "id": "cZaAVp",
        "name": "문규이",
        "case": "3주 전 본인 수술",
        "kind": "급성"
      },
      {
        "id": "VcbnkZ",
        "name": "배온결",
        "case": "2주 전 출산",
        "kind": "급성"
      },
      {
        "id": "QGOmX1",
        "name": "김현하",
        "case": "요양병원 장기 입원",
        "kind": "만성"
      },
      {
        "id": "dSXT2Z",
        "name": "강하태",
        "case": "낙상 후 자택 요양",
        "kind": "만성"
      },
      {
        "id": "BPo6VF",
        "name": "임서영",
        "case": "두 달째 발길 끊음",
        "kind": "만성"
      },
      {
        "id": "qIoO4c",
        "name": "강진인",
        "case": "한 달 전 실직",
        "kind": "만성"
      },
      {
        "id": "62XnvP",
        "name": "전서호",
        "case": "거동 불편으로 외출 어려움",
        "kind": "만성"
      }
    ],
    "must_exclude": [
      {
        "id": "VojBwW",
        "name": "배태결",
        "case": "만근, 요청 사항 없음"
      },
      {
        "id": "pMAeKJ",
        "name": "송채름",
        "case": "만근, 봉사 참여"
      },
      {
        "id": "ZBFZTz",
        "name": "전진온",
        "case": "7주 출석, 특이사항 없음"
      },
      {
        "id": "ijf1Gu",
        "name": "이시채",
        "case": "7주 출석, 봉사팀 활동"
      },
      {
        "id": "ElVkbD",
        "name": "최수영",
        "case": "만근, 특이사항 없음"
      }
    ],
    "members": {
      "dTZlQF": {
        "name": "조유경",
        "age": 48,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 자녀 교통사고",
        "special_note": "자녀가 입원해 병원에서 지내는 날이 많음",
        "last_visitation_date": "2025-11-17"
      },
      "2H1F2v": {
        "name": "박이솔",
        "age": 63,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "지난주 모친상",
        "special_note": "장례 절차로 최근 2주간 연락이 어려웠음",
        "last_visitation_date": "2026-03-03"
      },
      "ix85ag": {
        "name": "권지결",
        "age": 49,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "본인 특이사항 없음",
        "family_event": "3주 전 배우자 수술",
        "special_note": "본인이 아니라 배우자 간병 부담이 큰 상황",
        "last_visitation_date": "2026-03-10"
      },
      "cZaAVp": {
        "name": "문규이",
        "age": 32,
        "recent_attendance": "최근 8주 중 3주 출석",
        "health_note": "3주 전 수술, 현재 재활 중",
        "family_event": "본인 수술",
        "special_note": "회복 중이라 거동이 불편함",
        "last_visitation_date": "2025-11-22"
      },
      "VcbnkZ": {
        "name": "배온결",
        "age": 32,
        "recent_attendance": "최근 8주 중 3주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 출산",
        "special_note": "산후 회복 중, 외부 방문보다 전화 연락을 선호할 수 있음",
        "last_visitation_date": "2026-05-03"
      },
      "QGOmX1": {
        "name": "김현하",
        "age": 76,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "요양병원 입원 중",
        "family_event": "없음",
        "special_note": "장기 입원으로 공동체와 접촉이 거의 끊긴 상태",
        "last_visitation_date": "2025-09-25"
      },
      "dSXT2Z": {
        "name": "강하태",
        "age": 62,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "지난달 낙상으로 입원, 현재 자택 요양 중",
        "family_event": "없음",
        "special_note": "거동이 불편해 혼자 예배 참석이 어려움",
        "last_visitation_date": "2025-05-23"
      },
      "BPo6VF": {
        "name": "임서영",
        "age": 46,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "두 달째 예배에 나오지 않고 있음",
        "last_visitation_date": "2025-08-22"
      },
      "qIoO4c": {
        "name": "강진인",
        "age": 49,
        "recent_attendance": "최근 8주 중 5주 출석",
        "health_note": "특이사항 없음",
        "family_event": "한 달 전 실직",
        "special_note": "경제적 어려움을 최근 대화 중 언급함",
        "last_visitation_date": "2025-11-20"
      },
      "62XnvP": {
        "name": "전서호",
        "age": 57,
        "recent_attendance": "최근 8주 중 1주 출석",
        "health_note": "무릎 관절염으로 보행이 어려움",
        "family_event": "없음",
        "special_note": "예배당 계단을 오르기 어려워 참석이 줄었다고 함",
        "last_visitation_date": "2025-12-08"
      },
      "VojBwW": {
        "name": "배태결",
        "age": 29,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특별한 요청 사항 없음",
        "last_visitation_date": "2026-07-07"
      },
      "pMAeKJ": {
        "name": "송채름",
        "age": 41,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "정기적으로 봉사에 참여, 최근 특별한 이슈 없음",
        "last_visitation_date": "2026-07-18"
      },
      "ZBFZTz": {
        "name": "전진온",
        "age": 43,
        "recent_attendance": "최근 8주 중 7주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특이사항 없음",
        "last_visitation_date": "2026-06-14"
      },
      "ijf1Gu": {
        "name": "이시채",
        "age": 46,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "봉사팀에서 활동 중",
        "last_visitation_date": "2026-07-05"
      },
      "ElVkbD": {
        "name": "최수영",
        "age": 42,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특이사항 없음",
        "last_visitation_date": "2026-06-18"
      }
    }
  },
  "set05": {
    "must_include": [
      {
        "id": "83HnzM",
        "name": "전건하",
        "case": "2주 전 출산",
        "kind": "급성"
      },
      {
        "id": "vG0sMg",
        "name": "조재율",
        "case": "지난주 모친상",
        "kind": "급성"
      },
      {
        "id": "48KOtw",
        "name": "문아온",
        "case": "3주 전 배우자 수술",
        "kind": "급성"
      },
      {
        "id": "JQlFhK",
        "name": "배름솔",
        "case": "2주 전 자녀 교통사고",
        "kind": "급성"
      },
      {
        "id": "uenPmy",
        "name": "문시결",
        "case": "지난주 응급실 이송",
        "kind": "급성"
      },
      {
        "id": "O80nEw",
        "name": "박담하",
        "case": "낙상 후 자택 요양",
        "kind": "만성"
      },
      {
        "id": "EY5zIA",
        "name": "오서하",
        "case": "요양병원 장기 입원",
        "kind": "만성"
      },
      {
        "id": "318bxN",
        "name": "박빈도",
        "case": "항암 통원 치료",
        "kind": "만성"
      },
      {
        "id": "rAMEDC",
        "name": "최도다",
        "case": "한 달 전 실직",
        "kind": "만성"
      },
      {
        "id": "RCl5TX",
        "name": "김로경",
        "case": "격주 투석",
        "kind": "만성"
      }
    ],
    "must_exclude": [
      {
        "id": "qofsPh",
        "name": "권진호",
        "case": "만근, 봉사 참여"
      },
      {
        "id": "Pfur77",
        "name": "최규하",
        "case": "만근, 특이사항 없음"
      },
      {
        "id": "N2L4B6",
        "name": "강아준",
        "case": "7주 출석, 특이사항 없음"
      },
      {
        "id": "G4P4tg",
        "name": "송하율",
        "case": "만근, 요청 사항 없음"
      },
      {
        "id": "ozAIH1",
        "name": "유담가",
        "case": "7주 출석, 봉사팀 활동"
      }
    ],
    "members": {
      "83HnzM": {
        "name": "전건하",
        "age": 34,
        "recent_attendance": "최근 8주 중 2주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 출산",
        "special_note": "산후 회복 중, 외부 방문보다 전화 연락을 선호할 수 있음",
        "last_visitation_date": "2025-10-13"
      },
      "vG0sMg": {
        "name": "조재율",
        "age": 52,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "지난주 모친상",
        "special_note": "장례 절차로 최근 2주간 연락이 어려웠음",
        "last_visitation_date": "2026-02-22"
      },
      "48KOtw": {
        "name": "문아온",
        "age": 84,
        "recent_attendance": "최근 8주 중 1주 출석",
        "health_note": "본인 특이사항 없음",
        "family_event": "3주 전 배우자 수술",
        "special_note": "본인이 아니라 배우자 간병 부담이 큰 상황",
        "last_visitation_date": "2025-04-06"
      },
      "JQlFhK": {
        "name": "배름솔",
        "age": 34,
        "recent_attendance": "최근 8주 중 2주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 자녀 교통사고",
        "special_note": "자녀가 입원해 병원에서 지내는 날이 많음",
        "last_visitation_date": "2025-11-28"
      },
      "uenPmy": {
        "name": "문시결",
        "age": 88,
        "recent_attendance": "최근 8주 중 4주 출석",
        "health_note": "지난주 응급실 이송 후 입원 중",
        "family_event": "없음",
        "special_note": "입원 기간이 얼마나 될지 아직 정해지지 않음",
        "last_visitation_date": "2025-06-15"
      },
      "O80nEw": {
        "name": "박담하",
        "age": 60,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "지난달 낙상으로 입원, 현재 자택 요양 중",
        "family_event": "없음",
        "special_note": "거동이 불편해 혼자 예배 참석이 어려움",
        "last_visitation_date": "2025-07-11"
      },
      "EY5zIA": {
        "name": "오서하",
        "age": 84,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "요양병원 입원 중",
        "family_event": "없음",
        "special_note": "장기 입원으로 공동체와 접촉이 거의 끊긴 상태",
        "last_visitation_date": "2025-07-24"
      },
      "318bxN": {
        "name": "박빈도",
        "age": 52,
        "recent_attendance": "최근 8주 중 3주 출석",
        "health_note": "항암 치료로 통원 중",
        "family_event": "없음",
        "special_note": "치료 일정이 있는 주에는 참석이 어렵다고 함",
        "last_visitation_date": "2025-04-02"
      },
      "rAMEDC": {
        "name": "최도다",
        "age": 29,
        "recent_attendance": "최근 8주 중 3주 출석",
        "health_note": "특이사항 없음",
        "family_event": "한 달 전 실직",
        "special_note": "경제적 어려움을 최근 대화 중 언급함",
        "last_visitation_date": "2025-04-07"
      },
      "RCl5TX": {
        "name": "김로경",
        "age": 52,
        "recent_attendance": "최근 8주 중 2주 출석",
        "health_note": "만성 신장질환으로 격주 투석 중",
        "family_event": "없음",
        "special_note": "체력 저하로 예배 참석이 점차 줄고 있음",
        "last_visitation_date": "2025-02-16"
      },
      "qofsPh": {
        "name": "권진호",
        "age": 39,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "정기적으로 봉사에 참여, 최근 특별한 이슈 없음",
        "last_visitation_date": "2026-08-13"
      },
      "Pfur77": {
        "name": "최규하",
        "age": 39,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특이사항 없음",
        "last_visitation_date": "2026-08-07"
      },
      "N2L4B6": {
        "name": "강아준",
        "age": 30,
        "recent_attendance": "최근 8주 중 7주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특이사항 없음",
        "last_visitation_date": "2026-08-07"
      },
      "G4P4tg": {
        "name": "송하율",
        "age": 82,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특별한 요청 사항 없음",
        "last_visitation_date": "2026-05-20"
      },
      "ozAIH1": {
        "name": "유담가",
        "age": 63,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "봉사팀에서 활동 중",
        "last_visitation_date": "2026-07-16"
      }
    }
  },
  "set06": {
    "must_include": [
      {
        "id": "fPBwQi",
        "name": "홍채솔",
        "case": "2주 전 출산",
        "kind": "급성"
      },
      {
        "id": "er9Xad",
        "name": "권이엘",
        "case": "2주 전 배우자 별세",
        "kind": "급성"
      },
      {
        "id": "OjLez3",
        "name": "유우결",
        "case": "2주 전 자녀 교통사고",
        "kind": "급성"
      },
      {
        "id": "myDI7R",
        "name": "윤솔나",
        "case": "지난주 응급실 이송",
        "kind": "급성"
      },
      {
        "id": "I9D2FJ",
        "name": "윤진채",
        "case": "3주 전 본인 수술",
        "kind": "급성"
      },
      {
        "id": "H5Zymk",
        "name": "전유채",
        "case": "격주 투석",
        "kind": "만성"
      },
      {
        "id": "qYs73f",
        "name": "황은민",
        "case": "출석 0회, 연락 두절",
        "kind": "만성"
      },
      {
        "id": "jlTIOw",
        "name": "오하유",
        "case": "항암 통원 치료",
        "kind": "만성"
      },
      {
        "id": "wAmoOa",
        "name": "윤선건",
        "case": "거동 불편으로 외출 어려움",
        "kind": "만성"
      },
      {
        "id": "XoEuVd",
        "name": "최엘하",
        "case": "두 달째 발길 끊음",
        "kind": "만성"
      }
    ],
    "must_exclude": [
      {
        "id": "cPZCy9",
        "name": "송도다",
        "case": "7주 출석, 봉사팀 활동"
      },
      {
        "id": "uADlay",
        "name": "이건람",
        "case": "만근, 특이사항 없음"
      },
      {
        "id": "4SFfgm",
        "name": "송원시",
        "case": "7주 출석, 특이사항 없음"
      },
      {
        "id": "Z9Da9P",
        "name": "송빈람",
        "case": "만근, 봉사 참여"
      },
      {
        "id": "9ILOFi",
        "name": "최하민",
        "case": "만근, 요청 사항 없음"
      }
    ],
    "members": {
      "fPBwQi": {
        "name": "홍채솔",
        "age": 29,
        "recent_attendance": "최근 8주 중 3주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 출산",
        "special_note": "산후 회복 중, 외부 방문보다 전화 연락을 선호할 수 있음",
        "last_visitation_date": "2026-02-16"
      },
      "er9Xad": {
        "name": "권이엘",
        "age": 72,
        "recent_attendance": "최근 8주 중 5주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 배우자 별세",
        "special_note": "혼자 지내게 되어 식사를 거르는 날이 많다고 함",
        "last_visitation_date": "2025-08-24"
      },
      "OjLez3": {
        "name": "유우결",
        "age": 30,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 자녀 교통사고",
        "special_note": "자녀가 입원해 병원에서 지내는 날이 많음",
        "last_visitation_date": "2025-07-23"
      },
      "myDI7R": {
        "name": "윤솔나",
        "age": 47,
        "recent_attendance": "최근 8주 중 4주 출석",
        "health_note": "지난주 응급실 이송 후 입원 중",
        "family_event": "없음",
        "special_note": "입원 기간이 얼마나 될지 아직 정해지지 않음",
        "last_visitation_date": "2025-05-25"
      },
      "I9D2FJ": {
        "name": "윤진채",
        "age": 33,
        "recent_attendance": "최근 8주 중 1주 출석",
        "health_note": "3주 전 수술, 현재 재활 중",
        "family_event": "본인 수술",
        "special_note": "회복 중이라 거동이 불편함",
        "last_visitation_date": "2025-08-25"
      },
      "H5Zymk": {
        "name": "전유채",
        "age": 43,
        "recent_attendance": "최근 8주 중 3주 출석",
        "health_note": "만성 신장질환으로 격주 투석 중",
        "family_event": "없음",
        "special_note": "체력 저하로 예배 참석이 점차 줄고 있음",
        "last_visitation_date": "2025-10-16"
      },
      "qYs73f": {
        "name": "황은민",
        "age": 30,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "연락이 잘 닿지 않음, 이유 불명",
        "last_visitation_date": "2025-09-06"
      },
      "jlTIOw": {
        "name": "오하유",
        "age": 46,
        "recent_attendance": "최근 8주 중 2주 출석",
        "health_note": "항암 치료로 통원 중",
        "family_event": "없음",
        "special_note": "치료 일정이 있는 주에는 참석이 어렵다고 함",
        "last_visitation_date": "2025-11-12"
      },
      "wAmoOa": {
        "name": "윤선건",
        "age": 58,
        "recent_attendance": "최근 8주 중 2주 출석",
        "health_note": "무릎 관절염으로 보행이 어려움",
        "family_event": "없음",
        "special_note": "예배당 계단을 오르기 어려워 참석이 줄었다고 함",
        "last_visitation_date": "2025-11-07"
      },
      "XoEuVd": {
        "name": "최엘하",
        "age": 28,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "두 달째 예배에 나오지 않고 있음",
        "last_visitation_date": "2025-10-06"
      },
      "cPZCy9": {
        "name": "송도다",
        "age": 32,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "봉사팀에서 활동 중",
        "last_visitation_date": "2026-08-06"
      },
      "uADlay": {
        "name": "이건람",
        "age": 54,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특이사항 없음",
        "last_visitation_date": "2026-06-19"
      },
      "4SFfgm": {
        "name": "송원시",
        "age": 29,
        "recent_attendance": "최근 8주 중 7주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특이사항 없음",
        "last_visitation_date": "2026-06-26"
      },
      "Z9Da9P": {
        "name": "송빈람",
        "age": 40,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "정기적으로 봉사에 참여, 최근 특별한 이슈 없음",
        "last_visitation_date": "2026-08-13"
      },
      "9ILOFi": {
        "name": "최하민",
        "age": 37,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특별한 요청 사항 없음",
        "last_visitation_date": "2026-06-17"
      }
    }
  },
  "set07": {
    "must_include": [
      {
        "id": "dCLsU5",
        "name": "권은율",
        "case": "2주 전 자녀 교통사고",
        "kind": "급성"
      },
      {
        "id": "E3GmLF",
        "name": "임선름",
        "case": "지난주 부친상",
        "kind": "급성"
      },
      {
        "id": "L1m19b",
        "name": "송솔서",
        "case": "지난주 모친상",
        "kind": "급성"
      },
      {
        "id": "7y9n43",
        "name": "유규호",
        "case": "2주 전 배우자 별세",
        "kind": "급성"
      },
      {
        "id": "LNes8O",
        "name": "유솔엘",
        "case": "3주 전 본인 수술",
        "kind": "급성"
      },
      {
        "id": "pVhKnv",
        "name": "고민훈",
        "case": "한 달 전 실직",
        "kind": "만성"
      },
      {
        "id": "YB1GXV",
        "name": "고호우",
        "case": "낙상 후 자택 요양",
        "kind": "만성"
      },
      {
        "id": "Js3g0W",
        "name": "유규엘",
        "case": "요양병원 장기 입원",
        "kind": "만성"
      },
      {
        "id": "p7T5eh",
        "name": "배다람",
        "case": "항암 통원 치료",
        "kind": "만성"
      },
      {
        "id": "YzuD4n",
        "name": "홍윤우",
        "case": "거동 불편으로 외출 어려움",
        "kind": "만성"
      }
    ],
    "must_exclude": [
      {
        "id": "BUilWS",
        "name": "한이우",
        "case": "만근, 봉사 참여"
      },
      {
        "id": "ZRqdol",
        "name": "한은진",
        "case": "만근, 특이사항 없음"
      },
      {
        "id": "2cZ1Ml",
        "name": "강훈우",
        "case": "만근, 요청 사항 없음"
      },
      {
        "id": "lisbXU",
        "name": "손다재",
        "case": "7주 출석, 특이사항 없음"
      },
      {
        "id": "Q63Od5",
        "name": "전준율",
        "case": "7주 출석, 봉사팀 활동"
      }
    ],
    "members": {
      "dCLsU5": {
        "name": "권은율",
        "age": 52,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 자녀 교통사고",
        "special_note": "자녀가 입원해 병원에서 지내는 날이 많음",
        "last_visitation_date": "2025-10-29"
      },
      "E3GmLF": {
        "name": "임선름",
        "age": 27,
        "recent_attendance": "최근 8주 중 7주 출석",
        "health_note": "특이사항 없음",
        "family_event": "지난주 부친상",
        "special_note": "장례 이후 첫 예배 참석 예정",
        "last_visitation_date": "2026-01-31"
      },
      "L1m19b": {
        "name": "송솔서",
        "age": 55,
        "recent_attendance": "최근 8주 중 5주 출석",
        "health_note": "특이사항 없음",
        "family_event": "지난주 모친상",
        "special_note": "장례 절차로 최근 2주간 연락이 어려웠음",
        "last_visitation_date": "2026-03-13"
      },
      "7y9n43": {
        "name": "유규호",
        "age": 81,
        "recent_attendance": "최근 8주 중 3주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 배우자 별세",
        "special_note": "혼자 지내게 되어 식사를 거르는 날이 많다고 함",
        "last_visitation_date": "2025-05-20"
      },
      "LNes8O": {
        "name": "유솔엘",
        "age": 58,
        "recent_attendance": "최근 8주 중 3주 출석",
        "health_note": "3주 전 수술, 현재 재활 중",
        "family_event": "본인 수술",
        "special_note": "회복 중이라 거동이 불편함",
        "last_visitation_date": "2026-02-14"
      },
      "pVhKnv": {
        "name": "고민훈",
        "age": 41,
        "recent_attendance": "최근 8주 중 4주 출석",
        "health_note": "특이사항 없음",
        "family_event": "한 달 전 실직",
        "special_note": "경제적 어려움을 최근 대화 중 언급함",
        "last_visitation_date": "2025-07-20"
      },
      "YB1GXV": {
        "name": "고호우",
        "age": 60,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "지난달 낙상으로 입원, 현재 자택 요양 중",
        "family_event": "없음",
        "special_note": "거동이 불편해 혼자 예배 참석이 어려움",
        "last_visitation_date": "2025-10-06"
      },
      "Js3g0W": {
        "name": "유규엘",
        "age": 68,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "요양병원 입원 중",
        "family_event": "없음",
        "special_note": "장기 입원으로 공동체와 접촉이 거의 끊긴 상태",
        "last_visitation_date": "2025-03-29"
      },
      "p7T5eh": {
        "name": "배다람",
        "age": 40,
        "recent_attendance": "최근 8주 중 4주 출석",
        "health_note": "항암 치료로 통원 중",
        "family_event": "없음",
        "special_note": "치료 일정이 있는 주에는 참석이 어렵다고 함",
        "last_visitation_date": "2025-05-30"
      },
      "YzuD4n": {
        "name": "홍윤우",
        "age": 58,
        "recent_attendance": "최근 8주 중 1주 출석",
        "health_note": "무릎 관절염으로 보행이 어려움",
        "family_event": "없음",
        "special_note": "예배당 계단을 오르기 어려워 참석이 줄었다고 함",
        "last_visitation_date": "2025-04-16"
      },
      "BUilWS": {
        "name": "한이우",
        "age": 53,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "정기적으로 봉사에 참여, 최근 특별한 이슈 없음",
        "last_visitation_date": "2026-07-23"
      },
      "ZRqdol": {
        "name": "한은진",
        "age": 30,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특이사항 없음",
        "last_visitation_date": "2026-08-04"
      },
      "2cZ1Ml": {
        "name": "강훈우",
        "age": 39,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특별한 요청 사항 없음",
        "last_visitation_date": "2026-06-06"
      },
      "lisbXU": {
        "name": "손다재",
        "age": 48,
        "recent_attendance": "최근 8주 중 7주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특이사항 없음",
        "last_visitation_date": "2026-05-17"
      },
      "Q63Od5": {
        "name": "전준율",
        "age": 38,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "봉사팀에서 활동 중",
        "last_visitation_date": "2026-08-02"
      }
    }
  },
  "set08": {
    "must_include": [
      {
        "id": "vAJ1gN",
        "name": "송진연",
        "case": "2주 전 배우자 별세",
        "kind": "급성"
      },
      {
        "id": "XUlTrr",
        "name": "권로나",
        "case": "2주 전 출산",
        "kind": "급성"
      },
      {
        "id": "4ytcGt",
        "name": "백시원",
        "case": "3주 전 본인 수술",
        "kind": "급성"
      },
      {
        "id": "bwOQS2",
        "name": "조호은",
        "case": "3주 전 배우자 수술",
        "kind": "급성"
      },
      {
        "id": "CUCtvX",
        "name": "김온결",
        "case": "2주 전 자녀 교통사고",
        "kind": "급성"
      },
      {
        "id": "jtdoFr",
        "name": "임가나",
        "case": "요양병원 장기 입원",
        "kind": "만성"
      },
      {
        "id": "MWwd5C",
        "name": "황경나",
        "case": "낙상 후 자택 요양",
        "kind": "만성"
      },
      {
        "id": "QvqU1p",
        "name": "박은건",
        "case": "항암 통원 치료",
        "kind": "만성"
      },
      {
        "id": "puYXbc",
        "name": "송수도",
        "case": "출석 0회, 연락 두절",
        "kind": "만성"
      },
      {
        "id": "YG97jU",
        "name": "오호율",
        "case": "격주 투석",
        "kind": "만성"
      }
    ],
    "must_exclude": [
      {
        "id": "6xKwAW",
        "name": "장선연",
        "case": "만근, 요청 사항 없음"
      },
      {
        "id": "6aHvSa",
        "name": "유재하",
        "case": "7주 출석, 특이사항 없음"
      },
      {
        "id": "p4o71g",
        "name": "양하하",
        "case": "만근, 봉사 참여"
      },
      {
        "id": "OwpU5Z",
        "name": "송원엘",
        "case": "7주 출석, 봉사팀 활동"
      },
      {
        "id": "wdIGpF",
        "name": "임현도",
        "case": "만근, 특이사항 없음"
      }
    ],
    "members": {
      "vAJ1gN": {
        "name": "송진연",
        "age": 52,
        "recent_attendance": "최근 8주 중 4주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 배우자 별세",
        "special_note": "혼자 지내게 되어 식사를 거르는 날이 많다고 함",
        "last_visitation_date": "2026-01-25"
      },
      "XUlTrr": {
        "name": "권로나",
        "age": 41,
        "recent_attendance": "최근 8주 중 3주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 출산",
        "special_note": "산후 회복 중, 외부 방문보다 전화 연락을 선호할 수 있음",
        "last_visitation_date": "2025-11-14"
      },
      "4ytcGt": {
        "name": "백시원",
        "age": 45,
        "recent_attendance": "최근 8주 중 3주 출석",
        "health_note": "3주 전 수술, 현재 재활 중",
        "family_event": "본인 수술",
        "special_note": "회복 중이라 거동이 불편함",
        "last_visitation_date": "2025-11-15"
      },
      "bwOQS2": {
        "name": "조호은",
        "age": 43,
        "recent_attendance": "최근 8주 중 1주 출석",
        "health_note": "본인 특이사항 없음",
        "family_event": "3주 전 배우자 수술",
        "special_note": "본인이 아니라 배우자 간병 부담이 큰 상황",
        "last_visitation_date": "2026-01-12"
      },
      "CUCtvX": {
        "name": "김온결",
        "age": 54,
        "recent_attendance": "최근 8주 중 3주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 자녀 교통사고",
        "special_note": "자녀가 입원해 병원에서 지내는 날이 많음",
        "last_visitation_date": "2025-10-15"
      },
      "jtdoFr": {
        "name": "임가나",
        "age": 75,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "요양병원 입원 중",
        "family_event": "없음",
        "special_note": "장기 입원으로 공동체와 접촉이 거의 끊긴 상태",
        "last_visitation_date": "2025-05-20"
      },
      "MWwd5C": {
        "name": "황경나",
        "age": 82,
        "recent_attendance": "최근 8주 중 1주 출석",
        "health_note": "지난달 낙상으로 입원, 현재 자택 요양 중",
        "family_event": "없음",
        "special_note": "거동이 불편해 혼자 예배 참석이 어려움",
        "last_visitation_date": "2025-12-24"
      },
      "QvqU1p": {
        "name": "박은건",
        "age": 47,
        "recent_attendance": "최근 8주 중 2주 출석",
        "health_note": "항암 치료로 통원 중",
        "family_event": "없음",
        "special_note": "치료 일정이 있는 주에는 참석이 어렵다고 함",
        "last_visitation_date": "2025-05-07"
      },
      "puYXbc": {
        "name": "송수도",
        "age": 48,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "연락이 잘 닿지 않음, 이유 불명",
        "last_visitation_date": "2025-07-18"
      },
      "YG97jU": {
        "name": "오호율",
        "age": 41,
        "recent_attendance": "최근 8주 중 1주 출석",
        "health_note": "만성 신장질환으로 격주 투석 중",
        "family_event": "없음",
        "special_note": "체력 저하로 예배 참석이 점차 줄고 있음",
        "last_visitation_date": "2025-07-29"
      },
      "6xKwAW": {
        "name": "장선연",
        "age": 33,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특별한 요청 사항 없음",
        "last_visitation_date": "2026-06-17"
      },
      "6aHvSa": {
        "name": "유재하",
        "age": 34,
        "recent_attendance": "최근 8주 중 7주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특이사항 없음",
        "last_visitation_date": "2026-06-08"
      },
      "p4o71g": {
        "name": "양하하",
        "age": 51,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "정기적으로 봉사에 참여, 최근 특별한 이슈 없음",
        "last_visitation_date": "2026-06-20"
      },
      "OwpU5Z": {
        "name": "송원엘",
        "age": 29,
        "recent_attendance": "최근 8주 중 7주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "봉사팀에서 활동 중",
        "last_visitation_date": "2026-08-09"
      },
      "wdIGpF": {
        "name": "임현도",
        "age": 80,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특이사항 없음",
        "last_visitation_date": "2026-07-30"
      }
    }
  },
  "set09": {
    "must_include": [
      {
        "id": "1p5CBZ",
        "name": "장경우",
        "case": "2주 전 자녀 교통사고",
        "kind": "급성"
      },
      {
        "id": "rjz61I",
        "name": "권수결",
        "case": "지난주 부친상",
        "kind": "급성"
      },
      {
        "id": "gKvDaG",
        "name": "신진서",
        "case": "3주 전 배우자 수술",
        "kind": "급성"
      },
      {
        "id": "bAs062",
        "name": "이호진",
        "case": "지난주 모친상",
        "kind": "급성"
      },
      {
        "id": "iI7dFd",
        "name": "유솔나",
        "case": "3주 전 본인 수술",
        "kind": "급성"
      },
      {
        "id": "rgHH3x",
        "name": "정람재",
        "case": "두 달째 발길 끊음",
        "kind": "만성"
      },
      {
        "id": "9SeaW3",
        "name": "최율하",
        "case": "거동 불편으로 외출 어려움",
        "kind": "만성"
      },
      {
        "id": "FQt9cT",
        "name": "한율호",
        "case": "낙상 후 자택 요양",
        "kind": "만성"
      },
      {
        "id": "i3MwOi",
        "name": "장경연",
        "case": "격주 투석",
        "kind": "만성"
      },
      {
        "id": "aPEIsn",
        "name": "윤서온",
        "case": "한 달 전 실직",
        "kind": "만성"
      }
    ],
    "must_exclude": [
      {
        "id": "1XGQsb",
        "name": "문온규",
        "case": "만근, 요청 사항 없음"
      },
      {
        "id": "GfByeY",
        "name": "권진아",
        "case": "7주 출석, 특이사항 없음"
      },
      {
        "id": "cy5MBn",
        "name": "오가진",
        "case": "만근, 특이사항 없음"
      },
      {
        "id": "SONGSc",
        "name": "신름수",
        "case": "7주 출석, 봉사팀 활동"
      },
      {
        "id": "1oOQ2c",
        "name": "황원온",
        "case": "만근, 봉사 참여"
      }
    ],
    "members": {
      "1p5CBZ": {
        "name": "장경우",
        "age": 58,
        "recent_attendance": "최근 8주 중 1주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 자녀 교통사고",
        "special_note": "자녀가 입원해 병원에서 지내는 날이 많음",
        "last_visitation_date": "2025-08-28"
      },
      "rjz61I": {
        "name": "권수결",
        "age": 63,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "지난주 부친상",
        "special_note": "장례 이후 첫 예배 참석 예정",
        "last_visitation_date": "2025-10-16"
      },
      "gKvDaG": {
        "name": "신진서",
        "age": 86,
        "recent_attendance": "최근 8주 중 1주 출석",
        "health_note": "본인 특이사항 없음",
        "family_event": "3주 전 배우자 수술",
        "special_note": "본인이 아니라 배우자 간병 부담이 큰 상황",
        "last_visitation_date": "2025-11-01"
      },
      "bAs062": {
        "name": "이호진",
        "age": 34,
        "recent_attendance": "최근 8주 중 5주 출석",
        "health_note": "특이사항 없음",
        "family_event": "지난주 모친상",
        "special_note": "장례 절차로 최근 2주간 연락이 어려웠음",
        "last_visitation_date": "2025-08-19"
      },
      "iI7dFd": {
        "name": "유솔나",
        "age": 51,
        "recent_attendance": "최근 8주 중 2주 출석",
        "health_note": "3주 전 수술, 현재 재활 중",
        "family_event": "본인 수술",
        "special_note": "회복 중이라 거동이 불편함",
        "last_visitation_date": "2025-10-26"
      },
      "rgHH3x": {
        "name": "정람재",
        "age": 45,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "두 달째 예배에 나오지 않고 있음",
        "last_visitation_date": "2025-09-13"
      },
      "9SeaW3": {
        "name": "최율하",
        "age": 68,
        "recent_attendance": "최근 8주 중 2주 출석",
        "health_note": "무릎 관절염으로 보행이 어려움",
        "family_event": "없음",
        "special_note": "예배당 계단을 오르기 어려워 참석이 줄었다고 함",
        "last_visitation_date": "2024-12-31"
      },
      "FQt9cT": {
        "name": "한율호",
        "age": 79,
        "recent_attendance": "최근 8주 중 1주 출석",
        "health_note": "지난달 낙상으로 입원, 현재 자택 요양 중",
        "family_event": "없음",
        "special_note": "거동이 불편해 혼자 예배 참석이 어려움",
        "last_visitation_date": "2025-01-27"
      },
      "i3MwOi": {
        "name": "장경연",
        "age": 47,
        "recent_attendance": "최근 8주 중 1주 출석",
        "health_note": "만성 신장질환으로 격주 투석 중",
        "family_event": "없음",
        "special_note": "체력 저하로 예배 참석이 점차 줄고 있음",
        "last_visitation_date": "2025-11-13"
      },
      "aPEIsn": {
        "name": "윤서온",
        "age": 52,
        "recent_attendance": "최근 8주 중 3주 출석",
        "health_note": "특이사항 없음",
        "family_event": "한 달 전 실직",
        "special_note": "경제적 어려움을 최근 대화 중 언급함",
        "last_visitation_date": "2025-07-01"
      },
      "1XGQsb": {
        "name": "문온규",
        "age": 32,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특별한 요청 사항 없음",
        "last_visitation_date": "2026-06-13"
      },
      "GfByeY": {
        "name": "권진아",
        "age": 52,
        "recent_attendance": "최근 8주 중 7주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특이사항 없음",
        "last_visitation_date": "2026-07-12"
      },
      "cy5MBn": {
        "name": "오가진",
        "age": 57,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특이사항 없음",
        "last_visitation_date": "2026-07-21"
      },
      "SONGSc": {
        "name": "신름수",
        "age": 46,
        "recent_attendance": "최근 8주 중 7주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "봉사팀에서 활동 중",
        "last_visitation_date": "2026-07-20"
      },
      "1oOQ2c": {
        "name": "황원온",
        "age": 41,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "정기적으로 봉사에 참여, 최근 특별한 이슈 없음",
        "last_visitation_date": "2026-06-24"
      }
    }
  },
  "set10": {
    "must_include": [
      {
        "id": "VTjjG6",
        "name": "임나시",
        "case": "지난주 모친상",
        "kind": "급성"
      },
      {
        "id": "QM20pI",
        "name": "권담아",
        "case": "2주 전 자녀 교통사고",
        "kind": "급성"
      },
      {
        "id": "3C46wc",
        "name": "임하재",
        "case": "3주 전 본인 수술",
        "kind": "급성"
      },
      {
        "id": "VlH5r9",
        "name": "임율결",
        "case": "2주 전 배우자 별세",
        "kind": "급성"
      },
      {
        "id": "BVkbpO",
        "name": "오선호",
        "case": "2주 전 출산",
        "kind": "급성"
      },
      {
        "id": "of89p5",
        "name": "손영태",
        "case": "격주 투석",
        "kind": "만성"
      },
      {
        "id": "EK5Zi1",
        "name": "유재결",
        "case": "출석 0회, 연락 두절",
        "kind": "만성"
      },
      {
        "id": "WJfZCT",
        "name": "최이다",
        "case": "낙상 후 자택 요양",
        "kind": "만성"
      },
      {
        "id": "jtDGPs",
        "name": "오나온",
        "case": "항암 통원 치료",
        "kind": "만성"
      },
      {
        "id": "4zUUFE",
        "name": "문온가",
        "case": "거동 불편으로 외출 어려움",
        "kind": "만성"
      }
    ],
    "must_exclude": [
      {
        "id": "rqFnai",
        "name": "김아규",
        "case": "만근, 봉사 참여"
      },
      {
        "id": "RWfN9H",
        "name": "배태원",
        "case": "7주 출석, 특이사항 없음"
      },
      {
        "id": "3vZ1n5",
        "name": "홍현율",
        "case": "만근, 요청 사항 없음"
      },
      {
        "id": "IKOXbT",
        "name": "이름준",
        "case": "만근, 특이사항 없음"
      },
      {
        "id": "D5EzQR",
        "name": "문결결",
        "case": "7주 출석, 봉사팀 활동"
      }
    ],
    "members": {
      "VTjjG6": {
        "name": "임나시",
        "age": 50,
        "recent_attendance": "최근 8주 중 5주 출석",
        "health_note": "특이사항 없음",
        "family_event": "지난주 모친상",
        "special_note": "장례 절차로 최근 2주간 연락이 어려웠음",
        "last_visitation_date": "2025-07-03"
      },
      "QM20pI": {
        "name": "권담아",
        "age": 55,
        "recent_attendance": "최근 8주 중 1주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 자녀 교통사고",
        "special_note": "자녀가 입원해 병원에서 지내는 날이 많음",
        "last_visitation_date": "2026-04-04"
      },
      "3C46wc": {
        "name": "임하재",
        "age": 52,
        "recent_attendance": "최근 8주 중 1주 출석",
        "health_note": "3주 전 수술, 현재 재활 중",
        "family_event": "본인 수술",
        "special_note": "회복 중이라 거동이 불편함",
        "last_visitation_date": "2025-09-08"
      },
      "VlH5r9": {
        "name": "임율결",
        "age": 50,
        "recent_attendance": "최근 8주 중 3주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 배우자 별세",
        "special_note": "혼자 지내게 되어 식사를 거르는 날이 많다고 함",
        "last_visitation_date": "2025-03-25"
      },
      "BVkbpO": {
        "name": "오선호",
        "age": 35,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "특이사항 없음",
        "family_event": "2주 전 출산",
        "special_note": "산후 회복 중, 외부 방문보다 전화 연락을 선호할 수 있음",
        "last_visitation_date": "2025-10-10"
      },
      "of89p5": {
        "name": "손영태",
        "age": 47,
        "recent_attendance": "최근 8주 중 1주 출석",
        "health_note": "만성 신장질환으로 격주 투석 중",
        "family_event": "없음",
        "special_note": "체력 저하로 예배 참석이 점차 줄고 있음",
        "last_visitation_date": "2025-10-17"
      },
      "EK5Zi1": {
        "name": "유재결",
        "age": 33,
        "recent_attendance": "최근 8주 중 0주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "연락이 잘 닿지 않음, 이유 불명",
        "last_visitation_date": "2025-07-25"
      },
      "WJfZCT": {
        "name": "최이다",
        "age": 73,
        "recent_attendance": "최근 8주 중 2주 출석",
        "health_note": "지난달 낙상으로 입원, 현재 자택 요양 중",
        "family_event": "없음",
        "special_note": "거동이 불편해 혼자 예배 참석이 어려움",
        "last_visitation_date": "2025-08-18"
      },
      "jtDGPs": {
        "name": "오나온",
        "age": 52,
        "recent_attendance": "최근 8주 중 2주 출석",
        "health_note": "항암 치료로 통원 중",
        "family_event": "없음",
        "special_note": "치료 일정이 있는 주에는 참석이 어렵다고 함",
        "last_visitation_date": "2025-04-22"
      },
      "4zUUFE": {
        "name": "문온가",
        "age": 55,
        "recent_attendance": "최근 8주 중 1주 출석",
        "health_note": "무릎 관절염으로 보행이 어려움",
        "family_event": "없음",
        "special_note": "예배당 계단을 오르기 어려워 참석이 줄었다고 함",
        "last_visitation_date": "2025-06-27"
      },
      "rqFnai": {
        "name": "김아규",
        "age": 49,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "정기적으로 봉사에 참여, 최근 특별한 이슈 없음",
        "last_visitation_date": "2026-07-22"
      },
      "RWfN9H": {
        "name": "배태원",
        "age": 55,
        "recent_attendance": "최근 8주 중 7주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특이사항 없음",
        "last_visitation_date": "2026-06-29"
      },
      "3vZ1n5": {
        "name": "홍현율",
        "age": 46,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특별한 요청 사항 없음",
        "last_visitation_date": "2026-07-12"
      },
      "IKOXbT": {
        "name": "이름준",
        "age": 60,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "특이사항 없음",
        "last_visitation_date": "2026-06-30"
      },
      "D5EzQR": {
        "name": "문결결",
        "age": 48,
        "recent_attendance": "최근 8주 중 8주 출석",
        "health_note": "특이사항 없음",
        "family_event": "없음",
        "special_note": "봉사팀에서 활동 중",
        "last_visitation_date": "2026-06-21"
      }
    }
  }
};
