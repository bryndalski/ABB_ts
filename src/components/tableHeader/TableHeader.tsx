import React from "react";

interface propsInterface {
  row: Object;
  divNumber?: number;
  specialClasses?: string;
}

export default function TableHeader(props: propsInterface) {
  return (
    <div className="table-row  text-justify">
      {Object.values(props.row).map((e, c) => {
        if (e === "id" && c === 0) {
        } else
          return (
            <p key={c} className="table-cell p-2 text-center">
              {e}
            </p>
          );
      })}
    </div>
  );
}
