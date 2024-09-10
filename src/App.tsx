import AppRoutes from './AppRoutes';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '@/based/layout/DefaultLayout';
import React from 'react';

const App = () => {
  return (
    <Routes>
      {AppRoutes.map((route, index) => {
        const Layout = route.layout ? DefaultLayout : React.Fragment;
        const { element, ...rest } = route;
        return <Route key={index} {...rest} path={route.path} element={<Layout>{element}</Layout>} />;
      })}
    </Routes>
  );
};

export default App;
