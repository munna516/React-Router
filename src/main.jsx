import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Meals from './Components/Meals/Meals';
import Albums from './Components/Albums/Albums';
import AlbumDetails from './Components/Album Details/AlbumDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/meals',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Meals></Meals>
      },
      {
        path: '/albums',
        loader: () => fetch('https://jsonplaceholder.typicode.com/albums'),
        element: <Albums></Albums>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/albums/album/:id',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/albums/${params.id}`),
        element: <AlbumDetails></AlbumDetails>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
