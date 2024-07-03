import React from "react";
import { RadioSecondaryFaker } from "../../../styles/inputs.styles";

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

export default RadioSecondary;
