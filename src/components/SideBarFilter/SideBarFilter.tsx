import React from "react";
import { observer } from "mobx-react";
import SideBarContainer from "../sidebarWrapper/SideBarContainer";
import { FiFilter } from "react-icons/fi";
import MultiCheckboxList from "../MultiCheckboxList/MultiCheckboxList";
//css
import "./SideBarFilterStyles.css";
//MOBX
import appStore from "../../storage/AppStore";
function SideBarFilterComponent() {
  //filter

  return (
    <SideBarContainer
      isVisible={appStore.filter.sidebarVisible}
      changeVisible={() =>
        appStore.setFilterOption([{ name: "sidebarVisible", value: false }])
      }>
      <span className="block text-center">Opcje Filtra</span>
      <section className="p-2">
        <span>Aktualny filter</span>
        <div className="min-w-[127px] p-1  bg-white rounded-md flex flex-row align-baseline border-solid border-2 border-blue-900">
          <FiFilter className="inline-block hover:cursor-pointer self-center mr-2 ml-2" />
          <input
            className=" m-0  rounded-r-md pt-1 pb-1 focus:outline-none font-bold"
            placeholder="znajdź w tabeli"
            type="text"
            value={appStore.filter.value}
            onChange={(e) =>
              appStore.setFilterOption([
                {
                  name: "value",
                  value: e.target.value as string,
                },
              ])
            }
          />
        </div>
      </section>
      <section className="p-2">
        <span>Szukaj w kolumnach:</span>
        <MultiCheckboxList
          multi={true}
          data={appStore.columnNames}
          value={null}></MultiCheckboxList>
      </section>
    </SideBarContainer>
  );
}

const SideBarFilter = observer(SideBarFilterComponent);
export default SideBarFilter;
