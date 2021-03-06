import React, { useState } from "react";
import ChangeData from "../../components/ChangeData/ChangeData";
import Header from "../../components/Header/Header";
import OptionBar from "../../components/OptionBar/OptionBar";
import UserHeader from "../../components/UserHeader/UserHeader";
import UserSideBarOption from "../../components/UserSideBarOption/UserSideBarOption";

export default function ProfilePage() {
  const [isOpen, setOpen] = useState<boolean>(false); // is hamburger menu open

  return (
    <div className="w-full h-full">
      <UserHeader setDropdown={() => setOpen((v) => !v)} />
      <div className="xs:flex xd:flex-row ">
        <div className="h-full">
          <OptionBar isOpen={isOpen} />
        </div>
        <ChangeData />
      </div>
    </div>
  );
}
