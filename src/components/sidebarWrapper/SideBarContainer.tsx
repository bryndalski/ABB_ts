import React from "react";
import "./SidebarStyles.css";

import { AiOutlineClose } from "react-icons/ai";

import SideBarInterface from "./SideBarInterface";
export default function SideBarContainer(props: SideBarInterface) {
  return (
    <div className={`sidebar ${!true ? "hidden" : ""}`}>
      <div className="p-3">
        <AiOutlineClose
          className="block ml-auto cursor-pointer text-xl"
          onClick={() => props.changeVisible(false)}
        />
      </div>

      {props.children}
    </div>
  );
}
