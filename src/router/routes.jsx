import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

export default router;
