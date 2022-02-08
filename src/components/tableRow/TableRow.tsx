import React, { useState } from "react";
import textReducer from "./textReducer";

import TableCell from "../singleTableCell/TableCell";

interface propsInterface {
  row: Object;
  divNumber?: number;
  specialClasses?: string;
}

//single row
export default function TableRow(props: propsInterface) {
  const [displayKeys, setDisplayKeys] = useState(props.row);

  return (
    <div className="table-row  text-justify">
      <div className="table-cell border-solid border-2 text-center align-middle">
        <p className="">{props.divNumber}</p>
      </div>
      {Object.values(props.row).map((e, c) => {
        if (Object.keys(props.row)[0] === "id" && c === 0) {
        } else
          return (
            <TableCell
              key={c}
              value={e}
              editable={c !== 0 && Object.keys(props.row)[0] === "id"}
            />
          );
      })}
    </div>
  );
}
