import { makeAutoObservable, observable } from "mobx";
import { persist } from "mobx-persist";
import FilterInterface from "../components/FilterInput/FilterInterface";
import getData from "./getData";
import CONFIG from "../CONFIG.json";
import TableDataInterface from "./interfaces/TableDataInterface";
import LoginInterface from "./interfaces/LoginInterface";

//helpers

class AppStore {
  filter: FilterInterface = {
    invisibleColums: [],
    sidebarVisible: false,
    value: "",
  };
  data: TableDataInterface = {
    data: [],
    sheet: "", // contains courrent selected sheet
    columnNames: [], // contains list of all columns in courrent sheet
  };
  //@ts-ignore0
  @persist("object") login: LoginInterface = {
    username: "",
    logged: false,
    email: "",
    permissions: "",
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
    this.data.sheet = newSheet;
  }
  fetchData = () =>
    new Promise(async (suc) =>
      suc(await getData(CONFIG.sheetsData, this.data.sheet))
    );

  /**
   * Extract column headers from example row
   * @param exampleRow
   *
   *
   */
  setColumnNames(exampleRow: Object) {
    this.data.columnNames = Object.keys(exampleRow);
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
  /**
   *Sets login with user
   * @param user:
   */
  setUser(user: LoginInterface) {
    this.login = { ...user };
  }
}

const appStore = new AppStore();

export default appStore;
