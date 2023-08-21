import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {
  FormContainer,
  Label,
  FormButton,
} from 'components/PhonebookForm/PhonebookForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LogInForm = () => {
  const initialValues = { email: '', password: '' };
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('Email required')
      .email('Invalid email')
      .matches(
        /^[a-z0-9]+@+[mail]+\.[a-z]{2,3}/,
        'Invalid email. Template is "randomString@mail.com"'
      ),
    password: Yup.string()
      .length(8)
      .required('Password required')
      .matches(/(?=.*[0-9])/, 'Invalid password'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormContainer>
          <Label htmlFor="email">Email</Label>
          <Field type="email" name="email" title="Must a regular email" />
          <ErrorMessage name="email" />

          <Label htmlFor="password">Password</Label>
          <Field
            type="password"
            name="password"
            title="Password must be digits"
          />
          <ErrorMessage name="password" />
          <FormButton type="submit">Log In</FormButton>
        </FormContainer>
      </Form>
    </Formik>
  );
};

export default LogInForm;
