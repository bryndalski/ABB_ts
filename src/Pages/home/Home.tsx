import React, { useState } from "react";
import { UserContext } from "../../context/UserContext";
//components
import Header from "../../components/Header/Header";
import DataTable from "../../components/DataTable/DataTable";
//context
import SheetContext from "../../context/SheetContext";

export default function Home() {
  const [sheet, setSheet] = useState("");

  return (
    <div className="w-screen h-screen overflow-hidden">
      <SheetContext.Provider value={{ sheet, setSheet }}>
        <Header></Header>
        <DataTable></DataTable>
      </SheetContext.Provider>
    </div>
  );
}
