import { jwtDecode } from 'jwt-decode';
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context.jsx';
import { isTokenExpired } from '../../hooks/isTokenExpired.js';

export default function Protected({children,who}) {
  let{authUser}=useContext(AuthContext)
  if(localStorage.getItem('user')){//to make sure that only authorized users can access a protected page
    if(isTokenExpired(authUser?.token)){
     localStorage.removeItem('user');  return <Navigate to='/home'></Navigate>
    }
    if(jwtDecode(authUser?.token,"login123").role ===who || who===undefined){
       return children;
    }else{
      return <Navigate to='/uploadImage'></Navigate>
    }
  }else{
    return <Navigate to='/login'></Navigate>
  
}}
