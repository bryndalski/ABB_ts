import React, { useState } from "react";
import "./HamburgerStyles.css";
import HamburgerInterface from "./HamburgerInterface";
export default function Hamburger(props: HamburgerInterface) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={`menu-btn ${isOpen ? "open" : ""}`}
      onClick={() => {
        setIsOpen((v) => !v);
        props.setOpen();
      }}>
      <div className="menu-btn__burger"></div>
    </div>
  );
}
