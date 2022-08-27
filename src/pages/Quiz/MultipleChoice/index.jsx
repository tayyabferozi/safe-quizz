import React from "react";

import Button from "../../../components/Button";
import QuizOption from "../../../components/QuizOption";
import QuizQuestion from "../../../components/QuizQuestion";

const options = [
  {
    option: "The Tigris River",
  },
  {
    option: "The Nile River",
    active: true,
  },
  {
    option: "The Red Sea",
  },
  {
    option: "The Indian Ocean",
  },
];

const MultipleChoice = () => {
  return (
    <>
      <div>
        <QuizQuestion />

        <div className="options">
          {options.map((el, idx) => {
            return <QuizOption idx={idx} {...el} />;
          })}
        </div>
      </div>

      <div className="btns d-flex justify-content-end gap-30">
        <Button transparent>Previous</Button>
        <Button green>Next</Button>
      </div>
    </>
  );
};

export default MultipleChoice;
