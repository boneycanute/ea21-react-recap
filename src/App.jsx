import React, { createContext, useState } from "react";
import MyFunctionalComponent from "./MyFunctionalComponent";
import MyClassComponent from "./MyClassComponent";
import UseReducerExample from "./UseReducerExample";
import UseMemoExample from "./UseMemoExample";

export const MyContext = createContext();

function App() {
  const [showFunction, setShowFunction] = useState(true);
  const [showClass, setShowClass] = useState(true);
  const [data, setData] = useState("Data From App Component");

  return (
    <>
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
      <hr />
      <UseReducerExample />
      <hr />
      <UseMemoExample />
    </>
  );
}

export default App;
