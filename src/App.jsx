
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

export default function App() {

  const router=createBrowserRouter([
{
  path:'/',
  element:<RootLayout/>,
  children:[

    { index:true,
      element:<Home/>

},{
  path:'login',
  element:<Login/>
},
{
  path:'register',
  element:<Register/>
},
{
  path:'profile',
  element:<UserProfile/>
},

{
  path:'admin',
  element:<AdminPage/>
},
{
  path:'admin/form/add',
  element:<Add/>

},
{
  path:'admin/form/edit/:id',
  element:<Edit/>
},
{
  path:'product/:id',
  element:<ProductDetail/>
},
{
path:'cart',
element:<CartPage/>
},
{
  path:'orders',
  element:<OrderPage/>
}

  ]
}
  ])



  return <RouterProvider router={router}/>
}
