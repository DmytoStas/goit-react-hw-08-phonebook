import { createSlice } from '@reduxjs/toolkit';
import {
  fetchPhonebook,
  addContact,
  deleteContact,
} from 'redux/contacts/operations';
import { initialContacts } from '../initialState';
import { logOut } from 'redux/auth/operations';

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
        state.error = null;
      })
      .addCase(fetchPhonebook.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
      })
      .addCase(addContact.pending, state => {
        state.error = null;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
      })
      .addCase(deleteContact.pending, state => {
        state.error = null;
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
      }),
});

export default phonebookSlice.reducer;
