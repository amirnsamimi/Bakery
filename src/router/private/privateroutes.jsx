import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/authContext';

const PrivateRoutes = () => {
    const {isAuth} = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />

    
}

export default PrivateRoutes
