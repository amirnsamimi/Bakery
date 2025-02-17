import { createSlice } from "@reduxjs/toolkit";
import Cookie from "../../hooks/cookie.hook";



const AuthenticationSlice = createSlice({
    name: "authentication",
    initialState: false,
    reducers:{
        login: (state,action) => {
            if(action.payload.email == "amirnsamimi@gmail.com" && action.payload.password == "Amir123456@"){
                state = "textString"
                const cookie = new Cookie("isLoggedIn",state)
                cookie.setCookie(2)
            
            }
        
            return state
        },
        logout: (state,action) => {
        //   remove cookie
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
