import React, { useState } from "react";
import AsyncSwitch from "../AsyncSwitch/AsyncSwitch";
import SheetContext from "../../context/SheetContext";
export default function Header() {
  return (
    <div className="bg-blue-900 p-3">
      <AsyncSwitch></AsyncSwitch>
    </div>
  );
}
