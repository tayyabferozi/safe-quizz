import clsx from "clsx";
import React from "react";
import Button from "../../../components/Button";
import Search from "../../../components/Search";

const participantsData = [
  {
    name: "Blake Burgess",
    warning: true,
  },
  {
    name: "Michelle	Cameron",
  },
  {
    name: "Evan	Fraser",
    danger: true,
  },
  {
    name: "Andrew	Duncan",
  },
  {
    name: "Ian Hudson",
  },
  {
    name: "Diana Buckland",
  },
  {
    name: "Amy King",
  },
  {
    name: "Robert Terry",
  },
  {
    name: "Blake Burgess",
    warning: true,
  },
  {
    name: "Michelle	Cameron",
  },
  {
    name: "Evan	Fraser",
    danger: true,
  },
  {
    name: "Andrew	Duncan",
  },
  {
    name: "Ian Hudson",
  },
  {
    name: "Diana Buckland",
  },
  {
    name: "Amy King",
  },
  {
    name: "Robert Terry",
  },
  {
    name: "Blake Burgess",
    warning: true,
  },
  {
    name: "Michelle	Cameron",
  },
  {
    name: "Evan	Fraser",
    danger: true,
  },
  {
    name: "Andrew	Duncan",
  },
  {
    name: "Ian Hudson",
  },
  {
    name: "Diana Buckland",
  },
  {
    name: "Amy King",
  },
  {
    name: "Robert Terry",
  },
];

const waitingListData = [
  {
    name: "Ian Hudson",
  },
  {
    name: "Michelle	Cameron",
  },
];

const Sidebar = ({ teachersView }) => {
  return (
    <div className={clsx("sidebar", teachersView && "teachers-view")}>
      <div className="logo-wrap-main">
        <div className="logo-wrap">
          <img
            src="/assets/vectors/logo.svg"
            className="logo"
            alt="logo"
            title="logo"
          />
        </div>
      </div>

      {teachersView ? (
        <div className="students-info">
          <Search notifications placeholder="Search in Participants…" />

          <div className="listing-row head mt-20 mt-991-10">
            <div className="left">Participants</div>
            <div className="right">12</div>
          </div>

          <div className="test-takers">
            {participantsData.map((el, idx) => {
              return (
                <div className="listing-row" key={"listing-row" + idx}>
                  <div className="left">{el.name}</div>

                  <div className="right">
                    {el.warning && (
                      <img src="/assets/vectors/warning.svg" alt="warning" />
                    )}
                    {el.danger && (
                      <img src="/assets/vectors/danger.svg" alt="danger" />
                    )}
                    <svg
                      id="Group_35917"
                      data-name="Group 35917"
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="28"
                      viewBox="0 0 44 28"
                    >
                      <path
                        id="Path_38066"
                        data-name="Path 38066"
                        d="M23,5C13.128,5,5.616,11.116,1,19c4.616,7.884,12.128,14,22,14s17.386-6.116,22-14C40.386,11.116,32.87,5,23,5Zm0,24C14.38,29,8.982,23.574,5.752,19,8.982,14.426,14.38,9,23,9s14.02,5.426,17.248,10C37.02,23.574,31.622,29,23,29Z"
                        transform="translate(-1 -5)"
                        fill="#e5e5e5"
                      />
                      <circle
                        id="Ellipse_96"
                        data-name="Ellipse 96"
                        cx="6"
                        cy="6"
                        r="6"
                        transform="translate(16 8)"
                        fill="#e5e5e5"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="listing-row justify-content-center gap-20 c-pointer">
            <div className="text-light-1">+2 more</div>
            <img src="/assets/vectors/caret-down.svg" alt="caret" />
          </div>

          <div className="listing-row head">
            <div className="left">Waiting Room</div>
            <div className="right">2</div>
          </div>

          <div className="waiting-list">
            <div className="listing-row">
              <div className="left"></div>

              <div className="right">
                <div className="actions gap-20 align-items-center">
                  <button className="delete fs-16">Reject All</button>
                  <Button green textClassName="fs-16" className="mt-0 px-20">
                    Allow All
                  </Button>
                </div>
              </div>
            </div>
            {waitingListData.map((el, idx) => {
              return (
                <div className="listing-row" key={"wait-listing-row" + idx}>
                  <div className="left">{el.name}</div>

                  <div className="right">
                    <div className="actions gap-20 align-items-center">
                      <button className="delete fs-16">Reject</button>
                      <Button
                        green
                        textClassName="fs-16"
                        className="mt-0 px-20"
                      >
                        Allow
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="info">
          <div className="sub-title d-lg-block d-none">Time Left</div>

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

          <div className="sub-title mt-30 mt-991-0 quiz-title">
            Quiz: Ancient Egypt
          </div>

          <div className="question-selector-wrap clearfix">
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
          </div>

          <div className="d-flex justify-content-center btn-wrap align-items-start">
            <Button lg danger className="">
              End Quiz
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
