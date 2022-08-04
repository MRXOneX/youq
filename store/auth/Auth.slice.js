import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isOpenAuth: false
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeIsOpenAuth(state, action) {
            state.isOpenAuth = action.payload
        }
    }
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions