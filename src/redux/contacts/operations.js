import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const fetchPhonebook = createAsyncThunk(
  'phonebook/fetchPhonebook',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.get('/contacts');
      return resp.data;
    } catch (error) {
      toast.error(`Ooops ${error.response.statusText}`);
      return rejectWithValue(error.message);
    }
  }
);

const addContact = createAsyncThunk(
  'phonebook/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const resp = await axios.post('/contacts', contact);
      toast.success(`${contact.name}'s contact successfully added`);
      return resp.data;
    } catch (error) {
      toast.error(`Ooops ${error.response.statusText}`);
      return rejectWithValue(error.message);
    }
  }
);

const deleteContact = createAsyncThunk(
  'phonebook/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const resp = await axios.delete(`/contacts/${contactId}`);
      toast.success(`Contact deleted`);
      return resp.data;
    } catch (error) {
      toast.error(`Ooops ${error.response.statusText}`);
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
      toast.success(`${contact.name}'s contact successfully updated`);
      return resp.data;
    } catch (error) {
      toast.error(`Ooops ${error.response.statusText}`);
      return rejectWithValue(error.message);
    }
  }
);

export { fetchPhonebook, addContact, deleteContact, updateContact };
