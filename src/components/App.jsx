import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import Layout from './Layout';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const Phonebook = lazy(() => import('pages/Phonebook'));
const LogIn = lazy(() => import('components/LogIn'));
const SignUp = lazy(() => import('components/SignUp'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="/" element={<WelcomePage />}>
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/phonebook" component={<LogIn />} />
            }
          />

          <Route
            path="signup"
            element={
              <RestrictedRoute redirectTo="/phonebook" component={<SignUp />} />
            }
          />
        </Route>

        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={<Phonebook />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
