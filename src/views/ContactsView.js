import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter";
import ContactList from "../components/ContactList/ContactList";
import styles from "../App.module.css";

const ContactsView = () => (
  <div className={styles.appConteiner}>
    <h1 className={styles.text}>Phonebook</h1>
    <ContactForm />
    <h2 className={styles.text}>Contacts</h2>
    <Filter />
    <ContactList />
  </div>
);

export default ContactsView;
