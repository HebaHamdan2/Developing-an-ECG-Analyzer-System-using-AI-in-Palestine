import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../contexts/Auth.context.jsx";
import { useNavigate } from "react-router-dom";

export default function useSignup() {
const [loading,setLoading]=useState(false);
const {setAuthUser}=useContext(AuthContext);
let navigate= useNavigate();
const signup=async({userName,email,password,confirmPassword,role})=>{
const success=handleInputErrors({userName,email,password,confirmPassword,role});
if(!success)return;
setLoading(true)

  try{
    let objData={
        userName,
        email,
      password,
      role
    }
    const {data}=await axios.post("http://localhost:5000/auth/signup",objData).catch((err)=>{
      throw new Error(err.response.data.message)
       })
    if(data.message==="success"){
   navigate("../login")
}

  } catch(error){
    toast.error(error.message);
  }finally{
    setLoading(false)
  }

}
return {loading,signup};
};
function handleInputErrors({userName,email,password,confirmPassword,role}){
    if(!userName || !email || !password || !confirmPassword ||!role){
        toast.error("Please fill in all fields")
        return false;
    }
    if(password!==confirmPassword){
        toast.error('Passwords do not match');
        return false;
    }
  if(password.length<6){
    toast.error('Password must be at least 6 characters');
    return false;
  }
  return true;
}
