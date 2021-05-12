import React from "react";
import propTypes from "prop-types";
import styles from "./Filter.module.css";
import actions from "../../redux/actions";
import { connect } from "react-redux";
import selectors from "../../redux/selectors";

function Filter({ value, onChange }) {
  return (
    <>
      <label>
        <span>Find contacts by name</span>
        <input
          className={styles.inputFilter}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
}

Filter.propTypes = {
  onChange: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: selectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(actions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
