import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import style from './SignUp.module.css';
import CheckboxForSpec from './CheckboxForSpec.jsx';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import Loading from '../Loading/Loading.jsx';

export default function SignUp() {
  let [loading, setLoading] = useState(false);

  const schema = Yup.object({
    userName: Yup.string().required("Username is required").min(3, "Username must be at least 3 characters long").max(20, "Username must be at most 20 characters long"),
    email: Yup.string().required("Email is required").email("Please enter a valid email").min(8,"Email must be at least 8 characters long"),
    password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
    ),
    confirmPassword: Yup.string().required("Confirm Password is required").oneOf([Yup.ref('password')], "Confirm password must match the password"),
    role: Yup.string().required("Please choose your role!")
  });

  let formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: ''
    },
    validationSchema: schema,
    onSubmit: register,
  });

  const handleCheckboxChange = (role) => {
    formik.setFieldValue('role', role);
  };

  let navigate = useNavigate();

  async function register(values) {
    setLoading(true);
    try {
    
      const { data } = await axios.post("/auth/signup", values).catch((err) => {
        toast.error(err.response.data?.message);
      if(err.response.data?.validationError[0].message){
        toast.error(err.response.data?.validationError[0].message);}
      });
      if (data.message === "success") {
        navigate("../login");
      } else {
        toast.error(data.validationArray[0]);
        
        console.log(data);
      }
    } finally {

      setLoading(false);
    }
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Signup</title>
        <meta name='signup' content='this is signup page for ECG Analyzer' />
      </Helmet>

      {!loading ?
        <div className={`${style.reg}`}>
          <div className="account-pages pt-sm-5">
            <div className={`${style.container}`}>
              <div className="box row justify-content-center">
                <div className="col-md-9 col-lg-5">
                  <div className="text-center mb-2">
                    <Link to="/signup" className="auth-logo mb-3 d-block">
                      <img src="./assets/logo2cut.jpg" alt="logo" height={120} className="logoreg" />
                    </Link>
                    <h4 className={style.titled}>Sign up</h4>
                    <p className="text-muted mb-2">Get your ECG Analyzer account now.</p>
                  </div>
                  <div className="cardLog">
                    <div className="cardLog-body">
                      <form onSubmit={formik.handleSubmit}>
                        <div className="w-lg-50 w-md-70 m-auto"></div>
                        <div className="mb-3">
                          <label className={`${style.labelf} form-label`}>Username</label>
                          <div className="input-group mb-3 bg-soft-light rounded-3">
                            <input
                              type="name"
                              id="uname"
                              placeholder="enter username"
                              aria-label="Enter userName"
                              aria-describedby="basic-addon3"
                              value={formik.values.userName}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              name='userName'
                              className={`form-control border-light bg-soft-light ${formik.errors.userName && formik.touched.userName ? "is-invalid" : ""}`}
                            />
                          </div>
                          {formik.errors.userName && formik.touched.userName ? <div className='small text-danger'>{formik.errors.userName}</div> : null}
                        </div>
                        <div className="mb-3">
                          <label className={`${style.labelf} form-label`}>Email</label>
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
                          <label className={`${style.labelf} form-label`}>Password</label>
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
                        <div className="mb-3">
                          <label className={`${style.labelf} form-label`}>Confirm Password</label>
                          <div className="input-group mb-3 bg-soft-light rounded-3">
                            <input
                              type="password"
                              id="cPassword"
                              placeholder="confirm password"
                              aria-label="Enter Password"
                              aria-describedby="basic-addon4"
                              value={formik.values.confirmPassword}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              name='confirmPassword'
                              className={`form-control border-light bg-soft-light ${formik.errors.confirmPassword && formik.touched.confirmPassword ? "is-invalid" : ""}`}
                            />
                          </div>
                          {formik.errors.confirmPassword && formik.touched.confirmPassword ? <div className='small text-danger'>{formik.errors.confirmPassword}</div> : null}
                        </div>
                        <CheckboxForSpec onCheckboxChange={handleCheckboxChange} selectedRole={formik.values.role} />
                        {formik.errors.role && formik.touched.role ? <div className='small text-danger'>{formik.errors.role}</div> : null}
                        <div className="d-grid pt-2">
                          <button className={`${style.btnprimary} btn waves-effect waves-light`} type="submit" disabled={loading}>
                            Sign up
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="mt-1 text-center">
                    <p className={style.p}>Already have an account? <Link to="../login">Sign in</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        : <Loading />
      }</>);
}
