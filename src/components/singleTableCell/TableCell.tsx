import React, { useState } from "react";

import "./tableCellStyle.css";
interface propsInterface {
  value: number | string;
  editable: boolean;
  colName: string;
  editValue: React.Dispatch<React.SetStateAction<any>>;
}

export default function TableCell(props: propsInterface) {
  const [cellValue, setCellValue] = useState(props.value);

  return (
    <div className="table-cell text-center cell-container">
      <textarea
        // disabled={props.editable}
        onBlur={(e) => {
          props.editValue((v: any) => {
            v[props.colName] = cellValue;
            return v;
          });
        }}
        className="  border-solid border-2 resize-none  overflow-ellipsis  cell focus:outline-none focus:border-blue-500"
        value={cellValue}
        onChange={(e) => {
          setCellValue(e.target.value as string);
        }}
      />
    </div>
  );
}
