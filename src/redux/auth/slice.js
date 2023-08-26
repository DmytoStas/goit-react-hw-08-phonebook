import { createSlice } from '@reduxjs/toolkit';
import { initialAuth } from 'redux/initialState';
import { logOut, refreshUser, signUp, logIn } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuth,
  extraReducers: builder =>
    builder
      .addCase(signUp.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, actions) => {
        state.user = actions.payload.user;
        state.token = actions.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logIn.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, actions) => {
        state.user = actions.payload.user;
        state.token = actions.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      }),
});

export default authSlice.reducer;
