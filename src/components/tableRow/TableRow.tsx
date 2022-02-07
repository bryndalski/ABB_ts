import React, { useState } from "react";
import textReducer from "./textReducer";

import TableCell from "../singleTableCell/TableCell";
interface propsInterface {
  row: Object;
  divNumber?: number;
  specialClasses?: string;
}

export default function TableRow(props: propsInterface) {
  const [displayKeys, setDisplayKeys] = useState(props.row);

  //   setDisplayKeys((v) => {
  // console.log(v);

  // return v;
  // if (Object.keys(v)[0] === "id") {
  //   //@ts-ignore
  //   delete v.id;
  //   return v;
  // }
  //   });

  return (
    <div className="table-row  text-justify">
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
