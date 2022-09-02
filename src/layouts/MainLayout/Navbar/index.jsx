import clsx from "clsx";
import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button";
import Section from "../../../components/Section";

const Navbar = () => {
  const [scrolledState, setScrolledState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 10) {
        setScrolledState(true);
      } else {
        setScrolledState(false);
      }
    });
  }, []);

  return (
    <Section id="navbar" className={clsx(scrolledState && "scrolled")}>
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
