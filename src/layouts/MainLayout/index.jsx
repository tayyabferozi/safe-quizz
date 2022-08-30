import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

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
