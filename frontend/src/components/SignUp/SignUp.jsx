import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import style from './SignUp.module.css'
import CheckboxForSpec from './CheckboxForSpec.jsx'
import useSignup from '../../hooks/useSignup.js'
export default function SignUp() {
  const [inputs,setInputs]=useState({
    userName:'',
    email:'',
    password:'',
    confirmPassword:'',
    role:''
   })
   const{loading,signup}=useSignup();
   const handleCheckboxChange=(role)=>{
     setInputs({...inputs,role})
   }
   const handleSubmit=async(e)=>{
 e.preventDefault();
    await signup(inputs);
   }


  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Signup</title>
               <meta name='signup' content='this is signup page for ECG Analyzer' />
            </Helmet>
   <div className={`${style.reg}`}>

  <div className="account-pages pt-sm-5">
    <div className={`${style.container}`}>
      <div className="box row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-5  ">
          <div className="text-center mb-2">
            <a href="/signup" className="auth-logo mb-3 d-block">
              <img src="./assets/logo.jpg" alt="logo" height={90} className="logo logo-dark" />
                  </a>
            <h4>Sign up</h4>
            <p className="text-muted mb-2">Get your ECG Analyzer account now.</p>
          </div>
          <div className="cardLog">
            <div className="cardLog-body">
              <div >
                <form  onSubmit={handleSubmit}>
  
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <div className="input-group mb-3 bg-soft-light rounded-3">
                      <input type="name" id="uname" className="form-control  border-light bg-soft-light" placeholder="enter username" aria-label="Enter userName" aria-describedby="basic-addon3"
                         value={inputs.userName}
                         onChange={(e)=> setInputs({...inputs,userName:e.target.value})}
                       
                          />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <div className="input-group mb-3 bg-soft-light rounded-3">
                      <input type="email" id="email" className="form-control  border-light bg-soft-light" placeholder="enter your email" aria-label="Enter Email" aria-describedby="basic-addon3" 
               value={inputs.email}
               onChange={(e)=> setInputs({...inputs,email:e.target.value})}
             
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <div className="input-group mb-3 bg-soft-light rounded-3">
                      <input type="password" id="password" className="form-control  border-light bg-soft-light" placeholder="enter password" aria-label="Enter Password" aria-describedby="basic-addon4" 
                      value={inputs.password}
                      onChange={(e)=> setInputs({...inputs,password:e.target.value})}
                     
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <div className="input-group mb-3 bg-soft-light rounded-3">
                      <input type="password" id="cPassword" className="form-control  border-light bg-soft-light" placeholder="confirm password" aria-label="Enter Password" aria-describedby="basic-addon4" 
                      value={inputs.confirmPassword}
                      onChange={(e)=> setInputs({...inputs,confirmPassword:e.target.value})}
                     
                     />
                    </div>
                  </div>
                
              <CheckboxForSpec onCheckboxChange={handleCheckboxChange} selectedGender={inputs.role}/>
                  <div className="d-grid pt-2">
                    <button className={ `${style.btnprimary} btn waves-effect waves-light`} type="submit"  disabled={loading} >
                      Sign up</button>
                  </div>
                </form>
              
              </div>
            </div>
          </div>
          <div className="mt-1 text-center">
            <p>Already have an account ? <Link to="../login">Sign in</Link> </p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
 
</div>
   </>
  )
}
// import axios from 'axios'
// import { useFormik } from 'formik'
// import React, { useState } from 'react'
// // import { regSchema } from '../schemas/register.jsx'
// import { useNavigate } from 'react-router-dom'
// import Header from '../Header/Header.jsx'
// import * as Yup from 'yup';

// export default function Register() {
  
// let [error, setError]= useState([])
// let navigate= useNavigate()
// const schema=Yup.object({
//      userName:Yup.string().required("name is required").min(3,"min is 3 characters").max(10,"max is 10 characters"),
//      email:Yup.string().required("email is required").email("not valid email"),
//      password:Yup.string().required("password is required"),
//      cPassword:Yup.string().required("confirm password is required").oneOf([Yup.ref('password')],"not match password")
     
//    })


//     let register = async(values)=>{
 
//       let {data}=await axios.post('https://apiecommerce-hblh.onrender.com/auth/signup',values)
//         if(data.message==="success"){
//             console.log("registred");
//             navigate('/login')
//         }else{
//             setError(data.err[0])

//         }
     
//     }
   


// let {errors , values ,handleChange ,handleSubmit ,handleBlur , touched}  = useFormik({ 
//   initialValues: {
//     email:"",
//     userName:"",
//     password:"",
//     cPassword:""
//   },
//   validationSchema: schema,
//   onSubmit: register
// })
//   return (
// <>
//     <Header
//     title="Create an acount"
//     height="40"
//     />
//     <div className="container mt-5 pt-5">
//     <form className='w-50 m-auto text-center mb-5 py-5 ' onSubmit={ handleSubmit}>
//         {error.map((err)=>{
//             return  <div className="alert alert-danger">{err.message}</div>
//         })}

//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email"  id="exampleInputEmail1" 
//      value={values.email} onChange={ handleChange}  name='email' aria-describedby="emailHelp" onBlur={handleBlur}
//      className={form-control ${ errors.email && touched.email? "is-invalid":""}}/>
//      { errors.email && touched.email? <div className='small text-danger'>{ errors.email} </div>:<></>}
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputName" className="form-label">Name</label>
//     <input type="text"  id="exampleInputName"  value={values.userName} onChange={handleChange}  onBlur={handleBlur} name='userName' 
//     className={form-control ${errors.userName && touched.userName? "is-invalid":""}}/>
//     {errors.userName && touched.userName? <div className='small text-danger'>{errors.userName} </div>:<></>}
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password"  id="exampleInputPassword1"  value={values.password} onChange={handleChange} onBlur={handleBlur} name='password'
//     className={form-control ${errors.password && touched.password? "is-invalid":""}} />
//     {errors.password && touched.password? <div className='small text-danger'>{errors.password} </div>:<></>}
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
//     <input type="password"  id="exampleInputPassword2"  value={values.cPassword} onChange={handleChange} onBlur={handleBlur} name='cPassword'
//     className={form-control ${errors.cPassword && touched.cPassword? "is-invalid":""}}/>
//     {errors.cPassword && touched.cPassword? <div className='small text-danger'>{errors.cPassword} </div>:<></>}
//   </div>

//   <button type="submit"  className="btn btn-primary">Submit</button>
// </form>
// </div>
// </>
//   )
// }