import React from "react";
import Button from "../../../components/Button";
import CardMenu from "../../../components/CardMenu";
import GridContainer from "../../../components/GridContainer";
import Search from "../../../components/Search";

const companiesData = [
  {
    name: "Company Name",
    subType: "more info",
    date: "25 Jul 2022",
    timeStart: "11:00am",
    timeEnd: "12:00pm",
  },
  {
    name: "Company Name",
    subType: "more info",
    date: "25 Jul 2022",
    timeStart: "11:00am",
    timeEnd: "12:00pm",
  },
  {
    name: "Company Name",
    subType: "more info",
    date: "25 Jul 2022",
    timeStart: "11:00am",
    timeEnd: "12:00pm",
  },
  {
    name: "Company Name",
    subType: "more info",
    date: "25 Jul 2022",
    timeStart: "11:00am",
    timeEnd: "12:00pm",
  },
  {
    name: "Company Name",
    subType: "more info",
    date: "25 Jul 2022",
    timeStart: "11:00am",
    timeEnd: "12:00pm",
  },
  {
    name: "Company Name",
    subType: "more info",
    date: "25 Jul 2022",
    timeStart: "11:00am",
    timeEnd: "12:00pm",
  },
  {
    name: "Company Name",
    subType: "more info",
    date: "25 Jul 2022",
    timeStart: "11:00am",
    timeEnd: "12:00pm",
  },
  {
    name: "Company Name",
    subType: "more info",
    date: "25 Jul 2022",
    timeStart: "11:00am",
    timeEnd: "12:00pm",
  },
  {
    name: "Company Name",
    subType: "more info",
    date: "25 Jul 2022",
    timeStart: "11:00am",
    timeEnd: "12:00pm",
  },
];

const statsData = [
  {
    label: "Total Revenue",
    stats: "$3.5K",
  },
  {
    label: "Total Users",
    stats: "1578",
  },
  {
    label: "New Subscriptions",
    stats: "54",
    icon: "/assets/vectors/line-up.svg",
  },
  {
    label: "Unsubscribed",
    stats: "17",
    icon: "/assets/vectors/line-down.svg",
  },
];

const MyExams = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <div className="fw-bold text-dark-1 mt-70">Quick Stats</div>

      <GridContainer className="mt-20">
        {statsData.map((el, idx) => {
          return (
            <div className="col-lg-3" key={"stats_item" + idx}>
              <div className="custom-card h-100 p-40 py-1600-30 px-1600-20">
                <CardMenu
                  absolute
                  options={[
                    {
                      text: "Option 1",
                    },
                    {
                      text: "Option 2",
                    },
                  ]}
                />
                <p className="text-dark-1">{el.label}</p>

                <h3 className="d-flex align-items-center gap-10">
                  {el.stats}
                  {el.icon && <img src={el.icon} alt={"icon"} />}
                </h3>
              </div>
            </div>
          );
        })}
      </GridContainer>

      <div className="custom-tabs-wrap my-30 d-flex justify-content-between gap-30 flex-wrap with-search">
        <div className="custom-tabs">
          <button className="tab active">New Users</button>
          <button className="tab">Last Month</button>
          <button className="tab">All Users</button>
        </div>

        <Search white placeholder="Search in All Users" />
      </div>

      <div className="mt-50">
        <GridContainer>
          {companiesData.map((el, idx) => {
            const { name, questions, date, timeStart, timeEnd } = el;

            return (
              <div key={"exam" + idx} className="col-lg-4">
                <div className="custom-card">
                  <div className="d-flex justify-content-between">
                    <div className="fw-bold">{name}</div>
                    <CardMenu
                      options={[
                        {
                          text: "Option 1",
                        },
                        {
                          text: "Option 2",
                        },
                      ]}
                    />
                  </div>
                  <GridContainer className="mt-2" rowClassName="gy-10 gx-0">
                    <div className="col-12">
                      <div className="label">Questions</div>
                      <div className="fs-14">{questions}</div>
                    </div>
                    <div className="col-6">
                      <div className="label">Date</div>
                      <div className="fs-14">{date}</div>
                    </div>
                    <div className="col-6">
                      <div className="label">Time</div>
                      <div className="fs-14">
                        {timeStart} - {timeEnd}
                      </div>
                    </div>
                  </GridContainer>

                  <div className="actions">
                    <button className="edit">Manage Subscription</button>
                    <button className="delete">Remove</button>
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

export default MyExams;
