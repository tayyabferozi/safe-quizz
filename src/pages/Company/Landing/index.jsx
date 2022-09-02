import React from "react";
import StayConnected from "../../../partials/StayConnected";

import FAQs from "./FAQs";
import Hero from "./Hero";
import Packages from "./Packages";
import WhyUs from "./WhyUs";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Packages />
      <WhyUs />
      <FAQs />
      <StayConnected />
    </div>
  );
};

export default Landing;
