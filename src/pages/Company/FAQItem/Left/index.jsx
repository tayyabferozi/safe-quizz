import React from "react";

const Left = () => {
  return (
    <div className="faq-item-left">
      <div className="toc explore-faqs">
        <h5 className="faq-heading sm">
          <img src="/assets/vectors/info.svg" alt="info" title="info" />
          Table of contents
        </h5>

        <div className="links thin">
          <div>General</div>
          <div className="active">Joining a Quiz</div>
          <div>Creating a Quiz</div>
          <div>Deleting a Quiz</div>
          <div>Sharing the Quiz Link</div>
          <div>Technical issues</div>
          <div>Report a problem</div>
        </div>
      </div>
      <div className="popular-questions explore-faqs pe-0">
        <h5 className="faq-heading sm">
          <img src="/assets/vectors/star.svg" alt="star" title="star" />
          Popular Questions
        </h5>

        <div className="links thin left-aligned">
          <div>Vestibulum laoreet odio ac fermentum mattis?</div>
          <div>Aenean commodo dolor vel lacus commodo?</div>
          <div>Is restibulum dolor sagittis?</div>
          <div>Nam ac erat cursus, volutpat neque pulvinar lectus?</div>
          <div>Donec rhoncus nunc nec pellentesque ullamcorper</div>
        </div>
      </div>
      <div className="question-types">
        <div className="d-flex flex-column">
          <div className="type half-1">
            <img
              src="/assets/vectors/question.svg"
              alt="question"
              title="question"
            />
            <p>Can't find an answer?</p>
          </div>
          <div className="type half-2">
            <img src="/assets/vectors/email-2.svg" alt="email" title="email" />
            <p>Email us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
