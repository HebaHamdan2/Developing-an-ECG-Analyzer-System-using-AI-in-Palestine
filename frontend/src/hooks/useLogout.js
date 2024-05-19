import axios from 'axios';
import  { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from '../contexts/Auth.context.jsx';
import { useNavigate } from 'react-router-dom';

export default function useLogout() {
  const[loading,setLoading]=useState(false);
  const {setAuthUser}=useContext(AuthContext);
  let navigate= useNavigate();
  const logout=async()=>{
    setLoading(true);
    try{
        const {data}=await axios.post("/auth/logout").catch((err)=>{
            throw new Error(err.response.data.error)
             })
             if(data.message==="logged out successfully"){
         localStorage.removeItem("user");
        setAuthUser(null)
        navigate("../home")
             }      
    }catch(error){toast.error(error.message);}finally{
        setLoading(false);
    }
  }
    return {loading,logout}
}
