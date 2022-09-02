import clsx from "clsx";
import React from "react";

import Input from "../Input";

const Search = ({ className, placeholder, white, notifications }) => {
  return (
    <div className={clsx("custom-search-container", className, { white })}>
      <div className="search">
        <Input
          icon="/assets/vectors/search.svg"
          placeholder={placeholder || "Search keyword"}
        />
      </div>

      {notifications && (
        <div className="notifications">
          <div className="icon">
            <img src="/assets/vectors/notifications.svg" alt="notifications" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
