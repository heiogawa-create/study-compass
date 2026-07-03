import type { Problem } from "../types";

// 英語・中1（教科書準拠・定期テスト対策レベル）
// 単元: be動詞 / 一般動詞 / 疑問詞 / 複数形と代名詞
const UNIT_BE = { id: "be-verb", name: "be動詞" };
const UNIT_GENERAL = { id: "general-verb", name: "一般動詞" };
const UNIT_WH = { id: "wh-question", name: "疑問詞" };
const UNIT_PLURAL = { id: "plural-pronoun", name: "複数形と代名詞" };

export const englishGrade1: Problem[] = [
  {
    id: "eng-g1-be-001",
    subject: "english",
    grade: 1,
    unit: UNIT_BE,
    tags: ["be動詞の使い分け"],
    question:
      "次の（　）に入る語を答えなさい。\nI（　）a junior high school student.",
    answerType: "text",
    correctAnswers: ["am"],
    explanation:
      "be動詞は主語によって使い分けます。主語が I のときは am を使います。I am a junior high school student.（私は中学生です）となります。",
    difficulty: 1,
  },
  {
    id: "eng-g1-be-002",
    subject: "english",
    grade: 1,
    unit: UNIT_BE,
    tags: ["be動詞の使い分け"],
    question:
      "次の（　）に入る語を答えなさい。\nKen and Yumi（　）in the library now.",
    answerType: "text",
    correctAnswers: ["are"],
    explanation:
      "主語の Ken and Yumi は2人なので複数です。複数の主語には are を使います。Ken and Yumi are in the library now.（ケンとユミは今、図書館にいます）となります。",
    difficulty: 1,
  },
  {
    id: "eng-g1-be-003",
    subject: "english",
    grade: 1,
    unit: UNIT_BE,
    tags: ["否定文"],
    question:
      "次の文を否定文に書きかえなさい。\nThis is my notebook.",
    answerType: "text",
    correctAnswers: ["This is not my notebook.", "This isn't my notebook."],
    explanation:
      "be動詞の否定文は、be動詞のあとに not を置きます。This is not my notebook.（これは私のノートではありません）となります。is not は isn't と短縮できます。",
    difficulty: 1,
  },
  {
    id: "eng-g1-general-001",
    subject: "english",
    grade: 1,
    unit: UNIT_GENERAL,
    tags: ["三人称単数"],
    question:
      "次の（　）に入る語を、（　）内の語を正しい形にして答えなさい。\nMy sister（play）tennis every Sunday.",
    answerType: "text",
    correctAnswers: ["plays"],
    explanation:
      "主語の My sister は三人称単数（I と you 以外の1人）なので、一般動詞に s をつけます。play → plays となります。",
    difficulty: 1,
  },
  {
    id: "eng-g1-general-002",
    subject: "english",
    grade: 1,
    unit: UNIT_GENERAL,
    tags: ["疑問文"],
    question:
      "次の文を疑問文に書きかえなさい。\nYou like music.",
    answerType: "text",
    correctAnswers: ["Do you like music?"],
    explanation:
      "一般動詞の疑問文は、文のはじめに Do を置きます。Do you like music?（あなたは音楽が好きですか）となります。be動詞の疑問文との区別がポイントです。",
    difficulty: 1,
  },
  {
    id: "eng-g1-general-003",
    subject: "english",
    grade: 1,
    unit: UNIT_GENERAL,
    tags: ["否定文", "三人称単数"],
    question:
      "次の文を否定文に書きかえなさい。\nTom watches TV after dinner.",
    answerType: "text",
    correctAnswers: [
      "Tom does not watch TV after dinner.",
      "Tom doesn't watch TV after dinner.",
    ],
    explanation:
      "主語が三人称単数の一般動詞の否定文は、動詞の前に does not（doesn't）を置き、動詞は元の形（原形）に戻します。watches → watch となるのがポイントです。",
    difficulty: 2,
  },
  {
    id: "eng-g1-wh-001",
    subject: "english",
    grade: 1,
    unit: UNIT_WH,
    tags: ["疑問詞の選択"],
    question:
      "次の（　）に入る疑問詞を答えなさい。\n（　）do you eat for breakfast? — I eat rice and miso soup.",
    answerType: "text",
    correctAnswers: ["What", "what"],
    explanation:
      "答えの文で「何を食べるか」を答えているので、「何」をたずねる疑問詞 What を使います。What do you eat for breakfast?（朝食に何を食べますか）となります。",
    difficulty: 1,
  },
  {
    id: "eng-g1-wh-002",
    subject: "english",
    grade: 1,
    unit: UNIT_WH,
    tags: ["疑問詞の選択"],
    question:
      "次の（　）に入る疑問詞を答えなさい。\n（　）is your birthday? — It's May 5th.",
    answerType: "text",
    correctAnswers: ["When", "when"],
    explanation:
      "答えの文で「5月5日」と時をこたえているので、「いつ」をたずねる疑問詞 When を使います。When is your birthday?（あなたの誕生日はいつですか）となります。",
    difficulty: 1,
  },
  {
    id: "eng-g1-plural-001",
    subject: "english",
    grade: 1,
    unit: UNIT_PLURAL,
    tags: ["複数形"],
    question:
      "次の語を複数形にしなさい。\ncity",
    answerType: "text",
    correctAnswers: ["cities"],
    explanation:
      "「子音字 + y」で終わる語は、y を i に変えて es をつけます。city → cities となります。（例: country → countries）",
    difficulty: 2,
  },
  {
    id: "eng-g1-plural-002",
    subject: "english",
    grade: 1,
    unit: UNIT_PLURAL,
    tags: ["代名詞"],
    question:
      "次の（　）に入る代名詞を答えなさい。\nThat is Mr. Tanaka. Do you know（　）?",
    answerType: "text",
    correctAnswers: ["him"],
    explanation:
      "動詞 know のあとに置く「〜を」の形（目的格）を使います。Mr. Tanaka は男性1人なので he の目的格 him が入ります。Do you know him?（あなたは彼を知っていますか）となります。",
    difficulty: 2,
  },
];
