import type { Problem } from "../types";

// 国語・中1（教科書準拠・定期テスト対策レベル）
// 単元: 漢字 / 語句と語彙 / 文法（言葉のきまり） / 古典入門
const UNIT_KANJI = { id: "kanji", name: "漢字" };
const UNIT_GOKU = { id: "goku", name: "語句と語彙" };
const UNIT_BUNPOU = { id: "bunpou", name: "文法（言葉のきまり）" };
const UNIT_KOTEN = { id: "koten", name: "古典入門" };

export const japaneseGrade1: Problem[] = [
  {
    id: "jpn-g1-kanji-001",
    subject: "japanese",
    grade: 1,
    unit: UNIT_KANJI,
    tags: ["読み"],
    question: "次の——線部の漢字の読みをひらがなで答えなさい。\n成長が「著しい」。",
    answerType: "text",
    correctAnswers: ["いちじるしい"],
    explanation:
      "「著しい」は「いちじるしい」と読み、「はっきりわかるほど目立っている」という意味です。「著者（ちょしゃ)」の「著」と同じ字ですが、訓読みでは読み方が変わります。",
    difficulty: 2,
  },
  {
    id: "jpn-g1-kanji-002",
    subject: "japanese",
    grade: 1,
    unit: UNIT_KANJI,
    tags: ["読み"],
    question: "次の——線部の漢字の読みをひらがなで答えなさい。\n雨で大地が「潤う」。",
    answerType: "text",
    correctAnswers: ["うるおう"],
    explanation:
      "「潤う」は「うるおう」と読み、「水分をふくむ・ゆたかになる」という意味です。さんずい（水に関係する部首）がついていることからも、水に関わる意味だと推測できます。",
    difficulty: 2,
  },
  {
    id: "jpn-g1-kanji-003",
    subject: "japanese",
    grade: 1,
    unit: UNIT_KANJI,
    tags: ["書き"],
    question: "次の——線部のカタカナを漢字で書きなさい。\n「ケイカイ」な音楽が流れる。",
    answerType: "text",
    correctAnswers: ["軽快"],
    explanation:
      "「軽快（けいかい）」は「軽やかで気持ちがよいようす」という意味です。「軽い」＋「快い（こころよい）」という漢字の組み合わせから意味を考えると覚えやすいです。",
    difficulty: 2,
  },
  {
    id: "jpn-g1-kanji-004",
    subject: "japanese",
    grade: 1,
    unit: UNIT_KANJI,
    tags: ["部首"],
    question: "「花」という漢字の部首名を選びなさい。",
    answerType: "choice",
    choices: ["くさかんむり", "うかんむり", "たけかんむり", "あめかんむり"],
    correctAnswers: ["くさかんむり"],
    explanation:
      "「花」の上の部分「艹」は「くさかんむり」で、植物に関係する漢字につきます。（例: 草、葉、茶）部首がわかると、漢字の意味のなかまが見えてきます。",
    difficulty: 1,
  },
  {
    id: "jpn-g1-goku-001",
    subject: "japanese",
    grade: 1,
    unit: UNIT_GOKU,
    tags: ["熟語の構成"],
    question: "「読書」という熟語の成り立ちとして正しいものを選びなさい。",
    answerType: "choice",
    choices: [
      "下の字が上の字の目的や対象になっている（「書を読む」）",
      "似た意味の字を重ねている",
      "反対の意味の字を重ねている",
      "上の字が下の字を修飾している",
    ],
    correctAnswers: ["下の字が上の字の目的や対象になっている（「書を読む」）"],
    explanation:
      "「読書」は「書を読む」と、下から上に返して読める熟語です。このように下の字が「〜を」「〜に」にあたる構成の熟語には、ほかに「登山（山に登る）」「作文（文を作る）」などがあります。",
    difficulty: 2,
  },
  {
    id: "jpn-g1-goku-002",
    subject: "japanese",
    grade: 1,
    unit: UNIT_GOKU,
    tags: ["対義語"],
    question: "「拡大」の対義語を漢字で答えなさい。",
    answerType: "text",
    correctAnswers: ["縮小"],
    explanation:
      "「拡大」は「広げて大きくすること」、その反対は「縮小（ちぢめて小さくすること）」です。対義語は「拡⇔縮」「大⇔小」のように、字ごとの対応で覚えると整理しやすいです。",
    difficulty: 1,
  },
  {
    id: "jpn-g1-goku-003",
    subject: "japanese",
    grade: 1,
    unit: UNIT_GOKU,
    tags: ["類義語"],
    question: "「手段」の類義語として最も適切なものを選びなさい。",
    answerType: "choice",
    choices: ["方法", "目的", "結果", "理由"],
    correctAnswers: ["方法"],
    explanation:
      "「手段」も「方法」も「何かを実現するためのやり方」という意味で、置きかえられる場面が多い類義語です。「目的」は「めざすこと」なので、手段とはむしろ対になる言葉です。",
    difficulty: 1,
  },
  {
    id: "jpn-g1-goku-004",
    subject: "japanese",
    grade: 1,
    unit: UNIT_GOKU,
    tags: ["慣用句"],
    question:
      "「誇らしい気持ちになる」という意味の慣用句「（　）が高い」の（　）に入る体の部分を答えなさい。",
    answerType: "text",
    correctAnswers: ["鼻", "はな"],
    explanation:
      "「鼻が高い」は「自慢に思う・誇らしい」という意味の慣用句です。体の部分を使った慣用句はほかに「耳が痛い（聞くのがつらい）」「顔が広い（知り合いが多い）」などがあります。",
    difficulty: 1,
  },
  {
    id: "jpn-g1-bunpou-001",
    subject: "japanese",
    grade: 1,
    unit: UNIT_BUNPOU,
    tags: ["文節"],
    question:
      "次の文はいくつの文節に分けられますか。数字で答えなさい。\n私は昨日友達と公園で遊んだ。",
    answerType: "text",
    correctAnswers: ["5", "5つ", "五"],
    explanation:
      "文節は「ネ」を入れて自然に区切れるまとまりです。「私は（ネ）／昨日（ネ）／友達と（ネ）／公園で（ネ）／遊んだ」で5文節になります。",
    difficulty: 2,
  },
  {
    id: "jpn-g1-bunpou-002",
    subject: "japanese",
    grade: 1,
    unit: UNIT_BUNPOU,
    tags: ["主語・述語"],
    question:
      "次の文の主語を、文節で抜き出して答えなさい。\n庭に咲いた花がとてもきれいだ。",
    answerType: "text",
    correctAnswers: ["花が"],
    explanation:
      "主語は「何が（誰が）」にあたる文節です。「きれいだ」（述語）なのは何かと考えると、「花が」が主語だとわかります。「庭に」「咲いた」は花を説明している部分です。",
    difficulty: 2,
  },
  {
    id: "jpn-g1-bunpou-003",
    subject: "japanese",
    grade: 1,
    unit: UNIT_BUNPOU,
    tags: ["品詞"],
    question: "「静かだ」の品詞を選びなさい。",
    answerType: "choice",
    choices: ["形容動詞", "形容詞", "動詞", "副詞"],
    correctAnswers: ["形容動詞"],
    explanation:
      "「静かだ」は言い切りの形が「〜だ」で終わる形容動詞です。形容詞は「美しい」のように「〜い」で終わります。言い切りの形（終止形）で見分けるのがコツです。",
    difficulty: 2,
  },
  {
    id: "jpn-g1-bunpou-004",
    subject: "japanese",
    grade: 1,
    unit: UNIT_BUNPOU,
    tags: ["修飾語"],
    question:
      "次の文で、「走る」をくわしくしている（修飾している）文節を抜き出して答えなさい。\n白い犬が元気に走る。",
    answerType: "text",
    correctAnswers: ["元気に"],
    explanation:
      "「どのように走るのか」を説明しているのは「元気に」です。「白い」は「犬」を修飾しています。修飾語は「どの文節をくわしくしているか」をつなげて読んで確かめましょう。",
    difficulty: 2,
  },
  {
    id: "jpn-g1-bunpou-005",
    subject: "japanese",
    grade: 1,
    unit: UNIT_BUNPOU,
    tags: ["主語・述語"],
    question:
      "次の文の述語を、文節で抜き出して答えなさい。\n弟は中学生だ。",
    answerType: "text",
    correctAnswers: ["中学生だ"],
    explanation:
      "述語は「どうする・どんなだ・何だ」にあたる文節で、ふつう文の終わりにあります。この文では「何だ」にあたる「中学生だ」が述語です。",
    difficulty: 1,
  },
  {
    id: "jpn-g1-koten-001",
    subject: "japanese",
    grade: 1,
    unit: UNIT_KOTEN,
    tags: ["歴史的仮名遣い"],
    question:
      "次の歴史的仮名遣いを現代仮名遣いに直し、ひらがなで答えなさい。\nいふ",
    answerType: "text",
    correctAnswers: ["いう"],
    explanation:
      "語中・語尾の「は・ひ・ふ・へ・ほ」は「わ・い・う・え・お」に直します。「いふ」→「いう」です。（例:「あはれ」→「あわれ」、「思ふ」→「思う」）",
    difficulty: 1,
  },
  {
    id: "jpn-g1-koten-002",
    subject: "japanese",
    grade: 1,
    unit: UNIT_KOTEN,
    tags: ["歴史的仮名遣い"],
    question:
      "次の歴史的仮名遣いを現代仮名遣いに直し、ひらがなで答えなさい。\nをかし",
    answerType: "text",
    correctAnswers: ["おかし"],
    explanation:
      "「を」は助詞以外では「お」に直します。「をかし」→「おかし」です。古文の「をかし」は「趣がある・興味深い」という意味の重要語です。",
    difficulty: 1,
  },
  {
    id: "jpn-g1-koten-003",
    subject: "japanese",
    grade: 1,
    unit: UNIT_KOTEN,
    tags: ["古文の言葉"],
    question:
      "「竹取物語」の冒頭「今は昔、竹取の翁といふものありけり」の「翁」の意味を選びなさい。",
    answerType: "choice",
    choices: ["おじいさん", "おばあさん", "若者", "子ども"],
    correctAnswers: ["おじいさん"],
    explanation:
      "「翁（おきな）」は「年をとった男の人・おじいさん」という意味です。「竹取物語」は日本で最も古い物語といわれ、竹取の翁がかぐや姫を見つける場面から始まります。",
    difficulty: 1,
  },
];
