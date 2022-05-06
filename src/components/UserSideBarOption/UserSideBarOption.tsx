/**
 * Covers single user option
 */
import React from "react";

//Styles

import "./UserSideBarOptionStyles.css";
import UserSideBarOptionInterface from "./UserSideBarOptionInterface";

export default function UserSideBarOption(props: UserSideBarOptionInterface) {
  return (
    <div className="m-0 border-b-blue-500 p-2 border-solid border-b-2 w-full hover:bg-blue-300 xs:w-[300px] text-center hover:cursor-pointer">
      <span>{props.text}</span>
    </div>
  );
}
