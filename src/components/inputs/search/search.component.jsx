import React, { useState } from "react";
import { onChangeHandler } from "../../../hooks/handlers.state";
import { SecondaryInput } from "../../../styles/inputs.styles";
import { DynamicSvg } from "../../../assets/icons/icons";

const Search = ({ collapse }) => {
  const [search, setSearch] = useState({ search: " " });
  const placeHolderValue = collapse ? " " : "جستجو...";
  return (
    <div className="relative flex justify-end items-center">
      <span
        className={`absolute left-1 top-0 bottom-0 my-auto rounded-full w-6 h-6  md:h-10 md:w-10 flex justify-center items-center ${
          !collapse && "bg-primary p-1.5"
        }`}
      >
        <DynamicSvg
          color={collapse ? "#154160" : "white"}
          name="search-linear"
        />
      </span>
      <SecondaryInput
        collapse={collapse}
        placeholder={placeHolderValue}
        name="search"
        value={search.search}
        onChange={(e) => onChangeHandler(e, setSearch)}
      />
    </div>
  );
};

export default Search;
