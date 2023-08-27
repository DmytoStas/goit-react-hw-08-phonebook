import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { selectIsLoggedIn } from 'redux/selectors';
import { Link } from 'components/AuthNav/AuthNav.styled';
import { Typography } from '@mui/material';

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
          <Link to="/">
            <Typography
              component={'span'}
              sx={{
                marginLeft: '22px',
                fontWeight: '700',
                letterSpacing: '3px',
              }}
            >
              Phonebook
            </Typography>
          </Link>
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default AppBarHeader;
