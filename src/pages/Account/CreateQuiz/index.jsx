import React, { useState } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";

const CreateQuiz = () => {
  const [stepState, setStepState] = useState(1);

  return (
    <div>
      <h1>Create New Quiz</h1>

      <div className="mt-2 text-light-1">Step {stepState} of 3</div>

      {stepState === 1 && <Step1 onNext={() => setStepState(stepState + 1)} />}
      {stepState === 2 && <Step2 onNext={() => setStepState(stepState + 1)} />}
    </div>
  );
};

export default CreateQuiz;
