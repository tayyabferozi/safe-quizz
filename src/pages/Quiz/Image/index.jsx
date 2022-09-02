import clsx from "clsx";
import React from "react";
import { useState } from "react";

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
  const [isImgActive, setIsImgActive] = useState(false);

  const toggleImg = () => {
    document.querySelector(".layout-main-content").scrollTo(0, 0);
    document
      .querySelector(".layout-main-content")
      .classList.toggle("overflow-y-hidden");
    setIsImgActive((prevState) => !prevState);
  };

  return (
    <>
      <div className="quiz-with-image-main">
        <QuizQuestion />

        <div className={clsx("quiz-img-full", isImgActive && "active")}>
          <div className="quiz-img-wrap">
            <img
              className="quiz-img"
              src="/assets/imgs/quiz-dummy-img.png"
              alt="quiz-dummy"
              title="quiz-dummy"
            />
            <img
              onClick={toggleImg}
              src="/assets/vectors/close.svg"
              alt="close"
              className="close"
            />
          </div>
        </div>

        <div className="quiz-image" onClick={toggleImg}>
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
                <div className="col-lg-6" key={"options-num" + idx}>
                  <QuizOption statementClassName="w-100" {...el} idx={idx} />
                </div>
              );
            })}
          </GridContainer>
        </div>
      </div>

      <QuizButtons prevTo="/multiple-choice" nextTo="/open" />
    </>
  );
};

export default Image;
