import { makeAutoObservable } from "mobx";
import FilterInterface from "./interfaces/FilterInterface";
import getData from "./getData";
import CONFIG from "../CONFIG.json";
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
  fetchData = () =>
    new Promise(async (suc) =>
      suc(await getData(CONFIG.sheetsData, this.sheet))
    );

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
  setFilterOption(
    options: { name: string; value: string | boolean | string[] }[]
  ) {
    options.forEach((e) => (this.filter[e.name] = e.value));
  }
}

const appStore = new AppStore();

export default appStore;
