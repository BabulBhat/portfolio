import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./frontend/contactSlice"
import loginSlice from "./admin/login/loginSlice"

export const store = configureStore({
    reducer: {
        contactSlice: contactSlice,
        loginSlice: loginSlice
    }
})
