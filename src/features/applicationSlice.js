import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    error: null,
    signinUpLoading: false,
    signinInLoading: false,
    token: localStorage.getItem("token")
}
export const register = createAsyncThunk("auth/signup", async ({name, login,password, email, lastname, age}, thunkAPI) => {
    try {
        const res = await fetch("http://localhost:3000/user", {
            method: "POST",
            headers:{"Content-type": "application/json"},
            body: JSON.stringify({
                name,
                login,
                password,
                email,
                lastname,
                age
            })
        })
        const auth = await res.json()
        return auth
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const auth = createAsyncThunk("auth/signin", async ({login, password}, thunkAPI) => {
    try {
        const res = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                login,
                password
            })
        })
        const token = await res.json()
        if(token.error){
            return thunkAPI.rejectWithValue(token.error)
        }
        localStorage.setItem("token", token)
        return token
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const applicationSlice = createSlice({
    name: "application",
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(register.fulfilled, (state, action) => {
            state.signinUpLoading = false
            state.error = null
        })
        .addCase(register.rejected, (state, action) => {
            state.error = action.payload
            state.signinUpLoading = false
        })
        .addCase(register.pending, (state, action) => {
            state.signinUpLoading = true
            state.error = null
        })

        .addCase(auth.fulfilled, (state, action) => {
            state.signinUpLoading = false
            state.error = null
            state.token = action.payload.token
        })
        .addCase(auth.rejected, (state, action) => {
            state.error = action.payload
            state.signinUpLoading = false
        })
        .addCase(auth.pending, (state, action) => {
            state.signinUpLoading = true
            state.error = null
        })
    }
})
export default applicationSlice.reducer