import { Link, NavList } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <NavList>
      <li>
        <Link to="/login">Log in</Link>
      </li>
      <li>
        <Link to="/signup">Sign up</Link>
      </li>
    </NavList>
  );
};

export default AuthNav;
