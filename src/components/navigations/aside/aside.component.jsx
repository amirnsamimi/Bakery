import React from "react";
import { Link, useLocation } from "react-router-dom";
import { DynamicSvg } from "../../../assets/icons/icons";


const Aside = () => {


  const {pathname} = useLocation() 

 

  return <div className="w-full content-start justify-center pt-4 bg-white h-full right-0 relative z-50 hidden md:grid gap-4">
    <Link to="/"><img src="/assets/images/bluecake.svg" alt="main-logo" /></Link>
    <div className="grid gap-6 justify-center">
    <Link to="/" className={` transition-background duration-500  ${ pathname === "/" ? "bg-primary" : "bg-lightGray"} w-12 h-12 rounded-full flex justify-center items-center`}><DynamicSvg name={`${ pathname === "/" ? "home-bold" : "home-twotone"}`}  color="white" /></Link>
    <Link to="/categories" className={`transition-background duration-500 ${ pathname === "/categories" ? "bg-primary" : "bg-lightGray"} w-12 h-12 rounded-full flex justify-center items-center`}><DynamicSvg name={`${ pathname === "/categories" ? "categories-bold" : "categories-twotone"}`}  color="white"  /></Link>
    <Link to="/contactus" className={`transition-background duration-500 ${ pathname === "/contactus" ? "bg-primary" : "bg-lightGray"} w-12 h-12 rounded-full flex justify-center items-center`}><DynamicSvg name={`${ pathname === "/contactus" ? "phone-broken" : "phone-broken-twotone"}`}  color="white"  /></Link>
    <Link to="/aboutus" className={`transition-background duration-500 ${ pathname === "/aboutus" ?"bg-primary" : "bg-lightGray"} w-12 h-12 rounded-full flex justify-center items-center`}><DynamicSvg name={`${ pathname === "/aboutus" ? "faq-bold" : "faq-twotone"}`}  color="white"  /></Link>
    </div>
  </div>
  ;
};

export default Aside;
