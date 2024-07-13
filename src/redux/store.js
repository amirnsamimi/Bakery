import { configureStore } from "@reduxjs/toolkit";
import  authentication  from "./slices/auth.slice";

const store = configureStore({
    reducer:{
        authentication: authentication
    }
 


})


export default store;