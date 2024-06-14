import React, { useEffect, useState } from 'react'
import style from "./Home.module.css"
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Loading from '../Loading/Loading.jsx'
export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <meta name='Home' content='this is home page for ECG analyzer which is contain login and signup buttons' />
      </Helmet>{!loading ?

        <div className={`${style.home}  `}>
          <div className="container">
            <nav className={` navbar navbar-expand-lg  bg-transparent}`}>
              <div className={`container-fluid  ${style.containerNav}`}>
                <Link className="navbar-brand" to="../home">
                  <img src="../../../assets/logo2.jpg" className={`${style.logo1}`} alt="logo" />
                </Link>
              </div>
            </nav>
            <div className='d-lg-flex d-md-block justify-content-between'>
              <div className="col-lg-6  col-md-12 content mt-4">
                <h1>Welcome to the Rhythm <br /> of Life with our ECG Analyzer!</h1>
                <p className='mr-5 pt-2'>Whether you're a healthcare professional or medical student, our platform offers the tools and information you need for accurate  ECG analysis. <strong>Remember, it all begins with the diagnosis.</strong></p>
                <div className={`${style.controls} mt-4`}>
                  <Link to="../signup" className='px-3'>Sign Up</Link>
                  <Link to="../login" >Log in</Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-12  mt-1">
                <img src="../../../assets/home.jpg" className={`${style.img}`} alt="home" />
              </div>


            </div>
          </div>



        </div>
        : <Loading />}

    </>

  )
}
