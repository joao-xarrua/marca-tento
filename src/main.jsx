import React from 'react'
import ReactDOM from 'react-dom/client'
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
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
