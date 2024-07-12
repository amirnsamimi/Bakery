import React from "react";
import { Link } from "react-router-dom";
import { DynamicSvg } from "../../../assets/icons/icons";


const Aside = () => {
  return <div className="w-full content-start justify-center bg-white h-full right-0 relative z-50 hidden md:grid gap-4">
    <Link to="/"><img src="/assets/bluecake.svg" alt="main-logo" /></Link>
    <div className="grid gap-6 justify-center">
    <Link to="/" className="bg-lightGray w-12 h-12 rounded-full flex justify-center items-center"><DynamicSvg name="home-twotone"  /></Link>
    <Link to="/categories" className="bg-lightGray w-12 h-12 rounded-full flex justify-center items-center"><DynamicSvg name="categories-twotone"  /></Link>
    <Link to="/contactus" className="bg-lightGray w-12 h-12 rounded-full flex justify-center items-center"><DynamicSvg name="phone-broken-twotone"  /></Link>
    <Link to="/faq" className="bg-lightGray w-12 h-12 rounded-full flex justify-center items-center"><DynamicSvg name="faq-twotone"  /></Link>
    </div>
  </div>
  ;
};

export default Aside;
