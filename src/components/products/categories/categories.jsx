import React, { useState } from "react";
import { DynamicSvg } from "../../../assets/icons/icons";
import CategoryCart from "../categoryCart/categoryCart.component";
import RadioSecondary from "../../inputs/radio/radio.component";
import { radioHandler } from "../../../hooks/handlers.hook";

const Categories = () => {
  const [index, setIndex] = useState("0");

  return (
    <>
      <div
        className={`grid gap-4 overflow-hidden  
      }`}
      >
        <div className="flex gap-1 px-4">
          <DynamicSvg name="categories-outline" color="black" size={16} />{" "}
          <h2 className="font-medium text-xs"> دسته بندی ها </h2>
        </div>
        <div className={`h-36 md:h-52 flex w-full justify-center `}>
          <div
            className={`grid grid-cols-12 px-4 gap-8  transition-transform duration-500 ${
              index === "0" ? "translate-x-0 " : "translate-x-full"
            } `}
          >
            <CategoryCart
              category="دونات"
              imageSrc="/assets/images/26abdf72bbe2f6c9f08ae057c0a61e92.jpeg"
            />

            <CategoryCart
              category="دونات"
              imageSrc="/assets/images/26abdf72bbe2f6c9f08ae057c0a61e92.jpeg"
            />
            <CategoryCart
              category="دونات"
              imageSrc="/assets/images/26abdf72bbe2f6c9f08ae057c0a61e92.jpeg"
            />
            <CategoryCart
              category="دونات"
              imageSrc="/assets/images/26abdf72bbe2f6c9f08ae057c0a61e92.jpeg"
            />
            <CategoryCart
              category="دونات"
              imageSrc="/assets/images/26abdf72bbe2f6c9f08ae057c0a61e92.jpeg"
            />

            <CategoryCart
              category="دونات"
              imageSrc="/assets/images/26abdf72bbe2f6c9f08ae057c0a61e92.jpeg"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center p-3 gap-2">
        <RadioSecondary
          checked
          name="carousel-1"
          value={0}
          handler={(e) => radioHandler(e, setIndex)}
        />{" "}
        <RadioSecondary
          name="carousel-1"
          value={1}
          handler={(e) => radioHandler(e, setIndex)}
        />
      </div>
    </>
  );
};

export default Categories;
