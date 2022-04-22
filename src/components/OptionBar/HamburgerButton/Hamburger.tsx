import React, { useState } from "react";
import "./HamburgerStyles.css";
export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`menu-btn ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen((v) => !v)}>
      <div className="menu-btn__burger"></div>
    </div>
  );
}
