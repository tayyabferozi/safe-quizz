import React from "react";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="form-wrap">
        <div className="title-wrap">
          <h3 className="title">Log In for</h3>
          <img
            src="/assets/vectors/logo.svg"
            className="logo"
            alt="logo"
            title="logo"
          />
        </div>
        <form action="" className="mt-60">
          <Input placeholder="Email" />

          <Input type="password" placeholder="Password" />

          <label class="custom-checkbox">
            Keep me signed in
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>

          <Button lg primary className="w-100 mt-30">
            Sign In
          </Button>
        </form>

        <div className="mt-30 text-center">
          <span className="text-light-1 fs-14">Already a member? </span>
          <Link className="underlined fs-14" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
