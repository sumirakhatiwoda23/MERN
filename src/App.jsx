import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './home/Home'
import About from './about/About'
import Notfound from './not-found/Notfound'
import RootLayout from './components/RootLayout'


export default function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
        index:true,
        element:<Home/>
        },
     
    {
      path:'*',
      element:<Notfound/>

    }
      ]
      
    }
   
  ])
  return <RouterProvider router={router}/>
}
   
