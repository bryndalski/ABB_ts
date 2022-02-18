import React from "react";
import "./SidebarStyles.css";

import { AiOutlineClose } from "react-icons/ai";

import SideBarInterface from "./SideBarInterface";
export default function SideBarContainer(props: SideBarInterface) {
  return (
    <div className={`sidebar ${!props.isVisible ? "hidden" : ""}`}>
      <div>
        <AiOutlineClose
          className="align-end"
          onClick={() => props.changeVisible(false)}
        />
      </div>

      {props.children}
    </div>
  );
}
