import React, { useContext, useState } from "react";
import TableContext from "../../context/TableContext";
import "./headerCellStyle.css";

export default function HeaderCell(props: {
  value: string;
  cellNumber: number;
}) {
  const { cellSizeValues } = useContext(TableContext);
  const [resizeEnable, setResizeEnable] = useState<boolean>(false);
  const [cellSize, setCellSize] = useState(200);

  return (
    <div
      onMouseDown={(e) => {
        setResizeEnable((v) => !v);
      }}
      //   onMouseUp={() => {
      //     console.log("podniesziono");
      //     setResizeEnable(false);
      //   }}
      onMouseMove={(e) => {
        //@ts-ignore
        if (resizeEnable) setCellSize(e.nativeEvent.offsetX);
      }}
      style={{
        width: `${props.cellNumber * cellSize}px`,
      }}
      className="table-cell  text-center tableHeaderCellContainer">
      <p>{props.value}</p>
    </div>
  );
}
