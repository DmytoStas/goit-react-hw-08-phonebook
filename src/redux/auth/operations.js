import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const authHeader = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, { rejectWithValue }) => {
    try {
      const resp = await axios.post('/users/signup', credentials);
      authHeader.set(resp.data.token);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const resp = await axios.post('/users/login', credentials);
      authHeader.set(resp.data.token);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.post('/users/logout');
      authHeader.unset();
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      authHeader.set(persistedToken);
      const resp = await axios.get('/users/current');
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { signUp, logIn, logOut, refreshUser };
