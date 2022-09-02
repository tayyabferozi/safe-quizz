import React, { useEffect, useState } from "react";

import Section from "../../../components/Section";
import Button from "../../../components/Button";
import clsx from "clsx";

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
