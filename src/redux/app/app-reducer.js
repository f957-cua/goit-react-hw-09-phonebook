import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactError,
  fetchContactSuccess,
  fetchContactRequest,
  CHANGE_FILTER,
} from "./app-actions";

const contacts = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
});

const filter = createReducer("", {
  [CHANGE_FILTER]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContactError]: (_, { payload }) => alert(payload),
  [deleteContactError]: (_, { payload }) => alert(payload),
  [addContactError]: (_, { payload }) => alert(payload),
});

export default combineReducers({
  contacts,
  filter,
  loading,
  error,
});
