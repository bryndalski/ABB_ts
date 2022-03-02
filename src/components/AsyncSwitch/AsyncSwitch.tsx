import React, { useEffect, useState, useCallback, useContext } from "react";
import axios from "axios";
import CONFIG from "../../CONFIG.json";
import "./AsyncSwitchStyle.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import SheetContext from "../../context/SheetContext";

export default function AsyncSwitch() {
  const [SelectOptions, SetSelectOptions] = useState([]);
  const [isLoadingOrError, SetIsLoadingOrError] = useState(true);
  //context
  const { setSheet } = useContext(SheetContext);

  //fetching data
  let fetchingError = 10;
  const fetchData = () => {
    axios({
      method: "get",
      url: CONFIG.allSheetsNames,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        SetSelectOptions(res.data);
        SetIsLoadingOrError((prev) => !prev);
        setSheet(res.data[0].label);
      })
      .catch((e) => {
        console.warn(e);
        if (fetchingError > 0) {
          // setTimeout(fetchData, 5000);
          fetchingError--;
        }
      });
  };

  //fetching switch data
  useEffect(() => {
    fetchData();
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
        <AiOutlineLoading3Quarters className="animate-spin inline-block self-center mr-2" />
        <span className="truncate">Loading Sheets</span>
      </div>
    );
  else
    return (
      <div>
        <select
          onChange={(e) => {
            setSheet(e.target.value);
          }}
          className="select_input p-3 rounded-md">
          {renderOptions()}
        </select>
      </div>
    );
}
