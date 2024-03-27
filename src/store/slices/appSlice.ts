import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isLoading: false,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = appSlice.actions;

export const isLoadingState = (state: RootState) => state.app.isLoading;

export default appSlice.reducer;
