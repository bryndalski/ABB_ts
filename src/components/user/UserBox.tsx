/**
 * Log out and setting menu
 */

import React, { useState, useDebugValue } from "react";
import { useNavigate } from "react-router-dom";
//custom
import DropDownMenuContainer from "../DropDownMenuContainer/DropDownMenuContainer";
import DropdownItem from "../DropDownItem/DropDownItem";
//css
import { CSSTransition } from "react-transition-group";
//icons
import { BiLogOutCircle } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { MdSettings, MdAdminPanelSettings } from "react-icons/md";
//storage
import { observer } from "mobx-react";
import appStore from "../../storage/AppStore";

function UserBoxComponent() {
  const [open, setOpen] = useState<boolean>(false); // menu is visible ?
  const [menuHeight, setMenuHeight] = useState<Number | null>(null); // menu height
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState<string>("main"); // which item is active

  /**
   * Calculates destinantion height
   * @param el
   */
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
      {/* Opened menu */}
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
                setActiveMenu={setActiveMenu}
                onCLick={() => navigate("/user")}>
                Mój Profil
              </DropdownItem>
              <DropdownItem
                leftIcon={<MdSettings className="text-2xl text-blue-700" />}
                setActiveMenu={setActiveMenu}>
                Ustawienia
              </DropdownItem>
              {
                //? Czy dodawać admina
                /* <DropdownItem
                leftIcon={
                  <MdAdminPanelSettings className="text-2xl text-blue-700" />
                }
                setActiveMenu={setActiveMenu}
                textStyles="capitalize">
                {appStore.login.permissions}
              </DropdownItem> */
              }
              <DropdownItem
                leftIcon={<BiLogOutCircle className="text-2xl text-red-600" />}
                setActiveMenu={setActiveMenu}
                onCLick={() => {
                  appStore.logOut();
                  navigate("/loggedOut");
                }}
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
