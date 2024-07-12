import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../root";
import HomeLayout from "../layouts/home";
import Category from "../layouts/Category";
import Sales from "../layouts/Sales";
import NotFound from "../layouts/notFound";

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
      
    ],
  },
]);

export default router;
