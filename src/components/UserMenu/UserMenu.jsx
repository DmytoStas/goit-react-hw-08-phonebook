import { Box, IconButton } from '@mui/material';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import LogoutIcon from '@mui/icons-material/Logout';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginLeft: 'auto',
      }}
    >
      <p>Welcome, {user.name}</p>
      <IconButton
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
        size="small"
        sx={{
          width: '35px',
          height: '35px',
          color: 'white',
          backgroundColor: 'transparent',
          '&:hover': {
            color: '#1976d2',
          },
        }}
      >
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};
export default UserMenu;
