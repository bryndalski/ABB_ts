import React, { useState, useEffect, useDebugValue } from "react";
import "./SidebarStyles.css";

import { AiOutlineClose } from "react-icons/ai";

import SideBarInterface from "./SideBarInterface";
// ${!props.isVisible ? "hidden" : ""} // !!!?
export default function SideBarContainer(props: SideBarInterface) {
  const [isFirstRender, setFirstRender] = useState<boolean>(false); //first render not to trigger animation
  useEffect(() => {
    if (props.isVisible) setFirstRender(true);
  }, [props.isVisible]);

  return (
    <div
      className={`sidebar ${
        isFirstRender ? (props.isVisible ? "in" : "out") : "hidden"
      }`}>
      <div className="p-3">
        <AiOutlineClose
          className="block ml-auto cursor-pointer text-xl "
          onClick={() => props.changeVisible(false)}
        />
      </div>

      {props.children}
    </div>
  );
}
