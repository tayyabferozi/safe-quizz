import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

const AuthLayout = () => {
  return (
    <div id="auth-layout">
      <Navbar />
      <div className="layout-main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
