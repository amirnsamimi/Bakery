import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../root";
import HomeLayout from "../layouts/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomeLayout />,
      },
    ],
  },
]);

export default router;
