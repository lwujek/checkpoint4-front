import React from "react";
import axios from "axios";
import styles from "./Form.module.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstnames: "",
      names: "",
      cities: "",
    };
    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleChangeField2 = this.handleChangeField2.bind(this);
    this.handleChangeField3 = this.handleChangeField3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeField = (event) => {
    this.setState({ names: event.target.value });
  };

  handleChangeField2 = (event) => {
    this.setState({ firstnames: event.target.value });
  };

  handleChangeField3 = (event) => {
    this.setState({ cities: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { firstnames } = this.state;
    const { names } = this.state;
    const { cities } = this.state;

    const participant = {
      firstname: firstnames,
      name: names,
      city: cities,
      points: null,
      categories_idcategories: null,
      url_picture: null,
      idcategories: null,
    };
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .post(`${REACT_APP_SERVER_ADDRESS}/edit`, { participant })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    const { firstnames } = this.state;
    const { names } = this.state;
    const { cities } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={styles.input}>
          <label htmlFor="input" className={styles.label}>
            Nom
            <input
              className={styles.simple}
              type="text"
              id="input"
              name="input"
              placeholder="test"
              value={names}
              onChange={this.handleChangeField}
            />
          </label>
          <label htmlFor="input" className={styles.label}>
            Prénom
            <input
              className={styles.simple}
              type="text"
              id="input2"
              name="input"
              placeholder="test"
              value={firstnames}
              onChange={this.handleChangeField2}
            />
          </label>
          <label htmlFor="input" className={styles.label}>
            Cité
            <input
              className={styles.simple}
              type="text"
              id="input3"
              name="input"
              placeholder="test"
              value={cities}
              onChange={this.handleChangeField3}
            />
          </label>
          <button className={styles.button} type="submit">
            Valider
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
