import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const Button = ({
  className,
  to,
  primary,
  white,
  dark,
  transparent,
  danger,
  green,
  lg,
  children,
  ...rest
}) => {
  const classes = clsx(
    "btn",
    className,
    primary && "btn-primary",
    white && "btn-white",
    dark && "btn-dark",
    danger && "btn-danger",
    green && "btn-green",
    transparent && "btn-transparent",
    { lg }
  );

  if (to) {
    return (
      <NavLink className={classes} to={to} {...rest}>
        <div className="btn-text">{children}</div>
      </NavLink>
    );
  } else {
    return (
      <button className={classes} {...rest}>
        <div className="btn-text">{children}</div>
      </button>
    );
  }
};

export default Button;
