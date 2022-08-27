import React from "react";

import Section from "../../../components/Section";
import Button from "../../../components/Button";

const Navbar = () => {
  return (
    <Section id="navbar">
      <div></div>
      <div className="btns">
        <Button dark>Register</Button>
        <Button white>Sign In</Button>
      </div>
    </Section>
  );
};

export default Navbar;
