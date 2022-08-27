import React from "react";

import Button from "../Button";

const QuizButtons = ({ prevTo, nextTo }) => {
  return (
    <div className="btns d-flex justify-content-end gap-30">
      <Button to={prevTo} transparent>
        Previous
      </Button>
      <Button to={nextTo} green>
        Next
      </Button>
    </div>
  );
};

export default QuizButtons;
