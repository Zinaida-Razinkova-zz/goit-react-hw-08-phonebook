import React from "react";
import { NavLink } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";
import { connect } from "react-redux";
import styles from "./UserMenu.module.css";

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact className={styles.navlink}>
      Home
    </NavLink>

    {isAuthenticated && (
      <NavLink to="/contacts" exact className={styles.navlink}>
        Phonebook
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
