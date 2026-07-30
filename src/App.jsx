import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './features/home/Home.jsx'
import RootLayout from './components/RootLayout'
import Login from './features/home/auth/Login.jsx'
import Register from './features/home/auth/Register.jsx'
import UserProfile from './features/home/user/UserProfile.jsx'
import AdminPage from './features/home/admin/AdminPage.jsx'
import Add from './features/home/admin/form/Add.jsx'
import Edit from './features/home/admin/form/Edit.jsx'
import ProductDetail from './features/home/products/productDetail.jsx'
import CartPage from './features/cart/CartPage.jsx'
import OrderPage from './features/order/OrderPage.jsx'
import RedirectMain from './components/RedirectMain'
import AuthRoute from './components/AuthRoute'
import AdminRoute from './components/AdminRoute'

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [

        {
          index: true,
          element: <Home />
        },
        {
          element: <RedirectMain />,
          children: [
            {
              path: 'login',
              element: <Login />
            },
            {
              path: 'register',
              element: <Register />
            },
          ]
        },
        {
          element: <AuthRoute />,
          children: [
            {
              path: 'profile',
              element: <UserProfile />
            },
            {
              path: 'cart',
              element: <CartPage />
            },
            {
              path: 'orders',
              element: <OrderPage />
            }
          ]
        },
        {
          element: <AdminRoute />,
          children: [
            {
              path: 'admin',
              element: <AdminPage />
            },
            {
              path: 'admin/form/add',
              element: <Add />
            },
            {
              path: 'admin/form/edit/:id',
              element: <Edit />
            },
          ]
        },
        {
          path: 'product/:id',
          element: <ProductDetail />
        }

      ]
    }
  ])

  return <RouterProvider router={router} />
}