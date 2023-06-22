import React, { useContext } from "react";
import { MyContext } from "./App";

function ChildComponent() {
  const value = useContext(MyContext);
  return <div>ChildComponent : {value}</div>;
}

export default ChildComponent;
