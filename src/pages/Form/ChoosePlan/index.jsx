import React from "react";

import GridContainer from "../../../components/GridContainer";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Select from "../../../components/Select/Select";
import Option from "../../../components/Select/Option";

const ChoosePlan = () => {
  return (
    <div>
      <div className="form-wrap">
        <div className="title-wrap">
          <h3 className="title text-center flex-grow-1">Choose a Plan</h3>
        </div>

        <Select name="plan">
          <Option value="Standard">Standard</Option>
          <Option value="Other">Other</Option>
        </Select>

        <div className="mt-50">
          <div className="title-wrap">
            <h3 className="title text-center flex-grow-1">Payment Info</h3>
          </div>
          <form action="" className="mt-60">
            <Input placeholder="Credit Card Number" />

            <GridContainer rowClassName="gy-0">
              <div className="col-lg-6">
                <Input placeholder="First Name" />
              </div>
              <div className="col-lg-6">
                <Input placeholder="Last Name" />
              </div>
              <div className="col-lg-6">
                <Input placeholder="Expiry Date" />
              </div>
              <div className="col-lg-6">
                <Input placeholder="CVV" />
              </div>
            </GridContainer>

            <label className="custom-checkbox mt-20">
              Save card for future transactions
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <Button to="/multiple-choice" lg primary className="w-100 mt-30">
              Continue
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;
