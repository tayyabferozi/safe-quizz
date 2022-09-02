import React, { useState, useRef } from "react";
import clsx from "clsx";

import useOnClickOutside from "../../hooks/useOnClickOutside";

const CardMenu = ({ absolute, options }) => {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef(null);

  useOnClickOutside(menuRef, () => {
    setIsActive(false);
  });

  return (
    <div
      className={clsx("card-menu", { absolute })}
      ref={menuRef}
      onClick={() => setIsActive(!isActive)}
    >
      <div className={clsx("icon")}>
        <img src="/assets/vectors/menu.svg" alt="menu" className="icon" />
      </div>

      <div className={clsx("menu-options", isActive && "active")}>
        {options.map((el, idx) => {
          return (
            <div className="option" key={"option" + Math.random() + idx}>
              {el.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardMenu;
