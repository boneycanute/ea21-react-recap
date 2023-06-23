import React, { useState } from "react";
import { MyContext } from "./App";
import MyFunctionalComponent from "./MyFunctionalComponent";
import MyClassComponent from "./MyClassComponent";
import { useDispatch, useSelector } from "react-redux";
import { function1, function2 } from "./Features/sliceA";

function ComponentLifeCycleUsingUseEffect() {
  const [showFunction, setShowFunction] = useState(true);
  const [showClass, setShowClass] = useState(true);
  const [data, setData] = useState("Data From App Component");
  const dispatch = useDispatch();

  const reduxData = useSelector((state) => {
    return state.sliceAKey;
  });

  return (
    <div>
      {" "}
      <button
        onClick={() => {
          setShowFunction(!showFunction);
        }}
      >
        Toggle Functional Component
      </button>
      <button
        onClick={() => {
          setShowClass(!showClass);
        }}
      >
        Toggle Class Component
      </button>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <MyContext.Provider value={data}>
          {showFunction && <MyFunctionalComponent />}
          {showClass && <MyClassComponent />}
        </MyContext.Provider>
      </div>
      <h1>Redux Data : {reduxData}</h1>
      <button
        onClick={() => {
          dispatch(function1());
        }}
      >
        Update Redux Store Data
      </button>
    </div>
  );
}

export default ComponentLifeCycleUsingUseEffect;
