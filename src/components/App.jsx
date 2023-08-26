import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import Layout from './Layout';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const Phonebook = lazy(() => import('pages/Phonebook'));
const LogIn = lazy(() => import('pages/LogIn'));
const SignUp = lazy(() => import('pages/SignUp'));
const NotFound = lazy(() => import('./NotFound'));

const defaultTheme = createTheme();

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/phonebook" component={<LogIn />} />
            }
          />

          <Route
            path="/signup"
            element={
              <RestrictedRoute redirectTo="/phonebook" component={<SignUp />} />
            }
          />

          <Route
            path="/phonebook"
            element={
              <PrivateRoute redirectTo="/login" component={<Phonebook />} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
