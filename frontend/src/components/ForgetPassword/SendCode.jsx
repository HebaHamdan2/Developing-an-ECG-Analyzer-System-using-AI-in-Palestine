import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import style from './ForgetPass.module.css'
import Loading from '../Loading/Loading.jsx'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
export default function ForgetPassword() {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const schema = Yup.object({
    email: Yup.string().required("Email is required").email("Please enter a valid email").min(8, "Email must be at least 8 characters long"),
  })
  let formik = useFormik({
    initialValues: {
      email: ''
    }, validationSchema: schema,
    onSubmit: SendCode,
  })
  async function SendCode(values) {
    setLoading(true)
    try {
      const { data } = await axios
        .patch("/auth/sendCode", values).catch((err) => {
          toast.error(err.response.data?.message);
          if (err.response.data?.validationError[0].message) {
            toast.error(err.response.data?.validationError[0].message);
          }
        }); if (data.message === "success") {
          navigate("../changePassword");
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
        <title>Forgot Password</title>
        <meta name='sendcode' content='this is send code page for ECG Analyzer' />
      </Helmet>

      {!loading ?
        <div className={`${style.forget}`}>

          <div className="account-pages pt-sm-5">
            <div className={`${style.container}`}>
              <div className="box row justify-content-center">
                <div className="col-md-8 col-lg-6 col-xl-5  ">
                  <div className="text-center mb-2 mt-5">
                    <a href="/forgetPassword" className="auth-logo mb-5 d-block">
                      <img src="./assets/logo2cut.jpg" alt="logo" height={120} className="logoreg" />
                    </a>
                    <h4 className={`${style.titled} mb-5`}>Forgot Password</h4>
                  </div>
                  <div className="cardLog">
                    <div className="cardLog-body">
                      <div >
                        <form onSubmit={formik.handleSubmit} >

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


                          <div className="d-grid pt-2">
                            <button className={`${style.btnprimary} btn waves-effect waves-light`} type="submit" disabled={loading} >
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
        : <Loading />}

    </>
  )
}
