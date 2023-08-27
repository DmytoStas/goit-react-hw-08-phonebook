import { Formik, Form, Field } from 'formik';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Typography, Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { logIn } from 'redux/auth/operations';
import { validationSchema } from 'components/LogInForm/validationSchema';
import { EmailField, PasswordField } from 'components/FormFields';
import { DotsLoader } from 'components/Loader';
import { selectIsLoading } from 'redux/selectors';
import {
  avatarStyle,
  formSubmButnStyle,
  authFormContainerStyle,
} from '../authFormsStyles';

const LogInForm = () => {
  const initialValues = { email: '', password: '' };
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Box sx={authFormContainerStyle}>
      <Avatar sx={avatarStyle}>
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
            sx={formSubmButnStyle}
          >
            {isLoading ? <DotsLoader /> : 'Log In'}
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default LogInForm;
