import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./frontend/contactSlice"

export const store = configureStore({
    reducer:{
        contactSlice : contactSlice
    }
})
