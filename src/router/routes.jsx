import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../root";
import HomeLayout from "../layouts/home";
import Category from "../layouts/Category";
import Sales from "../layouts/Sales";
import NotFound from "../layouts/notFound";
import ContactUs from "../layouts/contact";
import AboutUs from "../layouts/aboutus";
import Profile from "../layouts/user/profile";

import PrivateRoutes from "./private/privateroutes";
import Login from "../layouts/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomeLayout />,
      },
      {
      path:"*",
        element:<NotFound />
    },
      {
        path:"/categories",
        element: <Category />,
        children:[
          {
            path:":category",
            element: <Category  />
          }
        ]
      },
      {
        path:"/sales",
        element: <Sales />
        
      },
      {
        path:"/contactus",
        element: <ContactUs />
      },
      {
        path:"/aboutus",
        element: <AboutUs />
      },
      { path:"/login",
        element:<Login />,
      },
      {
        path:"/user",
        element:<PrivateRoutes />,
        children:[
          {
            index:true,
            element: <Profile />
          }

        ]
      }
      
    ],
  },
]);

export default router;
