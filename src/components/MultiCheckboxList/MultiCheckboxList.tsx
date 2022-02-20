import React, { useState, useDebugValue, useReducer } from "react";
//interface
import MultiCheckboxInterface from "./MultiCheckboxInterface";
import reducerInit from "./reducerInit";
//helpers

function reducer(state: any, action: { type: string }) {
  switch (action.type) {
    case "all":
      // if (state0

      break;
    default:
      let allState = state;
      return { state: (state[action.type] = !allState[action.type]) };
  }
}

export default function MultiCheckboxList(props: MultiCheckboxInterface) {
  //   const [checkbox, dispatchCheckbox] = useReducer(
  //     reducer,
  //     reducerInit(props.data),
  //     reducerInit
  //   );

  return (
    <div>
      <div>
        <input type="checkbox" />
        <span>Zaznacz wszystkie</span>
      </div>
      {props.data.map((e, c) => (
        <div key={c}>
          <input type="checkbox" /> <span>{e}</span>
        </div>
      ))}
    </div>
  );
}
