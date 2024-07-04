import React from "react";
import HomeLayout from "./layouts/home";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navigations/navbar/navbar.component";

const Root = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
