import React from "react";
import styles from "../App.module.css";
import Phonebook from "../views/Phonebook.jpg";

const HomeView = () => (
  <div>
    <section className={styles.homeBlock}>
      <h1 className={styles.texthome}>Phonebook</h1>
      <img className={styles.img} src={Phonebook} alt="Phonebook" width="150" />
      <p className={styles.texthome}>
        The long awaited app is available! Phonebook allows you to completely
        replace standard phone and contact manager. Phonebook makes access to
        call history, contacts, groups and favorites is incredibly simple and
        pleasant. The controls are designed so that all actions can be do it
        with one hand - you don't have to reach the top of the screen, it will
        become more convenient to use the phone. The phonebook supports T9 and
        is easy customizable! Phonebook works faster and better than all
        existing ones analogs, and also offers a completely new way of managing
        contacts - viewing and editing a contact occurs in one place, without
        opening new windows.
      </p>
    </section>
  </div>
);

export default HomeView;
