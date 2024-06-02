import React from 'react'
import { Navigate } from 'react-router-dom';

export default function CheckReg({children}) {
    if(!localStorage.getItem('user')){//to make sure that only unauthorized users can access these pages
     return children
    }else{
      return <Navigate to='/uploadImage'></Navigate>
    
  }
}
