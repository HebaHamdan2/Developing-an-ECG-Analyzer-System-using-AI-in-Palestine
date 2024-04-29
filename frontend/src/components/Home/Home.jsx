import React from 'react'
import style from "./Home.module.css"
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
export default function Home() {
  return (
    <>
        <Helmet>
    <meta charSet="utf-8" />
    <title>Home</title>
   <meta name='Home' content='this is home page for ECG analyzer which is contain login and signup buttons' />
</Helmet>
    <div  className={`${style.home}`}>
      <div className="container">
      <nav className="navbar navbar-expand-lg  bg-transparent">
  <div className="container-fluid">
    <Link className="navbar-brand" to="../home">
    <img  src="../../../assets/logo.jpg"  className={`${style.logo}`}  alt="logo" />
    <span className={`${style.ecg} `}>ECG Analyzer</span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    {/* <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="../signup">Sign up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="../login">Log in</Link>
        </li>
  
      </ul>
    </div> */}
  </div>
</nav>
<div className='d-flex justify-content-between '>
<div className="col-md-6 content mt-5">
<h1>Welcome to the Rhythm <br/> of Life with our ECG Analyzer!</h1>
<p className='mr-5 pt-2'>Whether you're a healthcare professional or medical student, our platform offers the tools and information you need for accurate  ECG analysis "Remember, it all begins with the diagnosis".</p> 
<div className={`${style.controls} mt-4`}>
  <Link to="../signup" className='px-3'>Sign Up</Link>
  <Link to="../login">Log in</Link>
</div>
</div>
  <div className="col-md-6">
  <img  src="../../../assets/home.jpg"  className={`${style.img}`}  alt="home" />
  </div>


</div>
      </div>


      
  </div>
    </>

  )
}
