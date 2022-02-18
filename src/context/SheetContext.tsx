import { createContext } from "react";

const SheetContext = createContext({
  sheet: "",
  setSheet: (sheetName: string) => {},
  filter: "",
  setFilter: (filterValue: string) => {},
  filterVisibility: false,
  setFilterVisibility: (value: boolean): any => {},
});

export default SheetContext;
