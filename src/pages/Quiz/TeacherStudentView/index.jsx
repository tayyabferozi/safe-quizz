import clsx from "clsx";
import React from "react";
import Button from "../../../components/Button";

const activityData = [
  {
    time: "10:15 AM",
    task: "Answer Submitted",
    quesion: 5,
  },
  {
    time: "10:14 AM",
    task: "Answer Edited",
    quesion: 4,
  },
  {
    time: "10:12 AM",
    task: "Answer Submitted",
    quesion: 4,
  },
  {
    time: "10:14 AM",
    task: "Answer Edited",
    quesion: 4,
  },
  {
    time: "10:15 AM",
    warningText: "Copy/Paste Detected",
  },
  {
    time: "10:14 AM",
    task: "Answer Edited",
    quesion: 4,
  },
];

const TeacherStudentView = () => {
  return (
    <div id="teacher-screen-view">
      <div className="student-info">
        <img
          src="/assets/vectors/user-avatar.svg"
          alt="avatar"
          className="avatar"
        />

        <div className="text">
          <div className="left">
            <h5 className="fw-400">
              Evan <span className="fw-600">Fraser</span>
            </h5>

            <div className="d-flex justify-content-sm-start justify-content-center gap-10 mt-lg-0 mt-3">
              <div className="badge">Student</div>
              <div className="badge secondary">Grade 8</div>
            </div>

            <div className="mt-30">
              <div className="text-light-1">
                Currently in Quiz:{" "}
                <span className="fw-bold text-dark-1 fs-20">
                  The Solar System
                </span>
              </div>
            </div>
          </div>

          <div className="right">
            <Button primary>View Screen</Button>
            <Button danger>Remove</Button>
          </div>
        </div>
      </div>

      <h5 className="text-dark-1 mt-30">Evan Fraser’s Activity:</h5>

      <div className="table-container my-20 mb-50">
        <table style={{ minWidth: 740 }}>
          <tbody>
            {activityData.map((el, idx) => {
              return (
                <tr
                  className={clsx(el.warningText && "warning")}
                  key={"activiy" + idx}
                >
                  <td className="text-primary-1 fw-600">{el.time}</td>
                  <td className="text-light-1">
                    {el.task || (el.warningText && "Warning")}
                  </td>
                  {el.warningText ? (
                    <td colSpan={2}>{el.warningText}</td>
                  ) : (
                    <>
                      <td className="fw-bold text-dark-1">
                        Question {el.quesion}
                      </td>
                      <td>
                        <em className="text-primary-1 c-pointer link-underlined">
                          View Answer
                        </em>
                      </td>
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherStudentView;
