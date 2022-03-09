import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
//helpers

class AppStore {
  sheet: string = ""; // contains courrent selected sheet
  columnNames: string[] = []; // contains list of all columns in courrent sheet
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
}

const appStore = new AppStore();

export default appStore;
