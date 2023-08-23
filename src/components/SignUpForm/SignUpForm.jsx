import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Grid, Paper, Typography, Button, Box } from '@mui/material';

import { signUp } from 'redux/auth/operations';
import { validationSchema } from './validationSchema';
import { NameField, EmailField, PasswordField } from 'components/FormFields';

const SignUpForm = () => {
  const initialValues = { name: '', email: '', password: '' };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(signUp(values));
    actions.resetForm();
  };

  return (
    <>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{
          minHeight: '80vh',
          mb: 2,
        }}
      >
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
            <Form autoComplete="on">
              <Field component={NameField} />

              <Field component={EmailField} />

              <Field component={PasswordField} />
              <Button type="submit">Sign Up</Button>
            </Form>
          </Formik>
        </Box>
      </Grid>
    </>
  );
};

export default SignUpForm;
