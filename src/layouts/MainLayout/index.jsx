import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../../partials/Footer";

const MainLayout = () => {
  return (
    <div id="main-layout">
      <Navbar />

      <div className="layout-main-content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
