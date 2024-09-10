import React, { Suspense } from 'react';

const HomePage = React.lazy(() => import('./entities'));
const SpeakingPage = React.lazy(() => import('@/entities/speaking'));

const AppRoutes = [
  {
    path: '/',
    element: (
      <Suspense fallback={<>Loading</>}>
        <HomePage />
      </Suspense>
    ),
    layout: true,
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
