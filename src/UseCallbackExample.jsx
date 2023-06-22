import React, { memo, useCallback, useState } from "react";

const MyButton = memo((props) => {
  console.log("My Button : ", props);
  return (
    <button
      onClick={() => {
        props.clickOperation();
      }}
    >
      {props.name}
    </button>
  );
});

function UseCallbackExample() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  return (
    <>
      <h1>UseCallbackExample</h1>
      <h2>Counter 1 : {countOne}</h2>
      <h2>Counter 2 : {countTwo}</h2>
      <MyButton
        name="Button 1"
        clickOperation={useCallback(() => {
          setCountOne(countOne + 1);
        }, [countOne])}
      />
      <MyButton
        name="Button 2"
        clickOperation={useCallback(() => {
          setCountTwo(countTwo + 1);
        }, [countTwo])}
      />
    </>
  );
}

export default UseCallbackExample;
