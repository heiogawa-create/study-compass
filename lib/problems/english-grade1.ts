import type { Problem } from "../types";

// 英語・中1（教科書準拠・定期テスト対策レベル）。
// 単元: I am/You are → This is/He is → 日時・曜日・天気 → 一般動詞 → 冠詞・複数形 → 代名詞
// → 三単現のs → 命令文・感嘆文 → 疑問詞 → 現在進行形 → can → 前置詞 → 過去形（一般動詞）
// → 過去形（be動詞）・過去進行形 → 未来を表す文
// 各問題の正答は検証済みの語彙・動詞活用データから機械的に取り出しており、手動転記による誤りを避けている。
export const englishGrade1: Problem[] = [
  {
    "id": "eng-g1-be-am-are-001",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nI （　） fast.",
    "answerType": "text",
    "correctAnswers": [
      "am"
    ],
    "explanation": "be動詞は主語によって使い分けます。主語が I のときは am を使います。I am fast. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-am-are-002",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nYou （　）a writer.",
    "answerType": "text",
    "correctAnswers": [
      "are"
    ],
    "explanation": "主語が You のときは be動詞は are を使います。You are a writer. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-am-are-003",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nWe are happy.",
    "answerType": "text",
    "correctAnswers": [
      "We are not happy.",
      "We aren't happy."
    ],
    "explanation": "be動詞の否定文は、be動詞のあとに not を置きます。We are not happy. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-am-are-004",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nThey are busy.",
    "answerType": "text",
    "correctAnswers": [
      "Are they busy?"
    ],
    "explanation": "be動詞の疑問文は、be動詞を主語の前に出します。Are they busy? となります。文の最後は ? にします。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-am-are-005",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nI （　）at the station.",
    "answerType": "text",
    "correctAnswers": [
      "am"
    ],
    "explanation": "主語が I なので、be動詞は am を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-am-are-006",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThey （　） strong.",
    "answerType": "text",
    "correctAnswers": [
      "are"
    ],
    "explanation": "be動詞は主語によって使い分けます。主語が They のときは are を使います。They are strong. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-am-are-007",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThey （　）a singer.",
    "answerType": "text",
    "correctAnswers": [
      "are"
    ],
    "explanation": "主語が They のときは be動詞は are を使います。They are a singer. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-am-are-008",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nI am young.",
    "answerType": "text",
    "correctAnswers": [
      "I am not young.",
      "I'm not young."
    ],
    "explanation": "be動詞の否定文は、be動詞のあとに not を置きます。I am not young. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-am-are-009",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nYou are busy.",
    "answerType": "text",
    "correctAnswers": [
      "Are you busy?"
    ],
    "explanation": "be動詞の疑問文は、be動詞を主語の前に出します。Are you busy? となります。文の最後は ? にします。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-am-are-010",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nYou （　）at the library.",
    "answerType": "text",
    "correctAnswers": [
      "are"
    ],
    "explanation": "主語が You なので、be動詞は are を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-am-are-011",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWe （　） big.",
    "answerType": "text",
    "correctAnswers": [
      "are"
    ],
    "explanation": "be動詞は主語によって使い分けます。主語が We のときは are を使います。We are big. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-am-are-012",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nI （　）an artist.",
    "answerType": "text",
    "correctAnswers": [
      "am"
    ],
    "explanation": "主語が I のときは be動詞は am を使います。I am an artist. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-am-are-013",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nYou are free.",
    "answerType": "text",
    "correctAnswers": [
      "You are not free.",
      "You aren't free."
    ],
    "explanation": "be動詞の否定文は、be動詞のあとに not を置きます。You are not free. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-am-are-014",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nThey are tired.",
    "answerType": "text",
    "correctAnswers": [
      "Are they tired?"
    ],
    "explanation": "be動詞の疑問文は、be動詞を主語の前に出します。Are they tired? となります。文の最後は ? にします。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-am-are-015",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nYou （　）at the zoo.",
    "answerType": "text",
    "correctAnswers": [
      "are"
    ],
    "explanation": "主語が You なので、be動詞は are を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-am-are-016",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nI （　） busy.",
    "answerType": "text",
    "correctAnswers": [
      "am"
    ],
    "explanation": "be動詞は主語によって使い分けます。主語が I のときは am を使います。I am busy. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-am-are-017",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nI （　）a driver.",
    "answerType": "text",
    "correctAnswers": [
      "am"
    ],
    "explanation": "主語が I のときは be動詞は am を使います。I am a driver. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-am-are-018",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nWe are free.",
    "answerType": "text",
    "correctAnswers": [
      "We are not free.",
      "We aren't free."
    ],
    "explanation": "be動詞の否定文は、be動詞のあとに not を置きます。We are not free. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-am-are-019",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nThey are happy.",
    "answerType": "text",
    "correctAnswers": [
      "Are they happy?"
    ],
    "explanation": "be動詞の疑問文は、be動詞を主語の前に出します。Are they happy? となります。文の最後は ? にします。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-am-are-020",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nYou （　）at school.",
    "answerType": "text",
    "correctAnswers": [
      "are"
    ],
    "explanation": "主語が You なので、be動詞は are を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-am-are-021",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWe （　） old.",
    "answerType": "text",
    "correctAnswers": [
      "are"
    ],
    "explanation": "be動詞は主語によって使い分けます。主語が We のときは are を使います。We are old. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-am-are-022",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWe （　）a teacher.",
    "answerType": "text",
    "correctAnswers": [
      "are"
    ],
    "explanation": "主語が We のときは be動詞は are を使います。We are a teacher. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-am-are-023",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nYou are busy.",
    "answerType": "text",
    "correctAnswers": [
      "You are not busy.",
      "You aren't busy."
    ],
    "explanation": "be動詞の否定文は、be動詞のあとに not を置きます。You are not busy. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-am-are-024",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nThey are young.",
    "answerType": "text",
    "correctAnswers": [
      "Are they young?"
    ],
    "explanation": "be動詞の疑問文は、be動詞を主語の前に出します。Are they young? となります。文の最後は ? にします。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-am-are-025",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWe （　）at the park.",
    "answerType": "text",
    "correctAnswers": [
      "are"
    ],
    "explanation": "主語が We なので、be動詞は are を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-am-are-026",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWe （　） wonderful.",
    "answerType": "text",
    "correctAnswers": [
      "are"
    ],
    "explanation": "be動詞は主語によって使い分けます。主語が We のときは are を使います。We are wonderful. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-am-are-027",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nYou （　）a nurse.",
    "answerType": "text",
    "correctAnswers": [
      "are"
    ],
    "explanation": "主語が You のときは be動詞は are を使います。You are a nurse. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-am-are-028",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nYou are old.",
    "answerType": "text",
    "correctAnswers": [
      "You are not old.",
      "You aren't old."
    ],
    "explanation": "be動詞の否定文は、be動詞のあとに not を置きます。You are not old. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-am-are-029",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nWe are happy.",
    "answerType": "text",
    "correctAnswers": [
      "Are we happy?"
    ],
    "explanation": "be動詞の疑問文は、be動詞を主語の前に出します。Are we happy? となります。文の最後は ? にします。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-am-are-030",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-am-are",
      "name": "I am ～. You are ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nYou （　）at the park.",
    "answerType": "text",
    "correctAnswers": [
      "are"
    ],
    "explanation": "主語が You なので、be動詞は are を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-this-he-001",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThat （　）my pen.",
    "answerType": "text",
    "correctAnswers": [
      "is"
    ],
    "explanation": "This・That・It が主語のときは、be動詞は is を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-this-he-002",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "代名詞とbe動詞"
    ],
    "question": "次の（　）に入る語を答えなさい。\nSara is a nurse. （　）is kind.",
    "answerType": "text",
    "correctAnswers": [
      "She"
    ],
    "explanation": "Sara は女性なので、2文目では She で受けます。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-this-he-003",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nThat is small.",
    "answerType": "text",
    "correctAnswers": [
      "That is not small.",
      "That isn't small."
    ],
    "explanation": "be動詞の否定文は is のあとに not を置きます。That is not small. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-this-he-004",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nIt is a book.",
    "answerType": "text",
    "correctAnswers": [
      "Is it a book?"
    ],
    "explanation": "be動詞の疑問文は is を主語の前に出します。Is it a book? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-this-he-005",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "This is の文"
    ],
    "question": "次の日本文を英語にしなさい。\nこれは1つのいすです。",
    "answerType": "text",
    "correctAnswers": [
      "This is a chair."
    ],
    "explanation": "「これは〜です」は This is 〜. で表します。This is a chair. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-this-he-006",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nHe （　）a driver.",
    "answerType": "text",
    "correctAnswers": [
      "is"
    ],
    "explanation": "He・She が主語のときは、be動詞は is を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-this-he-007",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "代名詞とbe動詞"
    ],
    "question": "次の（　）に入る語を答えなさい。\nTom is a writer. （　）is kind.",
    "answerType": "text",
    "correctAnswers": [
      "He"
    ],
    "explanation": "Tom は男性なので、2文目では He で受けます。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-this-he-008",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nShe is old.",
    "answerType": "text",
    "correctAnswers": [
      "She is not old.",
      "She isn't old."
    ],
    "explanation": "be動詞の否定文は is のあとに not を置きます。She is not old. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-this-he-009",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nHe is an engineer.",
    "answerType": "text",
    "correctAnswers": [
      "Is he an engineer?"
    ],
    "explanation": "be動詞の疑問文は is を主語の前に出します。Is he an engineer? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-this-he-010",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "代名詞とbe動詞"
    ],
    "question": "次の（　）に入る語を答えなさい。\nYumi is a teacher. （　）is kind.",
    "answerType": "text",
    "correctAnswers": [
      "She"
    ],
    "explanation": "Yumi は女性なので、2文目では She で受けます。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-this-he-011",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "This is の文"
    ],
    "question": "次の日本文を英語にしなさい。\nこれは1個のりんごです。",
    "answerType": "text",
    "correctAnswers": [
      "This is an apple."
    ],
    "explanation": "「これは〜です」は This is 〜. で表します。This is an apple. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-this-he-012",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nShe （　）a student.",
    "answerType": "text",
    "correctAnswers": [
      "is"
    ],
    "explanation": "He・She が主語のときは、be動詞は is を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-this-he-013",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "代名詞とbe動詞"
    ],
    "question": "次の（　）に入る語を答えなさい。\nAya is a teacher. （　）is kind.",
    "answerType": "text",
    "correctAnswers": [
      "She"
    ],
    "explanation": "Aya は女性なので、2文目では She で受けます。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-this-he-014",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nThat is wonderful.",
    "answerType": "text",
    "correctAnswers": [
      "That is not wonderful.",
      "That isn't wonderful."
    ],
    "explanation": "be動詞の否定文は is のあとに not を置きます。That is not wonderful. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-this-he-015",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nHe is a writer.",
    "answerType": "text",
    "correctAnswers": [
      "Is he a writer?"
    ],
    "explanation": "be動詞の疑問文は is を主語の前に出します。Is he a writer? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-this-he-016",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "This is の文"
    ],
    "question": "次の日本文を英語にしなさい。\nこれは1つの男の人です。",
    "answerType": "text",
    "correctAnswers": [
      "This is a man."
    ],
    "explanation": "「これは〜です」は This is 〜. で表します。This is a man. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-this-he-017",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThat （　）my baby.",
    "answerType": "text",
    "correctAnswers": [
      "is"
    ],
    "explanation": "This・That・It が主語のときは、be動詞は is を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-this-he-018",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "代名詞とbe動詞"
    ],
    "question": "次の（　）に入る語を答えなさい。\nRio is a pilot. （　）is kind.",
    "answerType": "text",
    "correctAnswers": [
      "She"
    ],
    "explanation": "Rio は女性なので、2文目では She で受けます。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-this-he-019",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nHe is big.",
    "answerType": "text",
    "correctAnswers": [
      "He is not big.",
      "He isn't big."
    ],
    "explanation": "be動詞の否定文は is のあとに not を置きます。He is not big. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-this-he-020",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nHe is a pilot.",
    "answerType": "text",
    "correctAnswers": [
      "Is he a pilot?"
    ],
    "explanation": "be動詞の疑問文は is を主語の前に出します。Is he a pilot? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-this-he-021",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "This is の文"
    ],
    "question": "次の日本文を英語にしなさい。\nこれは1つの帽子です。",
    "answerType": "text",
    "correctAnswers": [
      "This is a hat."
    ],
    "explanation": "「これは〜です」は This is 〜. で表します。This is a hat. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-this-he-022",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nIt （　）a car.",
    "answerType": "text",
    "correctAnswers": [
      "is"
    ],
    "explanation": "This・That・It が主語のときは、be動詞は is を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-this-he-023",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "代名詞とbe動詞"
    ],
    "question": "次の（　）に入る語を答えなさい。\nYumi is a writer. （　）is kind.",
    "answerType": "text",
    "correctAnswers": [
      "She"
    ],
    "explanation": "Yumi は女性なので、2文目では She で受けます。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-this-he-024",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nThat is old.",
    "answerType": "text",
    "correctAnswers": [
      "That is not old.",
      "That isn't old."
    ],
    "explanation": "be動詞の否定文は is のあとに not を置きます。That is not old. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-this-he-025",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nHe is a cook.",
    "answerType": "text",
    "correctAnswers": [
      "Is he a cook?"
    ],
    "explanation": "be動詞の疑問文は is を主語の前に出します。Is he a cook? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-this-he-026",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "be動詞の使い分け"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThis （　）a cup.",
    "answerType": "text",
    "correctAnswers": [
      "is"
    ],
    "explanation": "This・That・It が主語のときは、be動詞は is を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-this-he-027",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "代名詞とbe動詞"
    ],
    "question": "次の（　）に入る語を答えなさい。\nAya is a driver. （　）is kind.",
    "answerType": "text",
    "correctAnswers": [
      "She"
    ],
    "explanation": "Aya は女性なので、2文目では She で受けます。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-be-this-he-028",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nThat is cute.",
    "answerType": "text",
    "correctAnswers": [
      "That is not cute.",
      "That isn't cute."
    ],
    "explanation": "be動詞の否定文は is のあとに not を置きます。That is not cute. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-this-he-029",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nIt is a tooth.",
    "answerType": "text",
    "correctAnswers": [
      "Is it a tooth?"
    ],
    "explanation": "be動詞の疑問文は is を主語の前に出します。Is it a tooth? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-be-this-he-030",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "be-this-he",
      "name": "This is ～. He is ～."
    },
    "tags": [
      "代名詞とbe動詞"
    ],
    "question": "次の（　）に入る語を答えなさい。\nKate is a student. （　）is kind.",
    "answerType": "text",
    "correctAnswers": [
      "She"
    ],
    "explanation": "Kate は女性なので、2文目では She で受けます。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-datetime-weather-001",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "曜日"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWhat day is it today? — （　）'s Saturday.",
    "answerType": "text",
    "correctAnswers": [
      "It"
    ],
    "explanation": "曜日・天気・時刻を答えるときは、特別な意味のない it を使います。It's Saturday. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-datetime-weather-002",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "天気"
    ],
    "question": "次の日本文を英語にしなさい。\n天気はどうですか。 — 雨です。",
    "answerType": "text",
    "correctAnswers": [
      "How is the weather? — It's rainy.",
      "How is the weather? — It is rainy."
    ],
    "explanation": "天気をたずねるときは How is the weather? と言います。答えは It's rainy. のように it を主語にします。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-datetime-weather-003",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "時刻"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWhat time is it? — （　）'s 5 o'clock.",
    "answerType": "text",
    "correctAnswers": [
      "It"
    ],
    "explanation": "時刻を答えるときも it を主語にします。It's 5 o'clock. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-datetime-weather-004",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "疑問文とこたえ"
    ],
    "question": "次の答えに合う疑問文を選びなさい。\n— It's Friday.",
    "answerType": "choice",
    "choices": [
      "Where is it?",
      "What day is it today?",
      "What time is it?",
      "How is the weather?"
    ],
    "correctAnswers": [
      "What day is it today?"
    ],
    "explanation": "曜日を答えているので、たずねる文は「What day is it today?」です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-datetime-weather-005",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "曜日"
    ],
    "question": "「今日は何曜日ですか」を英語にしなさい。",
    "answerType": "text",
    "correctAnswers": [
      "What day is it today?"
    ],
    "explanation": "曜日をたずねる決まり文句は What day is it today? です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-datetime-weather-006",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "天気"
    ],
    "question": "次の日本文を英語にしなさい。\n天気はどうですか。 — あたたかいです。",
    "answerType": "text",
    "correctAnswers": [
      "How is the weather? — It's warm.",
      "How is the weather? — It is warm."
    ],
    "explanation": "天気をたずねるときは How is the weather? と言います。答えは It's warm. のように it を主語にします。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-datetime-weather-007",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "疑問文とこたえ"
    ],
    "question": "次の答えに合う疑問文を選びなさい。\n— It's Tuesday.",
    "answerType": "choice",
    "choices": [
      "What time is it?",
      "What day is it today?",
      "How is the weather?",
      "Where is it?"
    ],
    "correctAnswers": [
      "What day is it today?"
    ],
    "explanation": "曜日を答えているので、たずねる文は「What day is it today?」です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-datetime-weather-008",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "曜日"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWhat day is it today? — （　）'s Monday.",
    "answerType": "text",
    "correctAnswers": [
      "It"
    ],
    "explanation": "曜日・天気・時刻を答えるときは、特別な意味のない it を使います。It's Monday. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-datetime-weather-009",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "天気"
    ],
    "question": "次の日本文を英語にしなさい。\n天気はどうですか。 — 雪です。",
    "answerType": "text",
    "correctAnswers": [
      "How is the weather? — It's snowy.",
      "How is the weather? — It is snowy."
    ],
    "explanation": "天気をたずねるときは How is the weather? と言います。答えは It's snowy. のように it を主語にします。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-datetime-weather-010",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "時刻"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWhat time is it? — （　）'s 2 o'clock.",
    "answerType": "text",
    "correctAnswers": [
      "It"
    ],
    "explanation": "時刻を答えるときも it を主語にします。It's 2 o'clock. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-datetime-weather-011",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "疑問文とこたえ"
    ],
    "question": "次の答えに合う疑問文を選びなさい。\n— It's Wednesday.",
    "answerType": "choice",
    "choices": [
      "What day is it today?",
      "What time is it?",
      "How is the weather?",
      "Where is it?"
    ],
    "correctAnswers": [
      "What day is it today?"
    ],
    "explanation": "曜日を答えているので、たずねる文は「What day is it today?」です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-datetime-weather-012",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "曜日"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWhat day is it today? — （　）'s Sunday.",
    "answerType": "text",
    "correctAnswers": [
      "It"
    ],
    "explanation": "曜日・天気・時刻を答えるときは、特別な意味のない it を使います。It's Sunday. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-datetime-weather-013",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "天気"
    ],
    "question": "次の日本文を英語にしなさい。\n天気はどうですか。 — 晴れています。",
    "answerType": "text",
    "correctAnswers": [
      "How is the weather? — It's sunny.",
      "How is the weather? — It is sunny."
    ],
    "explanation": "天気をたずねるときは How is the weather? と言います。答えは It's sunny. のように it を主語にします。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-datetime-weather-014",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "時刻"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWhat time is it? — （　）'s 10 o'clock.",
    "answerType": "text",
    "correctAnswers": [
      "It"
    ],
    "explanation": "時刻を答えるときも it を主語にします。It's 10 o'clock. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-datetime-weather-015",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "疑問文とこたえ"
    ],
    "question": "次の答えに合う疑問文を選びなさい。\n— It's warm.",
    "answerType": "choice",
    "choices": [
      "How is the weather?",
      "What day is it today?",
      "Where is it?",
      "What time is it?"
    ],
    "correctAnswers": [
      "How is the weather?"
    ],
    "explanation": "天気を答えているので、たずねる文は「How is the weather?」です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-datetime-weather-016",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "曜日"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWhat day is it today? — （　）'s Friday.",
    "answerType": "text",
    "correctAnswers": [
      "It"
    ],
    "explanation": "曜日・天気・時刻を答えるときは、特別な意味のない it を使います。It's Friday. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-datetime-weather-017",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "時刻"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWhat time is it? — （　）'s 1 o'clock.",
    "answerType": "text",
    "correctAnswers": [
      "It"
    ],
    "explanation": "時刻を答えるときも it を主語にします。It's 1 o'clock. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-datetime-weather-018",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "疑問文とこたえ"
    ],
    "question": "次の答えに合う疑問文を選びなさい。\n— It's sunny.",
    "answerType": "choice",
    "choices": [
      "Where is it?",
      "What day is it today?",
      "What time is it?",
      "How is the weather?"
    ],
    "correctAnswers": [
      "How is the weather?"
    ],
    "explanation": "天気を答えているので、たずねる文は「How is the weather?」です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-datetime-weather-019",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "曜日"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWhat day is it today? — （　）'s Wednesday.",
    "answerType": "text",
    "correctAnswers": [
      "It"
    ],
    "explanation": "曜日・天気・時刻を答えるときは、特別な意味のない it を使います。It's Wednesday. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-datetime-weather-020",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "時刻"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWhat time is it? — （　）'s 4 o'clock.",
    "answerType": "text",
    "correctAnswers": [
      "It"
    ],
    "explanation": "時刻を答えるときも it を主語にします。It's 4 o'clock. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-datetime-weather-021",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "疑問文とこたえ"
    ],
    "question": "次の答えに合う疑問文を選びなさい。\n— It's windy.",
    "answerType": "choice",
    "choices": [
      "Where is it?",
      "What time is it?",
      "What day is it today?",
      "How is the weather?"
    ],
    "correctAnswers": [
      "How is the weather?"
    ],
    "explanation": "天気を答えているので、たずねる文は「How is the weather?」です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-datetime-weather-022",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "時刻"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWhat time is it? — （　）'s 9 o'clock.",
    "answerType": "text",
    "correctAnswers": [
      "It"
    ],
    "explanation": "時刻を答えるときも it を主語にします。It's 9 o'clock. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-datetime-weather-023",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "疑問文とこたえ"
    ],
    "question": "次の答えに合う疑問文を選びなさい。\n— It's Saturday.",
    "answerType": "choice",
    "choices": [
      "What time is it?",
      "How is the weather?",
      "What day is it today?",
      "Where is it?"
    ],
    "correctAnswers": [
      "What day is it today?"
    ],
    "explanation": "曜日を答えているので、たずねる文は「What day is it today?」です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-datetime-weather-024",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "時刻"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWhat time is it? — （　）'s 8 o'clock.",
    "answerType": "text",
    "correctAnswers": [
      "It"
    ],
    "explanation": "時刻を答えるときも it を主語にします。It's 8 o'clock. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-datetime-weather-025",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "疑問文とこたえ"
    ],
    "question": "次の答えに合う疑問文を選びなさい。\n— It's cold.",
    "answerType": "choice",
    "choices": [
      "What day is it today?",
      "What time is it?",
      "How is the weather?",
      "Where is it?"
    ],
    "correctAnswers": [
      "How is the weather?"
    ],
    "explanation": "天気を答えているので、たずねる文は「How is the weather?」です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-datetime-weather-026",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "天気"
    ],
    "question": "次の日本文を英語にしなさい。\n天気はどうですか。 — 暑いです。",
    "answerType": "text",
    "correctAnswers": [
      "How is the weather? — It's hot.",
      "How is the weather? — It is hot."
    ],
    "explanation": "天気をたずねるときは How is the weather? と言います。答えは It's hot. のように it を主語にします。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-datetime-weather-027",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "時刻"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWhat time is it? — （　）'s 12 o'clock.",
    "answerType": "text",
    "correctAnswers": [
      "It"
    ],
    "explanation": "時刻を答えるときも it を主語にします。It's 12 o'clock. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-datetime-weather-028",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "疑問文とこたえ"
    ],
    "question": "次の答えに合う疑問文を選びなさい。\n— It's rainy.",
    "answerType": "choice",
    "choices": [
      "How is the weather?",
      "What time is it?",
      "Where is it?",
      "What day is it today?"
    ],
    "correctAnswers": [
      "How is the weather?"
    ],
    "explanation": "天気を答えているので、たずねる文は「How is the weather?」です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-datetime-weather-029",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "天気"
    ],
    "question": "次の日本文を英語にしなさい。\n天気はどうですか。 — 寒いです。",
    "answerType": "text",
    "correctAnswers": [
      "How is the weather? — It's cold.",
      "How is the weather? — It is cold."
    ],
    "explanation": "天気をたずねるときは How is the weather? と言います。答えは It's cold. のように it を主語にします。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-datetime-weather-030",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "datetime-weather",
      "name": "日時・曜日・天気をきく"
    },
    "tags": [
      "時刻"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWhat time is it? — （　）'s 11 o'clock.",
    "answerType": "text",
    "correctAnswers": [
      "It"
    ],
    "explanation": "時刻を答えるときも it を主語にします。It's 11 o'clock. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-general-verb-001",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "一般動詞"
    ],
    "question": "次の（　）に入る語を、日本語の意味に合うように答えなさい。\nI （　）at the picture. （見る）",
    "answerType": "text",
    "correctAnswers": [
      "look"
    ],
    "explanation": "一般動詞はそのままの形（原形）を使います。I look at the picture. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-general-verb-002",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nWe cook dinner.",
    "answerType": "text",
    "correctAnswers": [
      "We don't cook dinner.",
      "We do not cook dinner."
    ],
    "explanation": "一般動詞の否定文は、動詞の前に don't（do not）を置きます。We don't cook dinner. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-general-verb-003",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nWe write a letter.",
    "answerType": "text",
    "correctAnswers": [
      "Do we write a letter?"
    ],
    "explanation": "一般動詞の疑問文は、文のはじめに Do を置きます。Do we write a letter? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-general-verb-004",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "語彙"
    ],
    "question": "「買う」という意味の動詞を選びなさい。",
    "answerType": "choice",
    "choices": [
      "give",
      "jump",
      "buy",
      "take"
    ],
    "correctAnswers": [
      "buy"
    ],
    "explanation": "「買う」は英語で buy と言います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-general-verb-005",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "一般動詞"
    ],
    "question": "次の（　）に入る語を、日本語の意味に合うように答えなさい。\nI （　）every day. （走る）",
    "answerType": "text",
    "correctAnswers": [
      "run"
    ],
    "explanation": "一般動詞はそのままの形（原形）を使います。I run. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-general-verb-006",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nI want a new bike.",
    "answerType": "text",
    "correctAnswers": [
      "I don't want a new bike.",
      "I do not want a new bike."
    ],
    "explanation": "一般動詞の否定文は、動詞の前に don't（do not）を置きます。I don't want a new bike. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-general-verb-007",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nYou see a bird.",
    "answerType": "text",
    "correctAnswers": [
      "Do you see a bird?"
    ],
    "explanation": "一般動詞の疑問文は、文のはじめに Do を置きます。Do you see a bird? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-general-verb-008",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "語彙"
    ],
    "question": "「洗う」という意味の動詞を選びなさい。",
    "answerType": "choice",
    "choices": [
      "meet",
      "go",
      "wash",
      "get"
    ],
    "correctAnswers": [
      "wash"
    ],
    "explanation": "「洗う」は英語で wash と言います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-general-verb-009",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "一般動詞"
    ],
    "question": "次の（　）に入る語を、日本語の意味に合うように答えなさい。\nI （　）this pen. （使う）",
    "answerType": "text",
    "correctAnswers": [
      "use"
    ],
    "explanation": "一般動詞はそのままの形（原形）を使います。I use this pen. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-general-verb-010",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nWe do my homework.",
    "answerType": "text",
    "correctAnswers": [
      "We don't do my homework.",
      "We do not do my homework."
    ],
    "explanation": "一般動詞の否定文は、動詞の前に don't（do not）を置きます。We don't do my homework. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-general-verb-011",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nYou go to school.",
    "answerType": "text",
    "correctAnswers": [
      "Do you go to school?"
    ],
    "explanation": "一般動詞の疑問文は、文のはじめに Do を置きます。Do you go to school? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-general-verb-012",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "語彙"
    ],
    "question": "「必要とする」という意味の動詞を選びなさい。",
    "answerType": "choice",
    "choices": [
      "run",
      "need",
      "wash",
      "swim"
    ],
    "correctAnswers": [
      "need"
    ],
    "explanation": "「必要とする」は英語で need と言います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-general-verb-013",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "一般動詞"
    ],
    "question": "次の（　）に入る語を、日本語の意味に合うように答えなさい。\nThey （　）a letter. （書く）",
    "answerType": "text",
    "correctAnswers": [
      "write"
    ],
    "explanation": "一般動詞はそのままの形（原形）を使います。They write a letter. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-general-verb-014",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nYou carry the box.",
    "answerType": "text",
    "correctAnswers": [
      "You don't carry the box.",
      "You do not carry the box."
    ],
    "explanation": "一般動詞の否定文は、動詞の前に don't（do not）を置きます。You don't carry the box. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-general-verb-015",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nThey visit Kyoto.",
    "answerType": "text",
    "correctAnswers": [
      "Do they visit Kyoto?"
    ],
    "explanation": "一般動詞の疑問文は、文のはじめに Do を置きます。Do they visit Kyoto? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-general-verb-016",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "語彙"
    ],
    "question": "「見る」という意味の動詞を選びなさい。",
    "answerType": "choice",
    "choices": [
      "like",
      "open",
      "look",
      "sing"
    ],
    "correctAnswers": [
      "look"
    ],
    "explanation": "「見る」は英語で look と言います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-general-verb-017",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "一般動詞"
    ],
    "question": "次の（　）に入る語を、日本語の意味に合うように答えなさい。\nI （　）a letter. （書く）",
    "answerType": "text",
    "correctAnswers": [
      "write"
    ],
    "explanation": "一般動詞はそのままの形（原形）を使います。I write a letter. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-general-verb-018",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nWe love music.",
    "answerType": "text",
    "correctAnswers": [
      "We don't love music.",
      "We do not love music."
    ],
    "explanation": "一般動詞の否定文は、動詞の前に don't（do not）を置きます。We don't love music. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-general-verb-019",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nWe sit on the chair.",
    "answerType": "text",
    "correctAnswers": [
      "Do we sit on the chair?"
    ],
    "explanation": "一般動詞の疑問文は、文のはじめに Do を置きます。Do we sit on the chair? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-general-verb-020",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "語彙"
    ],
    "question": "「料理する」という意味の動詞を選びなさい。",
    "answerType": "choice",
    "choices": [
      "look",
      "cook",
      "jump",
      "watch"
    ],
    "correctAnswers": [
      "cook"
    ],
    "explanation": "「料理する」は英語で cook と言います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-general-verb-021",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "一般動詞"
    ],
    "question": "次の（　）に入る語を、日本語の意味に合うように答えなさい。\nWe （　）tennis. （（スポーツ・楽器を）する）",
    "answerType": "text",
    "correctAnswers": [
      "play"
    ],
    "explanation": "一般動詞はそのままの形（原形）を使います。We play tennis. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-general-verb-022",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nYou run.",
    "answerType": "text",
    "correctAnswers": [
      "You don't run.",
      "You do not run."
    ],
    "explanation": "一般動詞の否定文は、動詞の前に don't（do not）を置きます。You don't run. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-general-verb-023",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nThey want a new bike.",
    "answerType": "text",
    "correctAnswers": [
      "Do they want a new bike?"
    ],
    "explanation": "一般動詞の疑問文は、文のはじめに Do を置きます。Do they want a new bike? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-general-verb-024",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "語彙"
    ],
    "question": "「会う」という意味の動詞を選びなさい。",
    "answerType": "choice",
    "choices": [
      "meet",
      "visit",
      "speak",
      "clean"
    ],
    "correctAnswers": [
      "meet"
    ],
    "explanation": "「会う」は英語で meet と言います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-general-verb-025",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "一般動詞"
    ],
    "question": "次の（　）に入る語を、日本語の意味に合うように答えなさい。\nYou （　）water. （飲む）",
    "answerType": "text",
    "correctAnswers": [
      "drink"
    ],
    "explanation": "一般動詞はそのままの形（原形）を使います。You drink water. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-general-verb-026",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nThey use this pen.",
    "answerType": "text",
    "correctAnswers": [
      "They don't use this pen.",
      "They do not use this pen."
    ],
    "explanation": "一般動詞の否定文は、動詞の前に don't（do not）を置きます。They don't use this pen. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-general-verb-027",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nYou study English.",
    "answerType": "text",
    "correctAnswers": [
      "Do you study English?"
    ],
    "explanation": "一般動詞の疑問文は、文のはじめに Do を置きます。Do you study English? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-general-verb-028",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "語彙"
    ],
    "question": "「跳ぶ」という意味の動詞を選びなさい。",
    "answerType": "choice",
    "choices": [
      "eat",
      "speak",
      "clean",
      "jump"
    ],
    "correctAnswers": [
      "jump"
    ],
    "explanation": "「跳ぶ」は英語で jump と言います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-general-verb-029",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "一般動詞"
    ],
    "question": "次の（　）に入る語を、日本語の意味に合うように答えなさい。\nWe （　）a bird. （見える）",
    "answerType": "text",
    "correctAnswers": [
      "see"
    ],
    "explanation": "一般動詞はそのままの形（原形）を使います。We see a bird. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-general-verb-030",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "general-verb",
      "name": "一般動詞"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nThey help my mother.",
    "answerType": "text",
    "correctAnswers": [
      "They don't help my mother.",
      "They do not help my mother."
    ],
    "explanation": "一般動詞の否定文は、動詞の前に don't（do not）を置きます。They don't help my mother. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-001",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "冠詞"
    ],
    "question": "次の（　）に a か an を入れなさい。\n（　）city",
    "answerType": "text",
    "correctAnswers": [
      "a"
    ],
    "explanation": "あとに続く単語が母音（ア・イ・ウ・エ・オに近い音）で始まるときは an を使います。city には a を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-articles-plural-002",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "次の語を複数形にしなさい。\ndog",
    "answerType": "text",
    "correctAnswers": [
      "dogs"
    ],
    "explanation": "dog の複数形は dogs です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-003",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "box の正しい複数形を選びなさい。",
    "answerType": "choice",
    "choices": [
      "boxes",
      "box",
      "boxesz",
      "boxs"
    ],
    "correctAnswers": [
      "boxes"
    ],
    "explanation": "box の複数形は boxes です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-004",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nI have 3 （　）. （tooth）",
    "answerType": "text",
    "correctAnswers": [
      "teeth"
    ],
    "explanation": "2つ以上のときは名詞を複数形にします。tooth の複数形は teeth です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-005",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "冠詞"
    ],
    "question": "次の（　）に a か an を入れなさい。\n（　）chair",
    "answerType": "text",
    "correctAnswers": [
      "a"
    ],
    "explanation": "あとに続く単語が母音（ア・イ・ウ・エ・オに近い音）で始まるときは an を使います。chair には a を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-articles-plural-006",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "次の語を複数形にしなさい。\ntooth",
    "answerType": "text",
    "correctAnswers": [
      "teeth"
    ],
    "explanation": "tooth の複数形は teeth です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-007",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "cup の正しい複数形を選びなさい。",
    "answerType": "choice",
    "choices": [
      "cupes",
      "cupsz",
      "cups",
      "cup"
    ],
    "correctAnswers": [
      "cups"
    ],
    "explanation": "cup の複数形は cups です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-008",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nI have 7 （　）. （country）",
    "answerType": "text",
    "correctAnswers": [
      "countries"
    ],
    "explanation": "2つ以上のときは名詞を複数形にします。country の複数形は countries です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-009",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "冠詞"
    ],
    "question": "次の（　）に a か an を入れなさい。\n（　）cup",
    "answerType": "text",
    "correctAnswers": [
      "a"
    ],
    "explanation": "あとに続く単語が母音（ア・イ・ウ・エ・オに近い音）で始まるときは an を使います。cup には a を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-articles-plural-010",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "次の語を複数形にしなさい。\nball",
    "answerType": "text",
    "correctAnswers": [
      "balls"
    ],
    "explanation": "ball の複数形は balls です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-011",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "child の正しい複数形を選びなさい。",
    "answerType": "choice",
    "choices": [
      "childs",
      "children",
      "childes",
      "child"
    ],
    "correctAnswers": [
      "children"
    ],
    "explanation": "child の複数形は children です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-012",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nI have 8 （　）. （foot）",
    "answerType": "text",
    "correctAnswers": [
      "feet"
    ],
    "explanation": "2つ以上のときは名詞を複数形にします。foot の複数形は feet です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-013",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "冠詞"
    ],
    "question": "次の（　）に a か an を入れなさい。\n（　）dog",
    "answerType": "text",
    "correctAnswers": [
      "a"
    ],
    "explanation": "あとに続く単語が母音（ア・イ・ウ・エ・オに近い音）で始まるときは an を使います。dog には a を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-articles-plural-014",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "次の語を複数形にしなさい。\ncity",
    "answerType": "text",
    "correctAnswers": [
      "cities"
    ],
    "explanation": "city の複数形は cities です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-015",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "umbrella の正しい複数形を選びなさい。",
    "answerType": "choice",
    "choices": [
      "umbrella",
      "umbrellas",
      "umbrellasz",
      "umbrellaes"
    ],
    "correctAnswers": [
      "umbrellas"
    ],
    "explanation": "umbrella の複数形は umbrellas です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-016",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nI have 3 （　）. （dog）",
    "answerType": "text",
    "correctAnswers": [
      "dogs"
    ],
    "explanation": "2つ以上のときは名詞を複数形にします。dog の複数形は dogs です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-017",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "冠詞"
    ],
    "question": "次の（　）に a か an を入れなさい。\n（　）book",
    "answerType": "text",
    "correctAnswers": [
      "a"
    ],
    "explanation": "あとに続く単語が母音（ア・イ・ウ・エ・オに近い音）で始まるときは an を使います。book には a を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-articles-plural-018",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "次の語を複数形にしなさい。\nhat",
    "answerType": "text",
    "correctAnswers": [
      "hats"
    ],
    "explanation": "hat の複数形は hats です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-019",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "tooth の正しい複数形を選びなさい。",
    "answerType": "choice",
    "choices": [
      "teeth",
      "tooths",
      "toothes",
      "tooth"
    ],
    "correctAnswers": [
      "teeth"
    ],
    "explanation": "tooth の複数形は teeth です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-020",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nI have 6 （　）. （bird）",
    "answerType": "text",
    "correctAnswers": [
      "birds"
    ],
    "explanation": "2つ以上のときは名詞を複数形にします。bird の複数形は birds です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-021",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "冠詞"
    ],
    "question": "次の（　）に a か an を入れなさい。\n（　）bag",
    "answerType": "text",
    "correctAnswers": [
      "a"
    ],
    "explanation": "あとに続く単語が母音（ア・イ・ウ・エ・オに近い音）で始まるときは an を使います。bag には a を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-articles-plural-022",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "次の語を複数形にしなさい。\nman",
    "answerType": "text",
    "correctAnswers": [
      "men"
    ],
    "explanation": "man の複数形は men です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-023",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "book の正しい複数形を選びなさい。",
    "answerType": "choice",
    "choices": [
      "books",
      "bookes",
      "booksz",
      "book"
    ],
    "correctAnswers": [
      "books"
    ],
    "explanation": "book の複数形は books です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-024",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nI have 4 （　）. （box）",
    "answerType": "text",
    "correctAnswers": [
      "boxes"
    ],
    "explanation": "2つ以上のときは名詞を複数形にします。box の複数形は boxes です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-025",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "冠詞"
    ],
    "question": "次の（　）に a か an を入れなさい。\n（　）car",
    "answerType": "text",
    "correctAnswers": [
      "a"
    ],
    "explanation": "あとに続く単語が母音（ア・イ・ウ・エ・オに近い音）で始まるときは an を使います。car には a を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-articles-plural-026",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "次の語を複数形にしなさい。\nkey",
    "answerType": "text",
    "correctAnswers": [
      "keys"
    ],
    "explanation": "key の複数形は keys です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-027",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nI have 6 （　）. （city）",
    "answerType": "text",
    "correctAnswers": [
      "cities"
    ],
    "explanation": "2つ以上のときは名詞を複数形にします。city の複数形は cities です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-028",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "冠詞"
    ],
    "question": "次の（　）に a か an を入れなさい。\n（　）knife",
    "answerType": "text",
    "correctAnswers": [
      "a"
    ],
    "explanation": "あとに続く単語が母音（ア・イ・ウ・エ・オに近い音）で始まるときは an を使います。knife には a を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-articles-plural-029",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "次の語を複数形にしなさい。\nbox",
    "answerType": "text",
    "correctAnswers": [
      "boxes"
    ],
    "explanation": "box の複数形は boxes です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-articles-plural-030",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "articles-plural",
      "name": "冠詞、名詞の複数形"
    },
    "tags": [
      "複数形"
    ],
    "question": "doll の正しい複数形を選びなさい。",
    "answerType": "choice",
    "choices": [
      "doll",
      "dollsz",
      "dolles",
      "dolls"
    ],
    "correctAnswers": [
      "dolls"
    ],
    "explanation": "doll の複数形は dolls です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-001",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "目的格"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThis is Yumi. I help （　）.",
    "answerType": "text",
    "correctAnswers": [
      "her"
    ],
    "explanation": "動詞のあとに置く「〜を」の形（目的格）を使います。Yumi は女性なので、she の目的格 her が入ります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-002",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "所有格"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThis is （　）box. （I）",
    "answerType": "text",
    "correctAnswers": [
      "my"
    ],
    "explanation": "名詞の前に置いて「〜の」を表すのは所有格です。I の所有格は my です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-003",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "目的格"
    ],
    "question": "「they」の目的格（〜を、〜に）を選びなさい。",
    "answerType": "choice",
    "choices": [
      "them",
      "her",
      "us",
      "it"
    ],
    "correctAnswers": [
      "them"
    ],
    "explanation": "they の目的格は them です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-004",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "所有格"
    ],
    "question": "「we」の所有格（〜の）を選びなさい。",
    "answerType": "choice",
    "choices": [
      "his",
      "her",
      "its",
      "our"
    ],
    "correctAnswers": [
      "our"
    ],
    "explanation": "we の所有格は our です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-pronouns-005",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "目的格"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThis is Sara. I like （　）.",
    "answerType": "text",
    "correctAnswers": [
      "her"
    ],
    "explanation": "動詞のあとに置く「〜を」の形（目的格）を使います。Sara は女性なので、she の目的格 her が入ります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-006",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "所有格"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThis is （　）bird. （you）",
    "answerType": "text",
    "correctAnswers": [
      "your"
    ],
    "explanation": "名詞の前に置いて「〜の」を表すのは所有格です。you の所有格は your です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-007",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "所有格"
    ],
    "question": "「they」の所有格（〜の）を選びなさい。",
    "answerType": "choice",
    "choices": [
      "my",
      "her",
      "its",
      "their"
    ],
    "correctAnswers": [
      "their"
    ],
    "explanation": "they の所有格は their です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-pronouns-008",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "目的格"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThis is Tom. I know （　）.",
    "answerType": "text",
    "correctAnswers": [
      "him"
    ],
    "explanation": "動詞のあとに置く「〜を」の形（目的格）を使います。Tom は男性なので、he の目的格 him が入ります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-009",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "所有格"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThis is （　）key. （you）",
    "answerType": "text",
    "correctAnswers": [
      "your"
    ],
    "explanation": "名詞の前に置いて「〜の」を表すのは所有格です。you の所有格は your です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-010",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "目的格"
    ],
    "question": "「he」の目的格（〜を、〜に）を選びなさい。",
    "answerType": "choice",
    "choices": [
      "him",
      "you",
      "me",
      "it"
    ],
    "correctAnswers": [
      "him"
    ],
    "explanation": "he の目的格は him です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-011",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "所有格"
    ],
    "question": "「he」の所有格（〜の）を選びなさい。",
    "answerType": "choice",
    "choices": [
      "his",
      "your",
      "our",
      "my"
    ],
    "correctAnswers": [
      "his"
    ],
    "explanation": "he の所有格は his です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-pronouns-012",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "目的格"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThis is Yumi. I know （　）.",
    "answerType": "text",
    "correctAnswers": [
      "her"
    ],
    "explanation": "動詞のあとに置く「〜を」の形（目的格）を使います。Yumi は女性なので、she の目的格 her が入ります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-013",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "所有格"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThis is （　）knife. （he）",
    "answerType": "text",
    "correctAnswers": [
      "his"
    ],
    "explanation": "名詞の前に置いて「〜の」を表すのは所有格です。he の所有格は his です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-014",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "目的格"
    ],
    "question": "「I」の目的格（〜を、〜に）を選びなさい。",
    "answerType": "choice",
    "choices": [
      "him",
      "me",
      "it",
      "them"
    ],
    "correctAnswers": [
      "me"
    ],
    "explanation": "I の目的格は me です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-015",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "所有格"
    ],
    "question": "「you」の所有格（〜の）を選びなさい。",
    "answerType": "choice",
    "choices": [
      "our",
      "its",
      "my",
      "your"
    ],
    "correctAnswers": [
      "your"
    ],
    "explanation": "you の所有格は your です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-pronouns-016",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "目的格"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThis is Rio. I help （　）.",
    "answerType": "text",
    "correctAnswers": [
      "her"
    ],
    "explanation": "動詞のあとに置く「〜を」の形（目的格）を使います。Rio は女性なので、she の目的格 her が入ります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-017",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "所有格"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThis is （　）cat. （he）",
    "answerType": "text",
    "correctAnswers": [
      "his"
    ],
    "explanation": "名詞の前に置いて「〜の」を表すのは所有格です。he の所有格は his です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-018",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "目的格"
    ],
    "question": "「she」の目的格（〜を、〜に）を選びなさい。",
    "answerType": "choice",
    "choices": [
      "me",
      "you",
      "him",
      "her"
    ],
    "correctAnswers": [
      "her"
    ],
    "explanation": "she の目的格は her です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-019",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "所有格"
    ],
    "question": "「I」の所有格（〜の）を選びなさい。",
    "answerType": "choice",
    "choices": [
      "your",
      "his",
      "my",
      "its"
    ],
    "correctAnswers": [
      "my"
    ],
    "explanation": "I の所有格は my です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-pronouns-020",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "目的格"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThis is Rio. I like （　）.",
    "answerType": "text",
    "correctAnswers": [
      "her"
    ],
    "explanation": "動詞のあとに置く「〜を」の形（目的格）を使います。Rio は女性なので、she の目的格 her が入ります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-021",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "所有格"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThis is （　）toy. （it）",
    "answerType": "text",
    "correctAnswers": [
      "its"
    ],
    "explanation": "名詞の前に置いて「〜の」を表すのは所有格です。it の所有格は its です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-022",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "目的格"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThis is Kate. I know （　）.",
    "answerType": "text",
    "correctAnswers": [
      "her"
    ],
    "explanation": "動詞のあとに置く「〜を」の形（目的格）を使います。Kate は女性なので、she の目的格 her が入ります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-023",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "所有格"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThis is （　）tooth. （they）",
    "answerType": "text",
    "correctAnswers": [
      "their"
    ],
    "explanation": "名詞の前に置いて「〜の」を表すのは所有格です。they の所有格は their です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-024",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "所有格"
    ],
    "question": "「she」の所有格（〜の）を選びなさい。",
    "answerType": "choice",
    "choices": [
      "her",
      "my",
      "their",
      "our"
    ],
    "correctAnswers": [
      "her"
    ],
    "explanation": "she の所有格は her です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-pronouns-025",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "目的格"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThis is Kate. I help （　）.",
    "answerType": "text",
    "correctAnswers": [
      "her"
    ],
    "explanation": "動詞のあとに置く「〜を」の形（目的格）を使います。Kate は女性なので、she の目的格 her が入ります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-026",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "所有格"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThis is （　）dog. （it）",
    "answerType": "text",
    "correctAnswers": [
      "its"
    ],
    "explanation": "名詞の前に置いて「〜の」を表すのは所有格です。it の所有格は its です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-027",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "目的格"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThis is Emi. I help （　）.",
    "answerType": "text",
    "correctAnswers": [
      "her"
    ],
    "explanation": "動詞のあとに置く「〜を」の形（目的格）を使います。Emi は女性なので、she の目的格 her が入ります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-028",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "所有格"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThis is （　）egg. （I）",
    "answerType": "text",
    "correctAnswers": [
      "my"
    ],
    "explanation": "名詞の前に置いて「〜の」を表すのは所有格です。I の所有格は my です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-pronouns-029",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "所有格"
    ],
    "question": "「it」の所有格（〜の）を選びなさい。",
    "answerType": "choice",
    "choices": [
      "my",
      "its",
      "your",
      "her"
    ],
    "correctAnswers": [
      "its"
    ],
    "explanation": "it の所有格は its です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-pronouns-030",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "pronouns",
      "name": "人やものを表すことば（代名詞）"
    },
    "tags": [
      "目的格"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThis is Aya. I like （　）.",
    "answerType": "text",
    "correctAnswers": [
      "her"
    ],
    "explanation": "動詞のあとに置く「〜を」の形（目的格）を使います。Aya は女性なので、she の目的格 her が入ります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-001",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "三人称単数"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nShe（live）in Tokyo every day.",
    "answerType": "text",
    "correctAnswers": [
      "lives"
    ],
    "explanation": "主語が三人称単数（I と you 以外の1人）なので、動詞に s か es をつけます。live → lives となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-third-person-s-002",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "否定文",
      "三人称単数"
    ],
    "question": "次の文を否定文に書きかえなさい。\nShe swims.",
    "answerType": "text",
    "correctAnswers": [
      "She doesn't swim.",
      "She does not swim."
    ],
    "explanation": "主語が三人称単数の一般動詞の否定文は、動詞の前に doesn't（does not）を置き、動詞は原形に戻します。swims → swim となるのがポイントです。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-003",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "疑問文",
      "三人称単数"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nHe tries this cake.",
    "answerType": "text",
    "correctAnswers": [
      "Does he try this cake?"
    ],
    "explanation": "主語が三人称単数の一般動詞の疑問文は、文のはじめに Does を置き、動詞は原形に戻します。Does he try this cake? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-004",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "三人称単数"
    ],
    "question": "主語が He のとき、動詞 live の正しい形を選びなさい。",
    "answerType": "choice",
    "choices": [
      "liveing",
      "livess",
      "live",
      "lives"
    ],
    "correctAnswers": [
      "lives"
    ],
    "explanation": "live の三人称単数現在形は lives です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-005",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "三人称単数"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nYumi（want）a new bike every day.",
    "answerType": "text",
    "correctAnswers": [
      "wants"
    ],
    "explanation": "主語が三人称単数（I と you 以外の1人）なので、動詞に s か es をつけます。want → wants となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-third-person-s-006",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "否定文",
      "三人称単数"
    ],
    "question": "次の文を否定文に書きかえなさい。\nKen drinks water.",
    "answerType": "text",
    "correctAnswers": [
      "Ken doesn't drink water.",
      "Ken does not drink water."
    ],
    "explanation": "主語が三人称単数の一般動詞の否定文は、動詞の前に doesn't（does not）を置き、動詞は原形に戻します。drinks → drink となるのがポイントです。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-007",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "疑問文",
      "三人称単数"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nHe takes a picture.",
    "answerType": "text",
    "correctAnswers": [
      "Does he take a picture?"
    ],
    "explanation": "主語が三人称単数の一般動詞の疑問文は、文のはじめに Does を置き、動詞は原形に戻します。Does he take a picture? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-008",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "三人称単数"
    ],
    "question": "主語が He のとき、動詞 go の正しい形を選びなさい。",
    "answerType": "choice",
    "choices": [
      "goess",
      "go",
      "goes",
      "going"
    ],
    "correctAnswers": [
      "goes"
    ],
    "explanation": "go の三人称単数現在形は goes です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-009",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "三人称単数"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nYumi（help）my mother every day.",
    "answerType": "text",
    "correctAnswers": [
      "helps"
    ],
    "explanation": "主語が三人称単数（I と you 以外の1人）なので、動詞に s か es をつけます。help → helps となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-third-person-s-010",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "否定文",
      "三人称単数"
    ],
    "question": "次の文を否定文に書きかえなさい。\nHe makes a cake.",
    "answerType": "text",
    "correctAnswers": [
      "He doesn't make a cake.",
      "He does not make a cake."
    ],
    "explanation": "主語が三人称単数の一般動詞の否定文は、動詞の前に doesn't（does not）を置き、動詞は原形に戻します。makes → make となるのがポイントです。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-011",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "疑問文",
      "三人称単数"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nKen writes a letter.",
    "answerType": "text",
    "correctAnswers": [
      "Does Ken write a letter?"
    ],
    "explanation": "主語が三人称単数の一般動詞の疑問文は、文のはじめに Does を置き、動詞は原形に戻します。Does Ken write a letter? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-012",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "三人称単数"
    ],
    "question": "主語が He のとき、動詞 know の正しい形を選びなさい。",
    "answerType": "choice",
    "choices": [
      "knowing",
      "know",
      "knowss",
      "knows"
    ],
    "correctAnswers": [
      "knows"
    ],
    "explanation": "know の三人称単数現在形は knows です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-013",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "三人称単数"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nShe（study）English every day.",
    "answerType": "text",
    "correctAnswers": [
      "studies"
    ],
    "explanation": "主語が三人称単数（I と you 以外の1人）なので、動詞に s か es をつけます。study → studies となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-third-person-s-014",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "否定文",
      "三人称単数"
    ],
    "question": "次の文を否定文に書きかえなさい。\nMy sister speaks English.",
    "answerType": "text",
    "correctAnswers": [
      "My sister doesn't speak English.",
      "My sister does not speak English."
    ],
    "explanation": "主語が三人称単数の一般動詞の否定文は、動詞の前に doesn't（does not）を置き、動詞は原形に戻します。speaks → speak となるのがポイントです。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-015",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "疑問文",
      "三人称単数"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nHe swims.",
    "answerType": "text",
    "correctAnswers": [
      "Does he swim?"
    ],
    "explanation": "主語が三人称単数の一般動詞の疑問文は、文のはじめに Does を置き、動詞は原形に戻します。Does he swim? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-016",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "三人称単数"
    ],
    "question": "主語が He のとき、動詞 make の正しい形を選びなさい。",
    "answerType": "choice",
    "choices": [
      "make",
      "makess",
      "makes",
      "makeing"
    ],
    "correctAnswers": [
      "makes"
    ],
    "explanation": "make の三人称単数現在形は makes です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-017",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "三人称単数"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nMy father（write）a letter every day.",
    "answerType": "text",
    "correctAnswers": [
      "writes"
    ],
    "explanation": "主語が三人称単数（I と you 以外の1人）なので、動詞に s か es をつけます。write → writes となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-third-person-s-018",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "否定文",
      "三人称単数"
    ],
    "question": "次の文を否定文に書きかえなさい。\nMy sister gives him a present.",
    "answerType": "text",
    "correctAnswers": [
      "My sister doesn't give him a present.",
      "My sister does not give him a present."
    ],
    "explanation": "主語が三人称単数の一般動詞の否定文は、動詞の前に doesn't（does not）を置き、動詞は原形に戻します。gives → give となるのがポイントです。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-019",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "疑問文",
      "三人称単数"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nKen looks at the picture.",
    "answerType": "text",
    "correctAnswers": [
      "Does Ken look at the picture?"
    ],
    "explanation": "主語が三人称単数の一般動詞の疑問文は、文のはじめに Does を置き、動詞は原形に戻します。Does Ken look at the picture? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-020",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "三人称単数"
    ],
    "question": "主語が He のとき、動詞 wash の正しい形を選びなさい。",
    "answerType": "choice",
    "choices": [
      "washing",
      "washess",
      "wash",
      "washes"
    ],
    "correctAnswers": [
      "washes"
    ],
    "explanation": "wash の三人称単数現在形は washes です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-021",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "三人称単数"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nKen（make）a cake every day.",
    "answerType": "text",
    "correctAnswers": [
      "makes"
    ],
    "explanation": "主語が三人称単数（I と you 以外の1人）なので、動詞に s か es をつけます。make → makes となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-third-person-s-022",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "否定文",
      "三人称単数"
    ],
    "question": "次の文を否定文に書きかえなさい。\nShe tries this cake.",
    "answerType": "text",
    "correctAnswers": [
      "She doesn't try this cake.",
      "She does not try this cake."
    ],
    "explanation": "主語が三人称単数の一般動詞の否定文は、動詞の前に doesn't（does not）を置き、動詞は原形に戻します。tries → try となるのがポイントです。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-023",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "疑問文",
      "三人称単数"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nShe lives in Tokyo.",
    "answerType": "text",
    "correctAnswers": [
      "Does she live in Tokyo?"
    ],
    "explanation": "主語が三人称単数の一般動詞の疑問文は、文のはじめに Does を置き、動詞は原形に戻します。Does she live in Tokyo? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-024",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "三人称単数"
    ],
    "question": "主語が He のとき、動詞 ask の正しい形を選びなさい。",
    "answerType": "choice",
    "choices": [
      "ask",
      "askss",
      "asking",
      "asks"
    ],
    "correctAnswers": [
      "asks"
    ],
    "explanation": "ask の三人称単数現在形は asks です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-025",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "三人称単数"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nMy sister（give）him a present every day.",
    "answerType": "text",
    "correctAnswers": [
      "gives"
    ],
    "explanation": "主語が三人称単数（I と you 以外の1人）なので、動詞に s か es をつけます。give → gives となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-third-person-s-026",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "否定文",
      "三人称単数"
    ],
    "question": "次の文を否定文に書きかえなさい。\nHe eats breakfast.",
    "answerType": "text",
    "correctAnswers": [
      "He doesn't eat breakfast.",
      "He does not eat breakfast."
    ],
    "explanation": "主語が三人称単数の一般動詞の否定文は、動詞の前に doesn't（does not）を置き、動詞は原形に戻します。eats → eat となるのがポイントです。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-027",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "疑問文",
      "三人称単数"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nHe looks at the picture.",
    "answerType": "text",
    "correctAnswers": [
      "Does he look at the picture?"
    ],
    "explanation": "主語が三人称単数の一般動詞の疑問文は、文のはじめに Does を置き、動詞は原形に戻します。Does he look at the picture? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-028",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "三人称単数"
    ],
    "question": "主語が He のとき、動詞 love の正しい形を選びなさい。",
    "answerType": "choice",
    "choices": [
      "lovess",
      "loves",
      "loveing",
      "love"
    ],
    "correctAnswers": [
      "loves"
    ],
    "explanation": "love の三人称単数現在形は loves です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-third-person-s-029",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "三人称単数"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nYumi（have）a dog every day.",
    "answerType": "text",
    "correctAnswers": [
      "has"
    ],
    "explanation": "主語が三人称単数（I と you 以外の1人）なので、動詞に s か es をつけます。have → has となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-third-person-s-030",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "third-person-s",
      "name": "三単現のs"
    },
    "tags": [
      "否定文",
      "三人称単数"
    ],
    "question": "次の文を否定文に書きかえなさい。\nHe studies English.",
    "answerType": "text",
    "correctAnswers": [
      "He doesn't study English.",
      "He does not study English."
    ],
    "explanation": "主語が三人称単数の一般動詞の否定文は、動詞の前に doesn't（does not）を置き、動詞は原形に戻します。studies → study となるのがポイントです。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-imperative-exclamation-001",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "命令文"
    ],
    "question": "次の日本語を命令文（英語）にしなさい。\n「ドアを開けて」",
    "answerType": "text",
    "correctAnswers": [
      "Open the door."
    ],
    "explanation": "命令文は主語を省略して、動詞の原形から文を始めます。Open the door. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-imperative-exclamation-002",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "否定の命令文"
    ],
    "question": "次の日本語を否定の命令文にしなさい。\n「ここで走らないで」",
    "answerType": "text",
    "correctAnswers": [
      "Don't run here."
    ],
    "explanation": "「〜しないで」という否定の命令文は、Don't のあとに動詞の原形を続けます。Don't run here. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-imperative-exclamation-003",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "感嘆文"
    ],
    "question": "次の形容詞を使って「なんて〜なんだ！」という感嘆文を作りなさい。（How を使う）\nthirsty",
    "answerType": "text",
    "correctAnswers": [
      "How thirsty!"
    ],
    "explanation": "形容詞だけを強調する感嘆文は How + 形容詞 + ! で表します。How thirsty! となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-imperative-exclamation-004",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "感嘆文"
    ],
    "question": "次の語を使って「なんて〜な（名詞）なんだ！」という感嘆文を作りなさい。（What を使う）\nold / car",
    "answerType": "text",
    "correctAnswers": [
      "What an old car!"
    ],
    "explanation": "名詞をふくむ感嘆文は What + a/an + 形容詞 + 名詞 + ! で表します。What an old car! となります。",
    "difficulty": 3
  },
  {
    "id": "eng-g1-imperative-exclamation-005",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "命令文"
    ],
    "question": "次の日本語を命令文（英語）にしなさい。\n「あなたの部屋をそうじして」",
    "answerType": "text",
    "correctAnswers": [
      "Clean your room."
    ],
    "explanation": "命令文は主語を省略して、動詞の原形から文を始めます。Clean your room. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-imperative-exclamation-006",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "否定の命令文"
    ],
    "question": "次の日本語を否定の命令文にしなさい。\n「ここで話さないで」",
    "answerType": "text",
    "correctAnswers": [
      "Don't talk here."
    ],
    "explanation": "「〜しないで」という否定の命令文は、Don't のあとに動詞の原形を続けます。Don't talk here. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-imperative-exclamation-007",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "感嘆文"
    ],
    "question": "次の形容詞を使って「なんて〜なんだ！」という感嘆文を作りなさい。（How を使う）\ntall",
    "answerType": "text",
    "correctAnswers": [
      "How tall!"
    ],
    "explanation": "形容詞だけを強調する感嘆文は How + 形容詞 + ! で表します。How tall! となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-imperative-exclamation-008",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "感嘆文"
    ],
    "question": "次の語を使って「なんて〜な（名詞）なんだ！」という感嘆文を作りなさい。（What を使う）\nnice / cup",
    "answerType": "text",
    "correctAnswers": [
      "What a nice cup!"
    ],
    "explanation": "名詞をふくむ感嘆文は What + a/an + 形容詞 + 名詞 + ! で表します。What a nice cup! となります。",
    "difficulty": 3
  },
  {
    "id": "eng-g1-imperative-exclamation-009",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "否定の命令文"
    ],
    "question": "次の日本語を否定の命令文にしなさい。\n「ここで食べないで」",
    "answerType": "text",
    "correctAnswers": [
      "Don't eat here."
    ],
    "explanation": "「〜しないで」という否定の命令文は、Don't のあとに動詞の原形を続けます。Don't eat here. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-imperative-exclamation-010",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "感嘆文"
    ],
    "question": "次の形容詞を使って「なんて〜なんだ！」という感嘆文を作りなさい。（How を使う）\nbeautiful",
    "answerType": "text",
    "correctAnswers": [
      "How beautiful!"
    ],
    "explanation": "形容詞だけを強調する感嘆文は How + 形容詞 + ! で表します。How beautiful! となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-imperative-exclamation-011",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "感嘆文"
    ],
    "question": "次の語を使って「なんて〜な（名詞）なんだ！」という感嘆文を作りなさい。（What を使う）\nnice / umbrella",
    "answerType": "text",
    "correctAnswers": [
      "What a nice umbrella!"
    ],
    "explanation": "名詞をふくむ感嘆文は What + a/an + 形容詞 + 名詞 + ! で表します。What a nice umbrella! となります。",
    "difficulty": 3
  },
  {
    "id": "eng-g1-imperative-exclamation-012",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "感嘆文"
    ],
    "question": "次の形容詞を使って「なんて〜なんだ！」という感嘆文を作りなさい。（How を使う）\nyoung",
    "answerType": "text",
    "correctAnswers": [
      "How young!"
    ],
    "explanation": "形容詞だけを強調する感嘆文は How + 形容詞 + ! で表します。How young! となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-imperative-exclamation-013",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "感嘆文"
    ],
    "question": "次の語を使って「なんて〜な（名詞）なんだ！」という感嘆文を作りなさい。（What を使う）\nbeautiful / story",
    "answerType": "text",
    "correctAnswers": [
      "What a beautiful story!"
    ],
    "explanation": "名詞をふくむ感嘆文は What + a/an + 形容詞 + 名詞 + ! で表します。What a beautiful story! となります。",
    "difficulty": 3
  },
  {
    "id": "eng-g1-imperative-exclamation-014",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "命令文"
    ],
    "question": "次の日本語を命令文（英語）にしなさい。\n「この本を読んで」",
    "answerType": "text",
    "correctAnswers": [
      "Read this book."
    ],
    "explanation": "命令文は主語を省略して、動詞の原形から文を始めます。Read this book. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-imperative-exclamation-015",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "感嘆文"
    ],
    "question": "次の形容詞を使って「なんて〜なんだ！」という感嘆文を作りなさい。（How を使う）\nnice",
    "answerType": "text",
    "correctAnswers": [
      "How nice!"
    ],
    "explanation": "形容詞だけを強調する感嘆文は How + 形容詞 + ! で表します。How nice! となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-imperative-exclamation-016",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "感嘆文"
    ],
    "question": "次の語を使って「なんて〜な（名詞）なんだ！」という感嘆文を作りなさい。（What を使う）\nbig / chair",
    "answerType": "text",
    "correctAnswers": [
      "What a big chair!"
    ],
    "explanation": "名詞をふくむ感嘆文は What + a/an + 形容詞 + 名詞 + ! で表します。What a big chair! となります。",
    "difficulty": 3
  },
  {
    "id": "eng-g1-imperative-exclamation-017",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "命令文"
    ],
    "question": "次の日本語を命令文（英語）にしなさい。\n「あなたの手を洗って」",
    "answerType": "text",
    "correctAnswers": [
      "Wash your hands."
    ],
    "explanation": "命令文は主語を省略して、動詞の原形から文を始めます。Wash your hands. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-imperative-exclamation-018",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "否定の命令文"
    ],
    "question": "次の日本語を否定の命令文にしなさい。\n「ここでこれにさわらないで」",
    "answerType": "text",
    "correctAnswers": [
      "Don't touch this here."
    ],
    "explanation": "「〜しないで」という否定の命令文は、Don't のあとに動詞の原形を続けます。Don't touch this here. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-imperative-exclamation-019",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "感嘆文"
    ],
    "question": "次の形容詞を使って「なんて〜なんだ！」という感嘆文を作りなさい。（How を使う）\ntired",
    "answerType": "text",
    "correctAnswers": [
      "How tired!"
    ],
    "explanation": "形容詞だけを強調する感嘆文は How + 形容詞 + ! で表します。How tired! となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-imperative-exclamation-020",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "感嘆文"
    ],
    "question": "次の語を使って「なんて〜な（名詞）なんだ！」という感嘆文を作りなさい。（What を使う）\nbig / desk",
    "answerType": "text",
    "correctAnswers": [
      "What a big desk!"
    ],
    "explanation": "名詞をふくむ感嘆文は What + a/an + 形容詞 + 名詞 + ! で表します。What a big desk! となります。",
    "difficulty": 3
  },
  {
    "id": "eng-g1-imperative-exclamation-021",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "命令文"
    ],
    "question": "次の日本語を命令文（英語）にしなさい。\n「窓を閉めて」",
    "answerType": "text",
    "correctAnswers": [
      "Close the window."
    ],
    "explanation": "命令文は主語を省略して、動詞の原形から文を始めます。Close the window. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-imperative-exclamation-022",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "否定の命令文"
    ],
    "question": "次の日本語を否定の命令文にしなさい。\n「ここで泳がないで」",
    "answerType": "text",
    "correctAnswers": [
      "Don't swim here."
    ],
    "explanation": "「〜しないで」という否定の命令文は、Don't のあとに動詞の原形を続けます。Don't swim here. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-imperative-exclamation-023",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "感嘆文"
    ],
    "question": "次の語を使って「なんて〜な（名詞）なんだ！」という感嘆文を作りなさい。（What を使う）\nnew / toy",
    "answerType": "text",
    "correctAnswers": [
      "What a new toy!"
    ],
    "explanation": "名詞をふくむ感嘆文は What + a/an + 形容詞 + 名詞 + ! で表します。What a new toy! となります。",
    "difficulty": 3
  },
  {
    "id": "eng-g1-imperative-exclamation-024",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "感嘆文"
    ],
    "question": "次の形容詞を使って「なんて〜なんだ！」という感嘆文を作りなさい。（How を使う）\nold",
    "answerType": "text",
    "correctAnswers": [
      "How old!"
    ],
    "explanation": "形容詞だけを強調する感嘆文は How + 形容詞 + ! で表します。How old! となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-imperative-exclamation-025",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "感嘆文"
    ],
    "question": "次の語を使って「なんて〜な（名詞）なんだ！」という感嘆文を作りなさい。（What を使う）\ncute / chair",
    "answerType": "text",
    "correctAnswers": [
      "What a cute chair!"
    ],
    "explanation": "名詞をふくむ感嘆文は What + a/an + 形容詞 + 名詞 + ! で表します。What a cute chair! となります。",
    "difficulty": 3
  },
  {
    "id": "eng-g1-imperative-exclamation-026",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "命令文"
    ],
    "question": "次の日本語を命令文（英語）にしなさい。\n「この絵を見て」",
    "answerType": "text",
    "correctAnswers": [
      "Look at this picture."
    ],
    "explanation": "命令文は主語を省略して、動詞の原形から文を始めます。Look at this picture. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-imperative-exclamation-027",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "感嘆文"
    ],
    "question": "次の形容詞を使って「なんて〜なんだ！」という感嘆文を作りなさい。（How を使う）\nnew",
    "answerType": "text",
    "correctAnswers": [
      "How new!"
    ],
    "explanation": "形容詞だけを強調する感嘆文は How + 形容詞 + ! で表します。How new! となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-imperative-exclamation-028",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "感嘆文"
    ],
    "question": "次の語を使って「なんて〜な（名詞）なんだ！」という感嘆文を作りなさい。（What を使う）\nwonderful / woman",
    "answerType": "text",
    "correctAnswers": [
      "What a wonderful woman!"
    ],
    "explanation": "名詞をふくむ感嘆文は What + a/an + 形容詞 + 名詞 + ! で表します。What a wonderful woman! となります。",
    "difficulty": 3
  },
  {
    "id": "eng-g1-imperative-exclamation-029",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "感嘆文"
    ],
    "question": "次の語を使って「なんて〜な（名詞）なんだ！」という感嘆文を作りなさい。（What を使う）\nold / tooth",
    "answerType": "text",
    "correctAnswers": [
      "What an old tooth!"
    ],
    "explanation": "名詞をふくむ感嘆文は What + a/an + 形容詞 + 名詞 + ! で表します。What an old tooth! となります。",
    "difficulty": 3
  },
  {
    "id": "eng-g1-imperative-exclamation-030",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "imperative-exclamation",
      "name": "命令文・感嘆文"
    },
    "tags": [
      "感嘆文"
    ],
    "question": "次の語を使って「なんて〜な（名詞）なんだ！」という感嘆文を作りなさい。（What を使う）\nbig / book",
    "answerType": "text",
    "correctAnswers": [
      "What a big book!"
    ],
    "explanation": "名詞をふくむ感嘆文は What + a/an + 形容詞 + 名詞 + ! で表します。What a big book! となります。",
    "difficulty": 3
  },
  {
    "id": "eng-g1-wh-question-001",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "疑問詞の選択"
    ],
    "question": "次の（　）に入る疑問詞を答えなさい。\n（　） car is this? — It's my father's car.",
    "answerType": "text",
    "correctAnswers": [
      "Whose"
    ],
    "explanation": "答えの文の内容から考えると、Whose を使ってたずねる文だとわかります。Whose car is this? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-002",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "疑問詞の意味"
    ],
    "question": "「どこ」という意味の疑問詞を選びなさい。",
    "answerType": "choice",
    "choices": [
      "Why",
      "When",
      "Who",
      "Where"
    ],
    "correctAnswers": [
      "Where"
    ],
    "explanation": "「どこ」は英語で Where です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-wh-question-003",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "疑問詞の選択"
    ],
    "question": "次の（　）に入る語を答えなさい。\n（　）do you study English? — On Thursdays.",
    "answerType": "text",
    "correctAnswers": [
      "When"
    ],
    "explanation": "答えの文で曜日を答えているので、「いつ」をたずねる疑問詞 When を使います。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-004",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "how many"
    ],
    "question": "次の日本文に合うように、（　）に入る語を答えなさい。\nあなたは物語を何個持っていますか。\n（　）many stories do you have? — I have 1.",
    "answerType": "text",
    "correctAnswers": [
      "How"
    ],
    "explanation": "「いくつ」と数をたずねるときは How many + 名詞の複数形を使います。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-005",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "where"
    ],
    "question": "次の日本文を英語にしなさい。\nKenはどこにいますか。",
    "answerType": "text",
    "correctAnswers": [
      "Where is Ken?"
    ],
    "explanation": "「どこに」は Where でたずねます。Where is Ken? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-006",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "why"
    ],
    "question": "次の日本文に合うように、（　）に入る語を答えなさい。\nあなたはなぜ音楽を聞くのですか。\n（　）do you listen to music?",
    "answerType": "text",
    "correctAnswers": [
      "Why"
    ],
    "explanation": "「なぜ」と理由をたずねるときは Why を使います。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-007",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "疑問詞の選択"
    ],
    "question": "次の（　）に入る疑問詞を答えなさい。\n（　） do you like? — I like the blue one.",
    "answerType": "text",
    "correctAnswers": [
      "Which"
    ],
    "explanation": "答えの文の内容から考えると、Which を使ってたずねる文だとわかります。Which do you like? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-008",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "疑問詞の意味"
    ],
    "question": "「だれ」という意味の疑問詞を選びなさい。",
    "answerType": "choice",
    "choices": [
      "What",
      "Who",
      "How",
      "Why"
    ],
    "correctAnswers": [
      "Who"
    ],
    "explanation": "「だれ」は英語で Who です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-wh-question-009",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "疑問詞の選択"
    ],
    "question": "次の（　）に入る語を答えなさい。\n（　）do you clean your room? — On Thursdays.",
    "answerType": "text",
    "correctAnswers": [
      "When"
    ],
    "explanation": "答えの文で曜日を答えているので、「いつ」をたずねる疑問詞 When を使います。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-010",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "how many"
    ],
    "question": "次の日本文に合うように、（　）に入る語を答えなさい。\nあなたはバスを何個持っていますか。\n（　）many buses do you have? — I have 5.",
    "answerType": "text",
    "correctAnswers": [
      "How"
    ],
    "explanation": "「いくつ」と数をたずねるときは How many + 名詞の複数形を使います。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-011",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "where"
    ],
    "question": "次の日本文を英語にしなさい。\nAyaはどこにいますか。",
    "answerType": "text",
    "correctAnswers": [
      "Where is Aya?"
    ],
    "explanation": "「どこに」は Where でたずねます。Where is Aya? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-012",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "why"
    ],
    "question": "次の日本文に合うように、（　）に入る語を答えなさい。\nあなたはなぜテレビを見るのですか。\n（　）do you watch TV?",
    "answerType": "text",
    "correctAnswers": [
      "Why"
    ],
    "explanation": "「なぜ」と理由をたずねるときは Why を使います。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-013",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "疑問詞の選択"
    ],
    "question": "次の（　）に入る疑問詞を答えなさい。\n（　） is she? — She is my sister.",
    "answerType": "text",
    "correctAnswers": [
      "Who"
    ],
    "explanation": "答えの文の内容から考えると、Who を使ってたずねる文だとわかります。Who is she? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-014",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "疑問詞の選択"
    ],
    "question": "次の（　）に入る語を答えなさい。\n（　）do you play tennis? — On Tuesdays.",
    "answerType": "text",
    "correctAnswers": [
      "When"
    ],
    "explanation": "答えの文で曜日を答えているので、「いつ」をたずねる疑問詞 When を使います。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-015",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "how many"
    ],
    "question": "次の日本文に合うように、（　）に入る語を答えなさい。\nあなたはオレンジを何個持っていますか。\n（　）many oranges do you have? — I have 4.",
    "answerType": "text",
    "correctAnswers": [
      "How"
    ],
    "explanation": "「いくつ」と数をたずねるときは How many + 名詞の複数形を使います。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-016",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "where"
    ],
    "question": "次の日本文を英語にしなさい。\nRioはどこにいますか。",
    "answerType": "text",
    "correctAnswers": [
      "Where is Rio?"
    ],
    "explanation": "「どこに」は Where でたずねます。Where is Rio? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-017",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "why"
    ],
    "question": "次の日本文に合うように、（　）に入る語を答えなさい。\nあなたはなぜ英語を勉強するのですか。\n（　）do you study English?",
    "answerType": "text",
    "correctAnswers": [
      "Why"
    ],
    "explanation": "「なぜ」と理由をたずねるときは Why を使います。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-018",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "疑問詞の選択"
    ],
    "question": "次の（　）に入る疑問詞を答えなさい。\n（　） is your name? — My name is Ken.",
    "answerType": "text",
    "correctAnswers": [
      "What"
    ],
    "explanation": "答えの文の内容から考えると、What を使ってたずねる文だとわかります。What is your name? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-019",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "疑問詞の意味"
    ],
    "question": "「どのように」という意味の疑問詞を選びなさい。",
    "answerType": "choice",
    "choices": [
      "How",
      "Who",
      "What",
      "When"
    ],
    "correctAnswers": [
      "How"
    ],
    "explanation": "「どのように」は英語で How です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-wh-question-020",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "疑問詞の選択"
    ],
    "question": "次の（　）に入る語を答えなさい。\n（　）do you study English? — On Sundays.",
    "answerType": "text",
    "correctAnswers": [
      "When"
    ],
    "explanation": "答えの文で曜日を答えているので、「いつ」をたずねる疑問詞 When を使います。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-021",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "how many"
    ],
    "question": "次の日本文に合うように、（　）に入る語を答えなさい。\nあなたは鳥を何個持っていますか。\n（　）many birds do you have? — I have 3.",
    "answerType": "text",
    "correctAnswers": [
      "How"
    ],
    "explanation": "「いくつ」と数をたずねるときは How many + 名詞の複数形を使います。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-022",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "where"
    ],
    "question": "次の日本文を英語にしなさい。\nEmiはどこにいますか。",
    "answerType": "text",
    "correctAnswers": [
      "Where is Emi?"
    ],
    "explanation": "「どこに」は Where でたずねます。Where is Emi? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-023",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "why"
    ],
    "question": "次の日本文に合うように、（　）に入る語を答えなさい。\nあなたはなぜ部屋をそうじするのですか。\n（　）do you clean your room?",
    "answerType": "text",
    "correctAnswers": [
      "Why"
    ],
    "explanation": "「なぜ」と理由をたずねるときは Why を使います。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-024",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "疑問詞の選択"
    ],
    "question": "次の（　）に入る疑問詞を答えなさい。\n（　） are you tired? — Because I am busy.",
    "answerType": "text",
    "correctAnswers": [
      "Why"
    ],
    "explanation": "答えの文の内容から考えると、Why を使ってたずねる文だとわかります。Why are you tired? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-025",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "疑問詞の意味"
    ],
    "question": "「いつ」という意味の疑問詞を選びなさい。",
    "answerType": "choice",
    "choices": [
      "When",
      "How",
      "Why",
      "Where"
    ],
    "correctAnswers": [
      "When"
    ],
    "explanation": "「いつ」は英語で When です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-wh-question-026",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "疑問詞の選択"
    ],
    "question": "次の（　）に入る語を答えなさい。\n（　）do you watch TV? — On Tuesdays.",
    "answerType": "text",
    "correctAnswers": [
      "When"
    ],
    "explanation": "答えの文で曜日を答えているので、「いつ」をたずねる疑問詞 When を使います。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-027",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "how many"
    ],
    "question": "次の日本文に合うように、（　）に入る語を答えなさい。\nあなたは傘を何個持っていますか。\n（　）many umbrellas do you have? — I have 5.",
    "answerType": "text",
    "correctAnswers": [
      "How"
    ],
    "explanation": "「いくつ」と数をたずねるときは How many + 名詞の複数形を使います。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-028",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "where"
    ],
    "question": "次の日本文を英語にしなさい。\nYumiはどこにいますか。",
    "answerType": "text",
    "correctAnswers": [
      "Where is Yumi?"
    ],
    "explanation": "「どこに」は Where でたずねます。Where is Yumi? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-029",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "疑問詞の選択"
    ],
    "question": "次の（　）に入る語を答えなさい。\n（　）do you watch TV? — On Wednesdays.",
    "answerType": "text",
    "correctAnswers": [
      "When"
    ],
    "explanation": "答えの文で曜日を答えているので、「いつ」をたずねる疑問詞 When を使います。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-wh-question-030",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "wh-question",
      "name": "疑問詞"
    },
    "tags": [
      "how many"
    ],
    "question": "次の日本文に合うように、（　）に入る語を答えなさい。\nあなたはオレンジを何個持っていますか。\n（　）many oranges do you have? — I have 5.",
    "answerType": "text",
    "correctAnswers": [
      "How"
    ],
    "explanation": "「いくつ」と数をたずねるときは How many + 名詞の複数形を使います。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-001",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "現在進行形の形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nThey are （drink） water now.",
    "answerType": "text",
    "correctAnswers": [
      "drinking"
    ],
    "explanation": "現在進行形は「be動詞 + 動詞のing形」で表します。drink のing形は drinking です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-present-progressive-002",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nYou are giving him a present.",
    "answerType": "text",
    "correctAnswers": [
      "Are you giving him a present?"
    ],
    "explanation": "現在進行形の疑問文は、be動詞を主語の前に出します。Are you giving him a present? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-003",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nShe is drinking water.",
    "answerType": "text",
    "correctAnswers": [
      "She is not drinking water."
    ],
    "explanation": "現在進行形の否定文は、be動詞のあとに not を置きます。She is not drinking water. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-004",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "ing形のつくり方"
    ],
    "question": "sit のing形として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "siteing",
      "siing",
      "sitting",
      "siting"
    ],
    "correctAnswers": [
      "sitting"
    ],
    "explanation": "sit のing形は sitting です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-005",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "現在進行形の形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nWe are （swim） now.",
    "answerType": "text",
    "correctAnswers": [
      "swimming"
    ],
    "explanation": "現在進行形は「be動詞 + 動詞のing形」で表します。swim のing形は swimming です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-present-progressive-006",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nShe is taking a picture.",
    "answerType": "text",
    "correctAnswers": [
      "Is she taking a picture?"
    ],
    "explanation": "現在進行形の疑問文は、be動詞を主語の前に出します。Is she taking a picture? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-007",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nShe is trying this cake.",
    "answerType": "text",
    "correctAnswers": [
      "She is not trying this cake."
    ],
    "explanation": "現在進行形の否定文は、be動詞のあとに not を置きます。She is not trying this cake. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-008",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "ing形のつくり方"
    ],
    "question": "come のing形として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "comingz",
      "coming",
      "comeeing",
      "comeing"
    ],
    "correctAnswers": [
      "coming"
    ],
    "explanation": "come のing形は coming です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-009",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "現在進行形の形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nShe is （stand） by the door now.",
    "answerType": "text",
    "correctAnswers": [
      "standing"
    ],
    "explanation": "現在進行形は「be動詞 + 動詞のing形」で表します。stand のing形は standing です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-present-progressive-010",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nShe is using this pen.",
    "answerType": "text",
    "correctAnswers": [
      "Is she using this pen?"
    ],
    "explanation": "現在進行形の疑問文は、be動詞を主語の前に出します。Is she using this pen? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-011",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nShe is doing my homework.",
    "answerType": "text",
    "correctAnswers": [
      "She is not doing my homework."
    ],
    "explanation": "現在進行形の否定文は、be動詞のあとに not を置きます。She is not doing my homework. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-012",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "現在進行形の形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nYou are （look） at the picture now.",
    "answerType": "text",
    "correctAnswers": [
      "looking"
    ],
    "explanation": "現在進行形は「be動詞 + 動詞のing形」で表します。look のing形は looking です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-present-progressive-013",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nThey are washing the dishes.",
    "answerType": "text",
    "correctAnswers": [
      "Are they washing the dishes?"
    ],
    "explanation": "現在進行形の疑問文は、be動詞を主語の前に出します。Are they washing the dishes? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-014",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nShe is listening to music.",
    "answerType": "text",
    "correctAnswers": [
      "She is not listening to music."
    ],
    "explanation": "現在進行形の否定文は、be動詞のあとに not を置きます。She is not listening to music. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-015",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "ing形のつくり方"
    ],
    "question": "write のing形として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "writing",
      "writeing",
      "writingz",
      "writeeing"
    ],
    "correctAnswers": [
      "writing"
    ],
    "explanation": "write のing形は writing です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-016",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nWe are talking to my friend.",
    "answerType": "text",
    "correctAnswers": [
      "Are we talking to my friend?"
    ],
    "explanation": "現在進行形の疑問文は、be動詞を主語の前に出します。Are we talking to my friend? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-017",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nWe are sitting on the chair.",
    "answerType": "text",
    "correctAnswers": [
      "We are not sitting on the chair."
    ],
    "explanation": "現在進行形の否定文は、be動詞のあとに not を置きます。We are not sitting on the chair. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-018",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "現在進行形の形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nYou are （write） a letter now.",
    "answerType": "text",
    "correctAnswers": [
      "writing"
    ],
    "explanation": "現在進行形は「be動詞 + 動詞のing形」で表します。write のing形は writing です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-present-progressive-019",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nThey are playing tennis.",
    "answerType": "text",
    "correctAnswers": [
      "Are they playing tennis?"
    ],
    "explanation": "現在進行形の疑問文は、be動詞を主語の前に出します。Are they playing tennis? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-020",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nThey are cooking dinner.",
    "answerType": "text",
    "correctAnswers": [
      "They are not cooking dinner."
    ],
    "explanation": "現在進行形の否定文は、be動詞のあとに not を置きます。They are not cooking dinner. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-021",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "ing形のつくり方"
    ],
    "question": "get のing形として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "geting",
      "getting",
      "geteing",
      "geing"
    ],
    "correctAnswers": [
      "getting"
    ],
    "explanation": "get のing形は getting です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-022",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "現在進行形の形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nShe is （study） English now.",
    "answerType": "text",
    "correctAnswers": [
      "studying"
    ],
    "explanation": "現在進行形は「be動詞 + 動詞のing形」で表します。study のing形は studying です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-present-progressive-023",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nWe are visiting Kyoto.",
    "answerType": "text",
    "correctAnswers": [
      "Are we visiting Kyoto?"
    ],
    "explanation": "現在進行形の疑問文は、be動詞を主語の前に出します。Are we visiting Kyoto? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-024",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nThey are watching TV.",
    "answerType": "text",
    "correctAnswers": [
      "They are not watching TV."
    ],
    "explanation": "現在進行形の否定文は、be動詞のあとに not を置きます。They are not watching TV. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-025",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "ing形のつくり方"
    ],
    "question": "run のing形として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "runing",
      "running",
      "runeing",
      "ruing"
    ],
    "correctAnswers": [
      "running"
    ],
    "explanation": "run のing形は running です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-026",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "現在進行形の形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nYou are （wash） the dishes now.",
    "answerType": "text",
    "correctAnswers": [
      "washing"
    ],
    "explanation": "現在進行形は「be動詞 + 動詞のing形」で表します。wash のing形は washing です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-present-progressive-027",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nWe are trying this cake.",
    "answerType": "text",
    "correctAnswers": [
      "Are we trying this cake?"
    ],
    "explanation": "現在進行形の疑問文は、be動詞を主語の前に出します。Are we trying this cake? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-028",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nHe is singing a song.",
    "answerType": "text",
    "correctAnswers": [
      "He is not singing a song."
    ],
    "explanation": "現在進行形の否定文は、be動詞のあとに not を置きます。He is not singing a song. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-present-progressive-029",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "現在進行形の形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nYou are （clean） my room now.",
    "answerType": "text",
    "correctAnswers": [
      "cleaning"
    ],
    "explanation": "現在進行形は「be動詞 + 動詞のing形」で表します。clean のing形は cleaning です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-present-progressive-030",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "present-progressive",
      "name": "現在進行形"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nThey are drinking water.",
    "answerType": "text",
    "correctAnswers": [
      "Are they drinking water?"
    ],
    "explanation": "現在進行形の疑問文は、be動詞を主語の前に出します。Are they drinking water? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-001",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "can の意味"
    ],
    "question": "次の日本文に合うように、（　）に入る語を答えなさい。\nKen はピアノをひくことができます。\nKen （　）play the piano.",
    "answerType": "text",
    "correctAnswers": [
      "can"
    ],
    "explanation": "「〜できる」は助動詞 can で表します。can のあとの動詞は主語が何であっても原形のままです。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-can-002",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nWe can ride a bike.",
    "answerType": "text",
    "correctAnswers": [
      "We cannot ride a bike.",
      "We can't ride a bike."
    ],
    "explanation": "can の否定文は cannot（短縮形 can't）を使います。We cannot ride a bike. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-003",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nShe can cook well.",
    "answerType": "text",
    "correctAnswers": [
      "Can she cook well?"
    ],
    "explanation": "can の疑問文は、can を主語の前に出します。Can she cook well? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-004",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "can の語順"
    ],
    "question": "「Heは車を運転することができます」を表す正しい英文を選びなさい。",
    "answerType": "choice",
    "choices": [
      "He cans drive a car.",
      "He is can drive a car.",
      "He can to drive a car.",
      "He can drive a car."
    ],
    "correctAnswers": [
      "He can drive a car."
    ],
    "explanation": "can は主語が三人称単数でも形が変わらず、あとの動詞は必ず原形になります。He can drive a car. が正しい形です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-005",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "can の意味"
    ],
    "question": "次の日本文に合うように、（　）に入る語を答えなさい。\nYou は泳ぐことができます。\nYou （　）swim.",
    "answerType": "text",
    "correctAnswers": [
      "can"
    ],
    "explanation": "「〜できる」は助動詞 can で表します。can のあとの動詞は主語が何であっても原形のままです。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-can-006",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nI can ski.",
    "answerType": "text",
    "correctAnswers": [
      "I cannot ski.",
      "I can't ski."
    ],
    "explanation": "can の否定文は cannot（短縮形 can't）を使います。I cannot ski. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-007",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nYou can sing well.",
    "answerType": "text",
    "correctAnswers": [
      "Can you sing well?"
    ],
    "explanation": "can の疑問文は、can を主語の前に出します。Can you sing well? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-008",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "can の語順"
    ],
    "question": "「Sheはスキーをすることができます」を表す正しい英文を選びなさい。",
    "answerType": "choice",
    "choices": [
      "She can to ski.",
      "She cans ski.",
      "She is can ski.",
      "She can ski."
    ],
    "correctAnswers": [
      "She can ski."
    ],
    "explanation": "can は主語が三人称単数でも形が変わらず、あとの動詞は必ず原形になります。She can ski. が正しい形です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-009",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "can の意味"
    ],
    "question": "次の日本文に合うように、（　）に入る語を答えなさい。\nKen はスキーをすることができます。\nKen （　）ski.",
    "answerType": "text",
    "correctAnswers": [
      "can"
    ],
    "explanation": "「〜できる」は助動詞 can で表します。can のあとの動詞は主語が何であっても原形のままです。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-can-010",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nThey can sing well.",
    "answerType": "text",
    "correctAnswers": [
      "They cannot sing well.",
      "They can't sing well."
    ],
    "explanation": "can の否定文は cannot（短縮形 can't）を使います。They cannot sing well. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-011",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nYou can cook well.",
    "answerType": "text",
    "correctAnswers": [
      "Can you cook well?"
    ],
    "explanation": "can の疑問文は、can を主語の前に出します。Can you cook well? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-012",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "can の語順"
    ],
    "question": "「Sheは速く走ることができます」を表す正しい英文を選びなさい。",
    "answerType": "choice",
    "choices": [
      "She can run fast.",
      "She is can run fast.",
      "She can to run fast.",
      "She cans run fast."
    ],
    "correctAnswers": [
      "She can run fast."
    ],
    "explanation": "can は主語が三人称単数でも形が変わらず、あとの動詞は必ず原形になります。She can run fast. が正しい形です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-013",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "can の意味"
    ],
    "question": "次の日本文に合うように、（　）に入る語を答えなさい。\nThey は自転車に乗ることができます。\nThey （　）ride a bike.",
    "answerType": "text",
    "correctAnswers": [
      "can"
    ],
    "explanation": "「〜できる」は助動詞 can で表します。can のあとの動詞は主語が何であっても原形のままです。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-can-014",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nYou can drive a car.",
    "answerType": "text",
    "correctAnswers": [
      "You cannot drive a car.",
      "You can't drive a car."
    ],
    "explanation": "can の否定文は cannot（短縮形 can't）を使います。You cannot drive a car. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-015",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nThey can dance.",
    "answerType": "text",
    "correctAnswers": [
      "Can they dance?"
    ],
    "explanation": "can の疑問文は、can を主語の前に出します。Can they dance? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-016",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "can の語順"
    ],
    "question": "「Heはスキーをすることができます」を表す正しい英文を選びなさい。",
    "answerType": "choice",
    "choices": [
      "He is can ski.",
      "He cans ski.",
      "He can ski.",
      "He can to ski."
    ],
    "correctAnswers": [
      "He can ski."
    ],
    "explanation": "can は主語が三人称単数でも形が変わらず、あとの動詞は必ず原形になります。He can ski. が正しい形です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-017",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "can の意味"
    ],
    "question": "次の日本文に合うように、（　）に入る語を答えなさい。\nThey はおどることができます。\nThey （　）dance.",
    "answerType": "text",
    "correctAnswers": [
      "can"
    ],
    "explanation": "「〜できる」は助動詞 can で表します。can のあとの動詞は主語が何であっても原形のままです。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-can-018",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nI can cook well.",
    "answerType": "text",
    "correctAnswers": [
      "I cannot cook well.",
      "I can't cook well."
    ],
    "explanation": "can の否定文は cannot（短縮形 can't）を使います。I cannot cook well. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-019",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nShe can run fast.",
    "answerType": "text",
    "correctAnswers": [
      "Can she run fast?"
    ],
    "explanation": "can の疑問文は、can を主語の前に出します。Can she run fast? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-020",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "can の意味"
    ],
    "question": "次の日本文に合うように、（　）に入る語を答えなさい。\nI は上手に料理することができます。\nI （　）cook well.",
    "answerType": "text",
    "correctAnswers": [
      "can"
    ],
    "explanation": "「〜できる」は助動詞 can で表します。can のあとの動詞は主語が何であっても原形のままです。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-can-021",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nHe can swim.",
    "answerType": "text",
    "correctAnswers": [
      "He cannot swim.",
      "He can't swim."
    ],
    "explanation": "can の否定文は cannot（短縮形 can't）を使います。He cannot swim. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-022",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nHe can cook well.",
    "answerType": "text",
    "correctAnswers": [
      "Can he cook well?"
    ],
    "explanation": "can の疑問文は、can を主語の前に出します。Can he cook well? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-023",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "can の意味"
    ],
    "question": "次の日本文に合うように、（　）に入る語を答えなさい。\nMy mother はピアノをひくことができます。\nMy mother （　）play the piano.",
    "answerType": "text",
    "correctAnswers": [
      "can"
    ],
    "explanation": "「〜できる」は助動詞 can で表します。can のあとの動詞は主語が何であっても原形のままです。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-can-024",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nYou can speak English.",
    "answerType": "text",
    "correctAnswers": [
      "You cannot speak English.",
      "You can't speak English."
    ],
    "explanation": "can の否定文は cannot（短縮形 can't）を使います。You cannot speak English. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-025",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "can の語順"
    ],
    "question": "「Kenは上手に歌うことができます」を表す正しい英文を選びなさい。",
    "answerType": "choice",
    "choices": [
      "Ken is can sing well.",
      "Ken can to sing well.",
      "Ken cans sing well.",
      "Ken can sing well."
    ],
    "correctAnswers": [
      "Ken can sing well."
    ],
    "explanation": "can は主語が三人称単数でも形が変わらず、あとの動詞は必ず原形になります。Ken can sing well. が正しい形です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-026",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "can の意味"
    ],
    "question": "次の日本文に合うように、（　）に入る語を答えなさい。\nMy mother は泳ぐことができます。\nMy mother （　）swim.",
    "answerType": "text",
    "correctAnswers": [
      "can"
    ],
    "explanation": "「〜できる」は助動詞 can で表します。can のあとの動詞は主語が何であっても原形のままです。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-can-027",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nYou can cook well.",
    "answerType": "text",
    "correctAnswers": [
      "You cannot cook well.",
      "You can't cook well."
    ],
    "explanation": "can の否定文は cannot（短縮形 can't）を使います。You cannot cook well. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-028",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nYou can speak English.",
    "answerType": "text",
    "correctAnswers": [
      "Can you speak English?"
    ],
    "explanation": "can の疑問文は、can を主語の前に出します。Can you speak English? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-029",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "can の語順"
    ],
    "question": "「Sheはおどることができます」を表す正しい英文を選びなさい。",
    "answerType": "choice",
    "choices": [
      "She can to dance.",
      "She cans dance.",
      "She can dance.",
      "She is can dance."
    ],
    "correctAnswers": [
      "She can dance."
    ],
    "explanation": "can は主語が三人称単数でも形が変わらず、あとの動詞は必ず原形になります。She can dance. が正しい形です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-can-030",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "can",
      "name": "can：～できる"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nI can dance.",
    "answerType": "text",
    "correctAnswers": [
      "I cannot dance.",
      "I can't dance."
    ],
    "explanation": "can の否定文は cannot（短縮形 can't）を使います。I cannot dance. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-preposition-001",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "前置詞の意味"
    ],
    "question": "次の（　）に入る語を、日本語の意味に合うように答えなさい。\nThe pen is （　）the chair. （〜の中に）",
    "answerType": "text",
    "correctAnswers": [
      "in"
    ],
    "explanation": "「〜の中に」は前置詞 in で表します。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-preposition-002",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "前置詞の意味"
    ],
    "question": "「〜の中に」という意味の前置詞を選びなさい。",
    "answerType": "choice",
    "choices": [
      "by",
      "at",
      "in",
      "on"
    ],
    "correctAnswers": [
      "in"
    ],
    "explanation": "「〜の中に」は英語で in です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-preposition-003",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "時を表す前置詞"
    ],
    "question": "次の（　）に入る前置詞を答えなさい。\nI get up （　）5 o'clock.",
    "answerType": "text",
    "correctAnswers": [
      "at"
    ],
    "explanation": "時刻の前には前置詞 at を使います。at 5 o'clock で「5時に」となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-preposition-004",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "時を表す前置詞"
    ],
    "question": "次の（　）に入る前置詞を答えなさい。\nI play tennis （　）Friday.",
    "answerType": "text",
    "correctAnswers": [
      "on"
    ],
    "explanation": "曜日の前には前置詞 on を使います。on Friday で「Fridayに」となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-preposition-005",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "前置詞の意味"
    ],
    "question": "次の（　）に入る語を、日本語の意味に合うように答えなさい。\nThe book is （　）the chair. （〜の地点・時刻に）",
    "answerType": "text",
    "correctAnswers": [
      "at"
    ],
    "explanation": "「〜の地点・時刻に」は前置詞 at で表します。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-preposition-006",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "前置詞の意味"
    ],
    "question": "「〜の下に」という意味の前置詞を選びなさい。",
    "answerType": "choice",
    "choices": [
      "in front of",
      "by",
      "on",
      "under"
    ],
    "correctAnswers": [
      "under"
    ],
    "explanation": "「〜の下に」は英語で under です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-preposition-007",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "時を表す前置詞"
    ],
    "question": "次の（　）に入る前置詞を答えなさい。\nI get up （　）2 o'clock.",
    "answerType": "text",
    "correctAnswers": [
      "at"
    ],
    "explanation": "時刻の前には前置詞 at を使います。at 2 o'clock で「2時に」となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-preposition-008",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "時を表す前置詞"
    ],
    "question": "次の（　）に入る前置詞を答えなさい。\nI play tennis （　）Saturday.",
    "answerType": "text",
    "correctAnswers": [
      "on"
    ],
    "explanation": "曜日の前には前置詞 on を使います。on Saturday で「Saturdayに」となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-preposition-009",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "前置詞の意味"
    ],
    "question": "次の（　）に入る語を、日本語の意味に合うように答えなさい。\nThe book is （　）the chair. （〜の前に）",
    "answerType": "text",
    "correctAnswers": [
      "in front of"
    ],
    "explanation": "「〜の前に」は前置詞 in front of で表します。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-preposition-010",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "時を表す前置詞"
    ],
    "question": "次の（　）に入る前置詞を答えなさい。\nI get up （　）1 o'clock.",
    "answerType": "text",
    "correctAnswers": [
      "at"
    ],
    "explanation": "時刻の前には前置詞 at を使います。at 1 o'clock で「1時に」となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-preposition-011",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "前置詞の意味"
    ],
    "question": "次の（　）に入る語を、日本語の意味に合うように答えなさい。\nThe book is （　）the table. （〜のそばに）",
    "answerType": "text",
    "correctAnswers": [
      "by"
    ],
    "explanation": "「〜のそばに」は前置詞 by で表します。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-preposition-012",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "時を表す前置詞"
    ],
    "question": "次の（　）に入る前置詞を答えなさい。\nI get up （　）3 o'clock.",
    "answerType": "text",
    "correctAnswers": [
      "at"
    ],
    "explanation": "時刻の前には前置詞 at を使います。at 3 o'clock で「3時に」となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-preposition-013",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "時を表す前置詞"
    ],
    "question": "次の（　）に入る前置詞を答えなさい。\nI play tennis （　）Thursday.",
    "answerType": "text",
    "correctAnswers": [
      "on"
    ],
    "explanation": "曜日の前には前置詞 on を使います。on Thursday で「Thursdayに」となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-preposition-014",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "前置詞の意味"
    ],
    "question": "次の（　）に入る語を、日本語の意味に合うように答えなさい。\nThe cat is （　）the box. （〜の前に）",
    "answerType": "text",
    "correctAnswers": [
      "in front of"
    ],
    "explanation": "「〜の前に」は前置詞 in front of で表します。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-preposition-015",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "前置詞の意味"
    ],
    "question": "「〜の上に」という意味の前置詞を選びなさい。",
    "answerType": "choice",
    "choices": [
      "under",
      "by",
      "in",
      "on"
    ],
    "correctAnswers": [
      "on"
    ],
    "explanation": "「〜の上に」は英語で on です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-preposition-016",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "時を表す前置詞"
    ],
    "question": "次の（　）に入る前置詞を答えなさい。\nI get up （　）12 o'clock.",
    "answerType": "text",
    "correctAnswers": [
      "at"
    ],
    "explanation": "時刻の前には前置詞 at を使います。at 12 o'clock で「12時に」となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-preposition-017",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "時を表す前置詞"
    ],
    "question": "次の（　）に入る前置詞を答えなさい。\nI play tennis （　）Monday.",
    "answerType": "text",
    "correctAnswers": [
      "on"
    ],
    "explanation": "曜日の前には前置詞 on を使います。on Monday で「Mondayに」となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-preposition-018",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "前置詞の意味"
    ],
    "question": "次の（　）に入る語を、日本語の意味に合うように答えなさい。\nThe pen is （　）the bed. （〜のそばに）",
    "answerType": "text",
    "correctAnswers": [
      "by"
    ],
    "explanation": "「〜のそばに」は前置詞 by で表します。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-preposition-019",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "前置詞の意味"
    ],
    "question": "「〜の地点・時刻に」という意味の前置詞を選びなさい。",
    "answerType": "choice",
    "choices": [
      "at",
      "in front of",
      "by",
      "on"
    ],
    "correctAnswers": [
      "at"
    ],
    "explanation": "「〜の地点・時刻に」は英語で at です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-preposition-020",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "時を表す前置詞"
    ],
    "question": "次の（　）に入る前置詞を答えなさい。\nI get up （　）11 o'clock.",
    "answerType": "text",
    "correctAnswers": [
      "at"
    ],
    "explanation": "時刻の前には前置詞 at を使います。at 11 o'clock で「11時に」となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-preposition-021",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "前置詞の意味"
    ],
    "question": "次の（　）に入る語を、日本語の意味に合うように答えなさい。\nThe cat is （　）the box. （〜の上に）",
    "answerType": "text",
    "correctAnswers": [
      "on"
    ],
    "explanation": "「〜の上に」は前置詞 on で表します。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-preposition-022",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "時を表す前置詞"
    ],
    "question": "次の（　）に入る前置詞を答えなさい。\nI play tennis （　）Sunday.",
    "answerType": "text",
    "correctAnswers": [
      "on"
    ],
    "explanation": "曜日の前には前置詞 on を使います。on Sunday で「Sundayに」となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-preposition-023",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "前置詞の意味"
    ],
    "question": "次の（　）に入る語を、日本語の意味に合うように答えなさい。\nThe book is （　）the station. （〜のそばに）",
    "answerType": "text",
    "correctAnswers": [
      "by"
    ],
    "explanation": "「〜のそばに」は前置詞 by で表します。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-preposition-024",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "前置詞の意味"
    ],
    "question": "「〜のそばに」という意味の前置詞を選びなさい。",
    "answerType": "choice",
    "choices": [
      "in",
      "by",
      "under",
      "in front of"
    ],
    "correctAnswers": [
      "by"
    ],
    "explanation": "「〜のそばに」は英語で by です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-preposition-025",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "時を表す前置詞"
    ],
    "question": "次の（　）に入る前置詞を答えなさい。\nI get up （　）7 o'clock.",
    "answerType": "text",
    "correctAnswers": [
      "at"
    ],
    "explanation": "時刻の前には前置詞 at を使います。at 7 o'clock で「7時に」となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-preposition-026",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "前置詞の意味"
    ],
    "question": "次の（　）に入る語を、日本語の意味に合うように答えなさい。\nThe ball is （　）the tree. （〜の地点・時刻に）",
    "answerType": "text",
    "correctAnswers": [
      "at"
    ],
    "explanation": "「〜の地点・時刻に」は前置詞 at で表します。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-preposition-027",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "時を表す前置詞"
    ],
    "question": "次の（　）に入る前置詞を答えなさい。\nI play tennis （　）Tuesday.",
    "answerType": "text",
    "correctAnswers": [
      "on"
    ],
    "explanation": "曜日の前には前置詞 on を使います。on Tuesday で「Tuesdayに」となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-preposition-028",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "前置詞の意味"
    ],
    "question": "「〜の前に」という意味の前置詞を選びなさい。",
    "answerType": "choice",
    "choices": [
      "by",
      "at",
      "in front of",
      "in"
    ],
    "correctAnswers": [
      "in front of"
    ],
    "explanation": "「〜の前に」は英語で in front of です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-preposition-029",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "前置詞の意味"
    ],
    "question": "次の（　）に入る語を、日本語の意味に合うように答えなさい。\nThe book is （　）the tree. （〜の中に）",
    "answerType": "text",
    "correctAnswers": [
      "in"
    ],
    "explanation": "「〜の中に」は前置詞 in で表します。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-preposition-030",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "preposition",
      "name": "前置詞"
    },
    "tags": [
      "前置詞の意味"
    ],
    "question": "次の（　）に入る語を、日本語の意味に合うように答えなさい。\nThe book is （　）the chair. （〜の上に）",
    "answerType": "text",
    "correctAnswers": [
      "on"
    ],
    "explanation": "「〜の上に」は前置詞 on で表します。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-general-001",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "過去形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nWe （go） to school yesterday.",
    "answerType": "text",
    "correctAnswers": [
      "went"
    ],
    "explanation": "yesterday があるので過去の文です。go の過去形は went です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-general-002",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nHe studied English.",
    "answerType": "text",
    "correctAnswers": [
      "He did not study English.",
      "He didn't study English."
    ],
    "explanation": "一般動詞の過去の否定文は、動詞の前に did not（didn't）を置き、動詞を原形に戻します。studied → study となるのがポイントです。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-general-003",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nShe went to school.",
    "answerType": "text",
    "correctAnswers": [
      "Did she go to school?"
    ],
    "explanation": "一般動詞の過去の疑問文は、文のはじめに Did を置き、動詞を原形に戻します。Did she go to school? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-general-004",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "過去形のつくり方"
    ],
    "question": "help の過去形として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "helped",
      "helpedz",
      "helpd",
      "helps"
    ],
    "correctAnswers": [
      "helped"
    ],
    "explanation": "help の過去形は helped です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-general-005",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "過去形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nThey （sleep） last Sunday.",
    "answerType": "text",
    "correctAnswers": [
      "slept"
    ],
    "explanation": "last Sunday があるので過去の文です。sleep の過去形は slept です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-general-006",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nThey talked to my friend.",
    "answerType": "text",
    "correctAnswers": [
      "They did not talk to my friend.",
      "They didn't talk to my friend."
    ],
    "explanation": "一般動詞の過去の否定文は、動詞の前に did not（didn't）を置き、動詞を原形に戻します。talked → talk となるのがポイントです。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-general-007",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nYou opened the door.",
    "answerType": "text",
    "correctAnswers": [
      "Did you open the door?"
    ],
    "explanation": "一般動詞の過去の疑問文は、文のはじめに Did を置き、動詞を原形に戻します。Did you open the door? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-general-008",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "過去形のつくり方"
    ],
    "question": "open の過去形として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "opens",
      "opened",
      "openedz",
      "opend"
    ],
    "correctAnswers": [
      "opened"
    ],
    "explanation": "open の過去形は opened です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-general-009",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "過去形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nWe （visit） Kyoto last week.",
    "answerType": "text",
    "correctAnswers": [
      "visited"
    ],
    "explanation": "last week があるので過去の文です。visit の過去形は visited です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-general-010",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nI drank water.",
    "answerType": "text",
    "correctAnswers": [
      "I did not drink water.",
      "I didn't drink water."
    ],
    "explanation": "一般動詞の過去の否定文は、動詞の前に did not（didn't）を置き、動詞を原形に戻します。drank → drink となるのがポイントです。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-general-011",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nYou asked a question.",
    "answerType": "text",
    "correctAnswers": [
      "Did you ask a question?"
    ],
    "explanation": "一般動詞の過去の疑問文は、文のはじめに Did を置き、動詞を原形に戻します。Did you ask a question? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-general-012",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "過去形のつくり方"
    ],
    "question": "go の過去形として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "goed",
      "goes",
      "god",
      "went"
    ],
    "correctAnswers": [
      "went"
    ],
    "explanation": "go の過去形は went です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-general-013",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "過去形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nShe （get） a present last Sunday.",
    "answerType": "text",
    "correctAnswers": [
      "got"
    ],
    "explanation": "last Sunday があるので過去の文です。get の過去形は got です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-general-014",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nWe made a cake.",
    "answerType": "text",
    "correctAnswers": [
      "We did not make a cake.",
      "We didn't make a cake."
    ],
    "explanation": "一般動詞の過去の否定文は、動詞の前に did not（didn't）を置き、動詞を原形に戻します。made → make となるのがポイントです。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-general-015",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nHe had a dog.",
    "answerType": "text",
    "correctAnswers": [
      "Did he have a dog?"
    ],
    "explanation": "一般動詞の過去の疑問文は、文のはじめに Did を置き、動詞を原形に戻します。Did he have a dog? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-general-016",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "過去形のつくり方"
    ],
    "question": "run の過去形として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "rund",
      "ran",
      "runed",
      "runs"
    ],
    "correctAnswers": [
      "ran"
    ],
    "explanation": "run の過去形は ran です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-general-017",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "過去形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nThey （love） music last night.",
    "answerType": "text",
    "correctAnswers": [
      "loved"
    ],
    "explanation": "last night があるので過去の文です。love の過去形は loved です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-general-018",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nWe studied English.",
    "answerType": "text",
    "correctAnswers": [
      "We did not study English.",
      "We didn't study English."
    ],
    "explanation": "一般動詞の過去の否定文は、動詞の前に did not（didn't）を置き、動詞を原形に戻します。studied → study となるのがポイントです。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-general-019",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nYou slept.",
    "answerType": "text",
    "correctAnswers": [
      "Did you sleep?"
    ],
    "explanation": "一般動詞の過去の疑問文は、文のはじめに Did を置き、動詞を原形に戻します。Did you sleep? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-general-020",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "過去形のつくり方"
    ],
    "question": "carry の過去形として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "carries",
      "carried",
      "carryed",
      "carryd"
    ],
    "correctAnswers": [
      "carried"
    ],
    "explanation": "carry の過去形は carried です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-general-021",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "過去形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nWe （want） a new bike yesterday.",
    "answerType": "text",
    "correctAnswers": [
      "wanted"
    ],
    "explanation": "yesterday があるので過去の文です。want の過去形は wanted です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-general-022",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nHe went to school.",
    "answerType": "text",
    "correctAnswers": [
      "He did not go to school.",
      "He didn't go to school."
    ],
    "explanation": "一般動詞の過去の否定文は、動詞の前に did not（didn't）を置き、動詞を原形に戻します。went → go となるのがポイントです。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-general-023",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nYou made a cake.",
    "answerType": "text",
    "correctAnswers": [
      "Did you make a cake?"
    ],
    "explanation": "一般動詞の過去の疑問文は、文のはじめに Did を置き、動詞を原形に戻します。Did you make a cake? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-general-024",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "過去形のつくり方"
    ],
    "question": "need の過去形として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "needd",
      "needs",
      "needed",
      "neededz"
    ],
    "correctAnswers": [
      "needed"
    ],
    "explanation": "need の過去形は needed です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-general-025",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "過去形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nShe （look） at the picture last Sunday.",
    "answerType": "text",
    "correctAnswers": [
      "looked"
    ],
    "explanation": "last Sunday があるので過去の文です。look の過去形は looked です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-general-026",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nI jumped.",
    "answerType": "text",
    "correctAnswers": [
      "I did not jump.",
      "I didn't jump."
    ],
    "explanation": "一般動詞の過去の否定文は、動詞の前に did not（didn't）を置き、動詞を原形に戻します。jumped → jump となるのがポイントです。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-general-027",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nThey took a picture.",
    "answerType": "text",
    "correctAnswers": [
      "Did they take a picture?"
    ],
    "explanation": "一般動詞の過去の疑問文は、文のはじめに Did を置き、動詞を原形に戻します。Did they take a picture? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-general-028",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "過去形のつくり方"
    ],
    "question": "see の過去形として正しいものを選びなさい。",
    "answerType": "choice",
    "choices": [
      "sees",
      "saw",
      "seed",
      "seeed"
    ],
    "correctAnswers": [
      "saw"
    ],
    "explanation": "see の過去形は saw です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-general-029",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "過去形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nThey （open） the door last Sunday.",
    "answerType": "text",
    "correctAnswers": [
      "opened"
    ],
    "explanation": "last Sunday があるので過去の文です。open の過去形は opened です。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-general-030",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-general",
      "name": "過去形（一般動詞）"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nWe walked.",
    "answerType": "text",
    "correctAnswers": [
      "We did not walk.",
      "We didn't walk."
    ],
    "explanation": "一般動詞の過去の否定文は、動詞の前に did not（didn't）を置き、動詞を原形に戻します。walked → walk となるのがポイントです。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-be-progressive-001",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "be動詞の過去形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nHe （　）free yesterday.",
    "answerType": "text",
    "correctAnswers": [
      "was"
    ],
    "explanation": "am と is の過去形は was です。主語が He（単数）なので was を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-be-progressive-002",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "be動詞の過去形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nYou （　）tired yesterday.",
    "answerType": "text",
    "correctAnswers": [
      "were"
    ],
    "explanation": "are の過去形は were です。主語が You（複数）なので were を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-be-progressive-003",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "過去進行形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nI was （open） the door then.",
    "answerType": "text",
    "correctAnswers": [
      "opening"
    ],
    "explanation": "過去進行形は「was/were + 動詞のing形」で「そのとき〜していました」を表します。open のing形は opening です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-be-progressive-004",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nWe were fast.",
    "answerType": "text",
    "correctAnswers": [
      "We were not fast.",
      "We weren't fast."
    ],
    "explanation": "be動詞の過去の否定文は、was/were のあとに not を置きます。We were not fast. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-be-progressive-005",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "be動詞の過去形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nKen （　）big yesterday.",
    "answerType": "text",
    "correctAnswers": [
      "was"
    ],
    "explanation": "am と is の過去形は was です。主語が Ken（単数）なので was を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-be-progressive-006",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "be動詞の過去形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWe （　）young yesterday.",
    "answerType": "text",
    "correctAnswers": [
      "were"
    ],
    "explanation": "are の過去形は were です。主語が We（複数）なので were を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-be-progressive-007",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "過去進行形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nWe were （talk） to my friend then.",
    "answerType": "text",
    "correctAnswers": [
      "talking"
    ],
    "explanation": "過去進行形は「was/were + 動詞のing形」で「そのとき〜していました」を表します。talk のing形は talking です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-be-progressive-008",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nShe was smart.",
    "answerType": "text",
    "correctAnswers": [
      "She was not smart.",
      "She wasn't smart."
    ],
    "explanation": "be動詞の過去の否定文は、was/were のあとに not を置きます。She was not smart. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-be-progressive-009",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "be動詞の過去形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nKen （　）beautiful yesterday.",
    "answerType": "text",
    "correctAnswers": [
      "was"
    ],
    "explanation": "am と is の過去形は was です。主語が Ken（単数）なので was を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-be-progressive-010",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "be動詞の過去形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWe （　）tired yesterday.",
    "answerType": "text",
    "correctAnswers": [
      "were"
    ],
    "explanation": "are の過去形は were です。主語が We（複数）なので were を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-be-progressive-011",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "過去進行形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nThey were （live） in Tokyo at that time.",
    "answerType": "text",
    "correctAnswers": [
      "living"
    ],
    "explanation": "過去進行形は「was/were + 動詞のing形」で「そのとき〜していました」を表します。live のing形は living です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-be-progressive-012",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nThey were beautiful.",
    "answerType": "text",
    "correctAnswers": [
      "They were not beautiful.",
      "They weren't beautiful."
    ],
    "explanation": "be動詞の過去の否定文は、was/were のあとに not を置きます。They were not beautiful. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-be-progressive-013",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "be動詞の過去形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nI （　）nice yesterday.",
    "answerType": "text",
    "correctAnswers": [
      "was"
    ],
    "explanation": "am と is の過去形は was です。主語が I（単数）なので was を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-be-progressive-014",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "be動詞の過去形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nThey （　）smart yesterday.",
    "answerType": "text",
    "correctAnswers": [
      "were"
    ],
    "explanation": "are の過去形は were です。主語が They（複数）なので were を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-be-progressive-015",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "過去進行形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nShe was （watch） TV at that time.",
    "answerType": "text",
    "correctAnswers": [
      "watching"
    ],
    "explanation": "過去進行形は「was/were + 動詞のing形」で「そのとき〜していました」を表します。watch のing形は watching です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-be-progressive-016",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nHe was free.",
    "answerType": "text",
    "correctAnswers": [
      "He was not free.",
      "He wasn't free."
    ],
    "explanation": "be動詞の過去の否定文は、was/were のあとに not を置きます。He was not free. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-be-progressive-017",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "be動詞の過去形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nShe （　）kind yesterday.",
    "answerType": "text",
    "correctAnswers": [
      "was"
    ],
    "explanation": "am と is の過去形は was です。主語が She（単数）なので was を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-be-progressive-018",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "be動詞の過去形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nYou （　）beautiful yesterday.",
    "answerType": "text",
    "correctAnswers": [
      "were"
    ],
    "explanation": "are の過去形は were です。主語が You（複数）なので were を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-be-progressive-019",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "過去進行形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nWe were （play） tennis at that time.",
    "answerType": "text",
    "correctAnswers": [
      "playing"
    ],
    "explanation": "過去進行形は「was/were + 動詞のing形」で「そのとき〜していました」を表します。play のing形は playing です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-be-progressive-020",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nHe was cute.",
    "answerType": "text",
    "correctAnswers": [
      "He was not cute.",
      "He wasn't cute."
    ],
    "explanation": "be動詞の過去の否定文は、was/were のあとに not を置きます。He was not cute. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-be-progressive-021",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "be動詞の過去形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nIt （　）wonderful yesterday.",
    "answerType": "text",
    "correctAnswers": [
      "was"
    ],
    "explanation": "am と is の過去形は was です。主語が It（単数）なので was を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-be-progressive-022",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "be動詞の過去形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nYou （　）hungry yesterday.",
    "answerType": "text",
    "correctAnswers": [
      "were"
    ],
    "explanation": "are の過去形は were です。主語が You（複数）なので were を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-be-progressive-023",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "過去進行形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nYou were （write） a letter at that time.",
    "answerType": "text",
    "correctAnswers": [
      "writing"
    ],
    "explanation": "過去進行形は「was/were + 動詞のing形」で「そのとき〜していました」を表します。write のing形は writing です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-be-progressive-024",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nWe were happy.",
    "answerType": "text",
    "correctAnswers": [
      "We were not happy.",
      "We weren't happy."
    ],
    "explanation": "be動詞の過去の否定文は、was/were のあとに not を置きます。We were not happy. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-be-progressive-025",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "be動詞の過去形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nI （　）wonderful yesterday.",
    "answerType": "text",
    "correctAnswers": [
      "was"
    ],
    "explanation": "am と is の過去形は was です。主語が I（単数）なので was を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-be-progressive-026",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "be動詞の過去形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nWe （　）free yesterday.",
    "answerType": "text",
    "correctAnswers": [
      "were"
    ],
    "explanation": "are の過去形は were です。主語が We（複数）なので were を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-be-progressive-027",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "過去進行形"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nThey were （go） to school at seven.",
    "answerType": "text",
    "correctAnswers": [
      "going"
    ],
    "explanation": "過去進行形は「was/were + 動詞のing形」で「そのとき〜していました」を表します。go のing形は going です。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-be-progressive-028",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nI was strong.",
    "answerType": "text",
    "correctAnswers": [
      "I was not strong.",
      "I wasn't strong."
    ],
    "explanation": "be動詞の過去の否定文は、was/were のあとに not を置きます。I was not strong. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-past-be-progressive-029",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "be動詞の過去形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nKen （　）hungry yesterday.",
    "answerType": "text",
    "correctAnswers": [
      "was"
    ],
    "explanation": "am と is の過去形は was です。主語が Ken（単数）なので was を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-past-be-progressive-030",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "past-be-progressive",
      "name": "過去形（be動詞）、過去進行形"
    },
    "tags": [
      "be動詞の過去形"
    ],
    "question": "次の（　）に入る語を答えなさい。\nYou （　）nice yesterday.",
    "answerType": "text",
    "correctAnswers": [
      "were"
    ],
    "explanation": "are の過去形は were です。主語が You（複数）なので were を使います。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-future-001",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "be going to"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nWe are going to （speak） English.",
    "answerType": "text",
    "correctAnswers": [
      "speak"
    ],
    "explanation": "be going to のあとの動詞は原形のままです。We are going to speak English. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-future-002",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "will"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nHe will （ask）you.",
    "answerType": "text",
    "correctAnswers": [
      "ask"
    ],
    "explanation": "will のあとの動詞は原形のままです。He will ask you. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-future-003",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nShe is going to give him a present.",
    "answerType": "text",
    "correctAnswers": [
      "Is she going to give him a present?"
    ],
    "explanation": "be going to の疑問文は、be動詞を主語の前に出します。Is she going to give him a present? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-future-004",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nShe will know him.",
    "answerType": "text",
    "correctAnswers": [
      "She will not know him.",
      "She won't know him."
    ],
    "explanation": "will の否定文は will not（短縮形 won't）を使います。She will not know him. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-future-005",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "be going to"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nThey are going to （speak） English.",
    "answerType": "text",
    "correctAnswers": [
      "speak"
    ],
    "explanation": "be going to のあとの動詞は原形のままです。They are going to speak English. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-future-006",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "will"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nI will （know）her.",
    "answerType": "text",
    "correctAnswers": [
      "know"
    ],
    "explanation": "will のあとの動詞は原形のままです。I will know her. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-future-007",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nHe is going to look at the picture.",
    "answerType": "text",
    "correctAnswers": [
      "Is he going to look at the picture?"
    ],
    "explanation": "be going to の疑問文は、be動詞を主語の前に出します。Is he going to look at the picture? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-future-008",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nYou will ask her.",
    "answerType": "text",
    "correctAnswers": [
      "You will not ask her.",
      "You won't ask her."
    ],
    "explanation": "will の否定文は will not（短縮形 won't）を使います。You will not ask her. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-future-009",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "be going to"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nWe are going to （talk） to my friend.",
    "answerType": "text",
    "correctAnswers": [
      "talk"
    ],
    "explanation": "be going to のあとの動詞は原形のままです。We are going to talk to my friend. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-future-010",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "will"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nShe will （know）her.",
    "answerType": "text",
    "correctAnswers": [
      "know"
    ],
    "explanation": "will のあとの動詞は原形のままです。She will know her. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-future-011",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nWe are going to ask a question.",
    "answerType": "text",
    "correctAnswers": [
      "Are we going to ask a question?"
    ],
    "explanation": "be going to の疑問文は、be動詞を主語の前に出します。Are we going to ask a question? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-future-012",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nShe will visit him.",
    "answerType": "text",
    "correctAnswers": [
      "She will not visit him.",
      "She won't visit him."
    ],
    "explanation": "will の否定文は will not（短縮形 won't）を使います。She will not visit him. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-future-013",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "be going to"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nYou are going to （take） a picture.",
    "answerType": "text",
    "correctAnswers": [
      "take"
    ],
    "explanation": "be going to のあとの動詞は原形のままです。You are going to take a picture. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-future-014",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "will"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nShe will （ask）him.",
    "answerType": "text",
    "correctAnswers": [
      "ask"
    ],
    "explanation": "will のあとの動詞は原形のままです。She will ask him. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-future-015",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nYou are going to drink water.",
    "answerType": "text",
    "correctAnswers": [
      "Are you going to drink water?"
    ],
    "explanation": "be going to の疑問文は、be動詞を主語の前に出します。Are you going to drink water? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-future-016",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nShe will know her.",
    "answerType": "text",
    "correctAnswers": [
      "She will not know her.",
      "She won't know her."
    ],
    "explanation": "will の否定文は will not（短縮形 won't）を使います。She will not know her. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-future-017",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "be going to"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nYou are going to （swim）.",
    "answerType": "text",
    "correctAnswers": [
      "swim"
    ],
    "explanation": "be going to のあとの動詞は原形のままです。You are going to swim. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-future-018",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "will"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nI will （see）him.",
    "answerType": "text",
    "correctAnswers": [
      "see"
    ],
    "explanation": "will のあとの動詞は原形のままです。I will see him. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-future-019",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nYou are going to visit Kyoto.",
    "answerType": "text",
    "correctAnswers": [
      "Are you going to visit Kyoto?"
    ],
    "explanation": "be going to の疑問文は、be動詞を主語の前に出します。Are you going to visit Kyoto? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-future-020",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nThey will see you.",
    "answerType": "text",
    "correctAnswers": [
      "They will not see you.",
      "They won't see you."
    ],
    "explanation": "will の否定文は will not（短縮形 won't）を使います。They will not see you. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-future-021",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "be going to"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nShe is going to （clean） my room.",
    "answerType": "text",
    "correctAnswers": [
      "clean"
    ],
    "explanation": "be going to のあとの動詞は原形のままです。She is going to clean my room. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-future-022",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "will"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nShe will （help）them.",
    "answerType": "text",
    "correctAnswers": [
      "help"
    ],
    "explanation": "will のあとの動詞は原形のままです。She will help them. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-future-023",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nWe are going to clean my room.",
    "answerType": "text",
    "correctAnswers": [
      "Are we going to clean my room?"
    ],
    "explanation": "be going to の疑問文は、be動詞を主語の前に出します。Are we going to clean my room? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-future-024",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "否定文"
    ],
    "question": "次の文を否定文に書きかえなさい。\nI will ask her.",
    "answerType": "text",
    "correctAnswers": [
      "I will not ask her.",
      "I won't ask her."
    ],
    "explanation": "will の否定文は will not（短縮形 won't）を使います。I will not ask her. となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-future-025",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "be going to"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nHe is going to （listen） to music.",
    "answerType": "text",
    "correctAnswers": [
      "listen"
    ],
    "explanation": "be going to のあとの動詞は原形のままです。He is going to listen to music. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-future-026",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "will"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nI will （ask）her.",
    "answerType": "text",
    "correctAnswers": [
      "ask"
    ],
    "explanation": "will のあとの動詞は原形のままです。I will ask her. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-future-027",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nWe are going to walk.",
    "answerType": "text",
    "correctAnswers": [
      "Are we going to walk?"
    ],
    "explanation": "be going to の疑問文は、be動詞を主語の前に出します。Are we going to walk? となります。",
    "difficulty": 2
  },
  {
    "id": "eng-g1-future-028",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "be going to"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nWe are going to （ask） a question.",
    "answerType": "text",
    "correctAnswers": [
      "ask"
    ],
    "explanation": "be going to のあとの動詞は原形のままです。We are going to ask a question. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-future-029",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "will"
    ],
    "question": "次の（　）内の語を正しい形にして答えなさい。\nI will （help）him.",
    "answerType": "text",
    "correctAnswers": [
      "help"
    ],
    "explanation": "will のあとの動詞は原形のままです。I will help him. となります。",
    "difficulty": 1
  },
  {
    "id": "eng-g1-future-030",
    "subject": "english",
    "grade": 1,
    "unit": {
      "id": "future",
      "name": "未来を表す文"
    },
    "tags": [
      "疑問文"
    ],
    "question": "次の文を疑問文に書きかえなさい。\nThey are going to sleep.",
    "answerType": "text",
    "correctAnswers": [
      "Are they going to sleep?"
    ],
    "explanation": "be going to の疑問文は、be動詞を主語の前に出します。Are they going to sleep? となります。",
    "difficulty": 2
  }
];
