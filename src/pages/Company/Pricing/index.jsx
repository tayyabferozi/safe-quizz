import React from "react";
import Button from "../../../components/Button";
import PricingItem from "../../../components/PricingItem";
import Section from "../../../components/Section";
import FAQs from "../../../partials/FAQs";
import StayConnected from "../../../partials/StayConnected";

const Pricing = () => {
  return (
    <>
      <Section id="pricing" className="pb-70">
        <div className="pricing-main">
          {[
            {
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
              em: true,
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
            {
              name: "Organization",
              price: "Custom",
              listItems: [
                <>
                  <strong>Custom Quizzes</strong> per month
                </>,
                <>
                  Up to <strong>Unlimited</strong> in a Party
                </>,
                <>
                  <strong>Feature</strong> Entry
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
      </Section>
      <FAQs />
      <div className="mt-40"></div>
      <StayConnected />
    </>
  );
};

export default Pricing;
