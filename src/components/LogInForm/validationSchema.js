import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
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
