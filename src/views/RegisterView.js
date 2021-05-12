import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import styles from "../App.module.css";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <div className={styles.createFormAccount}>
          <h1 className={styles.createFormHeading}>Create your account</h1>
        </div>
        <form
          className={styles.createForm}
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <label className={styles.createFormLabel}>
            <span className={styles.createFormText}>Name</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.createFormLabel}>
            <span className={styles.createFormText}>Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.createFormLabel}>
            <span className={styles.createFormText}>Password</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <div className={styles.buttonCreateBlock}>
            <button className={styles.buttonCreateAccount} type="submit">
              Create account
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
