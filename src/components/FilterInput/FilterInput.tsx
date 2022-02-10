import React, { useState, useContext, useDebugValue } from "react";
import SheetContext from "../../context/SheetContext";
import "./filterStyles.css";

import { AiOutlineSearch } from "react-icons/ai";
export default function FilterInput() {
  const { setFilter } = useContext(SheetContext);
  const [inputValue, setValue] = useState("");

  useDebugValue(inputValue ? console.log(inputValue) : "");

  return (
    <div className="min-w-[127px] max-w-fit bg-white rounded-md flex flex-row align-baseline ml-2">
      <input
        type="text"
        value={inputValue}
        className=" m-0  rounded-l-md p-1 focus:outline-none font-bold"
        placeholder="znajdź w tabeli"
        onChange={(e) => {
          setValue(e.target.value);
          setFilter(e.target.value);
        }}
        maxLength={100}
      />
      <AiOutlineSearch className="inline-block hover:cursor-pointer self-center mr-2 ml-2"></AiOutlineSearch>
    </div>
  );
}
