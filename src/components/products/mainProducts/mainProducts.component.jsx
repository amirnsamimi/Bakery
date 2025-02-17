import React from "react";
import MainCart from "../mainCart/mainCart.component";
import { DynamicSvg } from "../../../assets/icons/icons";
import {  TransPrimaryLinkB } from "../../../styles/links.style";

const MainProducts = ({ navigator = false, direction = "rtl", title, symbol }) => {
  return (
    <div
      className={`grid gap-4 overflow-hidden 
      }`}
    >
      <div className="flex gap-1 px-4 items-center justify-between">
        <div className="flex gap-1">
        <DynamicSvg name={symbol} color="black" size={16} />{" "}
        <h2 className="font-medium text-xs"> {title} </h2> 
        </div>
        <div className={`${navigator == false ? "hidden" : "flex"}`}>
        <TransPrimaryLinkB to="sales" alt="مشاهده محصول">
                مشاهده
                <DynamicSvg
                  name="circle-filled-arrow-left"
                  color="black"
                  size="24"
                />
              </TransPrimaryLinkB>
        </div>
      </div>
      <div
        className={`grid gap-4 w-full overflow-x-scroll overflow-y-hidden ${
          direction !== "rtl" ? "justify-end" : " "
        } `}
      >
        <div
          className={`px-4
          flex flex-nowrap w-max gap-4 
           
           `}
        >
          <MainCart
            src="/assets/images/b599bbc73eaa10109e1150ed4ee29a41.jpeg"
            description="حداقل سفارش جارکیک 3عدد است."
            unit="اسلایس"
            title="کاپ کیک کدوحلوایی"
            offPrice={18000}
            price={12000}
          />
          <MainCart
            src="/assets/images/b599bbc73eaa10109e1150ed4ee29a41.jpeg"
            description="حداقل سفارش جارکیک 3عدد است."
            unit="اسلایس"
            title="کاپ کیک کدوحلوایی"
            offPrice={18000}
            price={12000}
          />
          <MainCart
            src="/assets/images/b599bbc73eaa10109e1150ed4ee29a41.jpeg"
            description="حداقل سفارش جارکیک 3عدد است."
            unit="اسلایس"
            title="کاپ کیک کدوحلوایی"
            offPrice={18000}
            price={12000}
          />
          <MainCart
            src="/assets/images/b599bbc73eaa10109e1150ed4ee29a41.jpeg"
            description="حداقل سفارش جارکیک 3عدد است."
            unit="اسلایس"
            title="کاپ کیک کدوحلوایی"
            offPrice={18000}
            price={12000}
          />
          <MainCart
            src="/assets/images/b599bbc73eaa10109e1150ed4ee29a41.jpeg"
            description="حداقل سفارش جارکیک 3عدد است."
            unit="اسلایس"
            title="کاپ کیک کدوحلوایی"
            offPrice={18000}
            price={12000}
          />
          <MainCart
            src="/assets/images/b599bbc73eaa10109e1150ed4ee29a41.jpeg"
            description="حداقل سفارش جارکیک 3عدد است."
            unit="اسلایس"
            title="کاپ کیک کدوحلوایی"
            offPrice={18000}
            price={12000}
          />
        </div>
      </div>
    </div>
  );
};

export default MainProducts;
