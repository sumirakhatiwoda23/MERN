
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './features/home/Home.jsx'
import RootLayout from './components/RootLayout'
import Login from './features/home/auth/Login.jsx'
import Register from './features/home/auth/Register.jsx'
import UserProfile from './features/home/user/UserProfile.jsx'

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


  ]
}
  ])



  return <RouterProvider router={router}/>
}
