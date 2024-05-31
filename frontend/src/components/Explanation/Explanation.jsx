import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../Loading/Loading.jsx'
import { Carousel } from 'react-responsive-carousel';
import './Explanation.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function Explanation() {
  const [loading, setLoading] = useState(false)
    let navigate=useNavigate();
    function logOut(){
      setLoading(true)
      localStorage.removeItem('user');
      navigate('../../home');
      setLoading(false)
    }
  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Explanation</title>
   <meta name='Explanation' content='this is explanation page for ECG analyzer which only medical students can see' />
</Helmet>
{!loading?
    <div className='expla'> 

      
      <div className=" container">
              <nav className="navbar navbar-expand-lg  bg-transparent">
        <div className={`container-fluid containerNav`}>
          <Link className="navbar-brand" to="../uploadImage">
          <img  src="../../../assets/logo2-removebg-preview.png"  className='logo' alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className='navitem'>
                <Link to='../uploadImage' className={`nav-link navlink`}>Home</Link>
              </li>
              <li className='navitem'>
                <button className="nav-link" onClick={logOut}>Logout</button>
              </li>
            
        
            </ul>
          </div>
        </div>
      </nav>
             
             
              </div>
              <div className="sideNav">
            <nav>
            <li><a href="#normal">
            {/* <ImAddressBook className='fas'/> */}
                <span className='nav-item'>Normal</span>
              </a></li>
              <li><a href="#abnormal">
                {/* <HiChatBubbleLeftRight className='fas'/> */}
                <span className='nav-item'>Abnormal</span>
              </a></li>
              <li><a href="#HMI">
                {/* <FaVoteYea className='fas'/> */}
                <span className='nav-item'>History of Myocardial Infraction</span>
              </a></li>
              <li><a href="#MI">
                {/* <IoCall className='fas'/> */}
                <span className='nav-item'>Myocardial Infraction</span>
              </a></li>
            </nav>
          </div>
              <div class="inspiration" id="normal">
      <div class=" pt-5 d-flex justify-content-center">
        <div class="title position-relative  ">
          <span class="text-uppercase border-bottom border-custom" >Let's Learn about!</span>
          <h2>Normal ECG </h2>
          </div>
       </div></div>
              <div className='carouselcontainer'>
              <Carousel  autoPlay>
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
              <Carousel infiniteLoop autoPlay>
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
              <Carousel infiniteLoop autoPlay>
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
              <Carousel infiniteLoop autoPlay>
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
:<Loading/>}


    </>
  )
}
