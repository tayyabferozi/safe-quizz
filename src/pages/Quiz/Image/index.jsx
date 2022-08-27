import React from "react";

import GridContainer from "../../../components/GridContainer";
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

const Image = () => {
  return (
    <>
      <div>
        <QuizQuestion />

        <div className="quiz-image">
          <img
            src="/assets/imgs/quiz-dummy-img.png"
            alt="quiz-dummy"
            title="quiz-dummy"
          />
          <img
            src="/assets/vectors/magnifier.svg"
            alt="magnifier"
            className="magnifier"
          />
        </div>

        <div className="options">
          <GridContainer rowClassName="gx-40">
            {options.map((el, idx) => {
              return (
                <div className="col-lg-6">
                  <QuizOption statementClassName="w-100" {...el} idx={idx} />
                </div>
              );
            })}
          </GridContainer>
        </div>
      </div>

      <QuizButtons />
    </>
  );
};

export default Image;
