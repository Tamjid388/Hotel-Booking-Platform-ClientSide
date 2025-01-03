import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { Mainlayout } from "../Layout/Mainlayout";
import { Home } from "../Pages/Home/Home";
import { Error } from "../Pages/ErrorPage/Error";




export const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
      errorElement:<Error></Error>,
      
      children:[
        {
            path: "/",
            element:<Home></Home>,

        }
      ]
    },
  ]);