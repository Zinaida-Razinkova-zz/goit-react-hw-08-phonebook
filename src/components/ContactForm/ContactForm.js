import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import { connect } from "react-redux";

import operations from "../../redux/operations";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handlChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    // value - это намбер  в форме
  };

  handlSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    this.props.formSubmitHandler(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <>
        <form className={styles.formConteiner} onSubmit={this.handlSubmit}>
          <label className={styles.labelName} htmlFor="">
            <span className={styles.spanText}>Name</span>
            <input
              className={styles.inputName}
              onChange={this.handlChange}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label className={styles.labelName} htmlFor="">
            <span className={styles.spanText}>Number</span>
            <input
              className={styles.inputName}
              onChange={this.handlChange}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
            />
          </label>
          <button className={styles.buttonAddContact} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  formSubmitHandler: (name, number) =>
    dispatch(operations.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
