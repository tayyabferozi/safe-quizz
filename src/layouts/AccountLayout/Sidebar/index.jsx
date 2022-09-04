import clsx from "clsx";
import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Search from "../../../components/Search";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div id={"sidebar-wrap"} className={clsx(isActive && "active")}>
      <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      <div className="toggler" onClick={toggleSidebar}>
        <img src="/assets/imgs/toggle-menu.png" alt="toggler" />
      </div>
      <div id="sidebar">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h5 className="fw-400">
              Good Evening, <strong>Liano!</strong>
            </h5>

            <div className="badge mt-2">Teacher</div>
          </div>

          <img
            src="/assets/vectors/user-avatar.svg"
            alt="avatar"
            title="avatar"
            className="avatar"
          />
        </div>

        <Search className="mt-30" notifications />

        <div className="nav full-width">
          <NavLink to="/create-quiz" className="item">
            <div className="icon-container">
              <img
                src="/assets/vectors/add.svg"
                alt="add"
                title="add"
                className="icon"
              />
            </div>

            <div className="text">
              <div className="fw-600">Create New Quiz</div>

              <div className="fs-12 mt-1">
                Lorem ipsum dolor sit amet, consetetur
              </div>
            </div>
          </NavLink>
          <NavLink to="/my-exams" className="item">
            <div className="icon-container">
              <img
                src="/assets/vectors/list.svg"
                alt="list"
                title="list"
                className="icon"
              />
            </div>

            <div className="text">
              <div className="fw-600">My Exams</div>

              <div className="fs-12 mt-1">
                Lorem ipsum dolor sit amet, consetetur
              </div>
            </div>
          </NavLink>
          <NavLink to="/account-settings" className="item">
            <div className="icon-container">
              <img
                src="/assets/vectors/settings.svg"
                alt="settings"
                title="settings"
                className="icon"
              />
            </div>

            <div className="text">
              <div className="fw-600">Settings</div>

              <div className="fs-12 mt-1">
                Lorem ipsum dolor sit amet, consetetur
              </div>
            </div>
          </NavLink>
        </div>

        <div className="upgrade-wrap">
          <Link to="/pricing" className="upgrade">
            <div className="text">
              <h5>Upgrade to PRO</h5>

              <p className="fs-12 mt-1">
                Lorem ipsum dolor sit amet, consetetur
              </p>
            </div>

            <img src="/assets/vectors/crown.svg" alt="crown" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
