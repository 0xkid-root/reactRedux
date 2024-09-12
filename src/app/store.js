import { configureStore } from "@reduxjs/toolkit";
import showData  from "../features/ShowSlice";

export const store = configureStore({
  reducer: {
    show: showData,
  },
});
