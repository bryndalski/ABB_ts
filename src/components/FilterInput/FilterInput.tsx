import React from "react";

import "./filterStyles.css";

import { observer } from "mobx-react";
import appStore from "../../storage/AppStore";

import { FiFilter } from "react-icons/fi";
function FilterInputComponent() {
  return (
    <div className="sm:min-w-[127px] hidden sm:flex bg-white rounded-md  flex-row align-baseline ml-2">
      <FiFilter
        onClick={() => {
          appStore.setFilterOption([
            { name: "sidebarVisible", value: !appStore.filter.sidebarVisible },
          ]);
        }}
        className="inline-block hover:cursor-pointer self-center mr-2 ml-2"></FiFilter>
      <input
        type="text"
        value={appStore.filter.value}
        className=" m-0  rounded-r-md p-1 focus:outline-none font-bold hidden sm:block "
        placeholder="znajdź w tabeli"
        onChange={(e) => {
          appStore.setFilterOption([
            {
              name: "value",
              value: e.target.value as string,
            },
          ]);
        }}
        maxLength={100}
      />
    </div>
  );
}

const FilterInput = observer(FilterInputComponent);
export default FilterInput;
