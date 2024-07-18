import { createSlice } from "@reduxjs/toolkit";
import Cookie from "../../hooks/cookie.hook";



const AuthenticationSlice = createSlice({
    name: "authentication",
    initialState: false,
    reducers:{
        login: (state,action) => {
            if(action.payload.email == "amirnsamimi@gmail.com" && action.payload.password == "Amir123456@"){
                console.log(state)
                const cookie = new Cookie("isLoggedIn",state)
                cookie.setCookie(2)
                state = true
            }
        
            return state
        },
        logout: (state,action) => {
            state = false
            return state
        },
        loginState: () => {
            const cookie = new Cookie();
            return cookie.getCooie("isLoggedIn")
        }
    }
})

export const isAuth = state => {   const cookie = new Cookie();
    return cookie.getCooie("isLoggedIn")}
export const {login,logout} = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;
