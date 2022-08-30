import React from "react";

import Input from "../../components/Input";

const FAQHead = () => {
  return (
    <div className="faq-head">
      <h3>Frequently Asked Questions</h3>
      <div className="search">
        <Input icon="/assets/vectors/search.svg" placeholder="Search..." />

        <div className="fs-14">
          <em className="text-light-1">
            Find topics by entering terms in the search box.
          </em>
        </div>
      </div>
    </div>
  );
};

export default FAQHead;
