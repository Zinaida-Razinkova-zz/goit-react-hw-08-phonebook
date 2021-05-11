import axios from "axios";
import actions from "./actions";

const fetchContact = () => (dispatch) => {
  dispatch(actions.fetchContactRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    .catch((error) => dispatch(actions.fetchContactError(error.message)));
};
const addContact = ({ name, number }) => (dispatch) => {
  const contact = { name, number };

  dispatch(actions.addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch((error) => dispatch(actions.addContactError(error.message)));
};

const deleteContact = (contactId) => (dispatch) => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch((error) => dispatch(actions.deleteContactError(error.message)));
};

// eslint-disable-next-line
export default { addContact, deleteContact, fetchContact };
