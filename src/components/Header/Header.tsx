import React from "react";
import AsyncSwitch from "../AsyncSwitch/AsyncSwitch";
import FilterInput from "../FilterInput/FilterInput";
//icons
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import UserBox from "../user/UserBox";
import NavItem from "../Navitem/NavItem";
import { FiFilter } from "react-icons/fi";
// store

import appStore from "../../storage/AppStore";
import { observer } from "mobx-react-lite";

function HeaderComponent() {
  return (
    <header className="bg-blue-900 p-3 flex flex-row h-[4.2rem]">
      <AsyncSwitch></AsyncSwitch>
      <FilterInput></FilterInput>
      <div className="flex flex-row ml-auto">
        <NavItem click={appStore.openCloseSidebar}>
          {/* className="inline-block text-white self-center mr-2 h-full text-4xl" */}
          <BsFileEarmarkSpreadsheet className="text-2xl text-white" />
        </NavItem>
        <NavItem
          click={() => {
            console.log("KLIK");

            appStore.setFilterOption([
              {
                name: "sidebarVisible",
                value: !appStore.filter.sidebarVisible,
              },
            ]);
          }}>
          <FiFilter className="text-2xl text-white"></FiFilter>
        </NavItem>
        <NavItem click={() => {}}>
          <UserBox />
        </NavItem>
      </div>
    </header>
  );
}

const Header = observer(HeaderComponent);
export default Header;
