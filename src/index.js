import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Mainpage from './Pages/Mainpage';
import Home from './Pages/Home';
import Basket from './Pages/Basket'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);



