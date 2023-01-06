import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        toggleNavbar: (state) => {
            state.isOpen = !state.isOpen;
        },
        closeNavbar: (state) => {
            state.isOpen = false;
        }
    }
});

export const {toggleNavbar, closeNavbar} = navbarSlice.actions;
export default navbarSlice.reducer;