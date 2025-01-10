import { configureStore } from "@reduxjs/toolkit";

import userDetailsSlice from "./slices/userDetailsSlice";

const store = configureStore({
  reducer: {
  
    userDetails: userDetailsSlice,
  },
});

export default store;
