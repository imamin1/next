import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "./theme/darkModeSlice";
import managment from "./managemanet/rReducer";

const store = configureStore({
    reducer: {
        darkmode: darkmodeReducer,
        managment: managment,
    },
});

export default store;