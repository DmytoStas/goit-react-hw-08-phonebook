import { createSlice } from '@reduxjs/toolkit';
import { initialAuth } from 'redux/initialState';
import { logOut, refreshUser, signUp, logIn } from './operations';

const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};

const handleLogOrSignInFulfilled = (state, actions) => {
  state.user = actions.payload.user;
  state.token = actions.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
};

const handleLogOrSignInRejected = (state, payload) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuth,
  extraReducers: builder =>
    builder
      .addCase(signUp.pending, state => {
        handlePending(state);
      })
      .addCase(signUp.fulfilled, (state, actions) => {
        handleLogOrSignInFulfilled(state, actions);
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        handleLogOrSignInRejected(state, payload);
      })
      .addCase(logIn.pending, state => {
        handlePending(state);
      })
      .addCase(logIn.fulfilled, (state, actions) => {
        handleLogOrSignInFulfilled(state, actions);
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        handleLogOrSignInRejected(state, payload);
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
