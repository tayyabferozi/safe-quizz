import clsx from "clsx";
import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Search from "../../../components/Search";

const Sidebar = ({ admin }) => {
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

            <div className="badge mt-2">{admin ? "Admin" : "Teacher"}</div>
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
              {/* <img
                src="/assets/vectors/add.svg"
                alt="add"
                title="add"
                className="icon"
              /> */}
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="26.005"
                height="26"
                viewBox="0 0 26.005 26"
              >
                <path
                  id="Path_38080"
                  data-name="Path 38080"
                  d="M23.772,10.7H15.492V2.123a2.223,2.223,0,1,0-4.447,0V10.7H2.213a2.223,2.223,0,0,0,.01,4.447h8.832v8.528a2.223,2.223,0,1,0,4.447,0V15.149h8.279a2.223,2.223,0,1,0-.01-4.447Z"
                  transform="translate(0 0.1)"
                  fill="#8b9193"
                />
              </svg>
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
              {/* <img
                src="/assets/vectors/list.svg"
                alt="list"
                title="list"
                className="icon"
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="26"
                viewBox="0 0 38 26"
                className="icon"
              >
                <g id="list" transform="translate(-6.667 -12.667)">
                  <circle
                    id="Ellipse_152"
                    data-name="Ellipse 152"
                    cx="2"
                    cy="2"
                    r="2"
                    transform="translate(6.667 12.667)"
                  />
                  <circle
                    id="Ellipse_153"
                    data-name="Ellipse 153"
                    cx="2"
                    cy="2"
                    r="2"
                    transform="translate(6.667 23.667)"
                  />
                  <circle
                    id="Ellipse_154"
                    data-name="Ellipse 154"
                    cx="2"
                    cy="2"
                    r="2"
                    transform="translate(6.667 34.667)"
                  />
                  <rect
                    id="Rectangle_2251"
                    data-name="Rectangle 2251"
                    width="30"
                    height="4"
                    rx="0.94"
                    transform="translate(14.667 23.667)"
                  />
                  <rect
                    id="Rectangle_2252"
                    data-name="Rectangle 2252"
                    width="30"
                    height="4"
                    rx="0.94"
                    transform="translate(14.667 34.667)"
                  />
                  <rect
                    id="Rectangle_2253"
                    data-name="Rectangle 2253"
                    width="30"
                    height="4"
                    rx="0.94"
                    transform="translate(14.667 12.667)"
                  />
                </g>
              </svg>
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

        {!admin && (
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
        )}
      </div>
    </div>
  );
};

export default Sidebar;
