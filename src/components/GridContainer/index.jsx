import React from "react";
import clsx from "clsx";

const GridContainer = ({ className, rowClassName = "", children }) => {
  return (
    <div className={clsx("container-fluid px-0", className)}>
      <div
        className={clsx(
          "row",
          rowClassName,
          !rowClassName.includes("gy-") && "gy-4",
          !rowClassName.includes("gx-") && "gx-4"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default GridContainer;
