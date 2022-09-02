import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const QuizLayout = ({ teachersView }) => {
  return (
    <div id="quiz-layout">
      <Sidebar teachersView={teachersView} />

      <div className="layout-main-content">
        <div className="page-container">
          <div>
            <div className="question-wrap">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizLayout;
