import React, { useState, useContext } from "react";
import SideBarContainer from "../sidebarWrapper/SideBarContainer";
import SheetContext from "../../context/SheetContext";
import { FiFilter } from "react-icons/fi";
import MultiCheckboxList from "../MultiCheckboxList/MultiCheckboxList";
//css
import "./SideBarFilterStyles.css";

export default function SideBarFilter() {
  const {
    columnNames,
    filterVisibility,
    setFilterVisibility,
    filter,
    setFilter,
  } = useContext(SheetContext);
  //filter

  return (
    <SideBarContainer
      isVisible={filterVisibility}
      changeVisible={setFilterVisibility}>
      <span className="block text-center">Opcje Filtra</span>
      <section className="p-2">
        <span>Aktualny filter</span>
        <div className="min-w-[127px] p-1  bg-white rounded-md flex flex-row align-baseline border-solid border-2 border-blue-900">
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
      <section className="p-2">
        <span>Szukaj w kolumnach:</span>
        <MultiCheckboxList
          multi={true}
          data={columnNames}
          value={null}></MultiCheckboxList>
      </section>
    </SideBarContainer>
  );
}
