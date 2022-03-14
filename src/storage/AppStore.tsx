import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import FilterInterface from "./interfaces/FilterInterface";
//helpers

class AppStore {
  sheet: string = ""; // contains courrent selected sheet
  columnNames: string[] = []; // contains list of all columns in courrent sheet
  filter: FilterInterface = {
    invisibleColums: [],
    sidebarVisible: false,
    value: "",
  };
  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Changes sheet
   *
   * @param newSheet name of new sheet
   */
  setCurrentSheet(newSheet: string) {
    this.sheet = newSheet;
  }

  /**
   * Extract column headers from example row
   * @param exampleRow
   *
   *
   */
  setColumnNames(exampleRow: Object) {
    this.columnNames = Object.keys(exampleRow);
  }
  /**
   * Changes opotion of filter
   * @param options
   */
  setFilterOption(options: { name: string; value: string | boolean | [] }[]) {
    options.forEach((e) => (this.filter[e.name] = e.value));
  }
}

const appStore = new AppStore();

export default appStore;
