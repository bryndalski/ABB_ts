import React from "react";
//components
import Header from "../../components/Header/Header";
import DataTable from "../../components/DataTable/DataTable";
import SideBarFilter from "../../components/SideBarFilter/SideBarFilter";
import appStore from "../../storage/AppStore";
//mobix
import { observer } from "mobx-react";
import SideBarSheetMenager from "../../components/SIdeBarSheetMenager/SideBarSheetMenager";

function HomeComponent() {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden">
        <Header></Header>
        <DataTable></DataTable>
      </div>
      <SideBarFilter />
      <SideBarSheetMenager />
    </>
  );
}

const Home = observer(HomeComponent);
export default Home;
