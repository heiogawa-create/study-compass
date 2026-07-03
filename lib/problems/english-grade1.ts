import type { Problem } from "../types";

// 英語・中1（教科書準拠・定期テスト対策レベル）
// 単元: be動詞 / 一般動詞 / 疑問詞 / 複数形と代名詞
const UNIT_BE = { id: "be-verb", name: "be動詞" };
const UNIT_GENERAL = { id: "general-verb", name: "一般動詞" };
const UNIT_WH = { id: "wh-question", name: "疑問詞" };
const UNIT_PLURAL = { id: "plural-pronoun", name: "複数形と代名詞" };
const UNIT_PROGRESSIVE = { id: "progressive", name: "現在進行形" };
const UNIT_CAN = { id: "can", name: "can（助動詞）" };
const UNIT_PAST = { id: "past", name: "一般動詞の過去形" };

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
  {
    id: "eng-g1-be-004",
    subject: "english",
    grade: 1,
    unit: UNIT_BE,
    tags: ["疑問文"],
    question: "次の文を疑問文に書きかえなさい。\nYou are from Osaka.",
    answerType: "text",
    correctAnswers: ["Are you from Osaka?"],
    explanation:
      "be動詞の疑問文は、be動詞を主語の前に出します。Are you from Osaka?（あなたは大阪出身ですか）となります。文の最後は ? にするのを忘れずに。",
    difficulty: 1,
  },
  {
    id: "eng-g1-general-004",
    subject: "english",
    grade: 1,
    unit: UNIT_GENERAL,
    tags: ["三人称単数"],
    question:
      "次の（　）内の語を正しい形にして答えなさい。\nMy father（go）to work by train.",
    answerType: "text",
    correctAnswers: ["goes"],
    explanation:
      "主語の My father は三人称単数なので動詞に s をつけますが、go のように o で終わる語は es をつけて goes になります。（同じ仲間: watch → watches, teach → teaches）",
    difficulty: 2,
  },
  {
    id: "eng-g1-wh-003",
    subject: "english",
    grade: 1,
    unit: UNIT_WH,
    tags: ["疑問詞の選択"],
    question:
      "次の（　）に入る疑問詞を答えなさい。\n（　）do you play soccer? — In the park.",
    answerType: "text",
    correctAnswers: ["Where", "where"],
    explanation:
      "答えの文で In the park.（公園で）と場所を答えているので、「どこで」をたずねる疑問詞 Where を使います。Where do you play soccer?（あなたはどこでサッカーをしますか）となります。",
    difficulty: 1,
  },
  {
    id: "eng-g1-wh-004",
    subject: "english",
    grade: 1,
    unit: UNIT_WH,
    tags: ["疑問詞の選択", "数のたずね方"],
    question:
      "次の（　）に入る語を答えなさい。\n（　）many dogs do you have? — I have two.",
    answerType: "text",
    correctAnswers: ["How", "how"],
    explanation:
      "「いくつ」と数をたずねるときは How many + 名詞の複数形を使います。How many dogs do you have?（あなたは犬を何匹飼っていますか）となります。",
    difficulty: 1,
  },
  {
    id: "eng-g1-plural-003",
    subject: "english",
    grade: 1,
    unit: UNIT_PLURAL,
    tags: ["代名詞", "所有格"],
    question:
      "次の（　）内の語を正しい形にして答えなさい。\nThis is（I）bike.",
    answerType: "text",
    correctAnswers: ["my"],
    explanation:
      "名詞（bike）の前に置いて「〜の」を表すのは所有格です。I の所有格は my なので、This is my bike.（これは私の自転車です）となります。",
    difficulty: 1,
  },
  {
    id: "eng-g1-prog-001",
    subject: "english",
    grade: 1,
    unit: UNIT_PROGRESSIVE,
    tags: ["現在進行形の形"],
    question:
      "次の（　）内の語を正しい形にして答えなさい。\nTom is（study）English now.",
    answerType: "text",
    correctAnswers: ["studying"],
    explanation:
      "現在進行形は「be動詞 + 動詞のing形」で「〜しているところです」を表します。study はそのまま ing をつけて studying です。（y を i に変えるのは三単現の s のときだけなので注意）",
    difficulty: 1,
  },
  {
    id: "eng-g1-prog-002",
    subject: "english",
    grade: 1,
    unit: UNIT_PROGRESSIVE,
    tags: ["疑問文"],
    question: "次の文を疑問文に書きかえなさい。\nYou are watching TV.",
    answerType: "text",
    correctAnswers: ["Are you watching TV?"],
    explanation:
      "現在進行形の疑問文は、be動詞を主語の前に出します。Are you watching TV?（あなたはテレビを見ているところですか）となります。一般動詞の疑問文とちがい、Do は使いません。",
    difficulty: 2,
  },
  {
    id: "eng-g1-prog-003",
    subject: "english",
    grade: 1,
    unit: UNIT_PROGRESSIVE,
    tags: ["ing形のつくり方"],
    question: "run のing形を答えなさい。",
    answerType: "text",
    correctAnswers: ["running"],
    explanation:
      "run のように「短母音 + 子音字」で終わる語は、最後の文字を重ねて ing をつけます。run → running です。（同じ仲間: swim → swimming, sit → sitting）",
    difficulty: 2,
  },
  {
    id: "eng-g1-can-001",
    subject: "english",
    grade: 1,
    unit: UNIT_CAN,
    tags: ["疑問文"],
    question: "次の文を疑問文に書きかえなさい。\nKen can swim fast.",
    answerType: "text",
    correctAnswers: ["Can Ken swim fast?"],
    explanation:
      "can の疑問文は、can を主語の前に出します。Can Ken swim fast?（ケンは速く泳げますか）となります。主語が三人称単数でも動詞はそのまま（原形）です。",
    difficulty: 1,
  },
  {
    id: "eng-g1-can-002",
    subject: "english",
    grade: 1,
    unit: UNIT_CAN,
    tags: ["否定文"],
    question:
      "次の日本文に合うように、（　）に入る語を答えなさい。\n私はピアノをひくことができません。\nI（　）play the piano.",
    answerType: "text",
    correctAnswers: ["cannot", "can't", "can not"],
    explanation:
      "「〜できない」は cannot（短縮形 can't）で表します。I cannot play the piano. となります。cannot は1語で書くのがふつうです。",
    difficulty: 1,
  },
  {
    id: "eng-g1-past-001",
    subject: "english",
    grade: 1,
    unit: UNIT_PAST,
    tags: ["規則動詞"],
    question:
      "次の（　）内の語を正しい形にして答えなさい。\nI（play）tennis yesterday.",
    answerType: "text",
    correctAnswers: ["played"],
    explanation:
      "yesterday（昨日）があるので過去の文です。play は規則動詞なので ed をつけて played になります。過去形は主語が何でも形が変わりません。",
    difficulty: 1,
  },
  {
    id: "eng-g1-past-002",
    subject: "english",
    grade: 1,
    unit: UNIT_PAST,
    tags: ["不規則動詞"],
    question:
      "次の（　）内の語を正しい形にして答えなさい。\nShe（go）to Kyoto last week.",
    answerType: "text",
    correctAnswers: ["went"],
    explanation:
      "last week（先週）があるので過去の文です。go は不規則動詞で、過去形は went になります。不規則動詞は1つずつ覚えていきましょう。（例: come → came, see → saw）",
    difficulty: 2,
  },
  {
    id: "eng-g1-past-003",
    subject: "english",
    grade: 1,
    unit: UNIT_PAST,
    tags: ["否定文"],
    question: "次の文を否定文に書きかえなさい。\nI watched the movie.",
    answerType: "text",
    correctAnswers: ["I did not watch the movie.", "I didn't watch the movie."],
    explanation:
      "一般動詞の過去の否定文は、動詞の前に did not（didn't）を置き、動詞を原形に戻します。watched → watch となるのがポイントです。I did not watch the movie. となります。",
    difficulty: 2,
  },
];
