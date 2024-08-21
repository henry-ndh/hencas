import React, { Suspense } from 'react';

const HomePage = React.lazy(() => import('./entities'));
const SpeakingPage = React.lazy(() => import('@/entities/speaking'));

const AppRoutes = [
  {
    path: '/',
    element: (
      <Suspense fallback={<>1212</>}>
        <HomePage />
      </Suspense>
    ),
    layout: 'Default',
  },
  {
    path: '/speaking',
    element: (
      <Suspense fallback={<>1212</>}>
        <SpeakingPage />
      </Suspense>
    ),
    layout: 'Default',
  },
];

export default AppRoutes;
