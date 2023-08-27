import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Typography, Button, Box } from '@mui/material';

import { signUp } from 'redux/auth/operations';
import { validationSchema } from './validationSchema';
import { NameField, EmailField, PasswordField } from 'components/FormFields';
import { selectIsLoading } from 'redux/selectors';
import { DotsLoader } from 'components/Loader';
import {
  authFormContainerStyle,
  avatarStyle,
  formSubmButnStyle,
} from 'components/authFormsStyles';

const SignUpForm = () => {
  const initialValues = { name: '', email: '', password: '' };
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(signUp(values));
    actions.resetForm();
  };

  return (
    <Box sx={authFormContainerStyle}>
      <Avatar sx={avatarStyle}>
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
            sx={formSubmButnStyle}
          >
            {isLoading ? <DotsLoader /> : 'Sign Up'}
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default SignUpForm;
