import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from '../AppBar';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default Layout;