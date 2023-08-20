import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {
  FormContainer,
  Label,
  FormButton,
} from 'components/PhonebookForm/PhonebookForm.styled';
import { signUp } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

const SignUpForm = () => {
  const initialValues = { name: '', email: '', password: '' };

  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string()
      .required('Name required')
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Invalid name'
      ),
    email: Yup.string().required('Email required').email('Invalid email'),
    password: Yup.string()
      .length(8)
      .required('Password required')
      .matches(/(?=.*[0-9])/, 'Invalid password'),
  });

  const handleSubmit = (values, actions) => {
    // const { name, email, password } = values;

    console.log(values);
    dispatch(signUp(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="on">
        <FormContainer>
          <Label htmlFor="name">Username</Label>
          <Field
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage name="name" />

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
          <FormButton type="submit">Sign Up</FormButton>
        </FormContainer>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
