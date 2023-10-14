import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: [],
    userLoading: false
}

export const getUser = createAsyncThunk("fetch/user", async (_, thunkAPI) => {
    try {
        const res = await fetch("http://localhost:3000/user", {
            
            headers: {
                
                Authorization: `Bearer ${thunkAPI.getState().application.token}`
            }
        })
        const user = await res.json()
        
        return user
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.userLoading = false
        })
       
        .addCase(getUser.pending, (state, action) => {
            state.userLoading = true
          
        })
    }
})

export default userSlice.reducer