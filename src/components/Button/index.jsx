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
  textClassName,
  icon,
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

  const btnText = (
    <>
      {icon && <img src={icon} title="icon" className="icon" alt="icon" />}
      <div className={clsx("btn-text", textClassName)}>{children}</div>
    </>
  );

  if (to) {
    return (
      <NavLink className={classes} to={to} {...rest}>
        {btnText}
      </NavLink>
    );
  } else {
    return (
      <button className={classes} {...rest}>
        {btnText}
      </button>
    );
  }
};

export default Button;
