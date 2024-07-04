import React, { useState } from "react";
import { SubmitButton } from "../../../styles/buttons.styles";
import { DynamicSvg } from "../../../assets/icons/icons";
import { TransPrimaryLink } from "../../../styles/links.style";
import { RadioSecondaryFaker } from "../../../styles/inputs.styles";
import RadioSecondary from "../../inputs/radio/radio.component";
import { radioHandler } from "../../../hooks/handlers.hook";

const Carousel = () => {
  const [index, setIndex] = useState("0");

  return (
    <>
      <div className="relative h-48 w-full overflow-x-scroll ">
        <div
          className={`${
            index === "0" ? "translate-x-0 " : "translate-x-full "
          } transition-transform duration-500 absolute h-48 w-full px-4`}
        >
          <img
            src={"/assets/images/d5b697a840c6aa6f5a26b67c6f4024e9.jpeg"}
            alt="carousel-image"
            className="w-full h-full object-cover  rounded-lg  shadow-[0_1.17px_1.17px_rgba(0,0,0,0.2)] "
          />
          <div className="absolute top-4 flex flex-col justify-between right-8 bottom-4 z-10 ">
            <div>
              <h1 className="text-sm font-extrabold text-primary">بلو کیک</h1>
              <p className="text-xs text-primary  text-wrap  ">
                یک لحظه شیرین را با ما تجربه کنید.
              </p>
            </div>
            <SubmitButton> کیک خودتو بساز </SubmitButton>
          </div>
        </div>
        <div
          className={`${
            index === "1" ? "translate-x-0 " : "-translate-x-full "
          } transition-transform duration-500 absolute h-48 w-full px-4 `}
        >
          <img
            src={"/assets/images/b599bbc73eaa10109e1150ed4ee29a41.jpeg"}
            alt="carousel-image"
            className="w-full h-full object-cover  rounded-lg  shadow-[0_1.17px_1.17px_rgba(0,0,0,0.2)]"
          />{" "}
          <div className="bg-gradient-to-t from-[#4E4E4E] h-full top-0 right-4 left-4 bottom-0 absolute  rounded-lg"></div>
          <div className="absolute bottom-4 right-8 left-4 z-10 ">
            <div className="flex justify-between w-full ">
              <h2 className=" font-semiBold text-xs text-white">
                10% تخفیف بگیرید
              </h2>
              <TransPrimaryLink to="#" alt="مشاهده محصول">
                مشاهده
                <DynamicSvg
                  name="circle-filled-arrow-left"
                  color="white"
                  size="12"
                />
              </TransPrimaryLink>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-3 gap-2">
        <RadioSecondary
          checked
          name="carousel"
          value={0}
          handler={(e) => radioHandler(e, setIndex)}
        />{" "}
        <RadioSecondary
          name="carousel"
          value={1}
          handler={(e) => radioHandler(e, setIndex)}
        />
      </div>
    </>
  );
};

export default Carousel;
