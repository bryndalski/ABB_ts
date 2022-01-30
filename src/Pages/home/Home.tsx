import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Header from "../../components/Header/Header";
export default function Home() {
  const xd = useContext(UserContext);
  console.log(xd);

  return (
    <div>
      <Header></Header>
    </div>
  );
}
