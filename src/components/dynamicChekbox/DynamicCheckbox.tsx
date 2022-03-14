import React, { useState } from "react";
import DynamicCheckboxInterface from "./DynamicCheckboxInterface";

export default function DynamicCheckbox(props: DynamicCheckboxInterface) {
  const [checked, setChecked] = useState(props.checked);
  return (
    <div
      className="cursor-pointer noselect"
      onClick={() => {
        setChecked((v) => !v);
        props.change(props.index);
      }}>
      <div>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {
            setChecked((v) => !v);
            props.change(props.index);
          }}
        />
        <span className="ml-1 noselect">{props.label}</span>
      </div>
    </div>
  );
}
