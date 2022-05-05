import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Hamburger from "../HamburgerButton/Hamburger";
import HeaderInerface from "./HeaderInterface";

export default function UserHeader(props: HeaderInerface) {
  return (
    <header className="bg-blue-900 p-3 flex flex-row h-[4.2rem]">
      <div className="xs:hidden block ">
        <Hamburger setOpen={props.setDropdown} />
      </div>
    </header>
  );
}
