import React from 'react'
import { Helmet } from 'react-helmet'
import style from './ForgetPass.module.css'
export default function ChangePassword() {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Change Password</title>
               <meta name='sendcode' content='this is change passwoed page for ECG Analyzer' />
            </Helmet>
   <div className={`${style.forget}`}>

  <div className="account-pages pt-sm-5">
    <div className={`${style.container}`}>
      <div className="box row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-5  ">
          <div className="text-center mb-2 mt-5">
            <a href="/ChangePassword" className="auth-logo d-block">
              <img src="./assets/logo.jpg" alt="logo" height={90} className="logo logo-dark" />
                  </a>
                  <h4 className='mb-5'>Change Password</h4>
               </div>
          <div className="cardLog">
            <div className="cardLog-body">
              <div >
                <form >
                <div className="mb-3 ">
                    <label className="form-label">Verification Code</label>
                    <div className="input-group mb-3 bg-soft-light rounded-3">
                      <input type="text" id="code" className="form-control  border-light bg-soft-light" placeholder="enter verification code" aria-label="Enter code" aria-describedby="basic-addon3"
                          />
                    </div>
                  </div>
                <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <div className="input-group mb-3 bg-soft-light rounded-3">
                      <input type="password" id="password" className="form-control  border-light bg-soft-light" placeholder="enter your new password" aria-label="Enter Password" aria-describedby="basic-addon4" 
                     
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <div className="input-group mb-3 bg-soft-light rounded-3">
                      <input type="password" id="cPassword" className="form-control  border-light bg-soft-light" placeholder="confirm password" aria-label="Enter Password" aria-describedby="basic-addon4" 
                      />
                    </div>
                  </div>
            
                
                  <div className="d-grid pt-2">
                    <button className={ `${style.btnprimary} btn waves-effect waves-light`} type="submit" >
                      Change Now </button>
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
