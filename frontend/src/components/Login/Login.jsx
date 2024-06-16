import React, { useContext, useState } from 'react' // Import React and necessary hooks
import { Helmet } from 'react-helmet' // Import Helmet for managing document head
import { Link, useNavigate } from 'react-router-dom' // Import Link and useNavigate for navigation
import style from './Login.module.css' // Import CSS module for styling
import { useFormik } from 'formik' // Import useFormik for form handling
import * as Yup from "yup" // Import Yup for form validation schema
import axios from 'axios' // Import axios for HTTP requests
import { jwtDecode } from "jwt-decode"; // Import jwtDecode for decoding JWT tokens
import { AuthContext } from '../../contexts/Auth.context.jsx' // Import AuthContext for authentication context
import toast from 'react-hot-toast' // Import toast for notifications
import Loading from '../Loading/Loading.jsx' // Import Loading component for loading state

export default function Login() {
  // Get setAuthUser from AuthContext to update authenticated user state
  let { setAuthUser } = useContext(AuthContext)
  
  // State for loading indicator
  let [loading, setLoading] = useState(false);

  // Yup validation schema for form fields
  const schema = Yup.object({
    email: Yup.string().required("Email is required").email("Please enter a valid email"),
    password: Yup.string().required("Password is required")
  })

  // Initialize formik with initial values, validation schema, and submit handler
  let formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    }, 
    validationSchema: schema,
    onSubmit: login,
  })

  // useNavigate hook for navigation
  let navigate = useNavigate();

  // Function to handle login logic
  async function login(values) {
    setLoading(true) // Set loading to true while request is in progress
    try {
      // Make POST request to login endpoint with form values
      const { data } = await axios.post("/auth/signin", values).catch((err) => {
        toast.error(err.response.data.message) // Show error toast if request fails
      })
      
      if (data.message === "success") {
        // If login is successful, save user data to localStorage and update auth state
        localStorage.setItem("user", JSON.stringify(data))
        setAuthUser(data)
        navigate("../uploadImage") // Navigate to uploadImage page
        // Show welcome toast with user's name
        toast(`Hello, ${jwtDecode(data.token, "login123").userName}!`, {
          icon: '👏',
        });
      } else {
        toast.error(data.validationArray[0]); // Show validation error toast if login fails
      }

    } finally {
      setLoading(false) // Set loading to false after request completes
    }
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <meta name='login' content='this is login page for ECG Analyzer' />
      </Helmet>
      
      {!loading ? <div className={`${style.login}`}>
        <div className="account-pages pt-sm-5">
          <div className={`${style.container}`}>
            <div className="box row justify-content-center">
              <div className="col-md-9 col-lg-5">
                <div className="text-center mb-2">
                  <a href="/login" className="auth-logo mb-3 d-block">
                    <img src="./assets/logo2cut.jpg" alt="logo" height={130} className="logoreg" />
                  </a>
                  <h4 className={`${style.titled} mb-5`}>Sign in</h4>
                </div>
                <div className="cardLog">
                  <div className="cardLog-body">
                    <div>
                      <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                          <label className={style.formlabel}>Email</label>
                          <div className="input-group mb-3 bg-soft-light rounded-3">
                            <input type="email" id="email" placeholder="enter your email" aria-label="Enter Email" aria-describedby="basic-addon3"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              name='email'
                              className={`form-control border-light bg-soft-light ${formik.errors.email && formik.touched.email ? "is-invalid" : ""}`}
                            />
                          </div>
                          {formik.errors.email && formik.touched.email ? <div className='small text-danger'>{formik.errors.email}</div> : <></>}
                        </div>
                        <div className="mb-1">
                          <label className={style.formlabel}>Password</label>
                          <div className="input-group mb-1 bg-soft-light rounded-3">
                            <input type="password" id="password" placeholder="enter your password" aria-label="Enter Password" aria-describedby="basic-addon4"
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              name='password'
                              className={`form-control border-light bg-soft-light ${formik.errors.password && formik.touched.password ? "is-invalid" : ""}`}
                            />
                          </div>
                          {formik.errors.password && formik.touched.password ? <div className='small text-danger'>{formik.errors.password}</div> : null}
                        </div>
                        <div className={style.textForg}>
                          <Link to="../forgetPassword" className={style.forgot}>Forgot your password ?</Link>
                        </div>
                        <div className="d-grid pt-2">
                          <button className={`${style.btnprimary} btn waves-effect waves-light`} type="submit" disabled={loading}>
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className={style.p}>Don't have an account ? <Link to="../signup">Sign up</Link> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> : <Loading />}
    </>
  )
}
