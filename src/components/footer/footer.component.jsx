import React from "react";
import { DynamicSvg } from "../../assets/icons/icons";

const Footer = () => {
  return (
    <footer className=" relative rounded-tl-2xl  flex   border-r-[4rem] border-b-primary justify-center border-b-[4rem] border-transparent">
      <div className=" absolute w-full ml-16  flex items-center justify-between max-w-screen-xl   p-8 h-[50px] md:h-[50px]  ">
      
          <div className="text-white text-left font-extralight text-[10px]">
            <div> Designed By: <a href="#"> Raana Sheykhi </a> </div>
          Developed By: <a href="#"> Amir Samimi </a>,<a href="#"> Alireza Gosili </a>,<a href="#"> Niloofar </a> 
        </div>
        <div className="flex justify-between gap-4 w-24 ">
          <DynamicSvg size="24" name="instagram-bold" color="white" />
          <DynamicSvg size="24" name="telegram-bold" color="white" />
          <DynamicSvg size="24" name="whatsapp-bold" color="white" />
        </div>
      </div>
 
    </footer>
  );
};

export default Footer;
