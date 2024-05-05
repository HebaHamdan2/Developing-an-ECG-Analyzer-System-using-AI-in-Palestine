import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'
import style from './Login.module.css'
import useLogin from '../../hooks/useLogin.js'
export default function Login() {
  const [inputs,setInputs]=useState({
    email:'',
    password:''
   })
  const{loading,login}=useLogin()
  let navigate= useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault(); 
    await login(inputs);
    navigate("../uploadImage")
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
              <img src="./assets/logo.jpg" alt="logo" height={90} className="logo logo-dark" />
                  </a>
            <h4 className='mb-5'>Sign in</h4>
          </div>
          <div className="cardLog">
            <div className="cardLog-body">
              <div >
                <form onSubmit={handleSubmit} >
  
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <div className="input-group mb-3 bg-soft-light rounded-3">
                      <input type="email" id="email" className="form-control  border-light bg-soft-light" placeholder="enter your email" aria-label="Enter Email" aria-describedby="basic-addon3" 
              value={inputs.email}
              onChange={(e)=> setInputs({...inputs,email:e.target.value})}
           
                      />
                    </div>
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Password</label>
                    <div className="input-group mb-1 bg-soft-light rounded-3">
                      <input type="password" id="password" className="form-control  border-light bg-soft-light" placeholder="enter your password" aria-label="Enter Password" aria-describedby="basic-addon4" 
                       value={inputs.password}
                       onChange={(e)=> setInputs({...inputs,password:e.target.value})}
                   
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
