import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'
import style from './Login.module.css'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { AuthContext } from '../../contexts/Auth.context.jsx'
import toast from 'react-hot-toast'
export default function Login() {
  
  let{setAuthUser}=useContext(AuthContext)
  let [loading,setLoading]=useState(false);
  const schema=Yup.object({  
      email:Yup.string().required("Email is required").email("not valid email"),
    password:Yup.string().required("Password is required")
  })
  let formik = useFormik({
    initialValues:{
    email:'',
    password:''
    },validationSchema:schema,
    onSubmit:login,
})
let navigate= useNavigate();
async function login(values){
setLoading(true)
setLoading(true)
try{
  
      const {data}=await axios.post("/auth/signin",values).catch((err)=>
        {
          toast.error(err.response.data.message)
         })
      if(data.message==="success"){
     localStorage.setItem("user",JSON.stringify(data))
     setAuthUser(data)
     navigate("../uploadImage")
  }else{
    toast.error(data.validationArray[0]);
  } 

}finally{
    setLoading(false)
}

}

  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
               <meta name='login' content='this is login page for ECG Analyzer' />
            </Helmet>
   <div className={`${style.login}`}>

  <div className="account-pages pt-sm-5">
    <div className={`${style.container}`}>
      <div className="box row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-5  ">
          <div className="text-center mb-2">
            <a href="/login" className="auth-logo mb-3 d-block">
              <img src="./assets/logo3.jpg" alt="logo" height={120} className="logo" />
                  </a>
            <h4 className='mb-5'>Sign in</h4>
          </div>
          <div className="cardLog">
            <div className="cardLog-body">
              <div >
                <form onSubmit={formik.handleSubmit} >
  
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <div className="input-group mb-3 bg-soft-light rounded-3">
                      <input type="email" id="email" placeholder="enter your email" aria-label="Enter Email" aria-describedby="basic-addon3" 
               value={formik.values.email}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               name='email'
               className={`form-control  border-light bg-soft-light ${formik.errors.email && formik.touched.email? "is-invalid":""}`}
  
                      />

                    </div>
                    {formik.errors.email && formik.touched.email ? <div className='small text-danger'>{formik.errors.email}</div>:<></>}
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Password</label>
                    <div className="input-group mb-1 bg-soft-light rounded-3">
                      <input type="password" id="password" placeholder="enter your password" aria-label="Enter Password" aria-describedby="basic-addon4" 
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name='password'
                        className={`form-control  border-light bg-soft-light ${formik.errors.password && formik.touched.password? "is-invalid":""}`}
           
                      />
                    </div>
                  </div>
                  <div className={style.textForg} >
                  <Link to="../forgetPassword" className={style.forgot}>Forgot your password ?</Link>
                  </div>
                
                
                  <div className="d-grid pt-2">
                    <button className={ `${style.btnprimary} btn waves-effect waves-light`} type="submit"  disabled={loading} >
                      Login</button>
                  </div>
                </form>
              
              </div>
            </div>
          </div>
          <div className="mt-3 text-center">
            <p>Don't have an account ? <Link to="../signup" >Sign up</Link> </p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
 
</div>
   </>
  )
}
