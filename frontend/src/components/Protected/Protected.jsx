import { jwtDecode } from 'jwt-decode';
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context.jsx';

export default function Protected({children,who}) {
  let{authUser}=useContext(AuthContext)
  if(localStorage.getItem('user')){//to make sure that only authorized users can access a protected page
    if(jwtDecode(authUser.token,"login123").role ===who || who===undefined){
       return children;
    }else{
      return <Navigate to='/uploadImage'></Navigate>
    }
   
  }else{
    return <Navigate to='/login'></Navigate>
  }
}
