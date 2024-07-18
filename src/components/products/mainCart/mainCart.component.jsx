import React, { useState } from "react";
import CounterButton from "../../buttons/counter.component";

const MainCart = ({ src, title, description, unit, offPrice, price }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="relative w-36 h-52  md:w-56 md:h-96 transition-[background] duration-300 ease-out group">
      <div className="flex justify-center ">
        <img
          src={src}
          alt="cupcake"
          className="drop-shadow-[0px_5px_5px_rgba(13,29,41,0.2)]  w-20 h-20 md:w-32 md:h-32 relative z-10 object-cover rounded-full  border-whiteSecondary border-[0.5px]"
        />
      </div>
      <div className="bg-white flex flex-col w-36 h-max md:w-56  absolute rounded-3xl group-hover:bg-primary group-hover:text-whiteSecondary  transition-[background] duration-300 ease-out top-[45px] md:top-[75px] p-[50px_10px_16px_16px]  md:p-[87px_10px_16px_16px] shadow-[0px_1px_3px_0px_#9393951a,0px_5px_5px_0px_#93939517,0px_11px_7px_0px_#9393950d,0px_20px_8px_0px_#93939503,0px_32px_9px_0px_#93939500]">
        <h5 className="text-[10px] leading-3 font-bold md:text-base md:leading-6">
          {title}
        </h5>
        <div className="flex flex-col mt-1 md:mt-5 text-fontColor  group-hover:text-whiteSecondary font-light text-xs">
          <span className="text-[8px] md:text-base">هر {unit}:</span>
          <span className=" text-[6px] md:text-[10px]">{description}*</span>
          <div className="flex gap-1 items-baseline">
            <span className="line-through text-[9px] md:text-sm font-extrabold">
              {count > 0 ? offPrice * count : offPrice}
            </span>
            <span className="line-through text-[8px] md:text-xs font-light">
              تومان
            </span>
          </div>
        </div>
        <div className=" md:mt-2 flex gap-2 w-full justify-between">
          <div className="flex gap-1 justify-center items-center">
            <span className=" text-[9px] md:text-sm font-extrabold">
              {count > 0 ? price * count : price}
            </span>
            <span className="text-[8px] md:text-xs font-light">تومان</span>
          </div>
          <CounterButton
         
            size="32"
            count={count}
            setCount={setCount}
            customStyle="group-hover:bg-blueButton"
          />
        </div>
      </div>
    </div>
  );
};

export default MainCart;
