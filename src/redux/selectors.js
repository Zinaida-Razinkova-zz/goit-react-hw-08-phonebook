import { createSelector } from "@reduxjs/toolkit";

const getFilter = (state) => state.contacts.filter;

const getAllContacts = (state) => state.contacts.items;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

// eslint-disable-next-line
export default {
  getFilter,
  getAllContacts,
  getVisibleContacts,
};
