import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import mapSlice from "./slices/mapSlice";

const rootReducer = combineReducers({
  app: appSlice,
  map: mapSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
