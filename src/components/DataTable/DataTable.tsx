import React, { useEffect, useState, useMemo } from "react";
import { observer } from "mobx-react";
import { toJS } from "mobx";
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
import filter from "./filter";

function DataTableComponent() {
  //states
  const [sheetData, setSheetData] = useState<Array<object>>([]); // all the sheets
  const [isLoading, setIsLoading] = useState<boolean>(true); // is waiting for sheetData
  //memo
  const filterValue = useMemo(
    () =>
      filter(
        appStore.filter.value,
        toJS(appStore.filter.invisibleColums),
        sheetData
      ),
    [
      appStore.filter.value,
      toJS(appStore.filter.invisibleColums),
      JSON.stringify(sheetData),
    ]
  );
  const controllAsync = async () => {
    setIsLoading(true); // start loading signature
    appStore.setColumnNames({});
    appStore.setFilterOption([{ name: "invisibleColums", value: [] }]); /// clears all options in filter
    let fetchedSheets = await getData(CONFIG.sheetsData, appStore.sheet); // get new sheet content
    setSheetData(fetchedSheets); // set new sheet data
    appStore.setColumnNames(fetchedSheets[0]); // set column names
    setIsLoading((prev) => !prev); // stops loadin
  };
  //watch for sheet change to trigger refresing table data
  //TODO add force reset
  useEffect(() => {
    if (appStore.sheet != "") controllAsync();
  }, [appStore.sheet]);

  if (isLoading || sheetData.length === 0)
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
          <TableHeader row={Object.keys(filterValue[0])} specialClasses="" />
          {/* {filterValue.map((v, c) => (
            //@ts-ignore
            <TableRow divNumber={c} row={v} key={c} specialClasses="" />
          ))} */}
        </div>
      </div>
    );
}

const DataTable = observer(DataTableComponent);

export default DataTable;
