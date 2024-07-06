import React, { useState } from "react";

import { SecondaryInput } from "../../../styles/inputs.styles";
import { DynamicSvg } from "../../../assets/icons/icons";

const Search = ({ collapse, onChange, search }) => {
  const placeHolderValue = collapse ? " " : "جستجو...";
  return (
    <div className="relative flex justify-end items-center">
      <span
        className={`absolute left-1 top-0 bottom-0 my-auto rounded-full w-6 h-6  md:h-6 md:w-6 flex justify-center items-center ${
          !collapse && "bg-primary p-1.5"
        }`}
      >
        <DynamicSvg
          color={collapse ? "#154160" : "white"}
          name="search-linear"
          size={16}
        />
      </span>
      <SecondaryInput
        collapse={collapse}
        placeholder={placeHolderValue}
        name="search"
        value={search}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
