import React, { useState } from "react";
import { UserContext } from "../../context/UserContext";
//components
import Header from "../../components/Header/Header";
import DataTable from "../../components/DataTable/DataTable";
import SideBarFilter from "../../components/SideBarFilter/SideBarFilter";
//context
import SheetContext from "../../context/SheetContext";

//!!!TEST
import SideBarContainer from "../../components/sidebarWrapper/SideBarContainer";
export default function Home() {
  const [sheet, setSheet] = useState(""); // coutent sheet
  const [filter, setFilter] = useState(""); //courrent filter
  const [filterVisibility, setFilterVisibility] = useState(false); // filter sidebar visibility
  const [columnNames, setColumnNames] = useState([]);
  return (
    <SheetContext.Provider
      value={{
        sheet,
        setSheet,
        filter,
        setFilter,
        filterVisibility,
        setFilterVisibility,
        columnNames,
        setColumnNames,
      }}>
      <div className="w-screen h-screen overflow-hidden">
        <Header></Header>
        <DataTable></DataTable>
      </div>
      <SideBarFilter></SideBarFilter>
    </SheetContext.Provider>
  );
}
