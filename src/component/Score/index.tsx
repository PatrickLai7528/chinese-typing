import React, { FunctionComponent, useEffect, useState } from "react";
import moment, { Moment } from "moment";

export interface IScoreProps {
  correct: number;
  wrong: number;
  total: number;
  disabled?: boolean;
  beginTime: null | Moment;
}

const Score: FunctionComponent<IScoreProps> = props => {
  const { correct, wrong, total, beginTime, disabled } = props;

  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (beginTime && !disabled) {
        setDuration(moment().diff(beginTime, "s"));
      }
    });
    return () => clearInterval(id);
  });

  return (
    <div>
      <div>{`速度：${(correct / (duration / 60)).toPrecision(2)}字/分鐘`}</div>
    </div>
  );
};

export default Score;
