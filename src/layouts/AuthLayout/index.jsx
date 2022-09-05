import React from "react";
import { Link, Outlet } from "react-router-dom";

import Navbar from "./Navbar";

const AuthLayout = () => {
  return (
    <div id="auth-layout">
      <Navbar />
      <div className="layout-main-content">
        <Outlet />
        <div className="links">
          <Link to="/support">HELP</Link>
          <Link to="/faqs">FAQ</Link>
          <Link to="/pricing">PRICING</Link>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
