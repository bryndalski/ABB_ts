/**
 * Side bar mendager for uploading
 * donwloading
 * erasing
 * removing sheets
 *
 */
import React from "react";
import { observer } from "mobx-react";
import SideBarContainer from "../sidebarWrapper/SideBarContainer";
import FileInput from "../FileInput/FileInput";
import "./SideBarSheetStyles.css"; //css
//functions
import DownloadSheet from "./DonwloadSheet";
//icons
import { MdDownload } from "react-icons/md";

function SideBarSheetMenagerComponent() {
  return (
    <SideBarContainer isVisible={true} changeVisible={() => {}}>
      <h3 className="text-center text-lg">Zarządzanei arkuszem</h3>
      <hr className=" m-2 border-blue-900" />
      <span className="text-center text block">Uploaduj arkusz</span>
      {/* uploading sheet */}
      <div>
        <FileInput />
      </div>
      <hr className=" m-2 border-blue-900" />
      <span className="text-center text block">
        Pobierz wersję <b>XLS</b>
      </span>
      <button onClick={DownloadSheet} className="  downloadButton">
        Pobierz
      </button>
    </SideBarContainer>
  );
}

const SideBarSheetMenager = observer(SideBarSheetMenagerComponent);
export default SideBarSheetMenager;
