import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../partials/Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AccountLayout = ({ admin }) => {
  return (
    <div id="account-layout">
      <Navbar />

      <div className="layout-body">
        <Sidebar admin={admin} />
        <div className="layout-main-content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountLayout;
