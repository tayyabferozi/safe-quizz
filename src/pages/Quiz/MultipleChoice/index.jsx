import React, { useState } from "react";

import QuizButtons from "../../../components/QuizButtons";
import QuizOption from "../../../components/QuizOption";
import QuizQuestion from "../../../components/QuizQuestion";

const MultipleChoice = () => {
  const [options, setOptions] = useState([
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
  ]);

  const setSelected = (selectedIdx) => {
    setOptions((prevState) => {
      let newState = [...prevState];

      newState = newState.map((el, idx) => {
        el.active = false;

        if (idx === selectedIdx) {
          el.active = true;
        }

        return el;
      });

      return newState;
    });
  };

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
                setSelected={setSelected}
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
