import React, { useState } from "react";
import { UserContext } from "../../context/UserContext";
//components
import Header from "../../components/Header/Header";
import DataTable from "../../components/DataTable/DataTable";
//context
import SheetContext from "../../context/SheetContext";

//!!!TEST
import SideBarContainer from "../../components/sidebarWrapper/SideBarContainer";
export default function Home() {
  const [sheet, setSheet] = useState("");
  const [filter, setFilter] = useState("");
  const [filterVisibility, setFilterVisibility] = useState(false);
  return (
    <SheetContext.Provider
      value={{
        sheet,
        setSheet,
        filter,
        setFilter,
        filterVisibility,
        setFilterVisibility,
      }}>
      <div className="w-screen h-screen overflow-hidden">
        <Header></Header>
        <DataTable></DataTable>
      </div>
      //!!! TODO fix me
      {/* <SideBarContainer
        changeVisble={setFilterVisibility}
        isVisible={filterVisibility}>
        <span>Xdssss</span>
        <span>essa</span>
      </SideBarContainer> */}
    </SheetContext.Provider>
  );
}
