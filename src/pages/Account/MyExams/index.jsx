import React from "react";
import GridContainer from "../../../components/GridContainer";

const examsData = [
  {
    name: "Ancient Egypt",
    questions: 20,
    date: "25 Jul 2022",
    timeStart: "11:00am",
    timeEnd: "12:00pm",
  },
  {
    name: "The Solar System",
    questions: 25,
    date: "25 Jul 2022",
    timeStart: "11:00am",
    timeEnd: "12:00pm",
  },
  {
    name: "The Periodic Table",
    questions: 50,
    date: "25 Jul 2022",
    timeStart: "11:00am",
    timeEnd: "12:00pm",
  },
];

const statsData = [
  {
    label: "Active Exams",
    stats: "3",
  },
  {
    label: "Total Exams",
    stats: "120",
  },
  {
    label: "Passing Percentage",
    stats: "89%",
    icon: "/assets/vectors/line-up.svg",
  },
  {
    label: "Failing Percentage",
    stats: "11%",
    icon: "/assets/vectors/line-down.svg",
  },
];

const MyExams = () => {
  return (
    <div>
      <h1>My Exams</h1>

      <div className="custom-tabs-wrap my-30">
        <div className="custom-tabs">
          <button className="tab active">Today</button>
          <button className="tab">Upcoming</button>
          <button className="tab">Previous</button>
        </div>
      </div>

      <GridContainer rowClassName="gx-1600-20">
        {examsData.map((el, idx) => {
          const { name, questions, date, timeStart, timeEnd } = el;

          return (
            <div key={"exam" + idx} className="col-lg-4 col-md-6">
              <div className="custom-card">
                <div className="fw-bold">{name}</div>
                <GridContainer className="mt-2" rowClassName="gy-10 gx-0">
                  <div className="col-12">
                    <div className="label">Questions</div>
                    <div className="fs-14">{questions}</div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex flex-wrap gap-10 justify-content-between">
                      <div>
                        <div className="label">Date</div>
                        <div className="fs-14">{date}</div>
                      </div>
                      <div>
                        <div className="label">Time</div>
                        <div className="fs-14">
                          {timeStart} - {timeEnd}
                        </div>
                      </div>
                    </div>
                  </div>
                </GridContainer>

                <div className="actions">
                  <button className="edit">Edit Quiz</button>
                  <button className="delete">Delete Quiz</button>
                </div>
              </div>
            </div>
          );
        })}
      </GridContainer>

      <div className="mt-50">
        <div className="fw-bold text-dark-1">Quick Stats</div>

        <GridContainer className="mt-20">
          {statsData.map((el, idx) => {
            return (
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                key={"stats_item" + idx}
              >
                <div className="custom-card stats-card">
                  <p className="text-dark-1">{el.label}</p>

                  <h3 className="d-flex align-items-center gap-10">
                    {el.stats}
                    {el.icon && <img src={el.icon} alt={"icon"} />}
                  </h3>
                </div>
              </div>
            );
          })}
          <div></div>
        </GridContainer>
      </div>
    </div>
  );
};

export default MyExams;
