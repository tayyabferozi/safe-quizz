import React from "react";

import Button from "../Button";

const QuizQuestion = () => {
  return (
    <>
      <div className="progress-bar">
        <div className="progress">50%</div>
      </div>

      <div className="question">
        <div className="num">Question 4 of 5</div>
        <div className="statement">
          What major body of water helped the ancient Egyptian civilization to
          grow and prosper?
        </div>
      </div>

      <div className="question-options d-flex justify-content-end mt-10">
        <Button className="px-0">
          <img src="/assets/vectors/flag.svg" alt="flag" title="flag" />
        </Button>
        <Button>
          <img src="/assets/vectors/next.svg" alt="next" title="next" />
        </Button>
      </div>
    </>
  );
};

export default QuizQuestion;
