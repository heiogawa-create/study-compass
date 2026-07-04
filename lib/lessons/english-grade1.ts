import { registerLessons } from "../lessons";

// 中1英語・単元ごとの導入レッスン（問題を解く前に読む簡単な解説）。
registerLessons("english", {
  "be-am-are": `be動詞（am・is・are）は「〜です」を表す言葉だよ。主語によって使う形が決まっているのがポイント。\n\n・I（わたしは）→ am\n・You（あなたは）→ are\n\n例）I am Yuki.（わたしはユキです）\n例）You are kind.（あなたは親切です）\n\n主語がIかYouかで、amかareかが決まるんだね。`,
  "be-this-he": `「これは〜です」「彼は〜です」というときも、be動詞を使うよ。今回はThis・That・He・She・Itが主語のときの形を覚えよう。\n\n・This / That / He / She / It → is\n\n例）This is my bag.（これはわたしのかばんです）\n例）He is a teacher.（彼は先生です）\n\nIやYou以外の「1人・1つ」の主語には is を使うんだ。`,
  "datetime-weather": `日づけ・曜日・天気をたずねたり答えたりするときは、主語に特別な意味のない it を使うよ。\n\n例）What day is it today? — It's Monday.（今日は何曜日？－月曜日だよ）\n例）How is the weather? — It's sunny.（天気はどう？－晴れだよ）\n\nこの it は「それ」と訳さなくていいんだ。天気・曜日・時刻・日付を話すときの決まりごとだよ。`,
  "general-verb": `一般動詞は、be動詞（am・is・are）以外の「〜する」という動作を表す動詞だよ。likeやplay、haveなどがなかまだね。\n\n例）I play soccer.（わたしはサッカーをします）\n\n否定文は動詞の前に don't を、疑問文は文のはじめに Do を置くよ。\n例）I don't play soccer. / Do you play soccer?`,
  "articles-plural": `名詞（人やものの名前）の前につける a・an を冠詞というよ。あとに続く単語が母音（ア・イ・ウ・エ・オに近い音）で始まるときは an を使うんだ。\n\n例）a pen（1本のペン）、an apple（1個のりんご）\n\n2つ以上あるときは名詞を複数形にするよ。ふつうは s をつけるけど、s・sh・ch・x・o で終わる語は es、子音字+y で終わる語は y を i にかえて es（city→cities）になるんだ。`,
  pronouns: `代名詞は、人やものの名前をくりかえさずに指せる、とても便利な言葉だよ。文の中の役わりによって形が変わるのがポイント。\n\n・「〜は」→ I, you, he, she, it, we, they\n・「〜の」→ my, your, his, her, its, our, their\n・「〜を／に」→ me, you, him, her, it, us, them\n\n例）I know him.（わたしは彼を知っています）\n例）This is her bag.（これは彼女のかばんです）`,
  "third-person-s": `現在の文で、主語が I と you 以外の「1人・1つ」（三人称単数、略して三単現）のとき、一般動詞に s や es をつけるよ。\n\n例）Ken plays tennis.（ケンはテニスをします）\n\ns・sh・ch・x・o で終わる動詞は es（watch→watches）、子音字+y で終わる動詞は y を i にかえて es（study→studies）になるよ。否定文は doesn't、疑問文は Does を使って、動詞は原形にもどすんだ。`,
  "imperative-exclamation": `命令文は「〜しなさい」「〜してね」と伝える文で、主語を省略して動詞の原形から始めるよ。\n\n例）Open the door.（ドアを開けて）\n例）Don't run here.（ここで走らないで）\n\n感嘆文は「なんて〜なんだ！」と驚きや感動を表す文で、How か What を使うよ。\n例）How beautiful!（なんてきれいなんだ！）\n例）What a nice day!（なんていい日なんだ！）`,
  "wh-question": `疑問詞は「何」「だれ」「いつ」など、くわしい情報をたずねるときに文のはじめに置く言葉だよ。\n\n・What（何）・Who（だれ）・When（いつ）・Where（どこ）\n・Why（なぜ）・How（どのように）・Which（どちら）・Whose（だれの）\n\n例）What is this?（これは何ですか）\n例）Where do you live?（あなたはどこに住んでいますか）\n\n何をたずねたいかで、使う疑問詞が変わるんだ。`,
  "present-progressive": `現在進行形は「今ちょうど〜しているところです」を表す形だよ。be動詞（am/is/are）のあとに、動詞のing形を続けるんだ。\n\n例）I am studying English now.（わたしは今、英語を勉強しています）\n\ning形は、ふつうは動詞にingをつけるだけだけど、runやswimのように「短い母音＋子音字」で終わる動詞は最後の文字を重ねてing（running、swimming）にするよ。`,
  can: `can は「〜できる」という意味を付け加える助動詞だよ。can のあとの動詞は、主語が何であっても必ず原形（もとの形）になるんだ。\n\n例）I can swim.（わたしは泳げます）\n\n否定文は cannot（短くすると can't）、疑問文は can を主語の前に出すよ。\n例）She can't swim. / Can you swim?`,
  preposition: `前置詞は、名詞の前に置いて「場所」や「時」などをくわしく説明する言葉だよ。\n\n・in（〜の中に）・on（〜の上に）・under（〜の下に）\n・by / near（〜のそばに）・in front of（〜の前に）・at（〜の地点・時刻に）\n\n例）The cat is on the desk.（ねこは机の上にいます）\n例）I get up at seven.（わたしは7時に起きます）`,
  "past-general": `一般動詞の過去形は「〜した」という、もう終わったことを表すよ。多くの動詞（規則動詞）は語尾に ed をつけるけど、goやhaveのように形が大きく変わる動詞（不規則動詞）もあるんだ。\n\n例）I played tennis yesterday.（わたしは昨日テニスをしました）\n例）I went to Kyoto last week.（わたしは先週、京都に行きました）\n\n否定文は didn't、疑問文は Did を使い、どちらも動詞は原形にもどすよ。`,
  "past-be-progressive": `be動詞にも過去形があるよ。am と is は was に、are は were になるんだ。\n\n例）I was busy yesterday.（わたしは昨日、忙しかったです）\n\n過去進行形は「そのとき〜していました」を表す形で、was/were のあとに動詞のing形を続けるよ。\n例）I was watching TV then.（わたしはそのとき、テレビを見ていました）`,
  future: `これから起こることや、これからする予定を話すときは、be going to や will を使うよ。\n\n例）I am going to visit Kyoto.（わたしは京都を訪れる予定です）\n例）I will help you.（わたしはあなたを手伝います）\n\nbe going to は「もう決まっている予定」、will は「その場で決めたこと」を表すことが多いよ。`,
});
