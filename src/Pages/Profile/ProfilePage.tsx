import React from "react";
import Header from "../../components/Header/Header";
import OptionBar from "../../components/OptionBar/OptionBar";
import UserHeader from "../../components/UserHeader/UserHeader";
import UserSideBarOption from "../../components/UserSideBarOption/UserSideBarOption";

export default function ProfilePage() {
  return (
    <div className="w-full h-full">
      <UserHeader />
      <div className="h-full">
        <OptionBar />
      </div>
    </div>
  );
}
