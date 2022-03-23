import React, { useState } from "react";

import TableCell from "../singleTableCell/TableCell";

import SendRowData from "./SendRowData";

//icons

import { FiTrash } from "react-icons/fi";
import appStore from "../../storage/AppStore";

interface propsInterface {
  row: { id: number };
  divNumber?: number;
  specialClasses?: string;
}

//single row
export default function TableRow(props: propsInterface) {
  const [rowValues, setRowValues] = useState({ ...props.row });
  const [olderValue, setOlderValue] = useState({ ...props.row });
  return (
    <div
      className="table-row  text-justify"
      onBlur={() => {
        // SendRowData();
        if (JSON.stringify(rowValues) !== JSON.stringify(olderValue)) {
          SendRowData(props.row.id, appStore.sheet, rowValues);
          setOlderValue({ ...rowValues });
        }
      }}>
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
