import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MessagrPageInterface from "./MessagePageInterface";

export default function (props: MessagrPageInterface) {
  const navigate = useNavigate();

  // Redirect to login after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 5000);
  });

  //renders
  return (
    <div className="flex flex-row w-full h-full justify-start align-middle">
      <div className="p-2 align-center justify-center flex flex-col">
        <h1 className="text-4xl mb-4">{props.title}</h1>
        <p>{props.message}</p>
      </div>
      {props.icon}
    </div>
  );
}
