import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import  { isAuth } from '../../redux/slices/auth.slice'


const PrivateRoutes = () => {
  const auth = useSelector(isAuth)

   
  return auth ? <Outlet /> : <Navigate to="/login" />

    
}

export default PrivateRoutes
