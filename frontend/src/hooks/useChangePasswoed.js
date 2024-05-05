import axios from 'axios';
import  {  useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function useChangePassword() {
  const [loading,setLoading]=useState(false);
  let navigate= useNavigate();
  const changePassword=async({email,password,code})=>{
    const success=handleInputErrors({email,password,code});
if(!success)return;
    setLoading(true)
    try{
        let objData={
            code,
            email,
            password

          }
          const {data}=await axios.patch("http://localhost:5000/auth/forgotPassword",objData).catch((err)=>{
            throw new Error(err.response.data.message)
             })
          if(data.message==="success"){
         navigate("../login")
      } 
    }catch(error){
        toast.error(error.message);
    }finally{
        setLoading(false)
    }
  }
  return {loading,changePassword}
}
function handleInputErrors({email,password,code}){
    if( !email || ! password || !code){
        toast.error("Please fill in all fields")
        return false;
    }
  return true;
}
