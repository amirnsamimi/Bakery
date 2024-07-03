import React, { useState } from "react";
import { onChangeHandler } from "../../hooks/handlers.state";
import { SecondaryInput } from "../../styles/inputs.styles";

const Search = () => {
  const [search, setSearch] = useState({ search: " " });
  console.log(search);
  return (
    <div>
      <SecondaryInput
        css={{}}
        name="serach"
        value={search.search}
        onChange={(e) => onChangeHandler(e, setSearch)}
      />
    </div>
  );
};

export default Search;
