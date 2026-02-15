import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name:'auth',
    initialState: {
        user: null,
        token: null,
        isAuth: false,
    },
    reducers:{
        login: ( state, action ) => {
            const { user, token } = action.payload
            state.user = user;
            state.token = token;
            state.isAuth = true;
        },
        logout: ( state ) =>{
            state.user = null;
            state.token = null;
            state.isAuth = false;
        }
    }
})


export default authSlice.reducer