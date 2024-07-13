import { createSlice } from "@reduxjs/toolkit";
import Cookie from "../../hooks/cookie.hook";



const AuthenticationSlice = createSlice({
    name: "authentication",
    initialState: false,
    reducers:{
        login: (state,action) => {
            if(action.payload.email == "amirnsamimi@gmail.com" && action.payload.password == "Amir123456@"){
                
                state = true
                const cookie = new Cookie("isLoggedIn",state)
                cookie.setCookie(2)
            }
            const cookie = new Cookie("isLoggedIn",state)
            return state
        },
        logout: (state,action) => {
            state = false
            return state
        }
    }
})

export const isAuth = state => state.authentication
export const {login,logout} = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;
