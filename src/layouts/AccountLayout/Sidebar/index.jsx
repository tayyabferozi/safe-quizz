import clsx from "clsx";
import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Search from "../../../components/Search";

const Sidebar = ({ admin, withLog, withSchedule }) => {
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
              {admin ? (
                <>
                  <div className="fw-600">Create Maintenance Schedule</div>

                  <div className="fs-12 mt-1">
                    Lorem ipsum dolor sit amet, consetetur
                  </div>
                </>
              ) : (
                <>
                  <div className="fw-600">Create New Quiz</div>

                  <div className="fs-12 mt-1">
                    Lorem ipsum dolor sit amet, consetetur
                  </div>
                </>
              )}
            </div>
          </NavLink>
          <NavLink to="/my-exams" className="item">
            {!withLog && !withSchedule && (
              <>
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
              </>
            )}

            {withLog && (
              <>
                <div className="icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                  >
                    <rect
                      id="Rectangle_2279"
                      data-name="Rectangle 2279"
                      width="64"
                      height="64"
                      rx="15"
                      fill="#e9ebeb"
                      opacity="0.6"
                    />
                    <g
                      id="Group_36018"
                      data-name="Group 36018"
                      transform="translate(8 18.95)"
                    >
                      <path
                        id="Path_38137"
                        data-name="Path 38137"
                        d="M62.193,63A11.29,11.29,0,1,0,73.486,74.293,11.217,11.217,0,0,0,62.193,63Zm6.945,14.088H60.685V68.746a1.1,1.1,0,0,1,2.21,0v6.133h6.243a1.1,1.1,0,0,1,0,2.21Z"
                        transform="translate(-37.696 -60.464)"
                        fill="none"
                        stroke="#8b9193"
                        stroke-width="0.6"
                      />
                      <path
                        id="Path_38138"
                        data-name="Path 38138"
                        d="M38,13.823v0ZM27.63.691A1.113,1.113,0,0,0,27.8.1a1.108,1.108,0,0,0-1.1-1.1H22.436a1.108,1.108,0,0,0-1.1,1.1,1.073,1.073,0,0,0,.155.558,13.509,13.509,0,0,0-6.53,22.718A13.5,13.5,0,0,0,38,13.829,13.518,13.518,0,0,0,27.63.691Zm4.851,21.122A11.29,11.29,0,1,1,16.514,5.845,11.29,11.29,0,1,1,32.481,21.812Z"
                        fill="#8b9193"
                        stroke="#8b9193"
                        stroke-width="0.6"
                      />
                      <path
                        id="Path_38139"
                        data-name="Path 38139"
                        d="M237.425,156.226H231.21v-6.1a1.122,1.122,0,0,0-1.066-1.133,1.1,1.1,0,0,0-1.144,1.1v7.4a.938.938,0,0,0,.939.939h7.514a1.1,1.1,0,0,0,1.1-1.144A1.129,1.129,0,0,0,237.425,156.226Z"
                        transform="translate(-205.956 -141.701)"
                        fill="#8b9193"
                        stroke="#8b9193"
                        stroke-width="0.6"
                      />
                    </g>
                  </svg>
                </div>

                <div className="text">
                  <div className="fw-600">Activity Log</div>

                  <div className="fs-12 mt-1">
                    Lorem ipsum dolor sit amet, consetetur
                  </div>
                </div>
              </>
            )}

            {withSchedule && (
              <>
                <div className="icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                  >
                    <rect
                      id="Rectangle_2279"
                      data-name="Rectangle 2279"
                      width="64"
                      height="64"
                      rx="15"
                      fill="#e9ebeb"
                      opacity="0.6"
                    />
                    <g
                      id="Group_36018"
                      data-name="Group 36018"
                      transform="translate(8 18.95)"
                    >
                      <path
                        id="Path_38137"
                        data-name="Path 38137"
                        d="M62.193,63A11.29,11.29,0,1,0,73.486,74.293,11.217,11.217,0,0,0,62.193,63Zm6.945,14.088H60.685V68.746a1.1,1.1,0,0,1,2.21,0v6.133h6.243a1.1,1.1,0,0,1,0,2.21Z"
                        transform="translate(-37.696 -60.464)"
                        fill="none"
                        stroke="#8b9193"
                        stroke-width="0.6"
                      />
                      <path
                        id="Path_38138"
                        data-name="Path 38138"
                        d="M38,13.823v0ZM27.63.691A1.113,1.113,0,0,0,27.8.1a1.108,1.108,0,0,0-1.1-1.1H22.436a1.108,1.108,0,0,0-1.1,1.1,1.073,1.073,0,0,0,.155.558,13.509,13.509,0,0,0-6.53,22.718A13.5,13.5,0,0,0,38,13.829,13.518,13.518,0,0,0,27.63.691Zm4.851,21.122A11.29,11.29,0,1,1,16.514,5.845,11.29,11.29,0,1,1,32.481,21.812Z"
                        fill="#8b9193"
                        stroke="#8b9193"
                        stroke-width="0.6"
                      />
                      <path
                        id="Path_38139"
                        data-name="Path 38139"
                        d="M237.425,156.226H231.21v-6.1a1.122,1.122,0,0,0-1.066-1.133,1.1,1.1,0,0,0-1.144,1.1v7.4a.938.938,0,0,0,.939.939h7.514a1.1,1.1,0,0,0,1.1-1.144A1.129,1.129,0,0,0,237.425,156.226Z"
                        transform="translate(-205.956 -141.701)"
                        fill="#8b9193"
                        stroke="#8b9193"
                        stroke-width="0.6"
                      />
                    </g>
                  </svg>
                </div>

                <div className="text">
                  <div className="fw-600">Maintenance Schedule</div>

                  <div className="fs-12 mt-1">
                    Lorem ipsum dolor sit amet, consetetur
                  </div>
                </div>
              </>
            )}
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
