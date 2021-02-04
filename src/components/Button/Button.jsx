import React from "react";
import ChildrenPropType from "../PropType/ChildrenPropType";
import style from "./Button.module.css";

const Button = ({ children }) => {
  return (
    <button type="submit" className={style.button}>
      {children}
    </button>
  );
};

Button.propTypes = ChildrenPropType;
export default Button;
