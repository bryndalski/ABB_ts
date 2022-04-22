import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Hamburger from "../OptionBar/HamburgerButton/Hamburger";

export default function UserHeader() {
  return (
    <header className="bg-blue-900 p-3 flex flex-row h-[4.2rem]">
      <Hamburger />
    </header>
  );
}
