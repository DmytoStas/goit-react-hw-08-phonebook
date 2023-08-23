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
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            background:
              'linear-gradient(185deg,hsl(258deg 62% 33%) 0%,hsl(263deg 65% 20%) 14%,hsl(265deg 60% 12%) 45%,hsl(263deg 49% 8%) 100%)',
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
          mb: 2,
        }}
      >
        <Toolbar component="nav">
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default AppBarHeader;
