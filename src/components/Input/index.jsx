import React, { useEffect, useState } from "react";
import clsx from "clsx";

const Input = ({
  textarea,
  maxCount,
  id,
  inputClassName,
  className,
  labelClassName,
  type = "text",
  label,
  placeholder,
  icon,
  ...rest
}) => {
  const [showPwd, setShowPwd] = useState(false);
  const [typeState, setTypeState] = useState();
  const [typedWords, setTypedWords] = useState(0);

  const onTextAreaChange = (e) => {
    const { value } = e.target;

    const num = value.split("").length;

    if (rest.onChange) {
      rest.onChange(e);
    }

    setTypedWords(num);
  };

  useEffect(() => {
    setTypeState(type);
  }, [type]);

  useEffect(() => {
    if (type === "password") {
      if (showPwd) {
        setTypeState("text");
      } else {
        setTypeState("password");
      }
    } else {
      setTypeState("text");
    }
  }, [type, setTypeState, showPwd]);

  return (
    <div className={clsx("custom-form-control", className)}>
      {label && (
        <label className={clsx(labelClassName)} htmlFor={id}>
          {label}
        </label>
      )}
      <div className="input">
        {type === "password" && (
          <img
            onClick={() => setShowPwd((prevState) => !prevState)}
            className="icon"
            src={`/assets/vectors/pwd-${
              typeState === "password" ? "show" : "hide"
            }.svg`}
            alt="pwd-show"
            title="Show password"
          />
        )}
        {maxCount && (
          <div className="max-count">
            {typedWords}/{maxCount}
          </div>
        )}
        {textarea ? (
          <textarea
            className={clsx(inputClassName)}
            {...rest}
            onChange={onTextAreaChange}
          ></textarea>
        ) : (
          <input
            className={clsx(inputClassName)}
            id={id}
            type={typeState}
            placeholder={placeholder}
            {...rest}
          />
        )}
        {icon && <img className="icon" src={icon} alt="icon" title="icon" />}
      </div>
    </div>
  );
};

export default Input;
