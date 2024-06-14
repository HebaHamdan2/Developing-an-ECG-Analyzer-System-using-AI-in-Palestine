import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../Loading/Loading.jsx'
import { Carousel } from 'react-responsive-carousel';
import './Explanation.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Secondary from '../SecondNav/Secondary.jsx';
import { AuthContext } from '../../contexts/Auth.context.jsx';
import { isTokenExpired } from '../checkExpiredToken/isTokenExpired.js';
export default function Explanation() {
  const [loading, setLoading] = useState(false)
  let { authUser } = useContext(AuthContext)
  let navigate = useNavigate();
  function logOut() {
    setLoading(true)
    localStorage.removeItem('user');
    navigate('../home')
    setLoading(false)
  }
  useEffect(() => {
    if (isTokenExpired(authUser.token)) { logOut() }
  }, [])
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Explanation</title>
        <meta name='Explanation' content='this is explanation page for ECG analyzer which only medical students can see' />
      </Helmet>
      {!loading ?
        <div className='expla'>
          <div className=" containerexp">
            <nav className={` navbar navbar-expand-lg  bg-transparent`}>
              <div className={`container-fluid containerNav`}>
                <Link className="navbar-brand" to="#">
                  <img src="../../../assets/logo2-removebg-preview.png" className='logo' alt="logo" />
                </Link>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                  <ul className="navbar-nav">
                    <li className='navitem'>
                      <Link to='../uploadImage' className={`nav-link navlink`} >Home</Link>
                    </li>
                    <li className='navitem'>
                      <Link to='#' className={`nav-link navlinkstate`} >Explanation</Link>
                    </li>
                    <li className='navitem'>
                      <button className="nav-link" onClick={logOut}>Logout</button>
                    </li>


                  </ul>
                </div>
              </div>
            </nav>
           


          </div>

 <div className="welcome">
  <h1>Welcome, medical students!</h1>
<p>You will learn how to read the ECG of normal, abnormal, and myocardial infarction (MI) cases, as well as understand the history of MI. Enhance your diagnostic skills by recognizing and analyzing various cardiac rhythms, and build a solid foundation in electrocardiography with us.
</p>
<Secondary />
 </div>

          <div class="inspiration" id="normal">
            <div class=" pt-5 d-flex justify-content-center">
              <div class="title position-relative  ">
                <span class="text-uppercase border-bottom border-custom" >Let's Learn about!</span>
                <h2>Normal ECG </h2>
              </div>
            </div></div>
          <div className='carouselcontainer'>
            <Carousel infiniteLoop>
              <div>
                <img src="../../../assets/info/normal/no1.png" alt="Image1" />
              </div>
              <div>
                <img src="../../../assets/info/normal/no2.png" alt="Image2" />
              </div>
              <div>
                <img src="../../../assets/info/normal/no3.png" alt="Image3" />
              </div>
              <div>
                <img src="../../../assets/info/normal/no5.png" alt="Image3" />
              </div>
              <div>
                <img src="../../../assets/info/normal/6.jpg" alt="Image3" />
              </div>
              <div>
                <img src="../../../assets/info/normal/normal4.png" alt="Image3" />
              </div>
            </Carousel>

          </div>
          <div class="inspiration" id="abnormal">
            <div class=" pt-5 d-flex justify-content-center">
              <div class="title position-relative  ">
                <span class="text-uppercase border-bottom border-custom" >Let's Learn about!</span>
                <h2>Abnormal ECG </h2>
              </div>
            </div></div>
          <div className='carouselcontainer'>
            <Carousel infiniteLoop>
              <div>
                <img src="../../../assets/info/abnormal/1.jpeg" alt="Image1" />
              </div>
              <div>
                <img src="../../../assets/info/abnormal/2.jpeg" alt="Image2" />
              </div>
              <div>
                <img src="../../../assets/info/abnormal/3.jpeg" alt="Image3" />
              </div>
              <div>
                <img src="../../../assets/info/abnormal/4.jpeg" alt="Image3" />
              </div>
              <div>
                <img src="../../../assets/info/abnormal/5.jpeg" alt="Image3" />
              </div>

            </Carousel>

          </div>
          <div class="inspiration" id="HMI">
            <div class=" pt-5 d-flex justify-content-center">
              <div class="title position-relative  ">
                <span class="text-uppercase border-bottom border-custom" >Let's Learn about!</span>
                <h2>History of Myocardial Infraction ECG </h2>
              </div>
            </div></div>
          <div className='carouselcontainer'>
            <Carousel infiniteLoop>
              <div>
                <img src="../../../assets/info/HistoryMI/1.jpeg" alt="Image1" />
              </div>
              <div>
                <img src="../../../assets/info/HistoryMI/2.jpeg" alt="Image2" />
              </div>
              <div>
                <img src="../../../assets/info/HistoryMI/3.jpeg" alt="Image3" />
              </div>
              <div>
                <img src="../../../assets/info/HistoryMI/4.jpg" alt="Image3" />
              </div>
              <div>
                <img src="../../../assets/info/HistoryMI/5.jpg" alt="Image3" />
              </div>
              <div>
                <img src="../../../assets/info/HistoryMI/6.jpg" alt="Image3" />
              </div>
            </Carousel>

          </div>
          <div class="inspiration" id="MI">
            <div class=" pt-5 d-flex justify-content-center">
              <div class="title position-relative  ">
                <span class="text-uppercase border-bottom border-custom" >Let's Learn about!</span>
                <h2>Myocardial Infraction ECG </h2>
              </div>
            </div></div>
          <div className='carouselcontainer'>
            <Carousel infiniteLoop>
              <div>
                <img src="../../../assets/info/MI/1.jpg" alt="Image1" />
              </div>
              <div>
                <img src="../../../assets/info/MI/2.jpg" alt="Image2" />
              </div>
              <div>
                <img src="../../../assets/info/MI/3.jpg" alt="Image3" />
              </div>
              <div>
                <img src="../../../assets/info/MI/4.jpg" alt="Image3" />
              </div>
              <div>
                <img src="../../../assets/info/MI/5.jpg" alt="Image3" />
              </div>
              <div>
                <img src="../../../assets/info/MI/6.jpg" alt="Image3" />
              </div>
            </Carousel>

          </div>
        </div>
        : <Loading />}


    </>
  )
}
