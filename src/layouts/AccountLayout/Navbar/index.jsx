import clsx from "clsx";
import React, { useEffect, useState } from "react";
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
      <div className="logo-wrapper">
        <img
          className="logo"
          src="/assets/vectors/logo.svg"
          alt="logo"
          title="Safequizz"
        />
      </div>
      <div className="user-options">
        <img
          className="avatar"
          src="/assets/vectors/user-avatar.svg"
          alt="avatar"
          title="avatar"
        />
        <div className="dropdown-wrapper">
          <div className="label">
            Liano{" "}
            <img
              src="/assets/vectors/dropdown-arrow.svg"
              alt="arrow"
              title="arrow"
              className="arrow"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Navbar;
