import React from "react";
import { DynamicSvg } from "../../assets/icons/icons";
import { countHandler } from "../../hooks/handlers.hook";
import { RoundPrimaryButton } from "../../styles/buttons.styles";

const CounterButton = ({ customStyle, count, setCount, size = 24 }) => {
  if (count > 0) {
    return (
      <div className="flex gap-2 md:gap-3 items-center">
        <RoundPrimaryButton
          className={customStyle}
          onClick={(e) => countHandler("minus", count, setCount)}
        >
          <DynamicSvg name="minus-outline" size={size} color="white" />
        </RoundPrimaryButton>
        <div className="text-[10px] md:text-base">{count}</div>
        <RoundPrimaryButton
          name="plus"
          className={customStyle}
          onClick={(e) => countHandler("plus", count, setCount)}
        >
          <DynamicSvg size={size} name="plus-outline" color="white" />
        </RoundPrimaryButton>
      </div>
    );
  } else {
    return (
      <div className="flex gap-2 md:gap-3 items-center">
        <RoundPrimaryButton
          name="plus"
          className={customStyle}
          onClick={(e) => countHandler("plus", count, setCount)}
        >
          <DynamicSvg size={size} name="plus-outline" color="white" />
        </RoundPrimaryButton>
      </div>
    );
  }
};

export default CounterButton;
