import { Helmet, HelmetProvider } from 'react-helmet-async';

import LogInForm from 'components/LogInForm';

const LogIn = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Log In</title>
      </Helmet>
      <LogInForm />
    </HelmetProvider>
  );
};

export default LogIn;
