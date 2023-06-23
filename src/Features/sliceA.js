// to create a slice ==> createSlice()

import { createSlice } from "@reduxjs/toolkit";

const sliceA = createSlice({
  name: "sliceA",
  initialState: "SliceA's State",
  // reducers ==> reducer Functions
  reducers: {
    function1: (state, action) => {
      console.log("Function 1 of Slice A");
      state = "New State of Slice A";
      return state;
    },
    function2: () => {
      console.log("Function 2 of Slice A");
    },
  },
});

const sliceAReducer = sliceA.reducer;
export const { function1, function2 } = sliceA.actions;

export default sliceAReducer;
