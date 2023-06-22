import React, { useContext, useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";
import { MyContext } from "./App";

function MyFunctionalComponent() {
  const [count, setCount] = useState(0);
  // returns the value provided by the context
  const value = useContext(MyContext);

  var timeout = null;
  // this useEffect only executes when the comp mounts
  useEffect(() => {
    console.log("Functional Component Mounted");
  }, []);

  // similar to componentDidUpdate
  useEffect(() => {
    console.log("Functional Component Updated");
  }, [count]);

  // something similar to ComponentWillUnmount
  useEffect(() => {
    // CleanUp Function is the function returned by callback function passed to useEffect
    return () => {
      console.log("Functional Component Unmounted");
      // cleanUp
      clearTimeout(timeout); // stops the SetTimeout function from executing further.
      console.log("Kill the Timeout Async Operation");
    };
  });

  return (
    <div style={{ background: "pink" }}>
      <h1>MyFunctionalComponent : {count}</h1>
      <h1>Data from useContext : {value}</h1>
      <button
        onClick={() => {
          console.log("Increment Started");
          timeout = setTimeout(() => {
            setCount(count + 1);
            console.log("Increment Finished");
          }, 5000);
        }}
      >
        ➕
      </button>
      <ChildComponent />
    </div>
  );
}

export default MyFunctionalComponent;
