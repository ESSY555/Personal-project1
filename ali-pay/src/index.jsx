import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import {Auth , Root , SignUp , Login , Settings , Profiles , ErrorElement } from './routes'
import Dashboard from './routes/Dashboard';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root />,
    errorElement:<ErrorElement />
  },
  {
    path:'/profiles',
    element:<Profiles />,
    errorElement:<ErrorElement />
  },
  {
    path:'/employee',
    element:<Settings />,
    // errorElement:<ErrorElement />
  } ,
  {
    path:'/dashboard',
    element:<Dashboard />,
    // errorElement:<ErrorElement />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

