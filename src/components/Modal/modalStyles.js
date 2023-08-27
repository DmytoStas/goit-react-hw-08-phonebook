export const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export const buttonWrapStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
};

export const buttonStyle = {
  fontSize: '14px',
  width: '150px',
  height: '30px',
  marginTop: 1,
  '&:hover': {
    color: 'white',
    backgroundColor: '#1976d2',
  },
};
