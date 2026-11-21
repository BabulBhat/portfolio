import { faTruckField } from "@fortawesome/free-solid-svg-icons/faTruckField";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Base Url from env file.
const baseurl = process.env.NEXT_PUBLIC_API_URL;

export const loginauth = createAsyncThunk("login", async (userdata, thunkApi) => {
    try {
        const res = await fetch(`${baseurl}/api/admin/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userdata)
        })
        const result = await res.json();
        return result;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})


const loginSlice = createSlice({
    name: "login",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(loginauth.pending, (state) => {
                state.loading = true
            })
            .addCase(loginauth.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload
            })
            .addCase(loginauth.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})


export const { } = loginSlice.actions;
export default loginSlice.reducer;