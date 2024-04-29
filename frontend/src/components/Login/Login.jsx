import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import style from './Login.module.css'
export default function Login() {
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
                <form >
  
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <div className="input-group mb-3 bg-soft-light rounded-3">
                      <input type="email" id="email" className="form-control  border-light bg-soft-light" placeholder="enter your email" aria-label="Enter Email" aria-describedby="basic-addon3" 
            
                      />
                    </div>
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Password</label>
                    <div className="input-group mb-1 bg-soft-light rounded-3">
                      <input type="password" id="password" className="form-control  border-light bg-soft-light" placeholder="enter your password" aria-label="Enter Password" aria-describedby="basic-addon4" 
                     
                      />
                    </div>
                  </div>
                  <div className={style.textForg} >
                  <Link to="../forgetPassword" className=' text-danger '>Forgot Password ?</Link>
                  </div>
                
                
                  <div className="d-grid pt-2">
                    <button className={ `${style.btnprimary} btn waves-effect waves-light`} type="submit" >
                      Login</button>
                  </div>
                </form>
              
              </div>
            </div>
          </div>
          <div className="mt-3 text-center">
            <p>Don't have an account ? <Link to="../signup" className="fw-medium">Sign up</Link> </p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
 
</div>
   </>
  )
}
