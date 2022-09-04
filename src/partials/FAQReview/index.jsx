import clsx from "clsx";
import React from "react";
import Button from "../../components/Button";

const FAQReview = ({ className }) => {
  return (
    <div className={clsx("faq-review", className)}>
      <div className="text fw-bold">
        Did you find what you were looking for?
      </div>

      <div className="btns flex-shrink-0">
        <Button icon="/assets/vectors/thumb.svg" className="thumb-down">
          15
        </Button>
        <Button icon="/assets/vectors/thumb.svg">901</Button>
      </div>
    </div>
  );
};

export default FAQReview;
