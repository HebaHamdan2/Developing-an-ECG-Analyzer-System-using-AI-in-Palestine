import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import style from './ForgetPass.module.css'
import Loading from '../Loading/Loading.jsx'
import { useFormik } from 'formik'
import * as Yup from "yup"
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function ChangePassword() {
  let navigate = useNavigate();
  let [loading, setLoading] = useState(false);
  const schema = Yup.object({
    code:Yup.string().required("Verification Code is required"),
    email: Yup.string().required("Email is required").email("Please enter a valid email").min(8,"Email must be at least 8 characters long"),
    password: Yup.string().required("Password is required").matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
    ),
    });
  let formik = useFormik({
    initialValues: {
      code:'',
      email: '',
      password: ''
    }, validationSchema: schema,
    onSubmit: changePassword,
  })
  async function changePassword(values) {
    setLoading(true)
    try {
      const { data } = await axios.patch("/auth/forgotPassword", values).catch((err) => {
        toast.error(err.response.data?.message);
      if(err.response.data?.validationError[0].message){
        toast.error(err.response.data?.validationError[0].message);}
      });  if (data.message === "success") {
        navigate("../login");
      } else {
        toast.error(data.validationArray[0]);
      }
    } finally {
      setLoading(false);
    }
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
                    <h4 className={`${style.titled} mb-5`}>Change Password</h4>
                  </div>
                  <div className="cardLog">
                    <div className="cardLog-body">
                      <div >
                        <form  onSubmit={formik.handleSubmit}>
                          <div className="mb-3 ">
                            <label className="form-label">Verification Code</label>
                            <div className="input-group mb-3 bg-soft-light rounded-3">
                              <input type="text" id="code" placeholder="enter verification code" aria-label="Enter code" aria-describedby="basic-addon3"
                                 value={formik.values.code}
                                 onChange={formik.handleChange}
                                 onBlur={formik.handleBlur}
                                 name='code'
                                 className={`form-control border-light bg-soft-light ${formik.errors.code && formik.touched.code ? "is-invalid" : ""}`}
             
                              />
                            </div>
                            {formik.errors.code && formik.touched.code ? <div className='small text-danger'>{formik.errors.code}</div> : null}
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Email</label>
                            <div className="input-group mb-3 bg-soft-light rounded-3">
                            <input
                              type="email"
                              id="email"
                              placeholder="enter your email"
                              aria-label="Enter Email"
                              aria-describedby="basic-addon3"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              name='email'
                              className={`form-control border-light bg-soft-light ${formik.errors.email && formik.touched.email ? "is-invalid" : ""}`}
                            />
                          </div>
                          {formik.errors.email && formik.touched.email ? <div className='small text-danger'>{formik.errors.email}</div> : null}
                            </div>
                          <div className="mb-3">
                            <label className="form-label">New Password</label>
                            <div className="input-group mb-3 bg-soft-light rounded-3">
                            <input
                              type="password"
                              id="password"
                              placeholder="enter password"
                              aria-label="Enter Password"
                              aria-describedby="basic-addon4"
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              name='password' 
                                className={`form-control border-light bg-soft-light ${formik.errors.password && formik.touched.password ? "is-invalid" : ""}`}
                              />
                          </div>
                          {formik.errors.password && formik.touched.password ? <div className='small text-danger'>{formik.errors.password}</div> : null}
          
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