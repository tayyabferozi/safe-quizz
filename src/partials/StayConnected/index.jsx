import React from "react";

import GridContainer from "../../components/GridContainer";
import Section from "../../components/Section";
import Input from "../../components/Input";
import Button from "../../components/Button";

const StayConnected = () => {
  return (
    <Section id="stay-connected">
      <GridContainer>
        <div className="col-lg-5 left-wrap">
          <div className="h-100 py-60 py-991-20">
            <h6>STAY CONNECTED TO</h6>

            <div className="mt-20">
              <img
                src="/assets/vectors/logo.svg"
                alt="logo"
                title="logo"
                className="logo"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-7 right-wrap">
          <div className="right pt-50 pb-40 px-40 px-575-0 h-100">
            <img
              src="/assets/vectors/newsletter.svg"
              alt="newsletter"
              title="newsletter"
              className="newsletter"
            />

            <div className="newsletter-main">
              <h5 className="text-white fw-400">
                Subscribe to our newsletter and receive exclusive offers and
                discounts.
              </h5>

              <div className="newsletter-container mt-20">
                <Input type="email" placeholder="Enter your email" />
                <Button dark textClassName="fs-12">
                  SUBSCRIBE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </GridContainer>
    </Section>
  );
};

export default StayConnected;
