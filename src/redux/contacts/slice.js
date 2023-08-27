import { createSlice } from '@reduxjs/toolkit';
import {
  fetchPhonebook,
  addContact,
  deleteContact,
  updateContact,
} from 'redux/contacts/operations';
import { initialContacts } from '../initialState';
import { logOut } from 'redux/auth/operations';

const handlePending = state => {
  state.error = null;
};

const handleRejected = (state, payload) => {
  state.error = payload;
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: initialContacts,
  extraReducers: builder =>
    builder
      .addCase(fetchPhonebook.fulfilled, (state, { payload }) => {
        state.contacts = payload;

        state.error = null;
      })
      .addCase(fetchPhonebook.pending, state => {
        handlePending(state);
      })
      .addCase(fetchPhonebook.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
      })
      .addCase(addContact.pending, state => {
        handlePending(state);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
      })
      .addCase(deleteContact.pending, state => {
        handlePending(state);
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
      })
      .addCase(updateContact.pending, state => {
        handlePending(state);
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        const contactIndex = state.contacts.findIndex(
          contact => contact.id === payload.id
        );

        state.contacts.splice(contactIndex, 1, payload);
      })
      .addCase(updateContact.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      }),
});

export default phonebookSlice.reducer;
