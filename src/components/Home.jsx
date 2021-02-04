/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import Button from "./Button/Button";
import Filtre from "./Filtre/Filtre";
import Card from "./Card/Card";
import style from "./Home.module.css";

const Home = () => {
  const [participants, setParticipants] = useState([]);
  const [url, setUrl] = useState("/");

  useEffect(() => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(`${REACT_APP_SERVER_ADDRESS}${url}`)
      .then((res) => res.data)
      .then((data) => {
        setParticipants(data);
      });
  }, [url]);

  return (
    <div>
      <Nav />
      <div className={style.header}>
        <h1>Tournoi de Colchide</h1>
        <div className="align">
          <h2>Prêt.e à détrôner nos champion.ne.s ?</h2>
          <div className={style.button}>
            <Link to="/inscription">
              <Button>Je relève le défi</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={style.section} />
      <div className={style.section2}>
        <div className={style.bloctxt}>
          <h2>Les participants</h2>
          <div className={style.align}>
            <div onClick={() => setUrl("/podium")}>
              <Filtre>Podium</Filtre>
            </div>
            <div onClick={() => setUrl("/triche")}>
              <Filtre>Tricheurs</Filtre>
            </div>
            <div onClick={() => setUrl("/velocite")}>
              <Filtre>Rapides</Filtre>
            </div>
            <div onClick={() => setUrl("/lourd")}>
              <Filtre>Poids lourds</Filtre>
            </div>
          </div>
          {participants.map((participant) => (
            <Card participant={participant} key={participant.idparticipants} />
          ))}
          <div className={style.button}>
            <Link to="/inscription">
              <Button>Et vous ?</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
