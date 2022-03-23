import React, { useContext } from "react";
//context

import HeaderCell from "../headerCell/HeaderCell"; //styles
interface propsInterface {
  row: Object;
  divNumber?: number;
  specialClasses?: string;
}

export default function TableHeader(props: propsInterface) {
  return (
    <div className="table-row  text-justify sticky top-0 z-10">
      {/* {Object.values(props.row).map((e, c) => {
        if (e === "id") {
        } else return <HeaderCell value={e} cellNumber={c} key={c} />;
      })} */}
    </div>
  );
}
