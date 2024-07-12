import React from "react";
import {  RadioFilterFaker, RadioSecondaryFaker } from "../../../styles/inputs.styles";

const RadioSecondary = ({ checked, name, value, handler }) => {
  return (
    <label className="radio-secondary">
      <input
        defaultChecked={checked}
        onClick={handler}
        name={name}
        value={value}
        type="radio"
      />
      <RadioSecondaryFaker className="radio-faker" />
    </label>
  );
};


export const RadioFilter = ({ id,checked, name, value, handler, title }) => {
  return (
    <label className="radio-filter">
    
      <input
      id={id}
        checked={checked}
        onClick={handler}
        name={name}
        value={value}
        type="radio"
      />
        <span className="text-[10px]   md:text-base">
     {title}
     </span>
      <RadioFilterFaker className="radio-filterfaker" />
    </label>
  );
};

export default RadioSecondary;
