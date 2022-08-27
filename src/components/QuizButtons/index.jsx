import React from "react";

import Button from "../Button";
const QuizButtons = () => {
  return (
    <div className="btns d-flex justify-content-end gap-30">
      <Button transparent>Previous</Button>
      <Button green>Next</Button>
    </div>
  );
};

export default QuizButtons;
