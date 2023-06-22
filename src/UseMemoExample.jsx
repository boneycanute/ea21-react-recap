import React, { useMemo, useState } from "react";

function ExpensiveOperation(count) {
  console.log("Expensive Operation Performed");
  for (var i = 0; i < 1000000000; i++) {
    count++;
  }
  return count;
}

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [dependencies, setDependencies] = useState(true);
  const finalValue = useMemo(() => {
    return ExpensiveOperation(count);
  }, [dependencies]);
  // const finalValue = ExpensiveOperation(count);
  console.log("Value from Expensive Operation : ", finalValue);
  return (
    <>
      <h1>UseMemoExample</h1>
      <h1>Counter : {count}</h1>
      <h1>Expensive Calculation Value : {finalValue}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ➕
      </button>
      <button
        onClick={() => {
          setDependencies(!dependencies);
        }}
      >
        Change Dependencies
      </button>
    </>
  );
}

export default UseMemoExample;
