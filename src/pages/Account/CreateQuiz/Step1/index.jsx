import React, { useState } from "react";
import TimePicker from "react-time-picker";

import Button from "../../../../components/Button";
import GridContainer from "../../../../components/GridContainer";
import Input from "../../../../components/Input";
import Option from "../../../../components/Select/Option";
import Select from "../../../../components/Select/Select";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Step1 = ({ onNext }) => {
  const [formState, setFormState] = useState({
    start: "10:00",
    end: "10:00",
  });

  const dateChangeHandler = (name, value) => {
    setFormState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div className="form-container create-quiz-form mt-50">
      <form action="">
        <Input placeholder="Quiz Title" />
        <Input placeholder="Description" />
        <Select placeholder="Choose Grade">
          <Option key="Option 1">Option 1</Option>
          <Option key="Option 2">Option 2</Option>
        </Select>

        <GridContainer rowClassName="gy-1">
          <div className="col-sm-4">
            <Select placeholder="Date">
              {Array(31)
                .fill()
                .map((el, idx) => {
                  return (
                    <Option key={"date" + idx} value={idx + 1}>
                      {idx + 1}
                    </Option>
                  );
                })}
            </Select>
          </div>
          <div className="col-sm-4">
            <Select placeholder="Month">
              {months.map((el, idx) => {
                return (
                  <Option key={"month" + idx} value={el}>
                    {el}
                  </Option>
                );
              })}
            </Select>
          </div>
          <div className="col-sm-4">
            <Select placeholder="Year">
              {Array(30)
                .fill()
                .map((el, idx) => {
                  const year = new Date().getFullYear();

                  return (
                    <Option key={"year" + idx} value={idx + 1}>
                      {year + idx}
                    </Option>
                  );
                })}
            </Select>
          </div>
          <div className="col-sm-6">
            <div className="time-picker-container mb-3 mb-sm-0">
              <div className="label">STARTS</div>
              <TimePicker
                clearIcon={null}
                clockIcon={null}
                onChange={(e) => dateChangeHandler("start", e)}
                value={formState.start}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="time-picker-container">
              <div className="label">ENDS</div>
              <TimePicker
                clearIcon={null}
                clockIcon={null}
                onChange={(e) => dateChangeHandler("end", e)}
                value={formState.end}
              />
            </div>
          </div>
        </GridContainer>
        <label className="custom-checkbox mt-20">
          Save as template <input type="checkbox" />
          <span className="checkmark"></span>
        </label>

        <div className="mt-30 d-flex justify-content-end">
          <Button onClick={onNext} primary>
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
