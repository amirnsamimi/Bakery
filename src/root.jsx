import React from "react";
import HomeLayout from "./layouts/home";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navigations/navbar/navbar.component";

const Root = () => {
  return (
    <>
      <Navbar />
      <main className="env-padding flex justify-center  py-20">
        <div className="max-w-screen-xl">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Root;
