import { Formik, Form, Field } from 'formik';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Grid, Paper, Typography, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/operations';
import { validationSchema } from 'components/LogInForm/validationSchema';
import { EmailField, PasswordField } from 'components/FormFields';

const LogInForm = () => {
  const initialValues = { email: '', password: '' };
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
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
            Log in
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Field component={EmailField} />

              <Field component={PasswordField} />
              <Button type="submit">Log In</Button>
            </Form>
          </Formik>
        </Box>
      </Grid>
    </>
  );
};

export default LogInForm;
