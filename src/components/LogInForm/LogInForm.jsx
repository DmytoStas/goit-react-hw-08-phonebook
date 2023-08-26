import { Formik, Form, Field } from 'formik';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Typography, Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { logIn } from 'redux/auth/operations';
import { validationSchema } from 'components/LogInForm/validationSchema';
import { EmailField, PasswordField } from 'components/FormFields';
import { DotsLoader } from 'components/Loader';
import { selectIsLoading } from 'redux/selectors';

const LogInForm = () => {
  const initialValues = { email: '', password: '' };
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Box
      sx={{
        py: 4,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography component="h1" variant="h5">
        Log in
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form style={{ textAlign: 'center' }}>
          <Field component={EmailField} />

          <Field component={PasswordField} />
          <Button
            disabled={isLoading}
            type="submit"
            variant="outlined"
            sx={{
              fontSize: '16px',
              width: '200px',
              height: '40px',
              marginTop: 2,
              '&:hover': {
                color: 'white',
                backgroundColor: '#1976d2',
              },
            }}
          >
            {isLoading ? <DotsLoader /> : 'Log In'}
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default LogInForm;
