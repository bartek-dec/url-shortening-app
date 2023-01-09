import {configureStore} from "@reduxjs/toolkit";
import navbarSlice from "./features/navbar/navbarSlice";
import formSlice from "./features/form/formSlice";

const store = configureStore({
    reducer: {
        navbar: navbarSlice,
        form: formSlice,
    }
});

export default store;