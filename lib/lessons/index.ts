// レッスン文を読み込む（副作用でlib/lessons.tsのレジストリに登録される）。
// 教科・単元を追加するときは、対応するレッスンファイルをここでimportする。
import "./english-grade1";

export { getLesson } from "../lessons";
