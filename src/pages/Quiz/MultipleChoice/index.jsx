import React from "react";

import QuizButtons from "../../../components/QuizButtons";
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
            return (
              <QuizOption
                key={"quiz-option-multiple" + idx}
                idx={idx}
                {...el}
              />
            );
          })}
        </div>
      </div>

      <QuizButtons prevTo="/choose-plan" nextTo="/image" />
    </>
  );
};

export default MultipleChoice;
