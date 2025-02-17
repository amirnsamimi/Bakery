import React, { useState } from "react";
import { DynamicSvg } from "../../../assets/icons/icons";
import { onClickHandler } from "../../../hooks/handlers.hook";
import { Link } from "react-router-dom";

const SideBar = ({ open,menuClose }) => {
  const [menuDrop, setMenuDrop] = useState(false);

  return (
    <>
      <div
        onClick={menuClose}
        className={`${
          open ? "opacity-40 z-40" : "opacity-0 -z-50 "
        }  w-full bg-black rounded-l-2xl py-4 px-6 border-[0.5px] border-line fixed transition-opacity  duration-500 right-0   h-[100vh]`}
      ></div>
      <div
        className={`${
          open ? "translate-x-0" : "translate-x-full"
        }  w-64 bg-lightGray rounded-l-2xl py-4 px-6 border-[0.5px] border-line transition-transform duration-300 fixed right-0 z-50 h-[100vh]`}
      >
        <div className="flex justify-center items-center text-sm font-medium leading-5 mb-6">
          <h2>منو</h2>
        </div>
        <div className="pr-2">
          <ul className="flex flex-col gap-5 list-none">
            <li className="flex justify-between">
              <Link className="flex gap-2 items-center" to="/">
                <div className="w-[18px] h-[18px]">
                  <DynamicSvg name="home-twotone" size="16" />
                </div>
                <span className="text-xs font-bold leading-4">خانه</span>
              </Link>
            </li>
            <li className="flex justify-between">
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <div
                    onClick={() => onClickHandler(!menuDrop, setMenuDrop)}
                    className="w-[18px] h-[18px]"
                  >
                    <DynamicSvg name="categories-twotone" size="16" />
                  </div>
                  <span
                    onClick={() => onClickHandler(!menuDrop, setMenuDrop)}
                    className="text-xs font-bold leading-4"
                  >
                    دسته بندی
                  </span>
                </div>
                <ul
                  className={` ${
                    menuDrop ? "h-52 mt-4 " : "h-0 "
                  } flex flex-col gap-4 list-none items-start  transition-all duration-1000  `}
                >
                  <li
                    className={`flex items-center relative h-4 bg-lightGray gap-4 ${
                      menuDrop
                        ? "top-0 opacity-100 delay-100"
                        : "opacity-0 delay-700 -top-[3rem] "
                    } transition-all duration-300 `}
                  >
                    <Link to="/categories">
                      <span className="text-xs font-normal leading-4">
                        همه محصولات
                      </span>
                    </Link>
                  </li>
                  <li
                    className={`flex items-center relative bg-lightGray h-4 gap-4 ${
                      menuDrop
                        ? "top-0 opacity-100 delay-200"
                        : "opacity-0 delay-[600ms] -top-[5rem] "
                    } transition-all duration-300 `}
                  >
                    <Link to="/categories/eveningcake">
                      <span className="text-xs font-normal leading-4">
                        کیک عصرانه
                      </span>
                    </Link>
                  </li>
                  <li
                    className={`flex items-center h-4 gap-4 ${
                      menuDrop
                        ? "top-0 opacity-100 delay-300"
                        : "opacity-0 delay-500 -top-[7rem] "
                    } transition-all duration-300 relative `}
                  >
                    <Link to="/categories/birthdaycake">
                      <span className="text-xs font-normal leading-4">
                        کیک تولد
                      </span>
                    </Link>
                  </li>
                  <li
                    className={`flex items-center h-4 gap-4   ${
                      menuDrop
                        ? "top-0 opacity-100 delay-[400ms]"
                        : "opacity-0 delay-[400ms] -top-[9rem] "
                    } transition-all duration-300 relative`}
                  >
                    <Link to="/categories/cupcake">
                      <span className="text-xs font-normal leading-4">
                        کاپ کیک
                      </span>
                    </Link>
                  </li>
                  <li
                    className={`flex items-center h-4 gap-4   ${
                      menuDrop
                        ? "top-0 opacity-100 delay-500"
                        : "opacity-0 delay-300 -top-[11rem] "
                    } transition-all duration-300 relative `}
                  >
                    <Link to="/categories/jarcake">
                      <span className="text-xs font-normal leading-4">
                        جار کیک
                      </span>
                    </Link>
                  </li>
                  <li
                    className={`flex items-center h-4 gap-4   ${
                      menuDrop
                        ? "top-0 opacity-100 delay-[600ms]"
                        : "opacity-0 delay-200 -top-[13rem] "
                    } transition-all duration-300 relative `}
                  >
                    <Link to="/categories/doughnut">
                      <span className="text-xs font-normal leading-4">
                        دونات
                      </span>
                    </Link>
                  </li>
                  <li
                    className={`flex items-center h-4 gap-4 w-full bg-lightGray  ${
                      menuDrop
                        ? "top-0 opacity-100 delay-700"
                        : "opacity-0 delay-100 -top-[15rem] "
                    } transition-all duration-300 relative `}
                  >
                    <Link to="/categories/misc">
                      <span className="text-xs font-normal leading-4">
                        متفرقه
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                onClick={() => onClickHandler(!menuDrop, setMenuDrop)}
                className="flex justify-center items-center w-4 h-4 outline-none border-none cursor-pointer bg-transparent"
              >
                <DynamicSvg
                  className={`transition-transform duration-300 ${
                    menuDrop ? "-rotate-90" : "rotate-0"
                  }  `}
                  name={`arrow-left`}
                  color="#154160"
                  size="16"
                />
              </div>
            </li>
            <li className="flex justify-between">
              <Link className="flex gap-2 items-center" to="/contactus">
                <div className="w-[18px] h-[18px]">
                  <DynamicSvg name="phone-broken-twotone" size="16" />
                </div>
                <span className="text-xs font-bold leading-4">تماس با ما</span>
              </Link>
            </li>
            <li className="flex justify-between">
              <Link className="flex gap-2 items-center" to="/aboutus">
                <div className="w-[18px] h-[18px]">
                  <DynamicSvg name="faq-twotone" size="16" />
                </div>
                <span className="text-xs font-bold leading-4">ارتباط با ما</span>
              </Link>
            </li>
            <li className="flex justify-between">
              <Link className="flex gap-2 items-center" to="#">
                <div className="w-[18px] h-[18px]">
                  <DynamicSvg name="task-twotone" size="16" />
                </div>
                <span className="text-xs font-bold leading-4">
                  تاریخچه خرید
                </span>
              </Link>
            </li>
            <li className="flex justify-between">
              <Link className="flex gap-2 items-center" to="#">
                <div className="w-[18px] h-[18px]">
                  <DynamicSvg name="shopping-cart-twotone" size="16" />
                </div>
                <span className="text-xs font-bold leading-4">سبد خرید</span>
              </Link>
            </li>
            <li className="flex justify-between">
              <Link className="flex gap-2 items-center" to="#">
                <div className="w-[18px] h-[18px]">
                  <DynamicSvg name="profile-twotone" size="16" />
                </div>
                <span className="text-xs font-bold leading-4">حساب کاربری</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
