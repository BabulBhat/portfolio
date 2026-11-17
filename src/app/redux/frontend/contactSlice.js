import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Base Url from env file.
const baseurl = process.env.NEXT_PUBLIC_API_URL;

// Send Message Api
export const getContact = createAsyncThunk("contact", async (userdata, thunkApi) => {
    try {
        const response = await fetch(`${baseurl}/api/frontend`, {
            method: "POST",
            body: JSON.stringify(userdata),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

const contactSlice = createSlice({
    name: "contact",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getContact.pending, (state) => {
                state.loading = true
            })
            .addCase(getContact.fulfilled, (state, action) => {
                console.log(action.payload);
                
                state.loading = false
                state.data = action.payload
            })
            .addCase(getContact.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export const { } = contactSlice.actions;
export default contactSlice.reducer;