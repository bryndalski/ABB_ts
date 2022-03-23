import React from "react";
//components
import Header from "../../components/Header/Header";
import DataTable from "../../components/DataTable/DataTable";
import SideBarFilter from "../../components/SideBarFilter/SideBarFilter";
import appStore from "../../storage/AppStore";
//mobix
import { observer } from "mobx-react";

function HomeComponent() {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden">
        <Header></Header>
        <DataTable></DataTable>
      </div>
      {appStore.filter.sidebarVisible ? <SideBarFilter /> : null}
    </>
  );
}

const Home = observer(HomeComponent);
export default Home;
