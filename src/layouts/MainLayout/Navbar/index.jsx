import clsx from "clsx";
import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import $ from "jquery";

import Button from "../../../components/Button";
import Section from "../../../components/Section";

const Navbar = () => {
  const [scrolledState, setScrolledState] = useState(false);

  const toggleNavbar = (e) => {
    $(e.currentTarget).toggleClass("active");

    $(".right-wrap .right").slideToggle("medium", function () {
      if ($(this).is(":visible")) $(this).css("display", "flex");
    });
  };

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

        <NavbarMain className="d-none d-lg-flex" />
      </div>

      <div className="right-wrap">
        <div className="hamburger d-flex d-lg-none" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="right">
          <NavbarMain className="d-flex d-lg-none" />

          <Button>Register</Button>
          <Button primary>Sign In</Button>
        </div>
      </div>
    </Section>
  );
};

export default Navbar;

const NavbarMain = ({ className }) => {
  return (
    <div className={clsx("nav", className)}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/faqs">About</NavLink>
      <HashLink smooth to="/#pricing">
        Packages
      </HashLink>
      <NavLink to="/support">Contact</NavLink>
    </div>
  );
};
