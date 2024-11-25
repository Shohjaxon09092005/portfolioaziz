import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import About from './pages/About';
import MyWorks from './pages/MyWorks';
const appRouter = createBrowserRouter([{
  element: <App />,
  path: "/",
  errorElement: <ErrorPage />,
  children: [
    {
    path: "/",
    element: <Home />
  },
    {
    path: "/about",
    element: <About />
  },
    {
    path: "/portfolio",
    element: <MyWorks />
  },
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

