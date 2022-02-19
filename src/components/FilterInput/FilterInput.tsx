import React, { useState, useContext, useDebugValue } from "react";
import SheetContext from "../../context/SheetContext";

import "./filterStyles.css";

import { FiFilter } from "react-icons/fi";
export default function FilterInput() {
  const { filter, setFilter, setFilterVisibility, filterVisibility } =
    useContext(SheetContext);

  return (
    <div className="min-w-[127px] max-w-fit bg-white rounded-md flex flex-row align-baseline ml-2">
      <FiFilter
        onClick={() => setFilterVisibility(!filterVisibility)}
        className="inline-block hover:cursor-pointer self-center mr-2 ml-2"></FiFilter>
      <input
        type="text"
        value={filter}
        className=" m-0  rounded-r-md p-1 focus:outline-none font-bold"
        placeholder="znajdź w tabeli"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        maxLength={100}
      />
    </div>
  );
}
