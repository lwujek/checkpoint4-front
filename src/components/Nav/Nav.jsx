import React from "react";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = () => {
  return (
    <header className={style.header}>
      <div className={style.home}>
        <Link className={style.link} to="/">
          Accueil
        </Link>
      </div>
      <div className={style.divTitle}>
        <Link className={style.link} to="/">
          <span className={style.title}>Jav Challenge</span>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
