import React from "react";
import propTypes from "prop-types";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
import operations from "../../redux/operations";
import selectors from "../../redux/selectors";

const ContactList = ({ contacts, onDeleteButton }) => {
  return (
    <>
      <ul className={styles.listContactList}>
        {contacts.map((contact) => (
          <li className={styles.listStyle} key={contact.id}>
            {contact.name + " : " + contact.number}
            <button
              className={styles.buttonContactList}
              onClick={() => {
                onDeleteButton(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
  onDeleteButton: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: selectors.getVisibleContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteButton: (id) => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
