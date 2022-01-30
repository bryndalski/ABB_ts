import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import CONFIG from "../../CONFIG.json";
import "./AsyncSwitchStyle.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function AsyncSwitch() {
  const [SelectOptions, SetSelectOptions] = useState([]);
  const [isLoadingOrError, SetIsLoadingOrError] = useState(true);
  useEffect(() => {
    axios({
      method: "get",
      url: CONFIG.allSheetsNames,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        console.log(res);
        SetSelectOptions(res.data);
        SetIsLoadingOrError((prev) => !prev);
      })
      .catch((e) => console.error(e));
  }, []);
  //Redner switch options
  const renderOptions = useCallback(
    () =>
      SelectOptions.map((e: any, c: number) => (
        <option key={c} value={e.label}>
          {e.label}
        </option>
      )),
    [SelectOptions]
  );
  if (isLoadingOrError)
    return (
      <div className="min-w-[127px] max-w-fit bg-white p-3 rounded-md flex flex-row align-baseline ">
        <AiOutlineLoading3Quarters className="animate-spin flex justify-center items-baseline" />
        <span className="truncate">Loading Sheets</span>
      </div>
    );
  else
    return (
      <div>
        <select className="select_input p-3 rounded-md">
          {renderOptions()}
        </select>
      </div>
    );
}
