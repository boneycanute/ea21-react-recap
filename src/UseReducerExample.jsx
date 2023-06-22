import React, { useReducer, useState } from "react";

function ReducerFunction(count, action) {
  console.log("Reducer Function Executed : ", action);
  if (action.type == "increment") {
    return count + 1;
  }
  if (action.type == "decrement") {
    return count - 1;
  }
}

function UseReducerExample() {
  //   const [count, SetCount] = useState(0);
  const [count, dispatch] = useReducer(ReducerFunction, 0);
  // useReducer takes 2 parameters :
  // 1. A Function
  // 2. InitialState
  return (
    <>
      <h1>UseReducerExample : {count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
          // the object passed to the dispatch function is called the action
        }}
      >
        ➕
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        ➖
      </button>
    </>
  );
}

export default UseReducerExample;
