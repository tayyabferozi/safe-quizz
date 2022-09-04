import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../../partials/Footer";

const MainLayout = () => {
  return (
    <div id="main-layout">
      <Navbar />

      <div className="layout-main-content">
        <img
          src="/assets/vectors/question-mark-xlg.svg"
          alt="question-mark"
          className="mark"
        />
        <img
          src="/assets/imgs/bg-landing-hero.png"
          alt="question-mark"
          className="bg"
        />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
