import React, { useContext, useEffect, useState, useDebugValue } from "react";
//functions
import getData from "./GetSheetContent";
//config
import CONFIG from "../../CONFIG.json";
//style
import "./tableStyles.css";
//components
import TableRow from "../tableRow/TableRow";
//context
import SheetContext from "../../context/SheetContext";
import TableContext from "../../context/TableContext";

//!!! TEST
import TableHeader from "../tableHeader/TableHeader";
import { ImSpinner2 } from "react-icons/im";
export default function DataTable() {
  //using context
  const { sheet, filter, setColumnNames } = useContext(SheetContext);
  const { setCellValue } = useContext(TableContext);
  //states
  const [sheetData, setSheetData] = useState<Array<object>>(new Array()); // all the sheets
  const [isLoading, setIsLoading] = useState<boolean>(true); // is waiting for sheetData
  const [cellSizeValues, setCellSize] = useState<Array<number>>([]); // table cell sizes → for resize
  //context helpers
  const cellResizer = (value: number, columnNumber: number): void => {
    let cellSizes: Array<number> = [...cellSizeValues];
    cellSizes[columnNumber] = value;
    setCellSize([...cellSizes]);
  };

  const controllAsync = async () => {
    setIsLoading(true);
    setColumnNames([]);
    let fetchedSheets = await getData(CONFIG.sheetsData, sheet);
    setSheetData(fetchedSheets);
    //setting cell sizes
    setCellSize([...new Array(Object.keys(fetchedSheets[0]).length).fill(500)]);
    setColumnNames([...Object.keys(fetchedSheets[0])]);
    // setCellSize();
    setIsLoading((prev) => !prev);
  };

  useEffect(() => {
    if (sheet != "") controllAsync();
    // setSheetData(TEST_DATA);
  }, [sheet]);

  if (isLoading)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <ImSpinner2 className="animate-spin text-3xl text-blue-900" />
      </div>
    );
  else
    return (
      <div className="w-full overflow-auto  tableContainer">
        <div className="table  w-full tableColor h-full  custom-table">
          <TableContext.Provider
            value={{ cellSizeValues, setCellValue: cellResizer }}>
            <TableHeader row={Object.keys(sheetData[0])} specialClasses="" />
            {sheetData.map((v, c) => (
              <TableRow divNumber={c} row={v} key={c} specialClasses="" />
            ))}
          </TableContext.Provider>
        </div>
      </div>
    );
}
