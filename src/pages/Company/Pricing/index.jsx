import React from "react";
import Button from "../../../components/Button";
import Section from "../../../components/Section";
import FAQs from "../../../partials/FAQs";
import StayConnected from "../../../partials/StayConnected";

const Pricing = () => {
  return (
    <>
      <Section id="pricing" className="pb-70">
        <div className="pricing-main">
          <div className="pricing-item">
            <div className="name">Standard</div>

            <div className="price-wrap">
              <div className="price">$2.50</div>
              <div>Per Teacher</div>
            </div>

            <div className="features-list">
              <div className="item">
                <strong>3 Quizzes</strong> per month
              </div>
              <div className="item">
                Up to <strong>50 Students</strong> in a Party
              </div>
              <div className="item">
                <strong>Feature</strong> Entry
              </div>
              <div className="item">
                <strong>Feature</strong> Entry
              </div>
            </div>

            <div className="btn-wrap">
              <Button primary>Get Started</Button>
            </div>
          </div>
          <div className="pricing-item em">
            <div className="name">Premium</div>

            <div className="price-wrap">
              <div className="price">$4.00</div>
              <div>Per Teacher</div>
            </div>

            <div className="features-list">
              <div className="item">
                <strong>Unlimited Quizzes</strong> per month
              </div>
              <div className="item">
                Up to <strong>100 Students</strong> in a Party
              </div>
              <div className="item">
                <strong>Plagiarism</strong> Tool
              </div>
              <div className="item">
                <strong>Feature</strong> Entry
              </div>
            </div>

            <div className="btn-wrap">
              <Button primary>Get Started</Button>
            </div>
          </div>
          <div className="pricing-item">
            <div className="name">Organization</div>

            <div className="price-wrap">
              <div className="price">Custom</div>
              <div>Per Teacher</div>
            </div>

            <div className="features-list">
              <div className="item">
                <strong>Custom Quizzes</strong> per month
              </div>
              <div className="item">
                Up to <strong>Unlimited</strong> in a Party
              </div>
              <div className="item">
                <strong>Feature</strong> Entry
              </div>
              <div className="item">
                <strong>Feature</strong> Entry
              </div>
            </div>

            <div className="btn-wrap">
              <Button primary>Get Started</Button>
            </div>
          </div>
        </div>
      </Section>
      <FAQs />
      <div className="mt-40"></div>
      <StayConnected />
    </>
  );
};

export default Pricing;
