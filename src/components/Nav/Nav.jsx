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
      <div className={style.cart}>
        <Link className={style.link} to="/inscription">
          Inscription
        </Link>
      </div>
    </header>
  );
};

export default Nav;
