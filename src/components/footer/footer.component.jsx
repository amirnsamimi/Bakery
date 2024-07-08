import React from "react";
import { DynamicSvg } from "../../assets/icons/icons";

const Footer = () => {
  return (
    <footer className=" relative rounded-tl-2xl  flex   border-r-[4rem] border-b-primary justify-center border-b-[4rem] border-transparent">
      <div className=" absolute w-full flex items-center justify-between max-w-screen-2xl   p-8 h-[50px] md:h-[50px]  ">
        <div className="text-white font-extralight text-[8px]">
          Developed By: a-team
        </div>
        <div className="flex justify-between gap-4 w-20 md:36">
          <DynamicSvg name="instagram-bold" color="white" />
          <DynamicSvg name="telegram-bold" color="white" />
          <DynamicSvg name="whatsapp-bold" color="white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
