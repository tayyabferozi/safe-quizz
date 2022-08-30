import React from "react";
import GridContainer from "../../../components/GridContainer";

import Section from "../../../components/Section";
import FAQHead from "../../../partials/FAQHead";
import StayConnected from "../../../partials/StayConnected";
import Left from "./Left";
import Right from "./Right";

const FAQItem = () => {
  return (
    <>
      <Section id="faq-item">
        <FAQHead />

        <GridContainer className="my-70" rowClassName="main-row">
          <div className="col-lg-4">
            <Left />
          </div>
          <div className="col-lg-8">
            <Right />
          </div>
        </GridContainer>
      </Section>
      <StayConnected />
    </>
  );
};

export default FAQItem;
