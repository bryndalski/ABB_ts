import React, { useState } from "react";
import AsyncSwitch from "../AsyncSwitch/AsyncSwitch";
import FilterInput from "../FilterInput/FilterInput";
export default function Header() {
  return (
    <div className="bg-blue-900 p-3 flex flex-row">
      <AsyncSwitch></AsyncSwitch>
      <FilterInput></FilterInput>
    </div>
  );
}
