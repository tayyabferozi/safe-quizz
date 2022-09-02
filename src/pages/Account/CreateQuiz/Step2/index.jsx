import React from "react";
import Button from "../../../../components/Button";

import GridContainer from "../../../../components/GridContainer";

const questions = [
  {
    question:
      "What major body of water helped the ancient Egyptian civilization to grow and prosper?",
  },
  {
    question:
      "What major body of water helped the ancient Egyptian civilization to grow and prosper?",
  },
  {
    question:
      "What major body of water helped the ancient Egyptian civilization to grow and prosper?",
  },
  {
    question:
      "What major body of water helped the ancient Egyptian civilization to grow and prosper?",
  },
  {
    question:
      "What major body of water helped the ancient Egyptian civilization to grow and prosper?",
  },
];

const Step2 = () => {
  return (
    <>
      <div>
        <GridContainer className="mt-30">
          {questions.map((el, idx) => {
            return (
              <div className="col-lg-4" key={"question" + idx}>
                <div className="custom-card bordered">
                  <div className="fw-bold">Question {idx + 1}</div>

                  <div className="label mt-1">Multiple Choice</div>
                  <div className="mt-2">{el.question}</div>

                  <div className="actions">
                    <button className="edit">Edit Question</button>
                    <button className="delete">Delete Question</button>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="col-lg-4">
            <div className="custom-card blue h-100 d-flex justify-content-center align-items-center text-center c-pointer">
              <div className="py-40 px-20">
                <div>
                  <img src="/assets/vectors/add-lg.svg" alt="add" />
                  <h6 className="text-primary-1">Add Question</h6>
                </div>
              </div>
            </div>
          </div>
        </GridContainer>

        <div className="d-flex justify-content-end mt-70">
          <Button primary>Next</Button>
        </div>
      </div>
    </>
  );
};

export default Step2;
