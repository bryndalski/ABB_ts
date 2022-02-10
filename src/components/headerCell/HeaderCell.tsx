import React, { useContext, useState, useEffect } from "react";
import TableContext from "../../context/TableContext";
import "./headerCellStyle.css";

export default function HeaderCell(props: {
  value: string;
  cellNumber: number;
}) {
  const { cellSizeValues } = useContext(TableContext);
  const [resizeEnable, setResizeEnable] = useState<boolean>(true);
  const [cellSize, setCellSize] = useState(200);

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
      //   //   onMouseUp={() => {
      //   //     console.log("podniesziono");
      //   //     setResizeEnable(false);
      //   //   }}

      style={{
        width: `${cellSize}px`,
      }}
      className="table-cell  w-full">
      <div className="flex flex-row resizableCell  w-full justify-center h-full">
        <p className="cellName">{props.value}</p>
        <div
          className="catchBoard "
          // onMouseDown={(e) => {
          //   setResizeEnable((v) => !v);
          // }}
          onMouseMove={(e) => {
            //@ts-ignore
            if (resizeEnable) {
              console.log(e.nativeEvent.offsetX, e.nativeEvent.pageX);
              //   setCellSize(e.nativeEvent.offsetX + 200);
            }
          }}></div>
      </div>
    </div>
  );
}
