import React from "react";
import ChildrenPropType from "../PropType/ChildrenPropType";
import style from "./Filtre.module.css";

const Filtre = ({ children }) => {
  return (
    <button type="submit" className={style.button}>
      {children}
    </button>
  );
};

Filtre.propTypes = ChildrenPropType;
export default Filtre;
