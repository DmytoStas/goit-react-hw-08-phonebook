import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';

const AppBar = () => {
  return (
    <header>
      <AuthNav />
      <UserMenu />
    </header>
  );
};

export default AppBar;
