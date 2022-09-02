import React from "react";
import PricingItem from "../../../../components/PricingItem";
import Section from "../../../../components/Section";

const Packages = () => {
  return (
    <Section id="landing-packages" className="">
      <img src="/assets/vectors/dots-2.svg" alt="dots" className="dots" />
      <h1 className="mb-100 fw-bold text-center">Our Packages</h1>
      <div className="pricing">
        <div className="pricing-main">
          {[
            {
              dark: true,
              name: "Standard",
              price: "$2.50",
              listItems: [
                <>
                  <strong>3 Quizzes</strong> per month
                </>,
                <>
                  Up to <strong>50 Students</strong> in a Party
                </>,
                <>
                  <strong>Feature</strong> Entry
                </>,
                <>
                  <strong>Feature</strong> Entry
                </>,
              ],
            },
            {
              inverted: true,
              name: "Premium",
              price: "$4.00",
              listItems: [
                <>
                  <strong>Unlimited Quizzes</strong> per month
                </>,
                <>
                  Up to <strong>100 Students</strong> in a Party
                </>,
                <>
                  <strong>Plagiarism</strong> Tool
                </>,
                <>
                  <strong>Feature</strong> Entry
                </>,
              ],
            },
          ].map((el, idx) => {
            return <PricingItem key={"pricing-item" + idx} {...el} />;
          })}
        </div>
      </div>
    </Section>
  );
};

export default Packages;
