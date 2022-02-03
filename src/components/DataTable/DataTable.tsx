import React, { useContext, useEffect, useState, useDebugValue } from "react";
import SheetContext from "../../context/SheetContext";
//functions
import getData from "./GetSheetContent";
//config
import CONFIG from "../../CONFIG.json";
//style
import "./tableStyles.css";

//!!! TEST
import TEST_DATA from "./TEST.json";

export default function DataTable() {
  //using context
  const { sheet } = useContext(SheetContext);
  //states
  const [sheetData, setSheetData] = useState(new Array());
  const [isLoading, setIsLoading] = useState(true);

  const controllAsync = async () => {
    setIsLoading(true);
    setSheetData(await getData(CONFIG.sheetsData, sheet));
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
      <div className="overflow-scroll">
        <table className="w-full bg-red-50 ">
          <thead>
            <tr>
              {Object.keys(sheetData[0]).map((e, c) => (
                <th key={c}>{e}</th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {sheetData.map((v) => (
              <tr className="bg-slate-300 max-h-7 ">
                {Object.values(v).map((e) => (
                  <td className="align-baseline">{e as string}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
