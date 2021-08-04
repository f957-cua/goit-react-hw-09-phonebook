import { createSelector } from "reselect";

const getAllContacts = (state) => state.app.contacts;

const getLoadingStatus = (state) => state.app.loading;

const getContactList = (state) => state.app;

const getFilter = (state) => state.app.filter;

const filledContactsCount = (state) => {
  const contacts = getAllContacts(state);
  return contacts.length;
};

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export default {
  getAllContacts,
  getLoadingStatus,
  getContactList,
  getFilter,
  getVisibleContacts,
  filledContactsCount,
};
