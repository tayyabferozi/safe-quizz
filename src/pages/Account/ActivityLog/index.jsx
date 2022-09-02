import React from "react";
import Button from "../../../components/Button";
import GridContainer from "../../../components/GridContainer";
import Search from "../../../components/Search";

const logsData = [
  {
    by: "Admin",
    date: "04/03/2021",
    time: "4:32 PM",
  },
  {
    by: "Admin",
    date: "04/03/2021",
    time: "4:32 PM",
  },
  {
    by: "Admin",
    date: "04/03/2021",
    time: "4:32 PM",
  },
];

const ActivityLog = () => {
  return (
    <div>
      <h1>Activity Log</h1>

      <div className="custom-tabs-wrap my-30 d-flex justify-content-between gap-30 flex-wrap with-search">
        <div className="custom-tabs">
          <button className="tab active">History</button>
          <button className="tab">Upcoming</button>
          <button className="tab">All Logs</button>
        </div>

        <Search white placeholder="Search in All Users" />
      </div>

      <div className="mt-50">
        <GridContainer>
          {logsData.map((el, idx) => {
            const { by, date, time } = el;

            return (
              <div key={"exam" + idx} className="col-12">
                <div className="custom-card">
                  <div className="log-card">
                    <div className="left">
                      <div className="d-flex align-items-start gap-10">
                        <div className="fw-bold">
                          New Action Was Created By{" "}
                        </div>
                        <div className="badge">{by}</div>
                      </div>

                      <GridContainer>
                        <div className="col-lg-6">
                          <div className="label">Date</div>
                          <div className="fs-1600-14">{date}</div>
                        </div>
                        <div className="col-lg-6">
                          <div className="label">Time</div>
                          <div className="fs-1600-14">{time}</div>
                        </div>
                      </GridContainer>
                    </div>

                    <div className="center">
                      <div className="text-light-1">
                        This space displays the action details
                      </div>
                      <div className="text-light-1">
                        This space displays the action details
                      </div>
                      <div className="text-light-1">
                        This space displays the action details
                      </div>
                    </div>

                    <div className="right">
                      <Button primary>Details</Button>
                      <Button danger>Remove from Log</Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </GridContainer>

        <div className="d-flex justify-content-center mt-30">
          <Button primaryLight icon="/assets/vectors/chevron-down.svg">
            See all
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
