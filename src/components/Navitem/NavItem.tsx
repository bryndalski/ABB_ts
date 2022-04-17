import React from "react";
import "./NavItemStyles.css";
export default function NavItem(props: any) {
  return (
    <div className="p-1  mx-1 h-[2.7rem] w-[2.7rem] hover:cursor-pointer  rounded-full grid items-center justify-center transition-all  bg-blue-800 hover:bg-blue-600 ">
      {props.children}
    </div>
  );
}
