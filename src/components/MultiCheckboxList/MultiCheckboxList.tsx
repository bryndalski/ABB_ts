import React, { useState, useDebugValue, useReducer, useEffect } from "react";
//interface
import MultiCheckboxInterface from "./MultiCheckboxInterface";
import CheckBoxArrayInterface from "./CheckBoxArrayInterface";
import reducerInit from "./reducerInit";
import { ImSpinner2 } from "react-icons/im";
//styles
import "./MultipleCheckboxListStyle.css";

//helpers
import DynamicCheckbox from "../dynamicChekbox/DynamicCheckbox";

export default function MultiCheckboxList(props: MultiCheckboxInterface) {
  const [checkbox, setCheckbox] = useState<Array<CheckBoxArrayInterface>>(
    reducerInit(props.data)
  );

  useEffect(() => {
    setCheckbox(reducerInit(props.data));
  }, [props.data]);

  useDebugValue(console.log(JSON.stringify(checkbox)));

  const change = (index: number) => {
    let tmpArray = checkbox;
    tmpArray[index].checked = !tmpArray[index].checked;
    setCheckbox([...tmpArray]);
  };

  if (checkbox.length === 0)
    return (
      <div className="p-2 w-full flex justify-around border-solid ">
        <p>Ładowanie danych...</p>
        <ImSpinner2 className="animate-spin text-3xl text-blue-900" />
      </div>
    );
  else
    return (
      <div className="littleSctoll overflow-scroll h-40 overflow-x-hidden ">
        <div>
          <input type="checkbox" onChange={() => {}} />
          <span className="ml-1">Zaznacz wszystkie</span>
        </div>
        {checkbox.map((e: CheckBoxArrayInterface, c: number) => (
          <DynamicCheckbox
            key={c}
            index={c}
            label={e.label}
            checked={e.checked}
            change={(index: number) => change(index)}
          />
        ))}
      </div>
    );
}
