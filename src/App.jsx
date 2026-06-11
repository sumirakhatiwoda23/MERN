import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './home/Home'
import Notfound from './not-found/Notfound'
import RootLayout from './components/RootLayout'
import Popular from './movies/Popular'
import Upcoming from './movies/Upcoming'
import TopRated from './movies/TopRated'
import MovieDetail from './movies/MovieDetail'

 

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
          path: 'popular',
          element: <Popular />
        },
        {
          path: 'upcoming',
          element: <Upcoming />
        },
        {
          path: 'top-rated',
          element: <TopRated />
        },
        {
           
         path: 'movie/:id',
         element: <MovieDetail />


        },
        {
          path: '*',
          element: <Notfound />
        },
      ]
    }
  ])

  return <RouterProvider router={router} />
}