import { createContext } from "react";

interface contextInterface {
  cellSizeValues: Array<number> | [];
  setCellValue?: Function;
}

const context: contextInterface = {
  cellSizeValues: [],
  setCellValue: (value: number, columnNumber: number) => {},
};
const TableContext = createContext(context);

export default TableContext;
