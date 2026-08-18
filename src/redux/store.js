import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import userReducer from "./user/userReducer";

const logger = createLogger();

const store = configureStore({
  reducer: userReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;