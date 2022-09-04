import React from "react";
import GridContainer from "../../../../components/GridContainer";
import Section from "../../../../components/Section";

const WhyUs = () => {
  return (
    <Section id="landing-whyus">
      <h1 className="text-center fw-bold ">Why Choose Us?</h1>

      <div className="features mt-100">
        <GridContainer rowClassName="justify-content-center gy-40">
          {[
            {
              icon: "/assets/vectors/why-us-1.svg",
              title: "Collaboration",
              text: "Suspendisse laoreet sapien mattis mauris rhoncus maximus. Maecenas nec arcu vehicula, rhoncus tortor id, luctus augue.",
            },
            {
              icon: "/assets/vectors/why-us-2.svg",
              title: "Customization",
              text: "Suspendisse laoreet sapien mattis mauris rhoncus maximus. Maecenas nec arcu vehicula, rhoncus tortor id, luctus augue.",
            },
            {
              icon: "/assets/vectors/why-us-3.svg",
              title: "Encryption",
              text: "Suspendisse laoreet sapien mattis mauris rhoncus maximus. Maecenas nec arcu vehicula, rhoncus tortor id, luctus augue.",
            },
            {
              icon: "/assets/vectors/why-us-4.svg",
              title: "Optimization",
              text: "Suspendisse laoreet sapien mattis mauris rhoncus maximus. Maecenas nec arcu vehicula, rhoncus tortor id, luctus augue.",
            },
          ].map((el, idx) => {
            return (
              <div
                key={"feauter" + idx}
                className="col-xxl-3 col-lg-4 col-md-6"
              >
                <div className="feature-item">
                  <img src={el.icon} alt="icon" />

                  <h5 className="fw-600 mt-20">{el.title}</h5>

                  <p className="mt-1">{el.text}</p>
                </div>
              </div>
            );
          })}
        </GridContainer>
      </div>
    </Section>
  );
};

export default WhyUs;
