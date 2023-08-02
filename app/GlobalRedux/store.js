"use client";

import { configureStore } from "@reduxjs/toolkit";
import temoignagesReducer from "./Features/temoignage/temoignageSlice";

export const store = configureStore({
  reducer: {
    temoignages: temoignagesReducer,
  },
});
