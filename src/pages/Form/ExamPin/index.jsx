import React from "react";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

const ExamPin = () => {
  return (
    <div>
      <div className="form-wrap">
        <div className="logo-wrap">
          <img
            src="/assets/vectors/logo.svg"
            className="logo"
            alt="logo"
            title="logo"
          />
        </div>
        <form action="" className="mt-60">
          <Input inputClassName="text-center" placeholder="Enter Exam Pin" />

          <Button to="/signup" lg primary className="w-100 mt-10">
            Start Quiz
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ExamPin;
