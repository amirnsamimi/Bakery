import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [isAuth,setAuth] = useState(false);

    const login = () => {
        setAuth(true)
    } 
    const logOut = ()=>{
        setAuth(false)
    }



  return (
    <AuthContext.Provider value={{isAuth,login,logOut}}>
        {children}
    </AuthContext.Provider>
  )
}


export default AuthContext
