import React from "react";
import { TextAreaInput } from "../../../styles/inputs.styles";

const TextArea = ({ handler, value, placeholder, type, required, name,className }) => {
  return (
    <TextAreaInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handler}
      required={required}
      name={name}
      className={className}
    ></TextAreaInput>
  );
};

export default TextArea;
