import React, { useState, useContext } from "react";
import SideBarContainer from "../sidebarWrapper/SideBarContainer";
import SheetContext from "../../context/SheetContext";
import { FiFilter } from "react-icons/fi";

export default function SideBarFilter() {
  const { filterVisibility, setFilterVisibility, filter, setFilter } =
    useContext(SheetContext);
  //filter

  return (
    <SideBarContainer
      isVisible={filterVisibility}
      changeVisible={setFilterVisibility}>
      <span className="center block">Opcje Filtra</span>
      <section className="p-2">
        <span>Aktualny filter</span>
        <div className="min-w-[127px] max-w-fit bg-white rounded-md flex flex-row align-baseline border-solid border-2 border-blue-800">
          <FiFilter className="inline-block hover:cursor-pointer self-center mr-2 ml-2" />
          <input
            className=" m-0  rounded-r-md pt-1 pb-1 focus:outline-none font-bold"
            placeholder="znajdź w tabeli"
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </section>
    </SideBarContainer>
  );
}
