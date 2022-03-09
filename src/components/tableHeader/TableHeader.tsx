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
      <p className="table-cell p-2 text-center w-6"></p>

      <p className="table-cell  p-2 text-center w-6"></p>
      {Object.values(props.row).map((e, c) => {
        if (e === "id" && c === 0) {
        } else return <HeaderCell value={e} cellNumber={c} key={c} />;
      })}
    </div>
  );
}
