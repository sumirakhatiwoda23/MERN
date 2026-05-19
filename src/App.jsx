
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './home/Home'

import Notfound from './not-found/Notfound'
import RootLayout from './components/RootLayout'
import TodoAddFrom from './todos/TodoAddFrom'



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
      path:'add-todo',
      element:<TodoAddFrom/>
       },
    {
      path:'*',
      element:<Notfound/>

    },
    {
       path: 'update-todo/:id',
          element: <TodoUpdateForm />
    }
      ]
      
    }
   
  ])
  return <RouterProvider router={router}/>
}
   
