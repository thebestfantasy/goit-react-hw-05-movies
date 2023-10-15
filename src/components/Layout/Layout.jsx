import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ContainerLayout } from './Layout.Styled';

const Layout = () => {
  return (
    <ContainerLayout>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </ContainerLayout>
  );
};

export default Layout;
