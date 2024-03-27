import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";

const mapSlice = createSlice({
  name: "map",
  initialState: {
    isMapInitialized: false,
  },
  reducers: {
    setIsMapInitialized: (state, action) => {
      state.isMapInitialized = action.payload;
    },
  },
});

export const { setIsMapInitialized } = mapSlice.actions;

export const isMapInitializedState = (state: RootState) =>
  state.map.isMapInitialized;

export default mapSlice.reducer;
