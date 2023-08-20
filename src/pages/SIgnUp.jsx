import { Helmet } from 'react-helmet';

import SignUpForm from 'components/SugnUpForm';

const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <SignUpForm />
    </>
  );
};

export default SignUp;
