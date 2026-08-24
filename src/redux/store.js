import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather/weatherReducer";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});