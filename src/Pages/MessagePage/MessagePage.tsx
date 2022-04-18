import React from "react";
import MessagrPageInterface from "./MessagePageInterface";

export default function (props: MessagrPageInterface) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
      <p>Za chwilę zostaniesz przekierowany do {props.direction}</p>
    </div>
  );
}
