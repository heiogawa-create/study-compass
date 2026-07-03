import type { Problem } from "../types";

// 社会・中1（教科書準拠・定期テスト対策レベル）
// 単元: 世界の姿（地理） / 世界の気候と暮らし（地理） / 歴史のはじまり / 古代国家の歩み
const UNIT_SEKAI = { id: "sekai", name: "世界の姿" };
const UNIT_KIKOU = { id: "kikou", name: "世界の気候と暮らし" };
const UNIT_GENSHI = { id: "genshi", name: "歴史のはじまり" };
const UNIT_KODAI = { id: "kodai", name: "古代国家の歩み" };

export const socialGrade1: Problem[] = [
  {
    id: "soc-g1-sekai-001",
    subject: "social",
    grade: 1,
    unit: UNIT_SEKAI,
    tags: ["六大陸"],
    question: "世界の六大陸のうち、最も面積が大きい大陸は何ですか。",
    answerType: "text",
    correctAnswers: ["ユーラシア大陸", "ユーラシア"],
    explanation:
      "最大の大陸はユーラシア大陸で、アジアとヨーロッパを合わせた大陸です。六大陸は、ユーラシア・アフリカ・北アメリカ・南アメリカ・オーストラリア・南極の6つです。",
    difficulty: 1,
  },
  {
    id: "soc-g1-sekai-002",
    subject: "social",
    grade: 1,
    unit: UNIT_SEKAI,
    tags: ["三大洋"],
    question: "三大洋のうち、最も面積が大きい海洋を選びなさい。",
    answerType: "choice",
    choices: ["太平洋", "大西洋", "インド洋", "北極海"],
    correctAnswers: ["太平洋"],
    explanation:
      "最大の海洋は太平洋です。三大洋は大きい順に、太平洋・大西洋・インド洋です。「太」平洋と「大」西洋で漢字が違うことにも注意しましょう。",
    difficulty: 1,
  },
  {
    id: "soc-g1-sekai-003",
    subject: "social",
    grade: 1,
    unit: UNIT_SEKAI,
    tags: ["緯度と経度"],
    question:
      "経度0度の線を何といいますか。（イギリスのロンドン郊外の旧グリニッジ天文台を通る線）",
    answerType: "text",
    correctAnswers: ["本初子午線", "ほんしょしごせん"],
    explanation:
      "経度0度の線を「本初子午線」といい、ここを基準に東経・西経を180度ずつに分けます。緯度0度の線が「赤道」であることとセットで覚えましょう。",
    difficulty: 1,
  },
  {
    id: "soc-g1-sekai-004",
    subject: "social",
    grade: 1,
    unit: UNIT_SEKAI,
    tags: ["時差", "計算"],
    question: "経度が15度ちがうと、時差は何時間生じますか。（数字だけでよい）",
    answerType: "text",
    correctAnswers: ["1", "1時間"],
    explanation:
      "地球は24時間で1回転（360度）するので、360 ÷ 24 = 15。つまり経度15度ごとに1時間の時差が生じます。時差の計算問題はすべてこの「15度=1時間」が出発点になります。",
    difficulty: 2,
  },
  {
    id: "soc-g1-sekai-005",
    subject: "social",
    grade: 1,
    unit: UNIT_SEKAI,
    tags: ["世界の国々"],
    question: "世界で最も面積が大きい国はどこですか。",
    answerType: "text",
    correctAnswers: ["ロシア", "ロシア連邦"],
    explanation:
      "世界最大の面積をもつ国はロシア（ロシア連邦）で、日本の約45倍の広さがあります。2位以下はカナダ、アメリカ、中国と続きます。",
    difficulty: 1,
  },
  {
    id: "soc-g1-kikou-001",
    subject: "social",
    grade: 1,
    unit: UNIT_KIKOU,
    tags: ["気候帯"],
    question:
      "赤道付近に広がる、一年中気温が高く雨の多い気候帯を何といいますか。",
    answerType: "text",
    correctAnswers: ["熱帯", "ねったい"],
    explanation:
      "赤道付近の一年中高温で雨が多い気候帯は「熱帯」です。世界の気候帯は、赤道から極に向かって、熱帯・乾燥帯・温帯・冷帯（亜寒帯）・寒帯の順に分布します。",
    difficulty: 1,
  },
  {
    id: "soc-g1-kikou-002",
    subject: "social",
    grade: 1,
    unit: UNIT_KIKOU,
    tags: ["暮らしと住居"],
    question:
      "乾燥帯の地域で多く見られる、伝統的な家の材料として正しいものを選びなさい。",
    answerType: "choice",
    choices: [
      "日干しれんが",
      "木材と紙",
      "氷や雪のブロック",
      "高床式の木の柱",
    ],
    correctAnswers: ["日干しれんが"],
    explanation:
      "乾燥帯は木がほとんど育たないため、土をこねて天日で乾かした「日干しれんが」の家が多く見られます。気候と手に入る材料が、その土地の住居のかたちを決めるという見方が大切です。",
    difficulty: 2,
  },
  {
    id: "soc-g1-kikou-003",
    subject: "social",
    grade: 1,
    unit: UNIT_KIKOU,
    tags: ["宗教と暮らし"],
    question:
      "豚肉を食べない、1日5回の礼拝を行うなどのきまりがある宗教は何ですか。",
    answerType: "text",
    correctAnswers: ["イスラム教", "イスラーム教", "イスラム"],
    explanation:
      "イスラム教では、豚肉を食べない、1日5回聖地メッカに向かって礼拝する、などのきまりがあります。世界の三大宗教（キリスト教・イスラム教・仏教）は、それぞれの暮らしへの影響とセットで覚えましょう。",
    difficulty: 1,
  },
  {
    id: "soc-g1-kikou-004",
    subject: "social",
    grade: 1,
    unit: UNIT_KIKOU,
    tags: ["暮らしと住居"],
    question:
      "モンゴルの草原で、遊牧民が使う組み立て式の移動できる住居を何といいますか。",
    answerType: "text",
    correctAnswers: ["ゲル"],
    explanation:
      "モンゴルの遊牧民は、家畜とともに移動する暮らしに合わせて、「ゲル」という組み立て式の住居を使います。羊毛のフェルトでできていて、分解して運べるのが特徴です。",
    difficulty: 1,
  },
  {
    id: "soc-g1-genshi-001",
    subject: "social",
    grade: 1,
    unit: UNIT_GENSHI,
    tags: ["縄文時代"],
    question:
      "縄文時代の人々が住んだ、地面を掘り下げて柱を立て屋根をかけた住居を何といいますか。",
    answerType: "text",
    correctAnswers: ["竪穴住居", "たて穴住居", "たてあな住居", "竪穴式住居"],
    explanation:
      "縄文時代の人々は「竪穴住居（たてあなじゅうきょ）」に住み、狩りや採集の暮らしをしていました。縄文土器・貝塚・土偶なども、縄文時代のキーワードとしてセットで覚えましょう。",
    difficulty: 1,
  },
  {
    id: "soc-g1-genshi-002",
    subject: "social",
    grade: 1,
    unit: UNIT_GENSHI,
    tags: ["弥生時代"],
    question:
      "弥生時代に稲作とともに大陸から伝わった金属器のうち、おもに祭りの道具として使われたものは何ですか。",
    answerType: "text",
    correctAnswers: ["青銅器", "せいどうき"],
    explanation:
      "弥生時代には稲作とともに金属器が伝わり、青銅器（銅鐸・銅剣など）はおもに祭りの宝物として、鉄器は武器や工具など実用の道具として使われました。用途のちがいがテストで問われやすいポイントです。",
    difficulty: 2,
  },
  {
    id: "soc-g1-genshi-003",
    subject: "social",
    grade: 1,
    unit: UNIT_GENSHI,
    tags: ["邪馬台国"],
    question:
      "3世紀ごろ、倭の邪馬台国を治めていたとされる女王はだれですか。",
    answerType: "text",
    correctAnswers: ["卑弥呼", "ひみこ"],
    explanation:
      "邪馬台国の女王は卑弥呼（ひみこ）です。中国の歴史書「魏志倭人伝」に、卑弥呼が魏に使いを送り「親魏倭王」の称号と金印を授けられたと記されています。",
    difficulty: 1,
  },
  {
    id: "soc-g1-genshi-004",
    subject: "social",
    grade: 1,
    unit: UNIT_GENSHI,
    tags: ["世界の古代文明"],
    question: "ナイル川の流域でおこった古代文明を選びなさい。",
    answerType: "choice",
    choices: ["エジプト文明", "メソポタミア文明", "インダス文明", "中国文明"],
    correctAnswers: ["エジプト文明"],
    explanation:
      "ナイル川流域でおこったのはエジプト文明で、ピラミッドや象形文字で知られます。四大文明は「大きな川のほとり」でおこったのが共通点です（メソポタミア=チグリス・ユーフラテス川、インダス=インダス川、中国=黄河・長江）。",
    difficulty: 1,
  },
  {
    id: "soc-g1-kodai-001",
    subject: "social",
    grade: 1,
    unit: UNIT_KODAI,
    tags: ["古墳時代"],
    question:
      "大阪府にある日本最大の古墳「大仙古墳」に代表される、古墳の形を何といいますか。",
    answerType: "text",
    correctAnswers: ["前方後円墳", "ぜんぽうこうえんふん"],
    explanation:
      "大仙古墳は「前方後円墳」という、円形と方形（四角形）を組み合わせたかぎ穴のような形の古墳です。巨大な古墳をつくれたことは、大和政権の王（大王）の強い力を示しています。",
    difficulty: 1,
  },
  {
    id: "soc-g1-kodai-002",
    subject: "social",
    grade: 1,
    unit: UNIT_KODAI,
    tags: ["飛鳥時代"],
    question:
      "聖徳太子（厩戸皇子）が定めた、役人の心構えを示した法を何といいますか。",
    answerType: "text",
    correctAnswers: ["十七条の憲法", "十七条憲法", "17条の憲法"],
    explanation:
      "聖徳太子は「十七条の憲法」で役人の心構えを示しました。あわせて、家柄によらず能力で役人を取り立てる「冠位十二階」も定めています。2つの政策の目的のちがいを区別して覚えましょう。",
    difficulty: 1,
  },
  {
    id: "soc-g1-kodai-003",
    subject: "social",
    grade: 1,
    unit: UNIT_KODAI,
    tags: ["大化の改新"],
    question:
      "645年、中大兄皇子と中臣鎌足が蘇我氏をたおして始めた政治の改革を何といいますか。",
    answerType: "text",
    correctAnswers: ["大化の改新", "たいかのかいしん"],
    explanation:
      "645年に中大兄皇子（のちの天智天皇）と中臣鎌足が蘇我氏をたおして始めた改革を「大化の改新」といいます。土地と人民を国家が直接治める「公地公民」をめざしたことがポイントです。",
    difficulty: 1,
  },
  {
    id: "soc-g1-kodai-004",
    subject: "social",
    grade: 1,
    unit: UNIT_KODAI,
    tags: ["奈良時代"],
    question:
      "743年に出された、新しく開墾した土地をいつまでも自分のものにしてよいと認めた法令を何といいますか。",
    answerType: "text",
    correctAnswers: ["墾田永年私財法", "こんでんえいねんしざいほう"],
    explanation:
      "「墾田永年私財法」により、開墾した土地の永久私有が認められました。これによって公地公民の原則がくずれ、貴族や寺社の私有地（のちの荘園）が広がるきっかけになりました。",
    difficulty: 2,
  },
  {
    id: "soc-g1-kodai-005",
    subject: "social",
    grade: 1,
    unit: UNIT_KODAI,
    tags: ["平安時代"],
    question: "平安時代に紫式部が書いた長編物語を選びなさい。",
    answerType: "choice",
    choices: ["源氏物語", "枕草子", "古今和歌集", "万葉集"],
    correctAnswers: ["源氏物語"],
    explanation:
      "紫式部が書いたのは「源氏物語」です。同じ時代の清少納言の随筆「枕草子」とセットで問われやすいので、「紫式部=源氏物語」「清少納言=枕草子」と対で覚えましょう。かな文字の発達が国風文化の背景にあります。",
    difficulty: 1,
  },
];
