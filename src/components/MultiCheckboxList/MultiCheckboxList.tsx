import React, { useState, useDebugValue, useReducer } from "react";
//interface
import MultiCheckboxInterface from "./MultiCheckboxInterface";
import reducerInit from "./reducerInit";
//helpers

function reducer(state: any, action: { type: string }) {
  // switch (action.type) {
  //   case "all":
  //     console.log(state);

  //     break;
  //   default:
  //     let allState = state;
  //     return { state: (state[action.type] = !allState[action.type]) };
  // }
  return state;
}

export default function MultiCheckboxList(props: MultiCheckboxInterface) {
  const [checkbox, dispatchCheckbox] = useReducer(
    reducer,
    reducerInit(props.data)
  );
  const [allSelected, setAllSelected] = useState(true);

  useDebugValue(console.log("REDUCER_Value", checkbox));
  useDebugValue(console.log(props.data));
  return (
    <div>
      <div>
        <input
          type="checkbox"
          onChange={() => dispatchCheckbox({ type: "all" })}
        />
        <span>Zaznacz wszystkie</span>
      </div>
      {checkbox.map(
        (
          e: {
            label: string;
            checked: boolean;
          },
          c: number
        ) => (
          <div key={c}>
            <input type="checkbox" checked={e.checked} /> <span>{e.label}</span>
          </div>
        )
      )}
    </div>
  );
}
