import React from 'react'
import { createBrowserRouter } from 'react-router'
import Home from './home/Home';
import { RouterProvider } from 'react-router-dom';
import About from './about/About';
import Notfound from './not-found/Notfound';
import Page1 from './home/nested pages/Page1';
import Page2 from './home/nested pages/Page2';

export default function App() {
 const router=createBrowserRouter([
 {
  path:'/',
  element:<Home/>,
  children:[
    {
      path:'page1',
      element:<Page1/>
    },
    {
      path:'page2',
      element:<Page2/>
    }
  ]


 },
 {
  path:'about',
  element:<About/>

 },
 {
  path:'*',
  element:<Notfound/>
 }
 ]);



  return<RouterProvider router={router}/>
}
