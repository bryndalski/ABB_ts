import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { observer } from "mobx-react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

//Config
import CONFIG from "../../CONFIG.json";
//?Styles
import "./AsyncSwitchStyle.css";

// Storage
import appStore from "../../storage/AppStore";

function AsyncSwitchComponent() {
  const [SelectOptions, SetSelectOptions] = useState<string[]>([]); // data array
  const [isLoadingOrError, SetIsLoadingOrError] = useState<boolean>(true); // fetchnig data in progress ?
  //context

  //fetching data
  const fetchData = () => {
    axios(CONFIG.allSheetsNames)
      .then((res) => {
        SetSelectOptions(res.data);
        SetIsLoadingOrError((prev) => !prev);
        appStore.setCurrentSheet(res.data[0].label);
      })
      .catch((e) => {
        console.warn(e);
      });
  };

  //fetching switch data
  useEffect(() => {
    fetchData(); // fetching data
  }, []);
  /**
   * Generates swithc options
   */
  const renderOptions = useCallback(
    () =>
      SelectOptions.map((e: any, c: number) => (
        <option key={c} value={e.label}>
          {e.label}
        </option>
      )),
    [SelectOptions]
  );

  //render based on data ready
  if (isLoadingOrError)
    //no data fetched
    return (
      <div className="min-w-[127px] max-w-fit bg-white p-3 rounded-md flex flex-row align-baseline ">
        <AiOutlineLoading3Quarters className="animate-spin inline-block self-center mr-2" />
        <span className="truncate">Loading Sheets</span>
      </div>
    );
  else
    return (
      //data fetched and rendered
      <div>
        <select
          value={appStore.sheet}
          onChange={(e) => {
            appStore.setCurrentSheet(e.target.value);
          }}
          className="select_input p-3 rounded-md">
          {renderOptions()}
        </select>
      </div>
    );
}

const AsyncSwitch = observer(AsyncSwitchComponent);
export default AsyncSwitch;
