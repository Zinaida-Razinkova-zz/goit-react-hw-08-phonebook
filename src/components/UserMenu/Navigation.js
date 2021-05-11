import React from "react";
import { NavLink } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";
import { connect } from "react-redux";

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact>
      Главная
    </NavLink>

    {isAuthenticated && (
      <NavLink to="/contacts" exact>
        Контакты
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
