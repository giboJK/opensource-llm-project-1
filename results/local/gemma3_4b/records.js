// 실험 원본 기록입니다. 집계값은 들어 있지 않습니다.
// report.html 이 열릴 때 이 값을 읽어 직접 계산해 그립니다.

window.REPORT_META = {
  "title": "STEP 6 결과",
  "task": "교인 명부 50명을 읽고 다음 7일 심방 대상 top 10을 순위와 근거로 뽑기",
  "model": "gemma3:4b",
  "run_at": "2026-09-16 14:00",
  "source": "step6_20260916_135505.jsonl",
  "rerun": "uv run scripts/03_step6_run.py --models gemma3:4b",
  "generated_at": "2026-09-16T15:41:43"
};
window.RECORDS = [
  {
    "phase": "main",
    "run_at": "2026-09-16T14:00:03",
    "model": "gemma3:4b",
    "set": "set01",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 15152,
    "perf": {
      "elapsed_sec": 9.5,
      "load_sec": 0.0,
      "tokens_per_sec": 92.4,
      "speed_note": null,
      "prompt_eval_count": 9700,
      "eval_count": 865,
      "total_duration_ns": 9486236600,
      "load_duration_ns": 3244100,
      "prompt_eval_duration_ns": 107355000,
      "eval_duration_ns": 9363196000
    },
    "validation": {
      "format_ok": true,
      "issues": [],
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
        "HEEkGk",
        "GcQ3Ze",
        "MnaBL1",
        "PQCjiM"
      ]
    },
    "answer": "```json\n{\n  \"top10\": [\n    {\n      \"rank\": 1,\n      \"id\": \"JYzftw\",\n      \"name\": \"정름하\",\n      \"reason\": \"최근 8주 중 1주 출석하며 우울감을 호소함. 관계 회복과 건강 회복을 위한 기도와 교회 공동체에 대한 관심이 높음.\"\n    },\n    {\n      \"rank\": 2,\n      \"id\": \"P0qq1g\",\n      \"name\": \"송서호\",\n      \"reason\": \"최근 8주 중 8주 출석하며, 교회 공동체에 대한 관심과 관계 회복을 위한 기도를 지속함. 이사 후 새로운 환경에 적응하는 데 어려움을 겪고 있음.\"\n    },\n    {\n      \"rank\": 3,\n      \"id\": \"3ncNfo\",\n      \"name\": \"황이시\",\n      \"reason\": \"최근 8주 중 8주 출석하며, 군 복무 중인 자녀와 직장 내 어려움, 선교지를 위한 기도 등 다양한 영역에서 도움을 요청함.\"\n    },\n    {\n      \"rank\": 4,\n      \"id\": \"Ehqs5A\",\n      \"name\": \"백온규\",\n      \"reason\": \"최근 8주 중 2주 출석하며, 타 지역 이주 예정으로 인한 불안감과 건강 회복, 교회 공동체에 대한 관심이 높음.\"\n    },\n    {\n      \"rank\": 5,\n      \"id\": \"TV7FTS\",\n      \"name\": \"김나하\",\n      \"reason\": \"최근 8주 중 3주 출석하며, 산후 회복 중인 상황과 교회 공동체에 대한 관심, 취업/이직 기도 등을 통해 도움을 요청함.\"\n    },\n    {\n      \"rank\": 6,\n      \"id\": \"HLxEbU\",\n      \"name\": \"손은영\",\n      \"reason\": \"최근 8주 중 6주 출석하며, 이사/거주 문제, 관계 회복, 교회 공동체를 위한 기도 등 다양한 영역에서 도움을 요청함. 최근 부친상 슬픔을 겪고 있음.\"\n    },\n    {\n      \"rank\": 7,\n      \"id\": \"HEEkGk\",\n      \"name\": \"양인은\",\n      \"reason\": \"최근 8주 중 4주 출석하며, 최근 무릎 수술 후 재활 중인 상황과 시험 합격, 선교지를 위한 기도 등을 통해 도움을 요청함.\"\n    },\n    {\n      \"rank\": 8,\n      \"id\": \"GcQ3Ze\",\n      \"name\": \"송하시\",\n      \"reason\": \"최근 8주 중 2주 출석하며, 알레르기로 병원 통원 중인 상황과 교회 공동체를 위한 기도, 관계 회복 등을 통해 도움을 요청함. 최근 출석이 줄어듦.\"\n    },\n    {\n      \"rank\": 9,\n      \"id\": \"MnaBL1\",\n      \"name\": \"손서가\",\n      \"reason\": \"최근 8주 중 1주 출석하며, 3주 전 수술 후 재활 중인 상황과 재정적 어려움 해결, 관계 회복 등을 통해 도움을 요청함.\"\n    },\n    {\n      \"rank\": 10,\n      \"id\": \"PQCjiM\",\n      \"name\": \"조수경\",\n      \"reason\": \"최근 8주 중 8주 출석하며, 가족 관계 회복, 자녀 신앙 성장, 직장 내 어려움 등 다양한 영역에서 도움을 요청함. 교회 봉사팀에서 활동 중.\"\n    }\n  ]\n}\n```",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T14:00:12",
    "model": "gemma3:4b",
    "set": "set01",
    "attempt": 2,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 15152,
    "perf": {
      "elapsed_sec": 9.5,
      "load_sec": 0.0,
      "tokens_per_sec": 92.5,
      "speed_note": null,
      "prompt_eval_count": 9700,
      "eval_count": 865,
      "total_duration_ns": 9477919500,
      "load_duration_ns": 2826100,
      "prompt_eval_duration_ns": 112337000,
      "eval_duration_ns": 9349341000
    },
    "validation": {
      "format_ok": true,
      "issues": [],
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
        "HEEkGk",
        "GcQ3Ze",
        "MnaBL1",
        "PQCjiM"
      ]
    },
    "answer": "```json\n{\n  \"top10\": [\n    {\n      \"rank\": 1,\n      \"id\": \"JYzftw\",\n      \"name\": \"정름하\",\n      \"reason\": \"최근 8주 중 1주 출석하며 우울감을 호소함. 관계 회복과 건강 회복을 위한 기도와 교회 공동체에 대한 관심이 높음.\"\n    },\n    {\n      \"rank\": 2,\n      \"id\": \"P0qq1g\",\n      \"name\": \"송서호\",\n      \"reason\": \"최근 8주 중 8주 출석하며, 교회 공동체에 대한 관심과 관계 회복을 위한 기도를 지속함. 이사 후 새로운 환경에 적응하는 데 어려움을 겪고 있음.\"\n    },\n    {\n      \"rank\": 3,\n      \"id\": \"3ncNfo\",\n      \"name\": \"황이시\",\n      \"reason\": \"최근 8주 중 8주 출석하며, 군 복무 중인 자녀와 직장 내 어려움, 선교지를 위한 기도 등 다양한 영역에서 도움을 요청함.\"\n    },\n    {\n      \"rank\": 4,\n      \"id\": \"Ehqs5A\",\n      \"name\": \"백온규\",\n      \"reason\": \"최근 8주 중 2주 출석하며, 타 지역 이주 예정으로 인한 불안감과 건강 회복, 교회 공동체에 대한 관심이 높음.\"\n    },\n    {\n      \"rank\": 5,\n      \"id\": \"TV7FTS\",\n      \"name\": \"김나하\",\n      \"reason\": \"최근 8주 중 3주 출석하며, 산후 회복 중인 상황과 교회 공동체에 대한 관심, 취업/이직 기도 등을 통해 도움을 요청함.\"\n    },\n    {\n      \"rank\": 6,\n      \"id\": \"HLxEbU\",\n      \"name\": \"손은영\",\n      \"reason\": \"최근 8주 중 6주 출석하며, 이사/거주 문제, 관계 회복, 교회 공동체를 위한 기도 등 다양한 영역에서 도움을 요청함. 최근 부친상 슬픔을 겪고 있음.\"\n    },\n    {\n      \"rank\": 7,\n      \"id\": \"HEEkGk\",\n      \"name\": \"양인은\",\n      \"reason\": \"최근 8주 중 4주 출석하며, 최근 무릎 수술 후 재활 중인 상황과 시험 합격, 선교지를 위한 기도 등을 통해 도움을 요청함.\"\n    },\n    {\n      \"rank\": 8,\n      \"id\": \"GcQ3Ze\",\n      \"name\": \"송하시\",\n      \"reason\": \"최근 8주 중 2주 출석하며, 알레르기로 병원 통원 중인 상황과 교회 공동체를 위한 기도, 관계 회복 등을 통해 도움을 요청함. 최근 출석이 줄어듦.\"\n    },\n    {\n      \"rank\": 9,\n      \"id\": \"MnaBL1\",\n      \"name\": \"손서가\",\n      \"reason\": \"최근 8주 중 1주 출석하며, 3주 전 수술 후 재활 중인 상황과 재정적 어려움 해결, 관계 회복 등을 통해 도움을 요청함.\"\n    },\n    {\n      \"rank\": 10,\n      \"id\": \"PQCjiM\",\n      \"name\": \"조수경\",\n      \"reason\": \"최근 8주 중 8주 출석하며, 가족 관계 회복, 자녀 신앙 성장, 직장 내 어려움 등 다양한 영역에서 도움을 요청함. 교회 봉사팀에서 활동 중.\"\n    }\n  ]\n}\n```",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T14:00:24",
    "model": "gemma3:4b",
    "set": "set02",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14908,
    "perf": {
      "elapsed_sec": 12.0,
      "load_sec": 0.0,
      "tokens_per_sec": 91.8,
      "speed_note": null,
      "prompt_eval_count": 9586,
      "eval_count": 888,
      "total_duration_ns": 11980104000,
      "load_duration_ns": 3407000,
      "prompt_eval_duration_ns": 2101536000,
      "eval_duration_ns": 9670294000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "명부에 없는 id: 송결유"
      ],
      "hit_include": 2,
      "include_total": 10,
      "miss_exclude": 1,
      "exclude_total": 5,
      "picked_ids": [
        "7SCNsS",
        "DVpQoZ",
        "K6rApK",
        "Fr1bdn",
        "fu4I1f",
        "HMA5oj",
        "q1i7bz",
        "fWBeEd",
        "송결유",
        "Xg7EvM"
      ]
    },
    "answer": "```json\n{\n  \"top10\": [\n    {\n      \"rank\": 1,\n      \"id\": \"7SCNsS\",\n      \"name\": \"권원로\",\n      \"reason\": \"최근 새신자로 등록되었으며, 건강 회복, 우울감 극복, 결혼/배우자를 위한 기도, 이사/거주 문제, 우울감 극복 등의 기도제목을 가지고 있어 우선적으로 심방해야 합니다.\"\n    },\n    {\n      \"rank\": 2,\n      \"id\": \"DVpQoZ\",\n      \"name\": \"권담연\",\n      \"reason\": \"최근 자녀 교통사고로 인해 심리적으로 어려움을 겪고 있으며, 관계 회복(친구/가족), 질병 치유 감사, 취업/이직 등의 기도제목을 가지고 있어 긴밀한 심방이 필요합니다.\"\n    },\n    {\n      \"rank\": 3,\n      \"id\": \"K6rApK\",\n      \"name\": \"임람연\",\n      \"reason\": \"73세이시며 최근 가족 간 갈등을 언급하셨고, 재정적 어려움 해결, 건강 회복 등의 기도제목을 가지고 있어 지속적인 관심과 격려가 필요합니다.\"\n    },\n    {\n      \"rank\": 4,\n      \"id\": \"Fr1bdn\",\n      \"name\": \"홍진아\",\n      \"reason\": \"알레르기로 병원 통원 중이며, 가족 관계 회복, 직장 내 어려움, 자녀 신앙 성장 등의 기도제목을 가지고 있어 정서적인 지지와 함께 필요한 도움을 제공해야 합니다.\"\n    },\n    {\n      \"rank\": 5,\n      \"id\": \"fu4I1f\",\n      \"name\": \"배아연\",\n      \"reason\": \"항암 치료로 통원 중이며, 직장 내 어려움, 관계 회복(친구/가족), 취업/이직 등의 기도제목을 가지고 있어 신체적, 정신적 지지와 함께 긍정적인 격려가 필요합니다.\"\n    },\n    {\n      \"rank\": 6,\n      \"id\": \"HMA5oj\",\n      \"name\": \"장규우\",\n      \"reason\": \"정보가 부족하여 심방 기록이 없는 상태이므로, 먼저 기본적인 정보 파악과 교회를 위한 봉사 참여를 독려하는 심방이 필요합니다.\"\n    },\n    {\n      \"rank\": 7,\n      \"id\": \"q1i7bz\",\n      \"name\": \"김하준\",\n      \"reason\": \"최근 출석이 줄어듦으로 인해 교제 상황을 파악하고, 질병 치유 감사, 교회 공동체를 위한 기도, 건강 회복 등의 기도제목을 통해 다시 교제에 참여할 수 있도록 격려해야 합니다.\"\n    },\n    {\n      \"rank\": 8,\n      \"id\": \"fWBeEd\",\n      \"name\": \"권하율\",\n      \"reason\": \"최근 8주 출석률이 7주로, 교제 상황을 파악하고, 군 복무 중인 자녀, 직장 내 어려움 등의 기도제목을 통해 지지하고 격려해야 합니다.\"\n    },\n    {\n      \"rank\": 9,\n      \"id\": \"송결유\",\n      \"name\": \"송결유\",\n      \"reason\": \"장기 결석 중이며, 재정적 어려움 해결 등의 기도제목을 가지고 있어 사유 확인 및 심방 재개, 기도 지원이 필요합니다.\"\n    },\n    {\n      \"rank\": 10,\n      \"id\": \"Xg7EvM\",\n      \"name\": \"신서엘\",\n      \"reason\": \"자녀 결혼을 축하하며, 자녀 진로 결정, 가족 관계 회복, 부모님 건강 등의 기도제목을 통해 지지하고 격려해야 합니다.\"\n    }\n  ]\n}\n```",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T14:00:34",
    "model": "gemma3:4b",
    "set": "set02",
    "attempt": 2,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14908,
    "perf": {
      "elapsed_sec": 9.7,
      "load_sec": 0.0,
      "tokens_per_sec": 92.5,
      "speed_note": null,
      "prompt_eval_count": 9586,
      "eval_count": 883,
      "total_duration_ns": 9667360400,
      "load_duration_ns": 3546100,
      "prompt_eval_duration_ns": 107883000,
      "eval_duration_ns": 9543354000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "명부에 없는 id: 송결유",
        "명부에 없는 id: 권하율"
      ],
      "hit_include": 2,
      "include_total": 10,
      "miss_exclude": 0,
      "exclude_total": 5,
      "picked_ids": [
        "7SCNsS",
        "DVpQoZ",
        "K6rApK",
        "Fr1bdn",
        "fu4I1f",
        "HMA5oj",
        "q1i7bz",
        "송결유",
        "권하율",
        "Xg7EvM"
      ]
    },
    "answer": "```json\n{\n  \"top10\": [\n    {\n      \"rank\": 1,\n      \"id\": \"7SCNsS\",\n      \"name\": \"권원로\",\n      \"reason\": \"최근 새신자로 등록되었으며, 건강 회복, 우울감 극복, 결혼/배우자를 위한 기도, 이사/거주 문제, 우울감 극복 등의 기도제목을 가지고 있어 우선적으로 심방해야 합니다.\"\n    },\n    {\n      \"rank\": 2,\n      \"id\": \"DVpQoZ\",\n      \"name\": \"권담연\",\n      \"reason\": \"최근 자녀 교통사고로 인해 심리적으로 어려움을 겪고 있으며, 관계 회복(친구/가족), 질병 치유 감사, 취업/이직 등의 기도제목을 가지고 있어 긴급한 심방이 필요합니다.\"\n    },\n    {\n      \"rank\": 3,\n      \"id\": \"K6rApK\",\n      \"name\": \"임람연\",\n      \"reason\": \"73세이시며 최근 가족 간 갈등을 언급하셨고, 재정적 어려움 해결, 건강 회복 등의 기도제목을 가지고 있어 지속적인 관심과 격려가 필요합니다.\"\n    },\n    {\n      \"rank\": 4,\n      \"id\": \"Fr1bdn\",\n      \"name\": \"홍진아\",\n      \"reason\": \"알레르기로 병원 통원 중이며, 가족 관계 회복, 직장 내 어려움, 이사/거주 문제 등의 다양한 기도제목을 가지고 있어 다각적인 지원이 필요합니다.\"\n    },\n    {\n      \"rank\": 5,\n      \"id\": \"fu4I1f\",\n      \"name\": \"배아연\",\n      \"reason\": \"항암 치료 중이며, 직장 내 어려움, 관계 회복(친구/가족), 취업/이직 등의 기도제목을 가지고 있어 지속적인 격려와 지원이 필요합니다.\"\n    },\n    {\n      \"rank\": 6,\n      \"id\": \"HMA5oj\",\n      \"name\": \"장규우\",\n      \"reason\": \"심방 기록이 없어 정보 확인이 필요하며, 건강 회복, 관계 회복 등의 기도제목을 가지고 있어 초기 심방을 통해 교회를 소개하고 관계를 맺는 것이 중요합니다.\"\n    },\n    {\n      \"rank\": 7,\n      \"id\": \"q1i7bz\",\n      \"name\": \"김하준\",\n      \"reason\": \"최근 출석이 줄어듦으로 인해 교회사에 대한 관심과 참여를 독려하고, 질병 치유 감사, 교회 공동체를 위한 기도, 건강 회복 등의 기도제목을 통해 지지하고 격려해야 합니다.\"\n    },\n    {\n      \"rank\": 8,\n      \"id\": \"송결유\",\n      \"name\": \"송결유\",\n      \"reason\": \"장기 결석 중이며, 재정적 어려움 해결 등의 기도제목을 가지고 있어 심방을 통해 상황을 파악하고 필요한 지원을 제공해야 합니다.\"\n    },\n    {\n      \"rank\": 9,\n      \"id\": \"권하율\",\n      \"name\": \"권하율\",\n      \"reason\": \"최근 8주 출석률이 7주로, 교회사에 대한 관심과 참여를 독려하고, 군 복무 중인 자녀, 직장 내 어려움 등의 기도제목을 통해 지지하고 격려해야 합니다.\"\n    },\n    {\n      \"rank\": 10,\n      \"id\": \"Xg7EvM\",\n      \"name\": \"신서엘\",\n      \"reason\": \"자녀 결혼을 축하하며, 자녀 진로 결정, 가족 관계 회복, 부모님 건강 등의 기도제목을 통해 지지하고 격려해야 합니다.\"\n    }\n  ]\n}\n```",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T14:00:44",
    "model": "gemma3:4b",
    "set": "set03",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14745,
    "perf": {
      "elapsed_sec": 9.9,
      "load_sec": 0.0,
      "tokens_per_sec": 91.6,
      "speed_note": null,
      "prompt_eval_count": 9465,
      "eval_count": 698,
      "total_duration_ns": 9899822200,
      "load_duration_ns": 3370100,
      "prompt_eval_duration_ns": 2077703000,
      "eval_duration_ns": 7617408000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "명부에 없는 id: 양선솔",
        "명부에 없는 id: pS5Xys",
        "이름 불일치: Lv6Iud -> 유결진"
      ],
      "hit_include": 0,
      "include_total": 10,
      "miss_exclude": 0,
      "exclude_total": 5,
      "picked_ids": [
        "LetGgE",
        "bHe4Bu",
        "5GTQ5S",
        "WRi2iL",
        "7OkpyG",
        "duoRJJ",
        "양선솔",
        "pS5Xys",
        "Lv6Iud",
        "iBN2JU"
      ]
    },
    "answer": "```json\n{\n  \"top10\": [\n    {\n      \"rank\": 1,\n      \"id\": \"LetGgE\",\n      \"name\": \"유결진\",\n      \"reason\": \"타 지역 이주 예정이며, 우울감을 호소하고 있어 심방을 통해 필요한 지원을 제공해야 합니다.\"\n    },\n    {\n      \"rank\": 2,\n      \"id\": \"bHe4Bu\",\n      \"name\": \"이시훈\",\n      \"reason\": \"장기 결석 중이며, 사유 확인이 필요하고 심방을 통해 교제 재개 가능성을 모색해야 합니다.\"\n    },\n    {\n      \"rank\": 3,\n      \"id\": \"5GTQ5S\",\n      \"name\": \"황이수\",\n      \"reason\": \"부모와 함께 출석하며, 보호자와의 관계를 통해 신앙적 지지 기반을 마련해야 합니다.\"\n    },\n    {\n      \"rank\": 4,\n      \"id\": \"WRi2iL\",\n      \"name\": \"안람선\",\n      \"reason\": \"최근 손주 출생으로 인해 자녀 신앙 성장을 위한 기도와 가족 관계 회복을 위한 심방이 필요합니다.\"\n    },\n    {\n      \"rank\": 5,\n      \"id\": \"7OkpyG\",\n      \"name\": \"임영온\",\n      \"reason\": \"봉사팀 리더로 활동 중이며, 선교지를 위한 기도와 함께 현재의 어려움을 나누고 격려해야 합니다.\"\n    },\n    {\n      \"rank\": 6,\n      \"id\": \"duoRJJ\",\n      \"name\": \"유윤우\",\n      \"reason\": \"심방 기록이 없어 최근 교제 상황을 파악하고, 필요한 지원을 제공해야 합니다.\"\n    },\n    {\n      \"rank\": 7,\n      \"id\": \"양선솔\",\n      \"name\": \"양선솔\",\n      \"reason\": \"최근 8주 출석이전까지 꾸준히 출석하고 있어 지속적인 관심과 격려가 필요합니다.\"\n    },\n    {\n      \"rank\": 8,\n      \"id\": \"pS5Xys\",\n      \"name\": \"황이수\",\n      \"reason\": \"최근 8주 출석이전까지 꾸준히 출석하고 있어 지속적인 관심과 격려가 필요합니다.\"\n    },\n    {\n      \"rank\": 9,\n      \"id\": \"Lv6Iud\",\n      \"name\": \"유결진\",\n      \"reason\": \"최근 8주 출석이전까지 꾸준히 출석하고 있어 지속적인 관심과 격려가 필요합니다.\"\n    },\n    {\n      \"rank\": 10,\n      \"id\": \"iBN2JU\",\n      \"name\": \"장빈람\",\n      \"reason\": \"장기 결석 중이며, 사유 확인이 필요하고 심방을 통해 교제 재개 가능성을 모색해야 합니다.\"\n    }\n  ]\n}\n```",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T14:00:51",
    "model": "gemma3:4b",
    "set": "set03",
    "attempt": 2,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14745,
    "perf": {
      "elapsed_sec": 7.8,
      "load_sec": 0.0,
      "tokens_per_sec": 92.7,
      "speed_note": null,
      "prompt_eval_count": 9465,
      "eval_count": 715,
      "total_duration_ns": 7845204500,
      "load_duration_ns": 3716900,
      "prompt_eval_duration_ns": 114786000,
      "eval_duration_ns": 7714736000
    },
    "validation": {
      "format_ok": true,
      "issues": [],
      "hit_include": 1,
      "include_total": 10,
      "miss_exclude": 2,
      "exclude_total": 5,
      "picked_ids": [
        "LetGgE",
        "bHe4Bu",
        "5GTQ5S",
        "WRi2iL",
        "2ymUvC",
        "duoRJJ",
        "7OkpyG",
        "pS5Xyd",
        "aizvcI",
        "iBN2JU"
      ]
    },
    "answer": "```json\n{\n  \"top10\": [\n    {\n      \"rank\": 1,\n      \"id\": \"LetGgE\",\n      \"name\": \"유결진\",\n      \"reason\": \"타 지역 이주 예정이며, 우울감을 호소하고 있어 심방을 통해 필요한 지원을 제공해야 합니다.\"\n    },\n    {\n      \"rank\": 2,\n      \"id\": \"bHe4Bu\",\n      \"name\": \"이시훈\",\n      \"reason\": \"장기 결석 중이며, 심방 기록이 없어 현재 상황을 파악하고 교제 확대를 위한 노력이 필요합니다.\"\n    },\n    {\n      \"rank\": 3,\n      \"id\": \"5GTQ5S\",\n      \"name\": \"황이수\",\n      \"reason\": \"자녀와 함께 출석하며, 아직 심방 기록이 없어 교제 시작을 위한 초기 방문이 중요합니다.\"\n    },\n    {\n      \"rank\": 4,\n      \"id\": \"WRi2iL\",\n      \"name\": \"안람선\",\n      \"reason\": \"최근 1주 출석으로 교제 부재가 길어짐에 따라, 심방을 통해 교제 재개를 위한 노력이 필요합니다.\"\n    },\n    {\n      \"rank\": 5,\n      \"id\": \"2ymUvC\",\n      \"name\": \"양선솔\",\n      \"reason\": \"최근 8주 출석으로 교제에 꾸준함을 보이고 있으며, 심방 기록이 많아 교제 확대를 위한 노력이 필요합니다.\"\n    },\n    {\n      \"rank\": 6,\n      \"id\": \"duoRJJ\",\n      \"name\": \"유윤우\",\n      \"reason\": \"심방 기록이 없어 교제 시작을 위한 초기 방문이 필요합니다.\"\n    },\n    {\n      \"rank\": 7,\n      \"id\": \"7OkpyG\",\n      \"name\": \"임영온\",\n      \"reason\": \"봉사팀 리더로 활동하며, 최근 8주 출석으로 교제에 꾸준함을 보이고 있어 심방을 통해 교제 확대를 위한 노력이 필요합니다.\"\n    },\n    {\n      \"rank\": 8,\n      \"id\": \"pS5Xyd\",\n      \"name\": \"권은진\",\n      \"reason\": \"정기적으로 봉사에 참여하며, 최근 특별한 이슈가 없어 심방을 통해 교제를 지속하는 것이 좋습니다.\"\n    },\n    {\n      \"rank\": 9,\n      \"id\": \"aizvcI\",\n      \"name\": \"윤빈건\",\n      \"reason\": \"항암 치료로 통원 중이며, 심방 기록이 없어 현재 상황을 파악하고 필요한 지원을 제공해야 합니다.\"\n    },\n    {\n      \"rank\": 10,\n      \"id\": \"iBN2JU\",\n      \"name\": \"장빈람\",\n      \"reason\": \"장기 결석 중이며, 사유 확인이 필요합니다. 심방을 통해 교제 재개를 위한 노력이 필요합니다.\"\n    }\n  ]\n}\n```",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T14:01:01",
    "model": "gemma3:4b",
    "set": "set04",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14444,
    "perf": {
      "elapsed_sec": 9.7,
      "load_sec": 0.0,
      "tokens_per_sec": 91.7,
      "speed_note": null,
      "prompt_eval_count": 9240,
      "eval_count": 681,
      "total_duration_ns": 9673975900,
      "load_duration_ns": 2278300,
      "prompt_eval_duration_ns": 2047114000,
      "eval_duration_ns": 7426121000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: E9Ud3s -> 김율훈",
        "이름 불일치: RHRFMY -> 전진온",
        "이름 불일치: oUrJNQ -> 백경수",
        "이름 불일치: 8MUX3y -> 배진영"
      ],
      "hit_include": 3,
      "include_total": 10,
      "miss_exclude": 1,
      "exclude_total": 5,
      "picked_ids": [
        "QGOmX1",
        "2H1F2v",
        "qIoO4c",
        "VojBwW",
        "ZBKg9C",
        "CPQIgF",
        "E9Ud3s",
        "RHRFMY",
        "oUrJNQ",
        "8MUX3y"
      ]
    },
    "answer": "```json\n{\n  \"top10\": [\n    {\n      \"rank\": 1,\n      \"id\": \"QGOmX1\",\n      \"name\": \"김현하\",\n      \"reason\": \"요양병원 입원 중이며, 공동체와 접촉이 거의 끊긴 상태로 심방이 필요합니다.\"\n    },\n    {\n      \"rank\": 2,\n      \"id\": \"2H1F2v\",\n      \"name\": \"박이솔\",\n      \"reason\": \"최근 모친상 슬픔에 잠겨 심방을 통해 위로와 격려가 필요합니다.\"\n    },\n    {\n      \"rank\": 3,\n      \"id\": \"qIoO4c\",\n      \"name\": \"강진인\",\n      \"reason\": \"최근 실직으로 경제적 어려움을 겪고 있으며, 심방을 통해 필요한 지원을 논의해야 합니다.\"\n    },\n    {\n      \"rank\": 4,\n      \"id\": \"VojBwW\",\n      \"name\": \"배태결\",\n      \"reason\": \"배우자 손도담과 함께 출석하며, 재정적 어려움 해결과 교회 공동체에 대한 기도를 부탁드립니다.\"\n    },\n    {\n      \"rank\": 5,\n      \"id\": \"ZBKg9C\",\n      \"name\": \"신서하\",\n      \"reason\": \"만성 질환으로 정기 검진 중이며, 건강 회복을 위한 기도와 격려가 필요합니다.\"\n    },\n    {\n      \"rank\": 6,\n      \"id\": \"CPQIgF\",\n      \"name\": \"전하하\",\n      \"reason\": \"다수의 기도제목을 가지고 있으며, 학업 및 건강과 관련된 심방이 필요합니다.\"\n    },\n    {\n      \"rank\": 7,\n      \"id\": \"E9Ud3s\",\n      \"name\": \"김율훈\",\n      \"reason\": \"최근 건강검진에서 이상 소견 발견되어, 심방을 통해 건강 관리에 대한 조언과 격려가 필요합니다.\"\n    },\n    {\n      \"rank\": 8,\n      \"id\": \"RHRFMY\",\n      \"name\": \"전진온\",\n      \"reason\": \"자녀 진로 결정과 건강 회복을 위한 기도와 심방이 필요합니다.\"\n    },\n    {\n      \"rank\": 9,\n      \"id\": \"oUrJNQ\",\n      \"name\": \"백경수\",\n      \"reason\": \"우울감 극복과 교회 공동체를 위한 기도와 심방이 필요합니다.\"\n    },\n    {\n      \"rank\": 10,\n      \"id\": \"8MUX3y\",\n      \"name\": \"배진영\",\n      \"reason\": \"최근 건강검진에서 이상 소견 발견되어, 심방을 통해 건강 관리에 대한 조언과 격려가 필요합니다.\"\n    }\n  ]\n}\n```",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T14:01:09",
    "model": "gemma3:4b",
    "set": "set04",
    "attempt": 2,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14444,
    "perf": {
      "elapsed_sec": 7.7,
      "load_sec": 0.0,
      "tokens_per_sec": 92.8,
      "speed_note": null,
      "prompt_eval_count": 9240,
      "eval_count": 702,
      "total_duration_ns": 7683152900,
      "load_duration_ns": 3129300,
      "prompt_eval_duration_ns": 107575000,
      "eval_duration_ns": 7560727000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: E9Ud3s -> 김율훈",
        "이름 불일치: RHRFMY -> 전진온",
        "이름 불일치: oUrJNQ -> 백경수",
        "이름 불일치: EApq8U -> 박이솔"
      ],
      "hit_include": 3,
      "include_total": 10,
      "miss_exclude": 1,
      "exclude_total": 5,
      "picked_ids": [
        "QGOmX1",
        "2H1F2v",
        "qIoO4c",
        "VojBwW",
        "ZBKg9C",
        "CPQIgF",
        "E9Ud3s",
        "RHRFMY",
        "oUrJNQ",
        "EApq8U"
      ]
    },
    "answer": "```json\n{\n  \"top10\": [\n    {\n      \"rank\": 1,\n      \"id\": \"QGOmX1\",\n      \"name\": \"김현하\",\n      \"reason\": \"요양병원 입원 중이며, 공동체와 접촉이 거의 끊긴 상태로 심방이 필요합니다.\"\n    },\n    {\n      \"rank\": 2,\n      \"id\": \"2H1F2v\",\n      \"name\": \"박이솔\",\n      \"reason\": \"최근 모친상 슬픔에 잠겨 심방을 통해 위로와 격려가 필요합니다.\"\n    },\n    {\n      \"rank\": 3,\n      \"id\": \"qIoO4c\",\n      \"name\": \"강진인\",\n      \"reason\": \"최근 실직으로 경제적 어려움을 겪고 있으며, 심방을 통해 필요한 도움을 제공해야 합니다.\"\n    },\n    {\n      \"rank\": 4,\n      \"id\": \"VojBwW\",\n      \"name\": \"배태결\",\n      \"reason\": \"최근 8주 동안 꾸준히 출석하며, 현재 상황에 대한 심방을 통해 지지와 격려를 제공해야 합니다.\"\n    },\n    {\n      \"rank\": 5,\n      \"id\": \"ZBKg9C\",\n      \"name\": \"신서하\",\n      \"reason\": \"만성 질환으로 정기 검진 중이며, 건강 상태에 대한 관심을 갖고 심방을 통해 위로와 격려를 제공해야 합니다.\"\n    },\n    {\n      \"rank\": 6,\n      \"id\": \"CPQIgF\",\n      \"name\": \"전하하\",\n      \"reason\": \"어린 자녀를 돌보며, 교회 공동체를 위한 기도와 학업 성취를 위한 격려가 필요합니다.\"\n    },\n    {\n      \"rank\": 7,\n      \"id\": \"E9Ud3s\",\n      \"name\": \"김율훈\",\n      \"reason\": \"최근 건강검진에서 이상 소견 발견으로 심방을 통해 건강 상태에 대한 상담과 격려가 필요합니다.\"\n    },\n    {\n      \"rank\": 8,\n      \"id\": \"RHRFMY\",\n      \"name\": \"전진온\",\n      \"reason\": \"최근 자녀 입시로 가정 내 스트레스를 받고 있어 심방을 통해 위로와 격려가 필요합니다.\"\n    },\n    {\n      \"rank\": 9,\n      \"id\": \"oUrJNQ\",\n      \"name\": \"백경수\",\n      \"reason\": \"우울감을 호소하고 있으며, 심방을 통해 심리적인 지지와 격려를 제공해야 합니다.\"\n    },\n    {\n      \"rank\": 10,\n      \"id\": \"EApq8U\",\n      \"name\": \"박이솔\",\n      \"reason\": \"최근 모친상 슬픔에 잠겨 심방을 통해 위로와 격려가 필요합니다.\"\n    }\n  ]\n}\n```",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T14:01:22",
    "model": "gemma3:4b",
    "set": "set05",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 15124,
    "perf": {
      "elapsed_sec": 13.3,
      "load_sec": 0.0,
      "tokens_per_sec": 91.8,
      "speed_note": null,
      "prompt_eval_count": 9745,
      "eval_count": 1000,
      "total_duration_ns": 13257673800,
      "load_duration_ns": 4011900,
      "prompt_eval_duration_ns": 2157722000,
      "eval_duration_ns": 10897740000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: BK3Xu8 -> 김로경",
        "이름 불일치: RCl5TX -> 김솔하"
      ],
      "hit_include": 3,
      "include_total": 10,
      "miss_exclude": 0,
      "exclude_total": 5,
      "picked_ids": [
        "O80nEw",
        "5uxZnZ",
        "e7Dwvo",
        "5zw825",
        "SRofjq",
        "mO7xQd",
        "EY5zIA",
        "tXdvFg",
        "BK3Xu8",
        "RCl5TX"
      ]
    },
    "answer": "```json\n{\n  \"top10\": [\n    {\n      \"rank\": 1,\n      \"id\": \"O80nEw\",\n      \"name\": \"박담하\",\n      \"reason\": \"최근 낙상으로 입원, 현재 자택 요양 중이며, 선교지를 위한 기도와 은퇴 후 삶에 대한 인도하심을 구함.\"\n    },\n    {\n      \"rank\": 2,\n      \"id\": \"5uxZnZ\",\n      \"name\": \"유시서\",\n      \"reason\": \"당뇨 관리 중이며, 봉사팀 리더로 활동 중이고, 임신과 순산, 이사/거주 문제, 건강 회복, 질병 치유 감사, 취업/이직, 관계 회복(친구/가족), 부모님 건강, 이사/거주 문제, 이사/거주 문제, 교회 공동체를 위한 기도 등을 기도함.\"\n    },\n    {\n      \"rank\": 3,\n      \"id\": \"e7Dwvo\",\n      \"name\": \"이규유\",\n      \"reason\": \"장기 결석 중이며, 사유 확인 필요하고, 이사/거주 문제, 자녀 신앙 성장, 가족 관계 회복, 재정적 어려움 해결, 우울감 극복, 은퇴 후 삶에 대한 인도하심, 자녀 신앙 성장 등을 기도함.\"\n    },\n    {\n      \"rank\": 4,\n      \"id\": \"5zw825\",\n      \"name\": \"이시나\",\n      \"reason\": \"정보가 부족하며, 부모와 함께 최근 8주 중 2주 출석하고, 이사/거주 문제, 교회 공동체를 위한 기도 등을 기도함.\"\n    },\n    {\n      \"rank\": 5,\n      \"id\": \"SRofjq\",\n      \"name\": \"이유온\",\n      \"reason\": \"정보가 부족하며, 보호자와 함께 출석하고, 질병 치유 감사, 교회 공동체를 위한 기도 등을 기도함.\"\n    },\n    {\n      \"rank\": 6,\n      \"id\": \"mO7xQd\",\n      \"name\": \"권태담\",\n      \"reason\": \"정보가 부족하며, 부모와 함께 최근 8주 중 6주 출석하고, 건강 회복, 교회 공동체를 위한 기도, 교회 공동체를 위한 기도, 질병 치유 감사, 건강 회복, 질병 치유 감사 등을 기도함.\"\n    },\n    {\n      \"rank\": 7,\n      \"id\": \"EY5zIA\",\n      \"name\": \"오서하\",\n      \"reason\": \"요양병원 입원 중이며, 장기 입원으로 공동체와 접촉이 거의 끊긴 상태이고, 관계 회복(친구/가족), 우울감 극복, 관계 회복(친구/가족), 자녀 신앙 성장 등을 기도함.\"\n    },\n    {\n      \"rank\": 8,\n      \"id\": \"tXdvFg\",\n      \"name\": \"안율선\",\n      \"reason\": \"알레르기로 병원 통원 중이며, 보호자와 함께 출석하고, 질병 치유 감사, 질병 치유 감사, 건강 회복, 질병 치유 감사, 교회 공동체를 위한 기도, 건강 회복, 교회 공동체를 위한 기도 등을 기도함.\"\n    },\n    {\n      \"rank\": 9,\n      \"id\": \"BK3Xu8\",\n      \"name\": \"김로경\",\n      \"reason\": \"만성 신장질환으로 격주 투석 중이며, 자녀 진로 결정, 군 복무 중인 자녀, 부모님 건강, 자녀 진로 결정, 우울감 극복, 관계 회복(친구/가족), 질병 치유 감사, 관계 회복(친구/가족) 등을 기도함.\"\n    },\n    {\n      \"rank\": 10,\n      \"id\": \"RCl5TX\",\n      \"name\": \"김솔하\",\n      \"reason\": \"배우자: 김로경, 자녀: 김하율, 자녀: 배결빈, 만성 질환으로 정기 검진 중이고, 직장 내 어려움, 선교지를 위한 기도, 자녀 신앙 성장, 가족 관계 회복, 질병 치유 감사, 관계 회복(친구/가족) 등을 기도함.\"\n    }\n  ]\n}\n```",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T14:01:33",
    "model": "gemma3:4b",
    "set": "set05",
    "attempt": 2,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 15124,
    "perf": {
      "elapsed_sec": 11.0,
      "load_sec": 0.0,
      "tokens_per_sec": 92.4,
      "speed_note": null,
      "prompt_eval_count": 9745,
      "eval_count": 1000,
      "total_duration_ns": 10954468500,
      "load_duration_ns": 3446700,
      "prompt_eval_duration_ns": 110351000,
      "eval_duration_ns": 10827513000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: BK3Xu8 -> 김로경",
        "이름 불일치: RCl5TX -> 김솔하"
      ],
      "hit_include": 3,
      "include_total": 10,
      "miss_exclude": 0,
      "exclude_total": 5,
      "picked_ids": [
        "O80nEw",
        "5uxZnZ",
        "e7Dwvo",
        "5zw825",
        "SRofjq",
        "mO7xQd",
        "EY5zIA",
        "tXdvFg",
        "BK3Xu8",
        "RCl5TX"
      ]
    },
    "answer": "```json\n{\n  \"top10\": [\n    {\n      \"rank\": 1,\n      \"id\": \"O80nEw\",\n      \"name\": \"박담하\",\n      \"reason\": \"최근 낙상으로 입원, 현재 자택 요양 중이며, 선교지를 위한 기도와 은퇴 후 삶에 대한 인도하심을 구함.\"\n    },\n    {\n      \"rank\": 2,\n      \"id\": \"5uxZnZ\",\n      \"name\": \"유시서\",\n      \"reason\": \"당뇨 관리 중이며, 봉사팀 리더로 활동 중이고, 임신과 순산, 이사/거주 문제, 건강 회복, 질병 치유 감사, 취업/이직, 관계 회복(친구/가족), 부모님 건강, 이사/거주 문제, 이사/거주 문제, 교회 공동체를 위한 기도 등을 기도함.\"\n    },\n    {\n      \"rank\": 3,\n      \"id\": \"e7Dwvo\",\n      \"name\": \"이규유\",\n      \"reason\": \"장기 결석 중이며, 사유 확인 필요하고, 이사/거주 문제, 자녀 신앙 성장, 가족 관계 회복, 재정적 어려움 해결, 우울감 극복, 은퇴 후 삶에 대한 인도하심, 자녀 신앙 성장 등을 기도함.\"\n    },\n    {\n      \"rank\": 4,\n      \"id\": \"5zw825\",\n      \"name\": \"이시나\",\n      \"reason\": \"정보가 부족하며, 부모와 함께 최근 8주 중 2주 출석하고, 이사/거주 문제, 교회 공동체를 위한 기도 등을 기도함.\"\n    },\n    {\n      \"rank\": 5,\n      \"id\": \"SRofjq\",\n      \"name\": \"이유온\",\n      \"reason\": \"정보가 부족하며, 보호자와 함께 출석하고, 질병 치유 감사, 교회 공동체를 위한 기도 등을 기도함.\"\n    },\n    {\n      \"rank\": 6,\n      \"id\": \"mO7xQd\",\n      \"name\": \"권태담\",\n      \"reason\": \"정보가 부족하며, 부모와 함께 최근 8주 중 6주 출석하고, 건강 회복, 교회 공동체를 위한 기도, 교회 공동체를 위한 기도, 질병 치유 감사, 건강 회복, 질병 치유 감사 등을 기도함.\"\n    },\n    {\n      \"rank\": 7,\n      \"id\": \"EY5zIA\",\n      \"name\": \"오서하\",\n      \"reason\": \"요양병원 입원 중이며, 장기 입원으로 공동체와 접촉이 거의 끊긴 상태이고, 관계 회복(친구/가족), 우울감 극복, 관계 회복(친구/가족), 자녀 신앙 성장 등을 기도함.\"\n    },\n    {\n      \"rank\": 8,\n      \"id\": \"tXdvFg\",\n      \"name\": \"안율선\",\n      \"reason\": \"알레르기로 병원 통원 중이며, 보호자와 함께 출석하고, 질병 치유 감사, 질병 치유 감사, 건강 회복, 질병 치유 감사, 교회 공동체를 위한 기도, 건강 회복, 교회 공동체를 위한 기도 등을 기도함.\"\n    },\n    {\n      \"rank\": 9,\n      \"id\": \"BK3Xu8\",\n      \"name\": \"김로경\",\n      \"reason\": \"만성 신장질환으로 격주 투석 중이며, 자녀 진로 결정, 군 복무 중인 자녀, 부모님 건강, 자녀 진로 결정, 우울감 극복, 관계 회복(친구/가족), 질병 치유 감사, 관계 회복(친구/가족) 등을 기도함.\"\n    },\n    {\n      \"rank\": 10,\n      \"id\": \"RCl5TX\",\n      \"name\": \"김솔하\",\n      \"reason\": \"배우자: 김로경, 자녀: 김하율, 자녀: 배결빈, 만성 질환으로 정기 검진 중이고, 직장 내 어려움, 선교지를 위한 기도, 자녀 신앙 성장, 가족 관계 회복, 질병 치유 감사, 관계 회복(친구/가족) 등을 기도함.\"\n    }\n  ]\n}\n```",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T14:01:44",
    "model": "gemma3:4b",
    "set": "set06",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14718,
    "perf": {
      "elapsed_sec": 11.2,
      "load_sec": 0.0,
      "tokens_per_sec": 91.7,
      "speed_note": null,
      "prompt_eval_count": 9402,
      "eval_count": 816,
      "total_duration_ns": 11173594400,
      "load_duration_ns": 3374600,
      "prompt_eval_duration_ns": 2064840000,
      "eval_duration_ns": 8896040000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "명부에 없는 id: QPlTSD"
      ],
      "hit_include": 1,
      "include_total": 10,
      "miss_exclude": 1,
      "exclude_total": 5,
      "picked_ids": [
        "er9Xad",
        "fuydp1",
        "YbWuqy",
        "Z9Da9P",
        "7ECziq",
        "xtnJfn",
        "k8030c",
        "QPlTSD",
        "DWMo6K",
        "qfjE2x"
      ]
    },
    "answer": "```json\n{\n  \"top10\": [\n    {\n      \"rank\": 1,\n      \"id\": \"er9Xad\",\n      \"name\": \"권이엘\",\n      \"reason\": \"31년 신앙 연차를 가지고 있으며, 최근 8주 출석률이 50%로, 꾸준한 심방을 통해 교회를 더욱 깊이 경험할 필요가 있습니다.\"\n    },\n    {\n      \"rank\": 2,\n      \"id\": \"fuydp1\",\n      \"name\": \"권민아\",\n      \"reason\": \"최근 8주 출석률 80%로, 건강 상태와 연락처 변경 사항을 고려하여 지속적인 관심과 지원이 필요합니다.\"\n    },\n    {\n      \"rank\": 3,\n      \"id\": \"YbWuqy\",\n      \"name\": \"신훈민\",\n      \"reason\": \"새신자로 등록된 후, 신앙생활의 기초를 다지는 심방이 필요하며, 우울감 극복과 건강 회복을 위한 기도와 지지가 필요합니다.\"\n    },\n    {\n      \"rank\": 4,\n      \"id\": \"Z9Da9P\",\n      \"name\": \"송빈람\",\n      \"reason\": \"최근 8주 출석률 10%로, 장기 결석 사유를 확인하고, 교회를 다시 연결하기 위한 노력이 필요합니다.\"\n    },\n    {\n      \"rank\": 5,\n      \"id\": \"7ECziq\",\n      \"name\": \"송경우\",\n      \"reason\": \"최근 8주 출석률 40%로, 타 지역 이주 예정임을 고려하여, 이주 전 교회를 떠나지 않도록 격려하고 지원해야 합니다.\"\n    },\n    {\n      \"rank\": 6,\n      \"id\": \"xtnJfn\",\n      \"name\": \"홍시아\",\n      \"reason\": \"최근 8주 출석률 1%로, 장기 결석 사유를 확인하고, 교회를 다시 연결하기 위한 노력이 필요합니다.\"\n    },\n    {\n      \"rank\": 7,\n      \"id\": \"k8030c\",\n      \"name\": \"유름채\",\n      \"reason\": \"최근 8주 출석률 70%로, 만성 질환으로 정기 검진 중이며, 건강 회복을 위한 기도와 지지가 필요합니다.\"\n    },\n    {\n      \"rank\": 8,\n      \"id\": \"QPlTSD\",\n      \"name\": \"신영담\",\n      \"reason\": \"최근 8주 출석률 40%로, 학업 성취를 위한 기도와 함께, 교회를 떠나지 않도록 격려하고 지원해야 합니다.\"\n    },\n    {\n      \"rank\": 9,\n      \"id\": \"DWMo6K\",\n      \"name\": \"윤시민\",\n      \"reason\": \"최근 8주 출석률 20%로, 가벼운 우울감을 호소하며, 관계 회복을 위한 기도와 지지가 필요합니다.\"\n    },\n    {\n      \"rank\": 10,\n      \"id\": \"qfjE2x\",\n      \"name\": \"정율아\",\n      \"reason\": \"최근 8주 출석률 30%로, 고혈압으로 정기 통원 중이며, 직장 내 어려움과 재정적 어려움 해결을 위한 기도와 지지가 필요합니다.\"\n    }\n  ]\n}\n```",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T14:01:56",
    "model": "gemma3:4b",
    "set": "set06",
    "attempt": 2,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14718,
    "perf": {
      "elapsed_sec": 11.5,
      "load_sec": 0.0,
      "tokens_per_sec": 92.5,
      "speed_note": null,
      "prompt_eval_count": 9402,
      "eval_count": 1049,
      "total_duration_ns": 11474747700,
      "load_duration_ns": 3313900,
      "prompt_eval_duration_ns": 115668000,
      "eval_duration_ns": 11341913000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "중복: Z9Da9P"
      ],
      "hit_include": 1,
      "include_total": 10,
      "miss_exclude": 1,
      "exclude_total": 5,
      "picked_ids": [
        "er9Xad",
        "fuydp1",
        "YbWuqy",
        "Z9Da9P",
        "7ECziq",
        "xtnJfn",
        "k8030c",
        "Z9Da9P",
        "DWMo6K",
        "qfjE2x"
      ]
    },
    "answer": "```json\n{\n  \"top10\": [\n    {\n      \"rank\": 1,\n      \"id\": \"er9Xad\",\n      \"name\": \"권이엘\",\n      \"reason\": \"31년 신앙 연차, 최근 8주 출석률 50%로 꾸준한 신앙생활을 이어오고 있으며, 최근 배우자 별세로 인한 슬픔을 겪고 있어 위로와 격려가 필요한 상황입니다.\"\n    },\n    {\n      \"rank\": 2,\n      \"id\": \"fuydp1\",\n      \"name\": \"권민아\",\n      \"reason\": \"49세로, 고혈압으로 정기 통원 중이며 최근 손주 출생으로 인해 가족 관계 회복을 위한 기도와 함께, 직장 내 어려움에 대한 도움을 필요로 합니다.\"\n    },\n    {\n      \"rank\": 3,\n      \"id\": \"YbWuqy\",\n      \"name\": \"신훈민\",\n      \"reason\": \"19세 신자로, 최근 새신자로 등록되었으며, 우울감 극복, 질병 치유 감사, 가족 관계 회복, 건강 회복을 위한 기도제목을 가지고 있어 초기 신앙생활에 대한 지원이 필요합니다.\"\n    },\n    {\n      \"rank\": 4,\n      \"id\": \"Z9Da9P\",\n      \"name\": \"송빈람\",\n      \"reason\": \"40세로, 정기적으로 봉사활동에 참여하며, 최근 8주 출석률 80%로 꾸준한 신앙생활을 이어오고 있지만, 우울감 극복과 건강 회복을 위한 기도가 필요합니다.\"\n    },\n    {\n      \"rank\": 5,\n      \"id\": \"7ECziq\",\n      \"name\": \"송경우\",\n      \"reason\": \"15세로, 타 지역 이주 예정이며, 최근 8주 출석률 40%로 낮은 출석률을 보이고 있어 학업 성취를 위한 기도와 함께, 이주에 대한 어려움을 겪고 있을 가능성이 있습니다.\"\n    },\n    {\n      \"rank\": 6,\n      \"id\": \"xtnJfn\",\n      \"name\": \"홍시아\",\n      \"reason\": \"14세로, 장기 결석 중이며, 사유 확인이 필요합니다. 시험 합격, 건강 회복, 시험 합격과 관련된 기도제목을 가지고 있어 신앙생활에 대한 지원이 필요합니다.\"\n    },\n    {\n      \"rank\": 7,\n      \"id\": \"k8030c\",\n      \"name\": \"유름채\",\n      \"reason\": \"55세로, 만성 질환으로 정기 검진 중이며, 최근 새신자로 등록되었고, 취업/이직, 군 복무 중인 자녀, 건강 회복, 부모님 건강, 건강 회복, 관계 회복(친구/가족)과 관련된 기도제목을 가지고 있어 다양한 어려움을 겪고 있을 가능성이 있습니다.\"\n    },\n    {\n      \"rank\": 8,\n      \"id\": \"Z9Da9P\",\n      \"name\": \"송빈람\",\n      \"reason\": \"40세로, 최근 8주 출석률 80%로 꾸준한 신앙생활을 이어오고 있지만, 우울감 극복과 건강 회복을 위한 기도가 필요합니다.\"\n    },\n    {\n      \"rank\": 9,\n      \"id\": \"DWMo6K\",\n      \"name\": \"윤시민\",\n      \"reason\": \"17세로, 최근 8주 출석률 20%로 낮은 출석률을 보이고 있으며, 가족 간 갈등을 최근 언급하여 관계 회복을 위한 기도와 함께, 선교지를 위한 기도, 부모님 건강, 건강 회복, 선교지를 위한 기도, 부모님 건강, 학업 성취, 교회 공동체를 위한 기도, 가족 관계 회복과 관련된 어려움을 겪고 있을 가능성이 있습니다.\"\n    },\n    {\n      \"rank\": 10,\n      \"id\": \"qfjE2x\",\n      \"name\": \"정율아\",\n      \"reason\": \"41세로, 고혈압으로 정기 통원 중이며, 최근 가족 간 갈등을 언급하여 관계 회복을 위한 기도와 함께, 취업/이직, 직장 내 어려움, 재정적 어려움 해결, 이사/거주 문제, 선교지를 위한 기도, 이사/거주 문제와 관련된 어려움을 겪고 있을 가능성이 있습니다.\"\n    }\n  ]\n}\n```",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T14:02:06",
    "model": "gemma3:4b",
    "set": "set07",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 15042,
    "perf": {
      "elapsed_sec": 10.7,
      "load_sec": 0.0,
      "tokens_per_sec": 91.7,
      "speed_note": null,
      "prompt_eval_count": 9606,
      "eval_count": 768,
      "total_duration_ns": 10715737700,
      "load_duration_ns": 2808100,
      "prompt_eval_duration_ns": 2116967999,
      "eval_duration_ns": 8376096000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: oHdOmJ -> 고호우",
        "명부에 없는 id: Exuxal",
        "명부에 없는 id: qdVy6R"
      ],
      "hit_include": 2,
      "include_total": 10,
      "miss_exclude": 1,
      "exclude_total": 5,
      "picked_ids": [
        "l9mbH6",
        "BUilWS",
        "NccB1m",
        "pVhKnv",
        "68ufme",
        "LNes8O",
        "syU6Fi",
        "oHdOmJ",
        "Exuxal",
        "qdVy6R"
      ]
    },
    "answer": "```json\n{\n  \"top10\": [\n    {\n      \"rank\": 1,\n      \"id\": \"l9mbH6\",\n      \"name\": \"이진온\",\n      \"reason\": \"최근 8주 중 4주 출석하며 꾸준한 성장을 보이고 있으며, 자녀 진로 결정, 결혼/배우자를 위한 기도 등 다양한 기도를 필요로 함.\"\n    },\n    {\n      \"rank\": 2,\n      \"id\": \"BUilWS\",\n      \"name\": \"한이우\",\n      \"reason\": \"최근 8주 중 8주 출석하며 적극적으로 교회를 다녀가고 있으며, 자녀 신앙 성장, 취업/이직 등 다양한 기도 요청이 있음.\"\n    },\n    {\n      \"rank\": 3,\n      \"id\": \"NccB1m\",\n      \"name\": \"오경수\",\n      \"reason\": \"알레르기로 병원 통원 중이며, 학업 성취, 건강 회복 등 기본적인 기도 요청이 필요함.\"\n    },\n    {\n      \"rank\": 4,\n      \"id\": \"pVhKnv\",\n      \"name\": \"고민훈\",\n      \"reason\": \"최근 실직으로 경제적 어려움을 겪고 있으며, 이사/거주 문제, 자녀 신앙 성장 등 다양한 기도 요청이 있음.\"\n    },\n    {\n      \"rank\": 5,\n      \"id\": \"68ufme\",\n      \"name\": \"강하름\",\n      \"reason\": \"최근 건강검진에서 이상 소견이 발견되었고, 타 지역 이주 예정이므로 건강 회복과 이사/거주 문제에 대한 기도 요청이 필요함.\"\n    },\n    {\n      \"rank\": 6,\n      \"id\": \"LNes8O\",\n      \"name\": \"유솔엘\",\n      \"reason\": \"3주 전 수술 후 재활 중이며, 자녀 진로 결정, 군 복무 중인 자녀, 은퇴 후 삶에 대한 인도하심 등 다양한 기도 요청이 있음.\"\n    },\n    {\n      \"rank\": 7,\n      \"id\": \"syU6Fi\",\n      \"name\": \"윤온진\",\n      \"reason\": \"부모와 함께 최근 8주 중 4주 출석하며 꾸준히 교회를 다녀가고 있으며, 건강 회복, 학업 성취 등 기본적인 기도 요청이 필요함.\"\n    },\n    {\n      \"rank\": 8,\n      \"id\": \"oHdOmJ\",\n      \"name\": \"고호우\",\n      \"reason\": \"낙상으로 입원 중이며, 건강 회복과 선교지를 위한 기도 등 기본적인 기도 요청이 필요함.\"\n    },\n    {\n      \"rank\": 9,\n      \"id\": \"Exuxal\",\n      \"name\": \"김결호\",\n      \"reason\": \"골절로 깁스 중이며, 건강 회복, 자녀 신앙 성장 등 기본적인 기도 요청이 필요함.\"\n    },\n    {\n      \"rank\": 10,\n      \"id\": \"qdVy6R\",\n      \"name\": \"손준윤\",\n      \"reason\": \"최근 8주 출석 기록이 없어, 기본적인 기도 요청을 위한 심방이 필요함.\"\n    }\n  ]\n}\n```",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T14:02:14",
    "model": "gemma3:4b",
    "set": "set07",
    "attempt": 2,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 15042,
    "perf": {
      "elapsed_sec": 7.4,
      "load_sec": 0.0,
      "tokens_per_sec": 92.6,
      "speed_note": null,
      "prompt_eval_count": 9606,
      "eval_count": 674,
      "total_duration_ns": 7400374100,
      "load_duration_ns": 2842000,
      "prompt_eval_duration_ns": 108204000,
      "eval_duration_ns": 7277029000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: oHdOmJ -> 고호우",
        "명부에 없는 id: Exuxal",
        "명부에 없는 id: qdVy8R"
      ],
      "hit_include": 2,
      "include_total": 10,
      "miss_exclude": 1,
      "exclude_total": 5,
      "picked_ids": [
        "NccB1m",
        "BUilWS",
        "pVhKnv",
        "l9mbH6",
        "syU6Fi",
        "68ufme",
        "LNes8O",
        "oHdOmJ",
        "Exuxal",
        "qdVy8R"
      ]
    },
    "answer": "```json\n{\n  \"top10\": [\n    {\n      \"rank\": 1,\n      \"id\": \"NccB1m\",\n      \"name\": \"오경수\",\n      \"reason\": \"최근 건강검진에서 이상 소견 발견, 꾸준한 건강 관리와 교제 필요\"\n    },\n    {\n      \"rank\": 2,\n      \"id\": \"BUilWS\",\n      \"name\": \"한이우\",\n      \"reason\": \"최근 8주 동안 꾸준히 참석, 지속적인 교제 및 헌신 필요\"\n    },\n    {\n      \"rank\": 3,\n      \"id\": \"pVhKnv\",\n      \"name\": \"고민훈\",\n      \"reason\": \"최근 실직으로 경제적 어려움 호소, 심리적 지지와 실질적인 도움 필요\"\n    },\n    {\n      \"rank\": 4,\n      \"id\": \"l9mbH6\",\n      \"name\": \"이진온\",\n      \"reason\": \"자녀 진로 결정, 결혼/배우자를 위한 기도, 관계 회복, 재정적 어려움 해결 등 다양한 어려움으로 교제 필요\"\n    },\n    {\n      \"rank\": 5,\n      \"id\": \"syU6Fi\",\n      \"name\": \"윤온진\",\n      \"reason\": \"부모와 함께 최근 8주 중 4주 출석, 학업 성취 및 건강 회복을 위한 지속적인 격려와 헌신 필요\"\n    },\n    {\n      \"rank\": 6,\n      \"id\": \"68ufme\",\n      \"name\": \"강하름\",\n      \"reason\": \"타 지역 이주 예정, 이사/거주 문제에 대한 기도와 지원 필요\"\n    },\n    {\n      \"rank\": 7,\n      \"id\": \"LNes8O\",\n      \"name\": \"유솔엘\",\n      \"reason\": \"3주 전 수술 후 재활 중, 회복을 위한 지속적인 기도와 관심 필요\"\n    },\n    {\n      \"rank\": 8,\n      \"id\": \"oHdOmJ\",\n      \"name\": \"고호우\",\n      \"reason\": \"요양병원 입원 중, 사회적 고립으로 인한 우울감 극복과 지속적인 교제 필요\"\n    },\n    {\n      \"rank\": 9,\n      \"id\": \"Exuxal\",\n      \"name\": \"김결호\",\n      \"reason\": \"최근 골절로 깁스 중, 신체적 어려움과 함께 정신적인 지지 필요\"\n    },\n    {\n      \"rank\": 10,\n      \"id\": \"qdVy8R\",\n      \"name\": \"전태연\",\n      \"reason\": \"자녀 신앙 성장, 학업 성취를 위한 지속적인 격려와 헌신 필요\"\n    }\n  ]\n}\n```",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T14:02:24",
    "model": "gemma3:4b",
    "set": "set08",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14820,
    "perf": {
      "elapsed_sec": 10.5,
      "load_sec": 0.0,
      "tokens_per_sec": 91.7,
      "speed_note": null,
      "prompt_eval_count": 9403,
      "eval_count": 753,
      "total_duration_ns": 10483010500,
      "load_duration_ns": 2979900,
      "prompt_eval_duration_ns": 2059589000,
      "eval_duration_ns": 8212300999
    },
    "validation": {
      "format_ok": true,
      "issues": [],
      "hit_include": 4,
      "include_total": 10,
      "miss_exclude": 0,
      "exclude_total": 5,
      "picked_ids": [
        "puYXbc",
        "RBsChV",
        "vAJ1gN",
        "XUlTrr",
        "jtdoFr",
        "nj16v9",
        "DoIP6c",
        "iG0WlM",
        "8gZBY1",
        "3gjYox"
      ]
    },
    "answer": "```json\n{\n  \"top10\": [\n    {\n      \"rank\": 1,\n      \"id\": \"puYXbc\",\n      \"name\": \"송수도\",\n      \"reason\": \"최근 8주 출석이 없어, 건강과 신앙적 어려움을 겪고 있을 가능성을 고려하여 우선순위를 높게 설정합니다.\"\n    },\n    {\n      \"rank\": 2,\n      \"id\": \"RBsChV\",\n      \"name\": \"윤서재\",\n      \"reason\": \"만성 질환과 최근 자녀 입시 스트레스로 어려움을 겪고 있어, 신체적, 정신적 지지 및 기도와 필요합니다.\"\n    },\n    {\n      \"rank\": 3,\n      \"id\": \"vAJ1gN\",\n      \"name\": \"송진연\",\n      \"reason\": \"최근 배우자 별세로 슬픔에 잠겨 있으며, 혼자 지내는 상황이므로, 심리적 지지와 격려가 필요합니다.\"\n    },\n    {\n      \"rank\": 4,\n      \"id\": \"XUlTrr\",\n      \"name\": \"권로나\",\n      \"reason\": \"출석률이 낮고, 최근 출산으로 산후 회복 중이므로, 육체적, 정신적 지지 및 필요한 도움을 제공해야 합니다.\"\n    },\n    {\n      \"rank\": 5,\n      \"id\": \"jtdoFr\",\n      \"name\": \"임가나\",\n      \"reason\": \"요양병원 입원 중이며, 공동체와 접촉이 거의 끊어진 상태이므로, 정기적인 방문과 관심이 필요합니다.\"\n    },\n    {\n      \"rank\": 6,\n      \"id\": \"nj16v9\",\n      \"name\": \"송람나\",\n      \"reason\": \"최근 8주 출석이 낮아, 성장 과정에서 겪는 어려움이나 필요로 하는 부분을 파악하고 지지해야 합니다.\"\n    },\n    {\n      \"rank\": 7,\n      \"id\": \"DoIP6c\",\n      \"name\": \"윤민시\",\n      \"reason\": \"정보가 부족하여, 신앙적 필요를 파악하기 어렵고, 초기 방문을 통해 관계를 형성하는 것이 중요합니다.\"\n    },\n    {\n      \"rank\": 8,\n      \"id\": \"iG0WlM\",\n      \"name\": \"윤빈지\",\n      \"reason\": \"우울감을 호소하고 있어, 심리적 지지와 격려, 그리고 신앙적 교제를 통해 어려움을 극복하도록 돕습니다.\"\n    },\n    {\n      \"rank\": 9,\n      \"id\": \"8gZBY1\",\n      \"name\": \"강영수\",\n      \"reason\": \"최근 이사를 했고, 보호자와 함께 출석하므로, 새로운 환경에 적응하도록 돕고, 교제 관계를 형성해야 합니다.\"\n    },\n    {\n      \"rank\": 10,\n      \"id\": \"3gjYox\",\n      \"name\": \"손채현\",\n      \"reason\": \"정보가 부족하여, 신앙적 필요를 파악하기 어렵고, 초기 방문을 통해 관계를 형성하는 것이 중요합니다.\"\n    }\n  ]\n}\n```",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T14:02:33",
    "model": "gemma3:4b",
    "set": "set08",
    "attempt": 2,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14820,
    "perf": {
      "elapsed_sec": 8.5,
      "load_sec": 0.0,
      "tokens_per_sec": 92.7,
      "speed_note": null,
      "prompt_eval_count": 9403,
      "eval_count": 774,
      "total_duration_ns": 8477754100,
      "load_duration_ns": 3150500,
      "prompt_eval_duration_ns": 112338000,
      "eval_duration_ns": 8350571000
    },
    "validation": {
      "format_ok": true,
      "issues": [],
      "hit_include": 5,
      "include_total": 10,
      "miss_exclude": 0,
      "exclude_total": 5,
      "picked_ids": [
        "puYXbc",
        "RBsChV",
        "vAJ1gN",
        "XUlTrr",
        "jtdoFr",
        "nj16v9",
        "DoIP6c",
        "j0zzaC",
        "3gjYox",
        "4ytcGt"
      ]
    },
    "answer": "```json\n{\n  \"top10\": [\n    {\n      \"rank\": 1,\n      \"id\": \"puYXbc\",\n      \"name\": \"송수도\",\n      \"reason\": \"최근 8주 출석이 없어, 건강과 신앙적 어려움을 겪고 있을 가능성을 고려하여 우선순위를 높게 설정합니다.\"\n    },\n    {\n      \"rank\": 2,\n      \"id\": \"RBsChV\",\n      \"name\": \"윤서재\",\n      \"reason\": \"만성 질환과 자녀 입시 스트레스로 어려움을 겪고 있어, 신체적, 정신적 지지 및 기도와 필요합니다.\"\n    },\n    {\n      \"rank\": 3,\n      \"id\": \"vAJ1gN\",\n      \"name\": \"송진연\",\n      \"reason\": \"최근 배우자 별세로 슬픔에 잠겨 있으며, 혼자 지내는 상황이므로 심방을 통해 위로와 격려가 필요합니다.\"\n    },\n    {\n      \"rank\": 4,\n      \"id\": \"XUlTrr\",\n      \"name\": \"권로나\",\n      \"reason\": \"출석이 저조하고, 출산 후 회복 중이므로, 육체적, 정신적 어려움을 겪고 있을 가능성을 고려하여 심방을 통해 지지합니다.\"\n    },\n    {\n      \"rank\": 5,\n      \"id\": \"jtdoFr\",\n      \"name\": \"임가나\",\n      \"reason\": \"요양병원 입원 중이며, 공동체와 접촉이 거의 끊어진 상태이므로, 심방을 통해 정서적 지지와 교제 필요합니다.\"\n    },\n    {\n      \"rank\": 6,\n      \"id\": \"nj16v9\",\n      \"name\": \"송람나\",\n      \"reason\": \"최근 8주 출석이 저조하고, 반려동물 사망으로 슬픔을 겪고 있어, 심방을 통해 위로와 격려가 필요합니다.\"\n    },\n    {\n      \"rank\": 7,\n      \"id\": \"DoIP6c\",\n      \"name\": \"윤민시\",\n      \"reason\": \"정보가 부족하여 심방을 통해 교인으로서의 필요를 파악하고, 관계를 맺는 것이 중요합니다.\"\n    },\n    {\n      \"rank\": 8,\n      \"id\": \"j0zzaC\",\n      \"name\": \"강재서\",\n      \"reason\": \"교육부 소속으로 활동 중이며, 학업 성취와 교회 공동체를 위한 기도를 하고 있어, 지적, 영적으로 성장할 수 있도록 돕습니다.\"\n    },\n    {\n      \"rank\": 9,\n      \"id\": \"3gjYox\",\n      \"name\": \"손채현\",\n      \"reason\": \"정보가 부족하여 심방을 통해 교인으로서의 필요를 파악하고, 관계를 맺는 것이 중요합니다.\"\n    },\n    {\n      \"rank\": 10,\n      \"id\": \"4ytcGt\",\n      \"name\": \"백시원\",\n      \"reason\": \"수술 후 재활 중이며, 식사를 거르는 날이 많아 영양 불균형과 외로움을 겪고 있을 가능성을 고려하여 심방을 통해 지지합니다.\"\n    }\n  ]\n}\n```",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T14:02:44",
    "model": "gemma3:4b",
    "set": "set09",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14743,
    "perf": {
      "elapsed_sec": 11.6,
      "load_sec": 0.0,
      "tokens_per_sec": 91.7,
      "speed_note": null,
      "prompt_eval_count": 9399,
      "eval_count": 857,
      "total_duration_ns": 11614140500,
      "load_duration_ns": 4010000,
      "prompt_eval_duration_ns": 2060987000,
      "eval_duration_ns": 9347189000
    },
    "validation": {
      "format_ok": true,
      "issues": [],
      "hit_include": 4,
      "include_total": 10,
      "miss_exclude": 0,
      "exclude_total": 5,
      "picked_ids": [
        "bAs062",
        "rjz61I",
        "Id9IC0",
        "i3MwOi",
        "gKvDaG",
        "FecmBC",
        "noMa1V",
        "iiXIvS",
        "laFeVH",
        "5u0Y2V"
      ]
    },
    "answer": "```json\n{\n  \"top10\": [\n    {\n      \"rank\": 1,\n      \"id\": \"bAs062\",\n      \"name\": \"이호진\",\n      \"reason\": \"최근 모친상 슬픔에 잠겨 위로와 격려가 필요한 상황이며, 장례 절차로 인해 최근 2주간 연락이 어려웠음.\"\n    },\n    {\n      \"rank\": 2,\n      \"id\": \"rjz61I\",\n      \"name\": \"권수결\",\n      \"reason\": \"최근 부친상으로 인한 슬픔과 장례 이후 첫 예배 참석 예정이므로, 심방을 통해 위로와 격려를 제공하고, 예배 참석을 독려해야 함.\"\n    },\n    {\n      \"rank\": 3,\n      \"id\": \"Id9IC0\",\n      \"name\": \"유아하\",\n      \"reason\": \"최근 새신자로 등록되었으며, 재정적 어려움과 은퇴 후 삶에 대한 인도하심이 필요한 상황이므로, 심방을 통해 격려와 지원을 제공해야 함.\"\n    },\n    {\n      \"rank\": 4,\n      \"id\": \"i3MwOi\",\n      \"name\": \"장경연\",\n      \"reason\": \"만성 신장질환으로 격주 투석 중이며, 체력 저하로 예배 참석이 점차 줄고 있어, 심방을 통해 격려와 함께 건강 관리에 대한 조언을 제공해야 함.\"\n    },\n    {\n      \"rank\": 5,\n      \"id\": \"gKvDaG\",\n      \"name\": \"신진서\",\n      \"reason\": \"최근 배우자 수술로 인해 본인과 배우자 간병 부담이 크고, 최근 8주 출석이 1회로 매우 적어 심방을 통해 위로와 격려를 제공하고, 교제 활성화에 도움을 주어야 함.\"\n    },\n    {\n      \"rank\": 6,\n      \"id\": \"FecmBC\",\n      \"name\": \"이준시\",\n      \"reason\": \"심방 기록이 0회로 심방 경험이 없어, 심방을 통해 교회를 소개하고, 교제에 참여할 수 있도록 격려해야 함.\"\n    },\n    {\n      \"rank\": 7,\n      \"id\": \"noMa1V\",\n      \"name\": \"손도결\",\n      \"reason\": \"부모와 함께 최근 8주 중 3주 출석으로 교제 활성화가 미흡하므로, 심방을 통해 교제 참여를 독려하고, 건강 관리에 대한 조언을 제공해야 함.\"\n    },\n    {\n      \"rank\": 8,\n      \"id\": \"iiXIvS\",\n      \"name\": \"문하연\",\n      \"reason\": \"심방 기록이 0회로 심방 경험이 없어, 심방을 통해 교회를 소개하고, 교제에 참여할 수 있도록 격려해야 함.\"\n    },\n    {\n      \"rank\": 9,\n      \"id\": \"laFeVH\",\n      \"name\": \"안아건\",\n      \"reason\": \"최근 0주 출석으로 교제 활성화가 미흡하므로, 심방을 통해 교제 참여를 독려하고, 건강 관리에 대한 조언을 제공해야 함.\"\n    },\n    {\n      \"rank\": 10,\n      \"id\": \"5u0Y2V\",\n      \"name\": \"권채수\",\n      \"reason\": \"봉사팀 리더로 활동 중이며, 최근 8주 출석이 4주로 적어 심방을 통해 교제 활성화에 도움을 주어야 함.\"\n    }\n  ]\n}\n```",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T14:02:53",
    "model": "gemma3:4b",
    "set": "set09",
    "attempt": 2,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14743,
    "perf": {
      "elapsed_sec": 8.7,
      "load_sec": 0.0,
      "tokens_per_sec": 92.7,
      "speed_note": null,
      "prompt_eval_count": 9399,
      "eval_count": 793,
      "total_duration_ns": 8684203700,
      "load_duration_ns": 2771200,
      "prompt_eval_duration_ns": 111021000,
      "eval_duration_ns": 8556656000
    },
    "validation": {
      "format_ok": false,
      "issues": [
        "이름 불일치: I1WE2c -> 문하연",
        "이름 불일치: x5vvcC -> 권채수"
      ],
      "hit_include": 4,
      "include_total": 10,
      "miss_exclude": 0,
      "exclude_total": 5,
      "picked_ids": [
        "bAs062",
        "rjz61I",
        "Id9IC0",
        "I1WE2c",
        "gKvDaG",
        "FecmBC",
        "noMa1V",
        "x5vvcC",
        "i3MwOi",
        "laFeVH"
      ]
    },
    "answer": "```json\n{\n  \"top10\": [\n    {\n      \"rank\": 1,\n      \"id\": \"bAs062\",\n      \"name\": \"이호진\",\n      \"reason\": \"최근 모친상 슬픔에 잠겨 위로와 격려가 필요한 상황이며, 장례 절차로 인해 최근 2주간 연락이 어려웠음.\"\n    },\n    {\n      \"rank\": 2,\n      \"id\": \"rjz61I\",\n      \"name\": \"권수결\",\n      \"reason\": \"최근 부친상으로 인한 슬픔과 장례 이후 첫 예배 참석 예정이므로, 심방을 통해 정신적인 지지와 격려가 필요함.\"\n    },\n    {\n      \"rank\": 3,\n      \"id\": \"Id9IC0\",\n      \"name\": \"유아하\",\n      \"reason\": \"최근 새신자로 등록되어 교회를 처음 경험하는 만큼, 교회 생활 적응과 신앙적인 훈련이 필요함.\"\n    },\n    {\n      \"rank\": 4,\n      \"id\": \"I1WE2c\",\n      \"name\": \"문하연\",\n      \"reason\": \"정보가 부족하여 현재 상황에 대한 정확한 파악이 필요하며, 심방을 통해 교인으로서의 삶에 대한 지지와 격려가 필요함.\"\n    },\n    {\n      \"rank\": 5,\n      \"id\": \"gKvDaG\",\n      \"name\": \"신진서\",\n      \"reason\": \"최근 배우자 수술로 인해 배우자 간병 부담이 커져 어려움을 겪고 있으므로, 심방을 통해 정서적인 지지와 위로가 필요함.\"\n    },\n    {\n      \"rank\": 6,\n      \"id\": \"FecmBC\",\n      \"name\": \"이준시\",\n      \"reason\": \"정보가 부족하여 현재 상황에 대한 정확한 파악이 필요하며, 심방을 통해 교인으로서의 삶에 대한 지지와 격려가 필요함.\"\n    },\n    {\n      \"rank\": 7,\n      \"id\": \"noMa1V\",\n      \"name\": \"손도결\",\n      \"reason\": \"만성 질환으로 정기 검진 중이며, 부모와 함께 출석하므로, 건강 상태와 필요를 확인하고 격려하는 심방이 필요함.\"\n    },\n    {\n      \"rank\": 8,\n      \"id\": \"x5vvcC\",\n      \"name\": \"권채수\",\n      \"reason\": \"봉사팀 리더로 활동 중이며, 최근 교인으로서의 삶에 대한 어려움을 겪고 있을 가능성이 있으므로, 심방을 통해 지지와 격려가 필요함.\"\n    },\n    {\n      \"rank\": 9,\n      \"id\": \"i3MwOi\",\n      \"name\": \"장경연\",\n      \"reason\": \"만성 신장질환으로 격주 투석 중이며, 예배 참석이 점차 줄고 있어 심방을 통해 어려움을 파악하고 격려하는 것이 필요함.\"\n    },\n    {\n      \"rank\": 10,\n      \"id\": \"laFeVH\",\n      \"name\": \"안아건\",\n      \"reason\": \"최근 출석이 없어 심방을 통해 교제 부족으로 인한 어려움을 파악하고, 교제 활성화에 도움을 주는 심방이 필요함.\"\n    }\n  ]\n}\n```",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T14:03:04",
    "model": "gemma3:4b",
    "set": "set10",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14713,
    "perf": {
      "elapsed_sec": 10.8,
      "load_sec": 0.0,
      "tokens_per_sec": 91.8,
      "speed_note": null,
      "prompt_eval_count": 9349,
      "eval_count": 786,
      "total_duration_ns": 10818420500,
      "load_duration_ns": 2731300,
      "prompt_eval_duration_ns": 2057574999,
      "eval_duration_ns": 8557739000
    },
    "validation": {
      "format_ok": true,
      "issues": [],
      "hit_include": 2,
      "include_total": 10,
      "miss_exclude": 1,
      "exclude_total": 5,
      "picked_ids": [
        "eIdMWK",
        "lY15Ub",
        "jtDGPs",
        "of89p5",
        "mBgSWb",
        "IKOXbT",
        "TEeRI2",
        "SSHSAu",
        "56LtJR",
        "92O7Sb"
      ]
    },
    "answer": "```json\n{\n  \"top10\": [\n    {\n      \"rank\": 1,\n      \"id\": \"eIdMWK\",\n      \"name\": \"한아진\",\n      \"reason\": \"최근 8주 중 7주 출석하며 심방 요청이 높은 편이며, 직장 내 어려움 등 다양한 어려움을 겪고 있어 심방이 필요함.\"\n    },\n    {\n      \"rank\": 2,\n      \"id\": \"lY15Ub\",\n      \"name\": \"윤다채\",\n      \"reason\": \"자녀와 함께 최근 8주 중 5주 출석하며, 만성 질환으로 인해 정기 검진 중이므로 건강 상태를 확인하고 필요한 지원을 제공해야 함.\"\n    },\n    {\n      \"rank\": 3,\n      \"id\": \"jtDGPs\",\n      \"name\": \"오나온\",\n      \"reason\": \"최근 8주 중 2주 출석하며, 항암 치료 중이므로 건강 상태를 지속적으로 확인하고 필요한 지원을 제공해야 함.\"\n    },\n    {\n      \"rank\": 4,\n      \"id\": \"of89p5\",\n      \"name\": \"손영태\",\n      \"reason\": \"최근 8주 중 1주 출석하며, 만성 신장질환으로 격주 투석 중이므로 건강 상태를 확인하고 체력 관리에 대한 조언이 필요함.\"\n    },\n    {\n      \"rank\": 5,\n      \"id\": \"mBgSWb\",\n      \"name\": \"황지이\",\n      \"reason\": \"정보가 부족하여 심방을 통해 신앙적 상황과 필요를 파악하고 지원할 필요가 있음.\"\n    },\n    {\n      \"rank\": 6,\n      \"id\": \"IKOXbT\",\n      \"name\": \"이름준\",\n      \"reason\": \"최근 8주 중 8주 출석하며, 특이사항이 없어 정기적인 심방을 통해 신앙적 성장을 돕고 필요한 지원을 제공해야 함.\"\n    },\n    {\n      \"rank\": 7,\n      \"id\": \"TEeRI2\",\n      \"name\": \"권영우\",\n      \"reason\": \"최근 8주 중 7주 출석하며, 알레르기로 병원 통원 중이므로 건강 상태를 확인하고 필요한 지원을 제공해야 함.\"\n    },\n    {\n      \"rank\": 8,\n      \"id\": \"SSHSAu\",\n      \"name\": \"최하이\",\n      \"reason\": \"정보가 부족하여 심방을 통해 신앙적 상황과 필요를 파악하고 지원할 필요가 있음.\"\n    },\n    {\n      \"rank\": 9,\n      \"id\": \"56LtJR\",\n      \"name\": \"이름경\",\n      \"reason\": \"최근 8주 중 8주 출석하며, 보호자와 함께 출석하므로 가족적인 관계를 지원하고 필요에 따라 도움을 제공해야 함.\"\n    },\n    {\n      \"rank\": 10,\n      \"id\": \"92O7Sb\",\n      \"name\": \"유현호\",\n      \"reason\": \"최근 8주 중 3주 출석하며, 최근 무릎 수술 후 재활 중이므로 신체적 어려움을 고려하여 심방 및 지원이 필요함.\"\n    }\n  ]\n}\n```",
    "error": null
  },
  {
    "phase": "main",
    "run_at": "2026-09-16T14:03:13",
    "model": "gemma3:4b",
    "set": "set10",
    "attempt": 2,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 14713,
    "perf": {
      "elapsed_sec": 8.7,
      "load_sec": 0.0,
      "tokens_per_sec": 92.7,
      "speed_note": null,
      "prompt_eval_count": 9349,
      "eval_count": 794,
      "total_duration_ns": 8690404000,
      "load_duration_ns": 2809800,
      "prompt_eval_duration_ns": 108225000,
      "eval_duration_ns": 8566129000
    },
    "validation": {
      "format_ok": true,
      "issues": [],
      "hit_include": 2,
      "include_total": 10,
      "miss_exclude": 1,
      "exclude_total": 5,
      "picked_ids": [
        "eIdMWK",
        "lY15Ub",
        "tUgGal",
        "jtDGPs",
        "of89p5",
        "mBgSWb",
        "IKOXbT",
        "TEeRI2",
        "SSHSAu",
        "56LtJR"
      ]
    },
    "answer": "```json\n{\n  \"top10\": [\n    {\n      \"rank\": 1,\n      \"id\": \"eIdMWK\",\n      \"name\": \"한아진\",\n      \"reason\": \"최근 8주 중 7주 출석하며 심방 요청이 높은 편이며, 직장 내 어려움 등 다양한 어려움을 겪고 있어 심방이 필요한 상황입니다.\"\n    },\n    {\n      \"rank\": 2,\n      \"id\": \"lY15Ub\",\n      \"name\": \"윤다채\",\n      \"reason\": \"최근 8주 중 5주 출석하며, 만성 질환으로 인해 지속적인 관심과 지원이 필요합니다.\"\n    },\n    {\n      \"rank\": 3,\n      \"id\": \"tUgGal\",\n      \"name\": \"윤로진\",\n      \"reason\": \"최근 8주 중 8주 출석하며, 반려동물 사망으로 인한 슬픔을 치유하고 신앙적으로 성장할 수 있도록 돕는 것이 중요합니다.\"\n    },\n    {\n      \"rank\": 4,\n      \"id\": \"jtDGPs\",\n      \"name\": \"오나온\",\n      \"reason\": \"최근 8주 중 2주 출석하며, 항암 치료로 인한 건강 악화와 어려운 상황에 놓여 있어 심방을 통해 위로와 격려, 필요한 지원이 필요합니다.\"\n    },\n    {\n      \"rank\": 5,\n      \"id\": \"of89p5\",\n      \"name\": \"손영태\",\n      \"reason\": \"최근 8주 중 1주 출석하며, 만성 신장질환으로 인한 건강 악화와 체력 저하를 고려하여 심방을 통해 지지와 격려가 필요합니다.\"\n    },\n    {\n      \"rank\": 6,\n      \"id\": \"mBgSWb\",\n      \"name\": \"황지이\",\n      \"reason\": \"정보 부족으로 심방의 필요성을 정확히 판단하기 어렵지만, 정보 확보 후 심방을 통해 필요한 지원을 제공할 수 있습니다.\"\n    },\n    {\n      \"rank\": 7,\n      \"id\": \"IKOXbT\",\n      \"name\": \"이름준\",\n      \"reason\": \"최근 8주 중 8주 출석하며, 특이사항 없이 꾸준히 출석하고 있어 지속적인 관심과 격려가 필요합니다.\"\n    },\n    {\n      \"rank\": 8,\n      \"id\": \"TEeRI2\",\n      \"name\": \"권영우\",\n      \"reason\": \"최근 8주 중 7주 출석하며, 알레르기로 병원 통원 중이므로 심방을 통해 건강 관리에 대한 조언과 격려가 필요합니다.\"\n    },\n    {\n      \"rank\": 9,\n      \"id\": \"SSHSAu\",\n      \"name\": \"최하이\",\n      \"reason\": \"자녀 입시로 인한 가정 내 스트레스를 겪고 있어 심방을 통해 위로와 격려, 그리고 관계 회복을 위한 지원이 필요합니다.\"\n    },\n    {\n      \"rank\": 10,\n      \"id\": \"56LtJR\",\n      \"name\": \"이름경\",\n      \"reason\": \"최근 8주 중 8주 출석하며, 보호자와 함께 출석하고 있어 지속적인 관심과 격려가 필요합니다.\"\n    }\n  ]\n}\n```",
    "error": null
  }
];
window.WARMUP = [
  {
    "phase": "warmup",
    "run_at": "2026-09-16T13:59:53",
    "model": "gemma3:4b",
    "set": "set01",
    "attempt": 1,
    "options": {
      "num_ctx": 16384,
      "temperature": 0.0,
      "num_predict": null
    },
    "prompt_chars": 15152,
    "perf": {
      "elapsed_sec": 16.8,
      "load_sec": 4.13,
      "tokens_per_sec": 92.9,
      "speed_note": null,
      "prompt_eval_count": 9700,
      "eval_count": 973,
      "total_duration_ns": 16759171200,
      "load_duration_ns": 4134345700,
      "prompt_eval_duration_ns": 2138406000,
      "eval_duration_ns": 10471788000
    },
    "validation": {
      "format_ok": true,
      "issues": [],
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
        "HEEkGk",
        "GcQ3Ze",
        "MnaBL1",
        "PQCjiM"
      ]
    },
    "answer": "```json\n{\n  \"top10\": [\n    {\n      \"rank\": 1,\n      \"id\": \"JYzftw\",\n      \"name\": \"정름하\",\n      \"reason\": \"최근 8주 중 1주 출석하며 우울감을 호소함. 관계 회복과 건강 회복을 위한 기도와 교회 공동체에 대한 관심이 높음.\"\n    },\n    {\n      \"rank\": 2,\n      \"id\": \"P0qq1g\",\n      \"name\": \"송서호\",\n      \"reason\": \"최근 8주 중 8주 출석하며, 교회 공동체에 대한 관심과 관계 회복을 위한 기도를 지속하고 있음. 보호자와 함께 출석하며, 꾸준한 출석이 긍정적인 신호임.\"\n    },\n    {\n      \"rank\": 3,\n      \"id\": \"3ncNfo\",\n      \"name\": \"황이시\",\n      \"reason\": \"최근 8주 중 8주 출석하며, 군 복무 중인 자녀와 직장 내 어려움, 선교지를 위한 기도 등 다양한 영역에서 도움을 요청함. 꾸준한 출석과 기도 활동이 필요함.\"\n    },\n    {\n      \"rank\": 4,\n      \"id\": \"Ehqs5A\",\n      \"name\": \"백온규\",\n      \"reason\": \"최근 8주 중 2주 출석하며, 타 지역 이주 예정으로 건강 회복, 교회 공동체, 부모님 건강, 선교지를 위한 기도 등 다양한 영역에서 도움을 요청함. 이주 준비와 함께 신앙적인 지지 필요함.\"\n    },\n    {\n      \"rank\": 5,\n      \"id\": \"TV7FTS\",\n      \"name\": \"김나하\",\n      \"reason\": \"최근 8주 중 3주 출석하며, 산후 회복 중이고 외부 방문보다 전화 연락을 선호함. 출산 후 신앙생활에 대한 어려움과 교회 공동체에 대한 관심이 높음.\"\n    },\n    {\n      \"rank\": 6,\n      \"id\": \"HLxEbU\",\n      \"name\": \"손은영\",\n      \"reason\": \"최근 8주 중 6주 출석하며, 지난주 부친상으로 인해 교회 공동체에 대한 위로와 격려가 필요함. 이사/거주 문제, 관계 회복, 교회 공동체를 위한 기도 등 다양한 영역에서 도움을 요청함.\"\n    },\n    {\n      \"rank\": 7,\n      \"id\": \"HEEkGk\",\n      \"name\": \"양인은\",\n      \"reason\": \"최근 8주 중 4주 출석하며, 최근 무릎 수술 후 재활 중이고 시험 합격, 선교지를 위한 기도 등 다양한 영역에서 도움을 요청함. 수술 후 회복과 신앙생활에 대한 지지 필요함.\"\n    },\n    {\n      \"rank\": 8,\n      \"id\": \"GcQ3Ze\",\n      \"name\": \"송하시\",\n      \"reason\": \"최근 8주 중 2주 출석하며, 알레르기로 병원 통원 중이고 최근 출석이 줄어듦. 학업 성취, 교회 공동체를 위한 기도 등 다양한 영역에서 도움을 요청함. 출석 독려와 신앙적인 지지 필요함.\"\n    },\n    {\n      \"rank\": 9,\n      \"id\": \"MnaBL1\",\n      \"name\": \"손서가\",\n      \"reason\": \"최근 8주 중 1주 출석하며, 3주 전 수술 후 재활 중이고 재정적 어려움 해결을 위한 기도 등 다양한 영역에서 도움을 요청함. 회복 과정에 대한 지지 및 어려움 극복을 위한 격려 필요함.\"\n    },\n    {\n      \"rank\": 10,\n      \"id\": \"PQCjiM\",\n      \"name\": \"조수경\",\n      \"reason\": \"최근 8주 중 8주 출석하며, 봉사팀에서 활동 중이고, 취업/이직 등 다양한 영역에서 도움을 요청함. 꾸준한 출석과 신앙적인 지지 필요함.\"\n    }\n  ]\n}\n```",
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
