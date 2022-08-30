import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button";
import Section from "../../../components/Section";

const Navbar = () => {
  return (
    <Section id="navbar">
      <div className="left">
        <div className="logo-wrapper">
          <img
            src="/assets/vectors/logo.svg"
            alt="logo"
            title="logo"
            className="logo"
          />
        </div>

        <div className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Packages</NavLink>
          <NavLink to="/">Contact</NavLink>
        </div>
      </div>

      <div className="right">
        <Button>Register</Button>
        <Button primary>Sign In</Button>
      </div>
    </Section>
  );
};

export default Navbar;
