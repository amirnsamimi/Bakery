import React from "react";

const CategoryCart = ({ category, imageSrc }) => {
  return (
    <div class="col-span-3 md:col-span-2 flex flex-col justify-center items-center group gap-2 md:gap-5 w-16 h-36 md:w-36 md:h-52">
      <div class="w-20 h-20 md:w-36 md:h-36 rounded-full md:p-4">
        <img
          src={imageSrc}
          class="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in shadow-boxPrimary"
          alt="category-image"
        />
      </div>
      <div class="text-[10px] group-hover:font-semibold md:text-xl leading-6 ">
        <span>{category}</span>
      </div>
    </div>
  );
};

export default CategoryCart;
