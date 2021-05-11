import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import defaultAvatar from "./default-avatar.jpg";
import styles from "./UserMenu.module.css";

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.userMenuBlock}>
    <img className={styles.imgUser} src={avatar} alt="" width="32" />
    <span>Welcome, {name}</span>
    <button className={styles.buttonLogOut} type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);
const mapStateToProps = (state) => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
