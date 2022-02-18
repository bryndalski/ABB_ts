import React, { useState } from "react";
import AsyncSwitch from "../AsyncSwitch/AsyncSwitch";
import FilterInput from "../FilterInput/FilterInput";
export default function Header() {
  return (
    <header className="bg-blue-900 p-3 flex flex-row h-[4.2rem]">
      <AsyncSwitch></AsyncSwitch>
      <FilterInput></FilterInput>
    </header>
  );
}
