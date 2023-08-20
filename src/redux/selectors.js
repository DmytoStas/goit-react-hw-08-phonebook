export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectContacts = state => state.phonebook.contacts;

export const selectLoading = state => state.phonebook.isLoading;

export const selectError = state => state.phonebook.error;

export const selectFilter = state => state.filter;
