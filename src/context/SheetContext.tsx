import { createContext } from "react";

const SheetContext = createContext({
  sheet: "",
  setSheet: (sheetName: string) => {},
});

export default SheetContext;
