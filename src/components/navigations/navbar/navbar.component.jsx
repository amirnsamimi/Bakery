import React, { useEffect, useState } from "react";
import { DynamicSvg } from "../../../assets/icons/icons";
import Search from "../../inputs/search/search.component";
import { onClickHandler, onChangeHandler } from "../../../hooks/handlers.hook";
import SearchPage from "../../pages/search/searchPage.component";

const Navbar = () => {
  const [search, setSearch] = useState({ search: "" });
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    search.search.length > 0 ? setVisible(true) : setVisible(false);
  }, [search]);
  console.log(visible);
  return (
    <>
      <div className=" fixed z-40 w-full  h-14  bg-white flex justify-center">
        <div className="h-full w-full grid grid-cols-12 p-4 max-w-screen-xl lanscape:px-12 landscape:md:px-4 items-center content-center">
          <div className="md:hidden col-span-2 flex w-6 h-6">
            <DynamicSvg name="menu-linear" color="black" />
          </div>
          <div className="hidden md:col-span-6 md:block">
            <Search
              collapse={false}
              onChange={(e) => onChangeHandler(e, setSearch)}
              search={search.search}
            />
          </div>

          <div className="col-span-10  md:col-span-6 flex justify-end items-center  ">
            <div className="hidden col-span-10  md:col-span-3 md:flex justify-end items-center   ">
              {" "}
              <div className="flex justify-center items-center md:pl-4  gap-2">
                lorem
                <DynamicSvg
                  className="flex justify-center items-center text-center"
                  name="phone-broken"
                  color="#154160 "
                  size="24"
                />
              </div>
            </div>
            <div className="flex justify-between gap-3 items-center">
              <button
                className="md:hidden"
                onClick={() => onClickHandler(true, setOpen)}
              >
                <Search collapse={true} />
              </button>
              <div className=" justify-center hidden md:flex items-center md:pr-4  gap-2 md:border-r md:border-line">
                lorem
                <DynamicSvg
                  className="flex justify-center items-center text-center"
                  name="instagram-bold"
                  color="#154160 "
                  size="24"
                />
              </div>
              <div className="relative  h-6  md:w-[85px] md:h-[40px]  flex items-center justify-between bg-primaryShade rounded-full   p-0.5 md:p-1">
                <div className="w-5 h-5 md:w-8 md:h-8 items-center text-xs rounded-full primaryShade bg-white flex justify-center">
                  4
                </div>

                <div className="px-1  h-6 flex items-center">
                  <DynamicSvg
                    className="md:hidden"
                    name="shopping-cart-bold"
                    color="white"
                    size="12"
                  />
                  <DynamicSvg
                    className="hidden md:flex"
                    name="shopping-cart-bold"
                    color="white"
                    size="24"
                  />
                </div>
              </div>
              <div className="w-6 h-6 md:w-12 md:h-12  rounded-full  bg-lightGray flex items-center justify-center  ">
                <DynamicSvg
                  className="md:hidden"
                  name="profile-twotone"
                  size="12"
                />

                <DynamicSvg
                  className="hidden md:flex"
                  name="profile-twotone"
                  size="24"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          visible ? "translate-y-0" : "-translate-y-full"
        } bg-lightGray h-[100vh] w-[100vw] fixed hidden md:block pt-[100px] px-8  transition-transform duration-300 z-20`}
      >
        هیچ موضوعی برای <span className="font-bold">{search.search}</span> پیدا
        نشد
      </div>

      <SearchPage
        open={open}
        onChange={(e) => onChangeHandler(e, setSearch)}
        close={() => onClickHandler(false, setOpen)}
        search={search.search}
      />
    </>
  );
};

export default Navbar;
