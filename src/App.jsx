
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
  path:'admin/form/edit',
  element:<Edit/>
}

  ]
}
  ])



  return <RouterProvider router={router}/>
}
