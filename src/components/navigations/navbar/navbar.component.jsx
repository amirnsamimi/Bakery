import React, { useState } from "react";
import { DynamicSvg } from "../../../assets/icons/icons";
import Search from "../../inputs/search/search.component";
import { onClickHandler } from "../../../hooks/handlers.hook";

const Navbar = () => {
  const [collapse, setCollapse] = useState(true);

  return (
    <div className="w-full h-14 grid grid-cols-12 p-4 items-center ">
      <div className="col-span-2 flex">
        <DynamicSvg name="menu-linear" color="black" />
      </div>

      <div className="col-span-10 flex justify-between items-center gap-3">
        <button onClick={() => onClickHandler(false, setCollapse)}>
          <Search collapse={collapse} />
        </button>
        <DynamicSvg name="shopping-cart-bold" color="#154160" size="24" />
        <DynamicSvg
          className="flex justify-center items-center text-center"
          name="profile-twotone"
          size="24"
        />
      </div>
    </div>
  );
};

export default Navbar;
