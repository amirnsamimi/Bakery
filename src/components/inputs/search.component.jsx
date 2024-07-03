import React, { useState } from "react";
import { onChangeHandler } from "../../hooks/handlers.state";
import { SecondaryInput } from "../../styles/inputs.styles";
import { DynamicSvg } from "../../assets/icons/icons";

const Search = () => {
  const [search, setSearch] = useState({ search: " " });

  return (
    <div className="relative flex justify-end items-center">
      <span className="absolute left-1 top-0 bottom-0 my-auto rounded-full w-6 h-6 p-1.5 md:h-10 md:w-10 flex justify-center items-center bg-primary">
        <DynamicSvg size="24" color="white" name="search-linear" />
      </span>
      <SecondaryInput
        placeholder="جستجو..."
        css={{}}
        name="serach"
        value={search.search}
        onChange={(e) => onChangeHandler(e, setSearch)}
      />
    </div>
  );
};

export default Search;
