import clsx from "clsx";
import React from "react";
import Button from "../Button";

const PricingItem = ({ dark, inverted, em, name, price, listItems }) => {
  return (
    <div className={clsx({ em, dark, inverted }, "pricing-item")}>
      <div className="name">{name}</div>

      <div className="price-wrap">
        <div className="price">{price}</div>
        <div>Per Teacher</div>
      </div>

      <div className="features-list">
        {listItems &&
          listItems.map((el, idx) => {
            return (
              <div className="item" key={"feature" + name + { idx }}>
                {el}
              </div>
            );
          })}
      </div>

      <div className="btn-wrap">
        <Button primary>Get Started</Button>
      </div>
    </div>
  );
};

export default PricingItem;
