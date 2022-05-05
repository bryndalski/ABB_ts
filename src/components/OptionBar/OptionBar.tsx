/**
 * User option bar for user admin and mod displaing all options
 *
 */
import React, { useDebugValue } from "react";
import UserSideBarOption from "../UserSideBarOption/UserSideBarOption";
import OptionBarInterface from "./OptionBarInterface";
//mobix
import { Observer } from "mobx-react";
import "./OptionBarStyles.css";
//user options from config
import CONFIG from "../../CONFIG.json";
import { observer } from "mobx-react";
import appStore from "../../storage/AppStore";

function OptionBarComponent(props: OptionBarInterface) {
  return (
    <div className={`${props.isOpen ? " active" : "hidden"}`}>
      {CONFIG.users.defualt.map((e: any, c: number) => (
        <UserSideBarOption text={e.text} key={c} />
      ))}
      {/* //TODO admin mod options */}
      {/* {CONFIG.users[appStore.login.permissions as string].map(
        (e: any, c: number) => (
          <UserSideBarOption text={e.text} key={c} />
        )
      )} */}
    </div>
  );
}
const OptionBar = observer(OptionBarComponent);
export default OptionBar;
