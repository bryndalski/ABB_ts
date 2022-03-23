import React from "react";
import AsyncSwitch from "../AsyncSwitch/AsyncSwitch";
import FilterInput from "../FilterInput/FilterInput";
//icons
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";

export default function Header() {
  return (
    <header className="bg-blue-900 p-3 flex flex-row h-[4.2rem]">
      <AsyncSwitch></AsyncSwitch>
      <FilterInput></FilterInput>
      <BsFileEarmarkSpreadsheet className="inline-block text-white  self-center mr-2 h-full text-4xl" />
    </header>
  );
}
