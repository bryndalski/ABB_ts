/**
 * User option bar for user admin and mod displaing all options
 *
 */
import React, { useLayoutEffect } from "react";
import UserSideBarOption from "../UserSideBarOption/UserSideBarOption";
import OptionBarInterface from "./OptionBarInterface";
//css
import "./OptionBarStyles.css";
//user options from config
import CONFIG from "../../CONFIG.json";
import { observer } from "mobx-react";
import appStore from "../../storage/AppStore";
import { useState } from "react";
import { useDebugValue } from "react";

function OptionBarComponent(props: OptionBarInterface) {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  //screen resize
  useLayoutEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useDebugValue(console.log(props.isOpen));
  return (
    <div
      className={`w-full sm:w-[300px] absolute  ${
        windowWidth < 500
          ? props.isOpen
            ? "optionBarActive"
            : "optionBarOut"
          : ""
      }`}>
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
