import React, { useState } from "react";
import DynamicCheckboxInterface from "./DynamicCheckboxInterface";
import "./DynamicCheckboxStyle.css";
export default function DynamicCheckbox(props: DynamicCheckboxInterface) {
  const [checked, setChecked] = useState<boolean>(props.checked);
  return (
    <div
      className="cursor-pointer noselect"
      onClick={() => {
        setChecked((v) => !v);
        props.change(props.index);
      }}>
      <div className="flex flex-row align-middle justify-between hover:text-white p-2 hover:bg-blue-600 ">
        <input
          type={props.type}
          className="  block self-center "
          checked={checked}
          onChange={() => {
            setChecked((v) => !v);
            props.change(props.index);
          }}
        />
        <span className="ml-1 noselect block text-right	">{props.label}</span>
      </div>
    </div>
  );
}
