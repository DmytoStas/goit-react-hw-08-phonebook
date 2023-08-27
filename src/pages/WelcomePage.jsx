import { Typography, Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

const WelcomePage = () => {
  const isAuth = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const handleStart = () => {
    isAuth ? navigate('/phonebook') : navigate('/login');
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        paddingTop: '73px',
        height: '200px',
      }}
    >
      <Typography
        component="h1"
        sx={{
          fontWeight: 700,
          fontSize: '30px',
        }}
      >
        Welcome to the Phonebook
      </Typography>
      <p>All contacts in one place</p>

      <Button
        onClick={handleStart}
        variant="outlined"
        sx={{
          fontSize: '14px',
          width: '200px',
          height: '30px',
          marginTop: 1,
          '&:hover': {
            color: 'white',
            backgroundColor: '#1976d2',
          },
        }}
      >
        {!isAuth ? 'Get started' : 'Get your contacts'}
      </Button>
    </Box>
  );
};

export default WelcomePage;
