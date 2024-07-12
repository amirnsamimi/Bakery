import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./components/navigations/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import Aside from "./components/navigations/aside/aside.component";
import { AuthProvider } from "./context/authContext";

const Root = () => {
  return (
    <>
   <AuthProvider>
    <div className="grid grid-cols-12 ">
      <div className="col-span-1 hidden md:grid">
      <Aside />
      </div>
      <div className="col-span-12   md:col-span-11">
      <Navbar />
      <main className="env-padding flex justify-center   min-h-[96vh]">
        <div className="max-w-screen-xl  w-full">
          <Outlet />
        </div>
      </main>
      <div >
      <Footer />
      </div>
      </div>
   
      </div>
      </AuthProvider>
    </>
  );
};

export default Root;
