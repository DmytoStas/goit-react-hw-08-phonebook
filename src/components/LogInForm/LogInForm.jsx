import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {
  FormContainer,
  Label,
  FormButton,
} from 'components/PhonebookForm/PhonebookForm.styled';

const LogInForm = () => {
  const initialValues = { email: '', password: '' };

  const schema = Yup.object().shape({
    email: Yup.string().required('Email required').email('Invalid email'),
    password: Yup.string()
      .length(8)
      .required('Password required')
      .matches(/(?=.*[0-9])/, 'Invalid password'),
  });

  const handleSubmit = (values, actions) => {
    // const { email, password } = values;
    // dispatch(addContact(newContact));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
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
          <FormButton type="submit">Add contact</FormButton>
        </FormContainer>
      </Form>
    </Formik>
  );
};

export default LogInForm;
