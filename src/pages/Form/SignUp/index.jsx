import React from "react";

import GridContainer from "../../../components/GridContainer";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="form-wrap">
        <div className="title-wrap">
          <h3 className="title">Sign Up for</h3>
          <img
            src="/assets/vectors/logo.svg"
            className="logo"
            alt="logo"
            title="logo"
          />
        </div>
        <form action="" className="mt-60">
          <GridContainer>
            <div className="col-lg-6">
              <Input placeholder="First name" />
            </div>
            <div className="col-lg-6">
              <Input placeholder="Last name" />
            </div>
          </GridContainer>

          <Input placeholder="Email" />

          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Repeat Password" />

          <label className="custom-checkbox">
            Subscribe to updates on products, offers, and discounts.
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>

          <label className="custom-checkbox">
            I agree to{" "}
            <Link className="underlined" to="#0">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link className="underlined" to="#0">
              Terms of Use
            </Link>
            .
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>

          <Button to="/login" lg primary className="w-100 mt-30">
            Sign Up
          </Button>
        </form>

        <div className="mt-30 text-center">
          <span className="text-light-1 fs-14">Already a member? </span>
          <Link className="underlined fs-14" to="/login">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
