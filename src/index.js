import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App, { Home, Users, PageNotFount, Support } from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFount />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/users', element: <Users /> },
      { path: '/support', element: <Support /> },
    ],
  },
];

const router = createBrowserRouter(routes);

const root = createRoot(document.getElementById('app'));

root.render(<RouterProvider router={router} />);
