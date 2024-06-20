import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  RouterProvider
 } from 'react-router-dom';
 import './index.css';

// import App from './App.tsx';
import { Root } from './routes/Root.tsx';
import { ErrorPage } from './routes/ErrorPage.tsx';
import { PracticePage } from './routes/PracticePage.tsx';
import { SettingsPage } from './routes/SettingsPage.tsx';
import { StatsPage } from './routes/StatsPage.tsx';
import { HomePage } from './routes/HomePage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'practice',
        element: <PracticePage />
      },
      {
        path: 'settings',
        element: <SettingsPage />
      },
      {
        path: 'stats',
        element: <StatsPage />
      },
      {
        path: '',
        element: <HomePage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
