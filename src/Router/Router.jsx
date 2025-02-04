import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { Mainlayout } from "../Layout/Mainlayout";
import { Home } from "../Pages/Home/Home";
import { Error } from "../Pages/ErrorPage/Error";
import { Register } from "../Pages/Register/Register";
import { Login } from "../Pages/Login/Login";
import { Rooms } from "../Pages/Rooms/Rooms";
import { RoomDetails } from "../Pages/RoomDetails/RoomDetails";
import { Demo } from "../Component/Demo/Demo";
import { MyBooking } from "../Pages/MyBooking/MyBooking";
import { Privateroute } from "./Privateroute";




export const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
      errorElement:<Error></Error>,
      
      children:[
        {
            path: "/",
            element:<Home></Home>,

        },
        {
          path:'/demo',
          element:<Demo></Demo>

        },
       
        {
            path: "/register",
            element:<Register></Register>,

        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/rooms",
          element:<Rooms></Rooms>
        },
        {
          path:'/roomdetails/:id',
          element:<RoomDetails></RoomDetails>

        },
        {
          path:'/mybookings',
          element:<Privateroute>
            <MyBooking></MyBooking>
          </Privateroute>
        }
      ]
    },
  ]);