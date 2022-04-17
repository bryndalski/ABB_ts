import React, { useState, useDebugValue } from "react";
import { observer } from "mobx-react";
import { FaUserCircle } from "react-icons/fa";
import { MdSettings, MdAdminPanelSettings } from "react-icons/md";
import DropDownMenuContainer from "../DropDownMenuContainer/DropDownMenuContainer";
import { CSSTransition } from "react-transition-group";
import DropdownItem from "../DropDownItem/DropDownItem";
import appStore from "../../storage/AppStore";
function UserBoxComponent() {
  const [open, setOpen] = useState(true);
  const [menuHeight, setMenuHeight] = useState(null);

  const [activeMenu, setActiveMenu] = useState("main");

  useDebugValue(console.log(open));
  function calcHeight(el: any) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <div>
      <FaUserCircle
        className="text-2xl text-white"
        onClick={() => setOpen((v) => !v)}
      />

      {open ? (
        <DropDownMenuContainer styles="rounded-xl bg-white border-solid border-2 border-blue-700 h-auto">
          <CSSTransition
            in={activeMenu === "main"}
            timeout={500}
            classNames="menu-primary"
            unmountOnExit
            onEnter={calcHeight}>
            <div className="menu">
              <DropdownItem
                leftIcon={<FaUserCircle className="text-2xl text-blue-700" />}
                setActiveMenu={setActiveMenu}>
                Mój Profil
              </DropdownItem>
              <DropdownItem
                leftIcon={<MdSettings className="text-2xl text-blue-700" />}
                setActiveMenu={setActiveMenu}>
                Ustawienia
              </DropdownItem>
              <DropdownItem
                leftIcon={
                  <MdAdminPanelSettings className="text-2xl text-blue-700" />
                }
                setActiveMenu={setActiveMenu}>
                {appStore.login.permissions}
              </DropdownItem>
              <DropdownItem
                setActiveMenu={setActiveMenu}
                textStyles="text-red-600 text-center  self-center margin-center">
                WYLOGUJ SIĘ
              </DropdownItem>
            </div>
          </CSSTransition>
        </DropDownMenuContainer>
      ) : null}
    </div>
  );
}

const UserBox = observer(UserBoxComponent);
export default UserBox;
