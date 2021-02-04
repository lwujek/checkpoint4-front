import React from "react";
import Nav from "./Nav/Nav";
import Form from "./Form/Form";
import style from "./Inscription.module.css";

const Inscription = () => {
  return (
    <div>
      <Nav />
      <div className={style.header}>
        <h1>Deviens un.e champion.ne !</h1>
      </div>
      <Form />
    </div>
  );
};

export default Inscription;
