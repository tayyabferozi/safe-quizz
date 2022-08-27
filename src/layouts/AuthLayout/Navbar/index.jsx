import React from "react";

import Section from "../../../components/Section";
import Button from "../../../components/Button";

const Navbar = () => {
  return (
    <Section id="navbar">
      <div></div>
      <div className="btns">
        <Button to="/signup" dark>
          Register
        </Button>
        <Button to="/login" white>
          Sign In
        </Button>
      </div>
    </Section>
  );
};

export default Navbar;
