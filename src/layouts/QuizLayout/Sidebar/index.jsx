import React from "react";
import Button from "../../../components/Button";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-wrap">
        <img
          src="/assets/vectors/logo.svg"
          className="logo"
          alt="logo"
          title="logo"
        />
      </div>

      <div className="info">
        <div className="sub-title">Time Left</div>

        <div className="timer">
          <div className="time-component">
            <div className="main">00</div>
            <div className="sub">Hours</div>
          </div>
          <div className="time-component colon">
            <div className="main">:</div>
            <div className="sub">&nbsp;</div>
          </div>
          <div className="time-component active">
            <div className="main">12</div>
            <div className="sub">Mins</div>
          </div>
          <div className="time-component colon">
            <div className="main">:</div>
            <div className="sub">&nbsp;</div>
          </div>
          <div className="time-component active">
            <div className="main">19</div>
            <div className="sub">Sec</div>
          </div>
        </div>

        <div className="sub-title mt-30">Quiz: Ancient Egypt</div>

        <div className="question-selector">
          <button className="question active">1</button>
          <button className="question active flagged">2</button>
          <button className="question active">3</button>
          <button className="question">4</button>
          <button className="question active">5</button>
          <button className="question">6</button>
          <button className="question">7</button>
          <button className="question">8</button>
          <button className="question">9</button>
          <button className="question">10</button>
        </div>

        <div className="d-flex justify-content-center">
          <Button lg danger className="">
            End Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
