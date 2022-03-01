import React, { useState } from "react";
import DynamicCheckboxInterface from "./DynamicCheckboxInterface";

export default function DynamicCheckbox(props: DynamicCheckboxInterface) {
  const [checked, setChecked] = useState(props.checked);
  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {
            setChecked((v) => !v);
          }}
        />
        <span className="ml-1">{props.label}</span>
      </div>
    </div>
  );
}
