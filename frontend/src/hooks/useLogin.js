import axios from 'axios';
import  { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from '../contexts/Auth.context.jsx';
import { useNavigate } from 'react-router-dom';

export default function useLogin() {
  const [loading,setLoading]=useState(false);
  let{setAuthUser}=useContext(AuthContext)
  let navigate= useNavigate();
  const login=async({email,password})=>{
    const success=handleInputErrors({email,password});
if(!success)return;
    setLoading(true)
    try{
        let objData={
            email,
            password
          }
          const {data}=await axios.post("http://localhost:5000/auth/signin",objData).catch((err)=>{
            throw new Error(err.response.data.message)
             })
          if(data.message==="success"){
        localStorage.setItem("user",JSON.stringify(data))
         setAuthUser(data)
         navigate("../uploadImage")
      } 
    }catch(error){
        toast.error(error.message);
    }finally{
        setLoading(false)
    }
  }
  return {loading,login}
}
function handleInputErrors({email,password}){
    if( !email || !password ){
        toast.error("Please fill in all fields")
        return false;
    }
  return true;
}
