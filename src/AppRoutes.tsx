import React, { Suspense } from 'react';

// const HomePage = React.lazy(() => import('./entities'));
const SpeakingPage = React.lazy(() => import('@/entities/speaking'));
const CustomizeProductPage = React.lazy(() => import('@/entities/customize-product'));
const AppRoutes = [
  {
    path: '/',
    element: (
      <Suspense fallback={<>Loading</>}>
        <CustomizeProductPage />
      </Suspense>
    ),
    layout: false,
  },
  {
    path: '/speaking',
    element: (
      <Suspense fallback={<>Loading</>}>
        <SpeakingPage />
      </Suspense>
    ),
    layout: true,
  },
];

export default AppRoutes;
