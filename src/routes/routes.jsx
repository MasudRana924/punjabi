import { lazy } from 'react';
import Home from '../pages/Home/Home';
const Register = lazy(() => import('../pages/user/auth/Register'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const Showroom = lazy(() => import('../pages/showroom-details/Showroom'));
const Products = lazy(() => import('../pages/Products/Products'));
// const Login = lazy(() => import('../pages/user/auth/Login'));
// const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));

export const appRoutes = [
  {
    path: '/',
    element: <Home />,
    exact: true
  },
  {
    path: '/signup',
    element: <Register />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/showroom',
    element: <Showroom />
  },
  {
    path: '/products',
    element: <Products />
  },
  // Add more routes here
  // {
  //   path: '/login',
  //   element: <Login />
  // },
];