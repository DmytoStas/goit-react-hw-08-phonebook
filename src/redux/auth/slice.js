import { createSlice } from '@reduxjs/toolkit';
import { initialAuth } from 'redux/initialState';
import { refreshUser, signUp } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuth,
  extraReducers: {
    [signUp.fulfilled](state, actions) {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
  },
});

export default authSlice.reducer;
