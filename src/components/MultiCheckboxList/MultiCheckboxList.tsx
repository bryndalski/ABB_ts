import React, { useState, useDebugValue, useReducer, useEffect } from "react";
//interface
import MultiCheckboxInterface from "./MultiCheckboxInterface";
import reducerInit from "./reducerInit";
//helpers

function reducer(state: any, action: { type: string; payload?: any }) {
  switch (action.type) {
    case "setAll":
      console.log("reducer", action.payload);

      return action.payload;
      break;
    case "all":
      console.log(state);

      break;
    case "change":
      state[action.payload.index].checked =
        !state[action.payload.index].checked;

      // console.log(state[action.payload.index]);
      console.log(state[action.payload.index]);
      return state;
    default:
    // let allState = state;
    // return { state: (state[action.type] = !allState[action.type]) };
  }
  return state;
}

export default function MultiCheckboxList(props: MultiCheckboxInterface) {
  const [checkbox, dispatchCheckbox] = useReducer(reducer, props.data);
  const [allSelected, setAllSelected] = useState(true);

  // useDebugValue(console.log(checkbox));

  useEffect(() => {
    dispatchCheckbox({ type: "setAll", payload: reducerInit(props.data) });
  }, [props.data]);

  useDebugValue(console.log(checkbox));

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
            <input
              type="checkbox"
              checked={e.checked}
              onChange={() =>
                dispatchCheckbox({ type: "change", payload: { index: c } })
              }
            />
            <span>{e.label}</span>
          </div>
        )
      )}
    </div>
  );
}
