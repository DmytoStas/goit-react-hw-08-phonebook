import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Container from '@mui/material/Container';

import AppBarHeader from 'components/AppBarHeader';

const Layout = () => {
  return (
    <Container maxWidth="sm">
      <AppBarHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
  );
};

export default Layout;
