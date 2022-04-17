import React, { useState, useRef, useEffect } from "react";
import "./Styles.css";
export default function DropDownMenuContainer(props: {
  styles: string;
  children: any;
}) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    //@ts-ignore
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  return (
    <div
      className={`dropdown z-20 ${props.styles}`}
      //@ts-ignore
      style={{ height: menuHeight }}
      ref={dropdownRef}>
      <div>{props.children}</div>
    </div>
  );
}
