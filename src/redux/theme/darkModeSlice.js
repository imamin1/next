import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    darkmode: localStorage.getItem('theme') || 'light'
};

const darkModeSlice = createSlice({
    name: "darkmode",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.darkmode = state.darkmode === "dark" ? "light" : "dark";
        }
    }
});

export default darkModeSlice.reducer;
export const {
    toggleTheme
} = darkModeSlice.actions;