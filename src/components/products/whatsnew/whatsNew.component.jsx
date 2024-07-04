import React from "react";
import MainCart from "../mainCart/mainCart.component";
import { DynamicSvg } from "../../../assets/icons/icons";

const WhatsNew = ({ direction = "rtl" }) => {
  return (
    <div className="grid gap-4 overflow-hidden">
      <div className="flex gap-1 px-4">
        <DynamicSvg name="tag-outline" color="black" size={16} />{" "}
        <h2 className="font-medium text-xs"> تازه ها </h2>
      </div>
      <div className="grid gap-4 w-full overflow-x-scroll overflow-y-hidden ">
        <div
          className={` ${
            direction == "rtl" ? "pr-4" : "pl-4"
          } flex flex-nowrap w-max gap-4`}
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
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
