import React from "react";
import $ from "jquery";

const FAQItem = ({ num, title, body }) => {
  const toggleHandler = (e) => {
    const $this = $(e.target);

    const parent = $this.parents(".faq-item");

    parent.find(".body-wrap").slideToggle();
    parent.toggleClass("active");
  };

  return (
    <div className="faq-item">
      <div className="head" onClick={toggleHandler}>
        <h5 className="title">
          {num}. {title}
        </h5>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25.303"
          height="16.42"
          viewBox="0 0 25.303 16.42"
        >
          <path
            id="Path_1082"
            data-name="Path 1082"
            d="M12.651,16.42,0,3.769,3.769,0l8.883,8.883L21.534,0,25.3,3.769Z"
            transform="translate(25.303 16.42) rotate(180)"
            fill="#fff"
          />
        </svg>
      </div>

      <div className="body-wrap" style={{ display: "none" }}>
        <div className="body">
          <div className="body-main">{body}</div>
        </div>

        <div className="footer">
          <div className="footer-main">
            <div className="text-light-1 me-3">Was this answer helpful?</div>

            <img
              className="thumb"
              src="/assets/vectors/thumb-dark.svg"
              alt="thumb"
            />
            <img
              className="thumb down"
              src="/assets/vectors/thumb-dark.svg"
              alt="thumb"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
