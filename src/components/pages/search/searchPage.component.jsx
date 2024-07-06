import React from "react";
import Search from "../../inputs/search/search.component";

const SearchPage = ({ close, open }) => {
  return (
    <div
      className={`min-h-[100vh] z-[100] w-full fixed top-0 bg-lightGray transition-transform duration-700 ease-in-out ${
        open ? "translate-x-0 " : "translate-x-full "
      }`}
    >
      <div className=" w-full right-0 top-0 bg-white z-50 h-[75px] flex justify-center items-center  px-4 ">
        <div className="w-max-screen-2xl basis-[1536px] flex items-center gap-4 px-4">
          <div className="grow ">
            <Search />
          </div>
          <div className="grow-0 ">
            {" "}
            <button onClick={close}> لغو </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
