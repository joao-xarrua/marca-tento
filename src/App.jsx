import React from 'react'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './Pages/NotFound';
import Menu from './Pages/Menu';
import Game from './Pages/Game';
import Adjustments from './Components/Adjustments';
import Home from './Components/Home';
import Configurations from './Components/Configurations';
import Infos from './Components/Infos';
import User from './Pages/User';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "adjustments",
        element: <Adjustments />
      },
      {
        path: "configurations",
        element: <Configurations />
      },
      {
        path: "infos",
        element: <Infos />
      }
    ]
  },
  {
    path: "/game",
    element: <Game />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <section className='from-green-600 via-green-500 to-green-600 bg-gradient-45 sm:bg-gradient-30 w-full flex align-middle justify-center'>
      <RouterProvider router={router} />
    </section>
  )
}

export default App
