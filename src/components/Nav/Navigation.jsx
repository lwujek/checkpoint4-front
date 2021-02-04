import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [style, setStyle] = React.useState("navigationCheckbox");

  const handleInputChange = (event) => {
    setOpen(!isOpen);
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    if (value === true) {
      setStyle("navigationCheckboxchecked");
    } else {
      setStyle("navigationCheckbox");
    }
    console.log(event.target.checked);
  };

  return (
    <div className={styles.navigation}>
      <label htmlFor="navi" className={styles.navigationBtn}>
        <input
          type="checkbox"
          className={styles[style]}
          checked={isOpen}
          onChange={handleInputChange}
          id="navi"
        />
        <span className={styles.navigationIcon} />
      </label>
      <div className={styles.navigationBg} />
      <nav className={styles.nav}>
        <ul className={styles.navigationListe}>
          <li className={styles.navigationItem}>
            <div className={styles.liens}>
              <Link to="/">Accueil</Link>
            </div>
          </li>
          <li className={styles.navigationItem}>
            <div className={styles.liens}>
              <Link to="/inscription">Inscription</Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
