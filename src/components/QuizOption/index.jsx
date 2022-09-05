import React from "react";
import clsx from "clsx";

const QuizOption = ({
  option,
  idx,
  active,
  statementClassName,
  setSelected,
}) => {
  let digit = "A";

  if (idx === 1) {
    digit = "B";
  }

  if (idx === 2) {
    digit = "C";
  }

  if (idx === 3) {
    digit = "D";
  }
  return (
    <div
      key={option}
      className={clsx("option", { active })}
      onClick={() => setSelected(idx)}
    >
      <div className="digit">{digit}.</div>
      <div className={clsx(statementClassName, "statement")}>{option}</div>
    </div>
  );
};

export default QuizOption;
