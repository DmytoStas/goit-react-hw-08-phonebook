import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/signup">Sign up</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log in</NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
