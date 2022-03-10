import React, { useEffect, useState, useDebugValue } from "react";
import { observer } from "mobx-react";

//functions
import getData from "./getData";
//config
import CONFIG from "../../CONFIG.json";
//style
import "./tableStyles.css";
//components
import TableRow from "../tableRow/TableRow";
//MOBX upgreade
import appStore from "../../storage/AppStore";

//!!! TEST
import TableHeader from "../tableHeader/TableHeader";
import { ImSpinner2 } from "react-icons/im";

function DataTableComponent() {
  //states
  const [sheetData, setSheetData] = useState<Array<object>>([]); // all the sheets
  const [isLoading, setIsLoading] = useState<boolean>(true); // is waiting for sheetData

  const controllAsync = async () => {
    setIsLoading(true); // start loading signature
    appStore.setColumnNames({});
    let fetchedSheets = await getData(CONFIG.sheetsData, appStore.sheet); // get new sheet content
    setSheetData(fetchedSheets);
    appStore.setColumnNames(fetchedSheets[0]); // set column names

    setIsLoading((prev) => !prev); // stops loadin
  };
  //watch for sheet change to trigger refresing table data
  //TODO add force reset
  useEffect(() => {
    if (appStore.sheet != "") controllAsync();
  }, [appStore.sheet]);

  useEffect(() => {
    console.log(appStore.filter);
  }, [appStore.filter.invisibleColums]);
  //Renders

  useDebugValue(console.log(JSON.stringify(appStore.filter)));

  if (isLoading)
    // waiting for data
    return (
      <div className="w-full h-full flex items-center justify-center">
        <ImSpinner2 className="animate-spin text-3xl text-blue-900" />
      </div>
    );
  //data is here
  else
    return (
      <div className="w-full overflow-auto  tableContainer">
        <div className="table  w-full tableColor h-full  custom-table">
          <TableHeader row={Object.keys(sheetData[0])} specialClasses="" />
          {sheetData.map((v, c) => (
            //@ts-ignore
            <TableRow divNumber={c} row={v} key={c} specialClasses="" />
          ))}
        </div>
      </div>
    );
}

const DataTable = observer(DataTableComponent);

export default DataTable;
