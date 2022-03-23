import React, { useState, useEffect, useDebugValue } from "react";
import "./headerCellStyle.css"; //styles
export default function HeaderCell(props: {
  value: string;
  cellNumber?: number;
  width?: number;
}) {
  const [resizeEnable, setResizeEnable] = useState<boolean>(true);
  const [cellSize, setCellSize] = useState(props.width || 200);

  useDebugValue(console.log(cellSize));
  useEffect(() => {
    const onUpListener = (e: MouseEvent) => {
      setResizeEnable(false);
    };
    window.addEventListener("mouseup", onUpListener);
    // window.addEventListener("mousemove", (e) => {
    //   e.preventDefault();
    //   console.log(e.offsetX);
    // });

    return () => {
      window.removeEventListener("mouseup", onUpListener);
    };
  });

  return (
    <div
      style={{
        width: `${cellSize}px`,
      }}
      className="table-cell bg-red-500 h-8 max-h-8">
      {/* <div className="flex-row justify-center "> */}
      <p className="cellName bg-green-500">{props.value}</p>
      {/* <div className="catchBoard "></div> */}
      {/* </div> */}
    </div>
  );
}
