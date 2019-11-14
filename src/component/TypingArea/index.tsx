import React, {
  FunctionComponent,
  memo,
  useEffect,
  useMemo,
  useState
} from "react";
import "./main.css";
import { isChinese } from "../../utils";
import WordList from "../WordList";
import Score from "../Score";
import moment, { Moment } from "moment";

export interface ITypingAreaProps {
  paragraph: string;
}

let beginTime: null | Moment = null;

const TypingArea: FunctionComponent<ITypingAreaProps> = memo(props => {
  const [disabled, setDisabled] = useState(true);
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Enter") {
      setDisabled(false);
      beginTime = moment();
    } else if (e.code === "Escape") {
      setDisabled(true);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });
  const { paragraph } = props;
  const [correct, setCorrect] = useState(0);
  const wordList = useMemo(
    () => paragraph.split("").filter(str => isChinese(str)),
    [paragraph]
  );
  return (
    <div className={"typing-area"}>
      <h1>Enter開始、ESC結束</h1>
      <Score correct={correct} beginTime={beginTime} disabled={disabled} />
      <WordList
        wordList={wordList}
        onCorrect={() => setCorrect(correct + 1)}
        disabled={disabled}
      />
    </div>
  );
});

export default TypingArea;
