import { createSlice } from "@reduxjs/toolkit";



const AuthenticationSlice = createSlice({
    name: "authentication",
    initialState: false,
    reducers:{
        login: (state,action) => {
            console.log(action.payload)
            if(action.payload == {email:"amirnsamimi@gmail.com",password:"123456"}){
                state = true
              
            }
        },
        logout: (state,action) => {
            state = false
        }
    }
})

export const isAuth = state => state.authentication
export const {login,logout} = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;
