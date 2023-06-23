// to create a slice ==> createSlice()

import { createSlice } from "@reduxjs/toolkit";

const sliceB = createSlice({
  name: "sliceB",
  initialState: "sliceB's State",
  // reducers ==> reducer Functions
  reducers: {
    function1: () => {
      console.log("Function 1 of Slice B");
    },
    function2: () => {
      console.log("Function 2 of Slice B");
    },
  },
});

const sliceBReducer = sliceB.reducer;
export const { function1, function2 } = sliceB.actions;

export default sliceBReducer;
