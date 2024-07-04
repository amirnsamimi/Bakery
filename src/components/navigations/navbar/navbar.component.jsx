import React, { useState } from "react";
import { DynamicSvg } from "../../../assets/icons/icons";
import Search from "../../inputs/search/search.component";
import { onClickHandler } from "../../../hooks/handlers.hook";
import SearchPage from "../../pages/search/searchPage.component";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" fixed z-50 w-full h-14 grid grid-cols-12 p-4 landscape:px-12 items-center content-center bg-white">
        <div className=" col-span-2 flex">
          <DynamicSvg name="menu-linear" color="black" />
        </div>

        <div className="col-span-10 flex justify-between items-center gap-3">
          <button onClick={() => onClickHandler(true, setOpen)}>
            <Search collapse={true} />
          </button>
          <DynamicSvg name="shopping-cart-bold" color="#154160" size="24" />
          <DynamicSvg
            className="flex justify-center items-center text-center"
            name="profile-twotone"
            size="24"
          />
        </div>
      </div>
      <SearchPage open={open} close={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
