import axios from 'axios';
import  {  useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function useSendCode() {
  const [loading,setLoading]=useState(false);
  let navigate= useNavigate();
  const sendCode=async({email})=>{
    const success=handleInputErrors({email});
if(!success)return;
    setLoading(true)
    try{
        let objData={
            email
          }
          const {data}=await axios.patch("/auth/sendCode",objData).catch((err)=>{
           toast.error(err.response.data.message)
             })
          if(data.message==="success"){
         navigate("../changePassword")
      } 
    }catch(error){
        toast.error(error.message);
    }finally{
        setLoading(false)
    }
  }
  return {loading,sendCode}
}
function handleInputErrors({email}){
    if( !email){
        toast.error("Please fill in all fields")
        return false;
    }
  return true;
}
