import React from "react";

import GridContainer from "../../../components/GridContainer";
import Input from "../../../components/Input";
import QuizButtons from "../../../components/QuizButtons";
import QuizQuestion from "../../../components/QuizQuestion";

const Open = () => {
  return (
    <>
      <div>
        <QuizQuestion />

        <div className="answer-statement">
          <Input
            label="Your Answer:"
            textarea
            rows={14}
            placeholder="Type Here…"
            maxCount={1000}
          />
        </div>
      </div>

      <QuizButtons />
    </>
  );
};

export default Open;
