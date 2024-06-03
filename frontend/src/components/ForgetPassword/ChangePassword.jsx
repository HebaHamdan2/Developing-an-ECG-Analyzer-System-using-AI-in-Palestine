import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import style from './ForgetPass.module.css'
import useChangePassword from '../../hooks/useChangePasswoed.js'
import Loading from '../Loading/Loading.jsx'
export default function ChangePassword() {

  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })
  const { loading, changePassword } = useChangePassword()
  const handleSubmit = async (e) => {
    e.preventDefault();
    await changePassword(inputs);

  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Change Password</title>
        <meta name='sendcode' content='this is change passwoed page for ECG Analyzer' />
      </Helmet>
      {!loading ?
        <div className={`${style.forget}`}>

          <div className="account-pages pt-sm-5">
            <div className={`${style.container}`}>
              <div className="box row justify-content-center">
                <div className="col-md-8 col-lg-6 col-xl-5  ">
                  <div className="text-center mb-2 mt-5">
                    <a href="/ChangePassword" className="auth-logo d-block">
                      <img src="./assets/logo2cut.jpg" alt="logo" height={120} className="logoreg" />
                    </a>
                    <h4 className='mb-5'>Change Password</h4>
                  </div>
                  <div className="cardLog">
                    <div className="cardLog-body">
                      <div >
                        <form onSubmit={handleSubmit}>
                          <div className="mb-3 ">
                            <label className="form-label">Verification Code</label>
                            <div className="input-group mb-3 bg-soft-light rounded-3">
                              <input type="text" id="code" className="form-control  border-light bg-soft-light" placeholder="enter verification code" aria-label="Enter code" aria-describedby="basic-addon3"
                                value={inputs.code}
                                onChange={(e) => setInputs({ ...inputs, code: e.target.value })}

                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Email</label>
                            <div className="input-group mb-3 bg-soft-light rounded-3">
                              <input type="email" id="email" className="form-control  border-light bg-soft-light" placeholder="enter your email" aria-label="Enter Email" aria-describedby="basic-addon4"
                                value={inputs.email}
                                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}

                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">New Password</label>
                            <div className="input-group mb-3 bg-soft-light rounded-3">
                              <input type="password" id="Password" className="form-control  border-light bg-soft-light" placeholder="enter your new password" aria-label="Enter Password" aria-describedby="basic-addon4"
                                value={inputs.password}
                                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}

                              />
                            </div>
                          </div>


                          <div className="d-grid pt-2">
                            <button className={`${style.btnprimary} btn waves-effect waves-light`} type="submit" disabled={loading}  >
                              Change  </button>
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

        : <Loading />}

    </>
  )
}
