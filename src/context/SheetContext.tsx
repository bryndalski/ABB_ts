import { createContext } from "react";

const SheetContext = createContext({
  sheet: "",
  setSheet: (sheetName: string) => {},
  //?filter
  filter: "",
  setFilter: (filterValue: string) => {},
  filterVisibility: false,
  setFilterVisibility: (value: boolean): any => {},
  //?column names
  columnNames: [],
  setColumnNames: (value: []): any => {},
});

export default SheetContext;
