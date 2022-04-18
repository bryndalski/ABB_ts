import React from "react";
import "./ManuItemStyles.css";

interface DropDownInterface {
  goToMenu?: string;
  setActiveMenu?: any;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  children?: any;
  textStyles?: string;
  onCLick?: Function;
}

export default function DropDownItem(props: DropDownInterface) {
  return (
    <a
      href="#"
      className="menu-item w-64 hover:bg-blue-100"
      onClick={() => {
        if (props.onCLick) props.onCLick();
        return props.goToMenu && props.setActiveMenu(props.goToMenu);
      }}>
      <span className="icon-button">{props.leftIcon}</span>
      <span className={`${props.textStyles}`}>{props.children}</span>
      <span className="icon-right">{props.rightIcon}</span>
    </a>
  );
}
