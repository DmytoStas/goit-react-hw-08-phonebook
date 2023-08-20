import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchPhonebook = createAsyncThunk(
  'phonebook/fetchPhonebook',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.get('/contacts');
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const addContact = createAsyncThunk(
  'phonebook/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const resp = await axios.post('/contacts', contact);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const deleteContact = createAsyncThunk(
  'phonebook/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const resp = await axios.delete(`/contacts/${contactId}`);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const updateContact = createAsyncThunk(
  'phonebook/updateContact',
  async (contact, { rejectWithValue }) => {
    const { id, name, number } = contact;
    try {
      const resp = await axios.patch(`/contacts/${id}`, {
        name,
        number,
      });
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { fetchPhonebook, addContact, deleteContact, updateContact };
