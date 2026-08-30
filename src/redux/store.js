import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "./theme/darkModeSlice";
const store = configureStore({
    reducer: {
        darkmode: darkmodeReducer
    }
});

export default store;