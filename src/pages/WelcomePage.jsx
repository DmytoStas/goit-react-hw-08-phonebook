import { Outlet } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome to the Phonebook</h1>
      <p>Log in/Sign up for managing your contacts</p>
      <Outlet />
    </div>
  );
};

export default WelcomePage;
