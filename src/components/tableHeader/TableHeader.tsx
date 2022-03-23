import React, { useCallback, useContext } from "react";
//context

import HeaderCell from "../headerCell/HeaderCell"; //styles
interface propsInterface {
  row: string[];
  divNumber?: number;
  specialClasses?: string;
}

export default function TableHeader(props: propsInterface) {
  // rerednerOnChange of props

  const renderCells = useCallback(
    () =>
      props.row.map((e, c) => {
        if (e === "id") {
        } else return <HeaderCell value={e} cellNumber={c} key={c} />;
      }),
    [Object.keys(props.row)]
  );

  return (
    <div className="table-row  text-justify sticky top-0 z-10">
      {renderCells()}
    </div>
  );
}
