import React from "react";

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
];

const TeacherScreenView = () => {
  return (
    <div id="teacher-screen-view">
      <h5 className="text-dark-1">Evan Fraser’s Screen:</h5>

      <div className="players-screen">
        <img
          src="/assets/imgs/screen-img.png"
          alt="screen"
          className="screen max-width-100"
        />
      </div>

      <h5 className="text-dark-1 mt-30">Evan Fraser’s Activity:</h5>

      <div className="table-container my-20 mb-50">
        <table style={{ minWidth: 740 }}>
          <tbody>
            {activityData.map((el, idx) => {
              return (
                <tr key={"activiy" + idx}>
                  <td className="text-primary-1 fw-600">{el.time}</td>
                  <td className="text-light-1">{el.task}</td>
                  <td className="fw-bold text-dark-1">Question {el.quesion}</td>
                  <td>
                    <em className="text-primary-1 c-pointer link-underlined">
                      View Answer
                    </em>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherScreenView;
