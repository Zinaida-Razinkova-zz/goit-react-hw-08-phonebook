import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./UserMenu.module.css";

const AuthNav = () => (
  <div>
    <NavLink to="/register" exact className={styles.navlink}>
      Sign up
    </NavLink>
    <NavLink to="/login" exact className={styles.navlink}>
      Log in
    </NavLink>
  </div>
);

export default AuthNav;
