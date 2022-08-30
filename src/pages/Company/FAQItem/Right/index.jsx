import React from "react";
import { Link } from "react-router-dom";
import FAQReview from "../../../../partials/FAQReview";

const questionsData = [
  {
    question: "How to Join with Quiz Link?",
    answer: <>Donec rhoncus nunc nec pellentesque ullamcorper.</>,
  },
  {
    question: "How to Join with Quiz Code?",
    answer: (
      <>
        Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>
        , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum. <br />
        <Link className="fw-bold" to="#0">
          Read more
        </Link>
      </>
    ),
  },
  {
    question: "Can I Join More Than One Quizzes at the Same Time?",
    answer: (
      <>
        Facilisis leo vel fringilla est ullamcorper. Venenatis lectus magna
        fringilla urna porttitor rhoncus dolor purus. Nulla at volutpat diam ut
        venenatis tellus in metus vulputate. Faucibus pulvinar elementum integer
        enim neque volutpat ac. Consequat interdum varius sit amet mattis
        vulputate enim. Pharetra massa massa ultricies mi quis hendrerit dolor
        magna eget.{" "}
      </>
    ),
  },
  {
    question: "How to Join a Quiz on Mobile?",
    answer: (
      <>
        Odio tempor orci dapibus ultrices in iaculis nunc sed augue, that you
        can read here.
      </>
    ),
  },
  {
    question: "Can I Join Again if I Leave The Quiz?",
    answer: (
      <>
        Ed blandit libero volutpat sed cras ornare arcu. Mauris augue neque
        gravida in fermentum et sollicitudin. Rhoncus urna neque viverra justo
        nec ultrices dui sapien.
      </>
    ),
  },
];

const Right = () => {
  return (
    <div className="faq-item-right">
      <div className="breadcrumb">
        <div className="item">
          FAQs <img src="/assets/vectors/chevron-right.svg" alt="chevron" />
        </div>
        <div className="item active">General</div>
      </div>

      <div className="mt-30 faq-item-header">
        <h4 className="text-primary-1">Joining a Quiz</h4>
        <img
          className="c-pointer"
          src="/assets/vectors/share.svg"
          alt="share"
        />
      </div>

      <div className="mt-50">
        {questionsData.map((el, idx) => {
          return (
            <div key={"question" + idx} className="question-section">
              <div className="num">{idx + 1}</div>
              <div className="question-main">
                <div className="question-head">{el.question}</div>
                <div className="question-body">{el.answer}</div>
              </div>
            </div>
          );
        })}
      </div>

      <FAQReview className="mt-70" />
    </div>
  );
};

export default Right;
