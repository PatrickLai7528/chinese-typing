import React, { FunctionComponent, memo } from "react";
import WordBox from "../WordBox";

export interface IWordListProps {
  wordList: string[];
  onCorrect: () => void;
  disabled: boolean;
}

const WordList: FunctionComponent<IWordListProps> = memo(props => {
  const { wordList, onCorrect, disabled } = props;
  const refs: any[] = [];
  return (
    <>
      {wordList.map((word, index) => (
        <WordBox
          disabled={disabled}
          key={index}
          getRef={(ref: any) => {
            refs.push({ word, ref });
          }}
          text={word}
          onCorrect={() => {
            if (index !== wordList.length - 1) {
              refs[index + 1].ref.current.focus();
            }
            onCorrect();
          }}
        />
      ))}
    </>
  );
});

export default WordList;
