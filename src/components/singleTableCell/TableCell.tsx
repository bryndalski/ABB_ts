import React, { useState } from "react";

import "./tableCellStyle.css";
interface propsInterface {
  value: number | string;
  editable: boolean;
}

export default function TableCell(props: propsInterface) {
  const [cellValue, setCellValue] = useState(props.value);

  return (
    <div className="table-cell text-center ">
      <textarea
        // disabled={props.editable}
        className="  border-solid border-2 resize-none  overflow-ellipsis  cell focus:outline-none focus:border-blue-500"
        value={cellValue}
        onChange={(e) => {
          setCellValue(e.target.value as string);
        }}
      />
    </div>
  );
}
