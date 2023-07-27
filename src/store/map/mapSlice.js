import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "../../const/index"

export const mapSlice = createSlice({
  name: "maps",
  initialState,
  reducers: {
    setSelectedWay: (state, action) => {
      state.isLoading = true;
      state.selectedWay = action.payload;
      state.isError = "";
    },
    setSelectedWayPolyline: (state, action) => {
      state.isLoading = false;
      state.isError = "";
      state.selectedWayPolyline = action.payload;
    },
    setSelectedWayPolylineError: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const {
  setSelectedWay,
  setSelectedWayPolyline,
  setSelectedWayPolylineError,
} = mapSlice.actions;
