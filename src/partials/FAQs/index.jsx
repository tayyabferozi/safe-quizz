import React from "react";
import Button from "../../components/Button";
import GridContainer from "../../components/GridContainer";
import Section from "../../components/Section";

const FAQs = () => {
  return (
    <Section id="faqs" className="pt-80 pb-60">
      <GridContainer>
        <div className="col-lg-6 d-lg-block d-flex justify-content-center">
          <img
            src="/assets/vectors/faq.svg"
            alt="faq"
            className="section-img"
          />
        </div>
        <div className="col-lg-6 d-flex align-items-center">
          <div className="mt-991-50">
            <h3>Frequently Asked Questions</h3>
            <p className="mt-10">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Aliquam mi quam, porta eu nunc
              quis, convallis elementum justo. Praesent vestibulum ornare
              ligula, ac viverra neque commodo în. Cras luctus at mauris în
              pharetra. Sed ac nulla dui.
            </p>

            <div className="mt-50">
              <Button primary>Read our FAQ</Button>
            </div>
          </div>
        </div>
      </GridContainer>
    </Section>
  );
};

export default FAQs;
