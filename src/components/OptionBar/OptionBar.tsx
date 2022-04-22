import React from "react";
import UserSideBarOption from "../UserSideBarOption/UserSideBarOption";
import "./OptionBarStyles.css";

export default function OptionBar() {
  return (
    <div className="">
      <UserSideBarOption />
      <UserSideBarOption /> <UserSideBarOption /> <UserSideBarOption />{" "}
      <UserSideBarOption /> <UserSideBarOption /> <UserSideBarOption />
    </div>
  );
}
