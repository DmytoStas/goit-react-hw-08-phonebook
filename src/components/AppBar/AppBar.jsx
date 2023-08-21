import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return <header>{!isLoggedIn ? <AuthNav /> : <UserMenu />}</header>;
};

export default AppBar;
