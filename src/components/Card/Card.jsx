/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

export default function Card({ participant }) {
  const { firstname, name, city, points, url_picture } = participant;
  return (
    <div className={styles.cardBody}>
      <img className={styles.circle} src={url_picture} alt="profilpic" />
      <div className={styles.cardDescription}>
        <h3 className={styles.participantName}>
          {firstname} {name}
        </h3>
        <h4 className={styles.participantProfil}>Cité : {city}</h4>
        <h4 className={styles.participantProfil}>Victoires : {points}</h4>
      </div>
    </div>
  );
}

Card.propTypes = {
  participant: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    idparticipants: PropTypes.number.isRequired,
    url_picture: PropTypes.string.isRequired,
  }).isRequired,
};
