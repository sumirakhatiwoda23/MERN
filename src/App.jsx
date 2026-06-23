
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './features/home/Home.jsx'
import RootLayout from './components/RootLayout'
import Login from './features/home/auth/Login.jsx'

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
}

  ]
}
  ])



  return <RouterProvider router={router}/>
}
