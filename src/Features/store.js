// to Create store ==> configStore()

import { configureStore } from "@reduxjs/toolkit";
import sliceAReducer from "./sliceA";
import sliceBReducer from "./sliceB";

export const store = configureStore({
  reducer: {
    sliceAKey: sliceAReducer,
    sliceBKey: sliceBReducer,
  },
});
