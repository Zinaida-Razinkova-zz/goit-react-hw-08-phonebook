import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import styles from "../App.module.css";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <div className={styles.loginFormPhonebook}>
          <h1 className={styles.loginFormHeading}>Log in to Phonebook</h1>
        </div>
        <form
          className={styles.loginForm}
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <label className={styles.LoginFormLabel}>
            <span className={styles.LoginFormText}>Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.LoginFormLabel}>
            <span className={styles.LoginFormText}>Password</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <div className={styles.buttonLoginBlock}>
            <button className={styles.buttonLoginForm} type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
