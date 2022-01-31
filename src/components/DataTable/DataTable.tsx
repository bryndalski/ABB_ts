import React, { useContext, useEffect } from "react";
import SheetContext from "../../context/SheetContext";
//functions
import getData from "./GetSheetContent";
//config
import CONFIG from "../../CONFIG.json";
export default function DataTable() {
  //using context
  const { sheet } = useContext(SheetContext);

  const getAsyncData = async () =>
    console.log(await getData(CONFIG.allSheetsNames));

  useEffect(() => {
    getAsyncData();
  }, []);

  return (
    <table>
      <tr>
        <th>{JSON.stringify(sheet)}</th>
      </tr>
    </table>
  );
}
