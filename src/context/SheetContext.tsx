import { createContext } from "react";

const SheetContext = createContext({
  sheet: "",
  setSheet: (sheetName: string) => {},
  filter: "",
  setFilter: (filterValue: string) => {},
});

export default SheetContext;
