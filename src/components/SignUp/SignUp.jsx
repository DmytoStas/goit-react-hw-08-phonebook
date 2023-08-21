import { Helmet, HelmetProvider } from 'react-helmet-async';

import SignUpForm from 'components/SignUpForm';

const SignUp = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <SignUpForm />
    </HelmetProvider>
  );
};

export default SignUp;
