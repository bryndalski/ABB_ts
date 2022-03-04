import React, { useState, useContext } from "react";
import textReducer from "./textReducer";

import TableCell from "../singleTableCell/TableCell";

import SendRowData from "./SendRowData";
import SheetContext from "../../context/SheetContext";
interface propsInterface {
  row: { id: number };
  divNumber?: number;
  specialClasses?: string;
}

//single row
export default function TableRow(props: propsInterface) {
  const [rowValues, setRowValues] = useState({ ...props.row });
  const [olderValue, setOlderValue] = useState({ ...props.row });
  const { sheet } = useContext(SheetContext);
  return (
    <div
      className="table-row  text-justify"
      onBlur={() => {
        // SendRowData();
        if (JSON.stringify(rowValues) !== JSON.stringify(olderValue)) {
          SendRowData(props.row.id, sheet, rowValues);
          setOlderValue({ ...rowValues });
        }
      }}>
      <div className="table-cell border-solid border-2 text-center align-middle">
        <p className="">{props.divNumber}</p>
      </div>
      {Object.keys(props.row).map((e, c) => {
        if (Object.keys(props.row)[0] === "id" && c === 0) {
        } else
          return (
            <TableCell
              key={c}
              //@ts-ignore
              value={props.row[e]}
              editable={c !== 0 && Object.keys(props.row)[0] === "id"}
              editValue={setRowValues}
              colName={e}
            />
          );
      })}
    </div>
  );
}
