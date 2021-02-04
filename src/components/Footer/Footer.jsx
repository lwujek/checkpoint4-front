import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.divTeam}>
        <span className={style.team}>WCS / Checkpoint 4</span>
      </div>
      <div className={style.divCopyright}>
        <span className={style.copyrightText}>Copyright</span>
        <span>2021</span>
      </div>
    </footer>
  );
};

export default Footer;
