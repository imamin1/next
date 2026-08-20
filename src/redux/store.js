import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather/weatherReducer";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./weather/watcherSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    weather: weatherReducer, // اگه فقط یک ریدیوسر داری
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false, // چون از saga استفاده می‌کنیم، thunk رو غیرفعال می‌کنیم (اختیاری)
      serializableCheck: false, // برای جلوگیری از وارنینگ‌های احتمالی با saga effects
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(watcherSaga);

export default store;