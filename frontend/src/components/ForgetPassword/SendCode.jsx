import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import style from './ForgetPass.module.css'
import useSendCode from '../../hooks/useSendCode.js'
import { useNavigate } from 'react-router-dom'
export default function ForgetPassword() {
  const [inputs,setInputs]=useState({
    email:'',
    password:''
   })
  const{loading,sendCode}=useSendCode()
  let navigate= useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault(); 
    await sendCode(inputs);
    navigate("../changePassword")
  }
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Forgot Password</title>
               <meta name='sendcode' content='this is send code page for ECG Analyzer' />
            </Helmet>
   <div className={`${style.forget}`}>

  <div className="account-pages pt-sm-5">
    <div className={`${style.container}`}>
      <div className="box row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-5  ">
          <div className="text-center mb-2 mt-5">
            <a href="/forgetPassword" className="auth-logo mb-5 d-block">
              <img src="./assets/logo.jpg" alt="logo" height={90} className="logo logo-dark" />
                  </a>
                  <h4 className='mb-5'>Forgot Password</h4>
               </div>
          <div className="cardLog">
            <div className="cardLog-body">
              <div >
                <form  onSubmit={handleSubmit} >
  
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <div className="input-group mb-3 bg-soft-light rounded-3">
                      <input type="email" id="email" className="form-control  border-light bg-soft-light" placeholder="enter your email to send code" aria-label="Enter Email" aria-describedby="basic-addon3" 
             value={inputs.email}
             onChange={(e)=> setInputs({...inputs,email:e.target.value})}
          
                      />
                    </div>
                  </div>
            
                
                  <div className="d-grid pt-2">
                    <button className={ `${style.btnprimary} btn waves-effect waves-light`} type="submit" disabled={loading} >
                      Send </button>
                  </div>
                </form>
              
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </div>
 
</div>
   </>
  )
}
