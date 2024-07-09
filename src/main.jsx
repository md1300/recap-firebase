import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import ContextApi from './Context-Api/ContextApi';
import Ordered from './Components/Ordered';
import PrivateRoute from './Components/PrivateRoute';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
     {
      path:"/order",
      element:<PrivateRoute><Ordered></Ordered></PrivateRoute>
     }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ContextApi>
       <RouterProvider router={router} />
     </ContextApi>
  </React.StrictMode>,
)
