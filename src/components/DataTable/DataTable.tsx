import React, { useContext, useEffect, useState, useDebugValue } from "react";
import SheetContext from "../../context/SheetContext";
//functions
import getData from "./GetSheetContent";
//config
import CONFIG from "../../CONFIG.json";
//style
import "./tableStyles.css";
//components
import TableRow from "../tableRow/TableRow";

//!!! TEST
import TEST_DATA from "./TEST.json";
import TableHeader from "../tableHeader/TableHeader";

export default function DataTable() {
  //using context
  const { sheet } = useContext(SheetContext);
  //states
  const [sheetData, setSheetData] = useState(new Array());
  const [isLoading, setIsLoading] = useState(true);

  const controllAsync = async () => {
    setIsLoading(true);
    setSheetData(await getData(CONFIG.sheetsData, sheet));
    // if (Object.keys(sheetData[0])[0] === "id")
    //   setSheetData((v) =>
    //     v.map((e) => {
    //       delete e.id;

    //       return e;
    //     })
    //   );
    setIsLoading((prev) => !prev);
  };

  useEffect(() => {
    if (sheet != "") controllAsync();
    // setSheetData(TEST_DATA);
  }, [sheet]);

  useDebugValue(sheetData != [] ? console.log(sheetData) : "Penis");

  if (isLoading)
    return (
      <div>
        <span>XD</span>
      </div>
    );
  else
    return (
      <div className="w-full overflow-auto  tableContainer">
        <div className="table w-full tableColor h-full  bg-slate-500">
          <TableHeader row={Object.keys(sheetData[0])} specialClasses="" />
          {sheetData.map((v, c) => (
            <TableRow divNumber={c} row={v} key={c} specialClasses="" />
          ))}
        </div>
      </div>
    );
}
