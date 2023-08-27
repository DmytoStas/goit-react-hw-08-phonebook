import { Box, IconButton } from '@mui/material';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';

import { logOut } from 'redux/auth/operations';
import { buttonStyle, userMenuContainerStyle } from './userMenuStyles';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Box sx={userMenuContainerStyle}>
      <p>Welcome, {user.name}</p>
      <IconButton
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
        size="small"
        sx={buttonStyle}
      >
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};
export default UserMenu;
