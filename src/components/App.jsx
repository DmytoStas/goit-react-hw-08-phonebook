import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import WelcomePage from 'pages/WelcomePage';
import SignUp from 'pages/SIgnUp';
import LogIn from 'pages/LogIn';
import Phonebook from 'pages/Phonebook';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/phonebook" element={<Phonebook />} />
      </Route>
    </Routes>
  );
};

export default App;
