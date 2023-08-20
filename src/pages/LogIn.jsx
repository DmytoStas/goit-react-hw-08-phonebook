import { Helmet } from 'react-helmet';

import LogInForm from 'components/LogInForm';

const LogIn = () => {
  return (
    <>
      <Helmet>
        <title>Log In</title>
      </Helmet>
      <LogInForm />
    </>
  );
};

export default LogIn;
