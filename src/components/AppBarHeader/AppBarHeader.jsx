import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

const AppBarHeader = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const theme = createTheme({
    breakpoints: {
      values: {
        lg: 1200,
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            background:
              'linear-gradient(95deg, rgba(15,22,66,1) 0%, rgba(41,13,57,1) 26%, rgba(43,16,78,1) 50%, rgba(37,12,65,1) 78%, rgba(38,8,68,1) 100%)',
            borderBottom: '1.5px solid #53406c',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{
          position: 'relative',
          zIndex: '1',
          height: '60px',
        }}
      >
        <Toolbar
          component="nav"
          sx={{
            padding: '0 8px',
          }}
        >
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default AppBarHeader;
