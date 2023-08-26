import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Typography, Button, Box } from '@mui/material';

import { signUp } from 'redux/auth/operations';
import { validationSchema } from './validationSchema';
import { NameField, EmailField, PasswordField } from 'components/FormFields';
import { selectIsLoading } from 'redux/selectors';
import { DotsLoader } from 'components/Loader';

const SignUpForm = () => {
  const initialValues = { name: '', email: '', password: '' };
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(signUp(values));
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
        Sign up
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form style={{ textAlign: 'center' }}>
          <Field component={NameField} />

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
            {isLoading ? <DotsLoader /> : 'Sign Up'}
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default SignUpForm;
