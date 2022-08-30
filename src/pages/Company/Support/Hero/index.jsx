import React from "react";
import Button from "../../../../components/Button";

import GridContainer from "../../../../components/GridContainer";
import Section from "../../../../components/Section";

const Hero = () => {
  return (
    <Section id="support">
      <GridContainer>
        <div className="col-lg-6 d-flex align-items-center">
          <div>
            <h3>Support</h3>
            <p className="mt-10">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Aliquam mi quam, porta eu nunc
              quis, convallis elementum justo. Praesent vestibulum ornare
              ligula, ac viverra neque commodo în. Cras luctus at mauris în
              pharetra. Sed ac nulla dui.
            </p>

            <div className="my-40">
              <Button primary>Get in Touch</Button>
            </div>
          </div>
        </div>

        <div className="col-lg-6 d-flex align-justify-content-end align-items-end">
          <img
            className="section-img"
            src="/assets/vectors/support.svg"
            alt="support"
          />
        </div>
      </GridContainer>
    </Section>
  );
};

export default Hero;
