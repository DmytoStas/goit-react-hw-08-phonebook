import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Container from '@mui/material/Container';

import AppBarHeader from 'components/AppBarHeader';
import { Paper } from '@mui/material';

const Layout = () => {
  return (
    <Container maxWidth="sm">
      <AppBarHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Paper
            elevation={1}
            sx={{
              px: 1,
              marginTop: '-3px',
              minHeight: '350px',
            }}
          >
            <Outlet />
          </Paper>
        </main>
      </Suspense>
    </Container>
  );
};

export default Layout;
