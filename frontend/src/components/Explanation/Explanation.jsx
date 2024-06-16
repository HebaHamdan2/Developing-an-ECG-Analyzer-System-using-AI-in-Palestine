import React, { useContext, useEffect, useState } from 'react'; // Import React and hooks
import { Helmet } from 'react-helmet'; // Import Helmet for managing document head
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate for navigation
import Loading from '../Loading/Loading.jsx'; // Import Loading component
import { Carousel } from 'react-responsive-carousel'; // Import Carousel component
import './Explanation.css'; // Import CSS file for styling
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import Secondary from '../SecondNav/Secondary.jsx'; // Import Secondary navigation component
import { AuthContext } from '../../contexts/Auth.context.jsx'; // Import AuthContext for authentication context
import { isTokenExpired } from '../checkExpiredToken/isTokenExpired.js'; // Import function to check if token is expired

// Define the Explanation component
export default function Explanation() {
  // Declare state variables
  const [loading, setLoading] = useState(false); // State for loading status
  let { authUser } = useContext(AuthContext); // Get authenticated user from context
  let navigate = useNavigate(); // Hook for navigation

  // Function to log out the user
  function logOut() {
    setLoading(true); // Set loading state to true
    localStorage.removeItem('user'); // Remove user data from localStorage
    navigate('../home'); // Navigate to home page
    setLoading(false); // Set loading state to false
  }

  // useEffect hook to check if the token is expired
  useEffect(() => {
    if (isTokenExpired(authUser.token)) { // Check if token is expired
      logOut(); // Log out if token is expired
    }
  }, [authUser.token]); // Dependency array with authUser.token

  // Render the component
  return (
    <>
      {/* Helmet to manage the document head */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Explanation</title>
        <meta name='Explanation' content='This is an explanation page for ECG analyzer which only medical students can see' />
      </Helmet>
      {/* Conditionally render the content based on loading state */}
      {!loading ?
        <div className='expla'>
          <div className="containerexp">
            {/* Navigation bar */}
            <nav className={`navbar navbar-expand-lg bg-transparent`}>
              <div className={`container-fluid containerNav`}>
                <Link className="navbar-brand" to="#">
                  <img src="../../../assets/logo2-removebg-preview.png" className='logo' alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className='navitem'>
                      <Link to='../uploadImage' className={`nav-link navlink`}>Home</Link>
                    </li>
                    <li className='navitem'>
                      <Link to='#' className={`nav-link navlinkstate`}>Explanation</Link>
                    </li>
                    <li className='navitem'>
                      <button className="nav-link" onClick={logOut}>Logout</button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          {/* Welcome message */}
          <div className="welcome">
            <h1>Welcome, medical students!</h1>
            <p>You will learn how to read the ECG of normal, abnormal, and myocardial infarction (MI) cases, as well as understand the history of MI. Enhance your diagnostic skills by recognizing and analyzing various cardiac rhythms, and build a solid foundation in electrocardiography with us.</p>
            <Secondary />
          </div>

          {/* Section for Normal ECG */}
          <div class="inspiration" id="normal">
            <div class="pt-5 d-flex justify-content-center">
              <div class="title position-relative">
                <span class="text-uppercase border-bottom border-custom">Let's Learn about!</span>
                <h2>Normal ECG</h2>
              </div>
            </div>
          </div>
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
                <img src="../../../assets/info/normal/no5.png" alt="Image4" />
              </div>
              <div>
                <img src="../../../assets/info/normal/6.jpg" alt="Image5" />
              </div>
              <div>
                <img src="../../../assets/info/normal/normal4.png" alt="Image6" />
              </div>
            </Carousel>
          </div>

          {/* Section for Abnormal ECG */}
          <div class="inspiration" id="abnormal">
            <div class="pt-5 d-flex justify-content-center">
              <div class="title position-relative">
                <span class="text-uppercase border-bottom border-custom">Let's Learn about!</span>
                <h2>Abnormal ECG</h2>
              </div>
            </div>
          </div>
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
                <img src="../../../assets/info/abnormal/4.jpeg" alt="Image4" />
              </div>
              <div>
                <img src="../../../assets/info/abnormal/5.jpeg" alt="Image5" />
              </div>
            </Carousel>
          </div>

          {/* Section for History of Myocardial Infarction ECG */}
          <div class="inspiration" id="HMI">
            <div class="pt-5 d-flex justify-content-center">
              <div class="title position-relative">
                <span class="text-uppercase border-bottom border-custom">Let's Learn about!</span>
                <h2>History of Myocardial Infraction ECG</h2>
              </div>
            </div>
          </div>
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
                <img src="../../../assets/info/HistoryMI/4.jpg" alt="Image4" />
              </div>
              <div>
                <img src="../../../assets/info/HistoryMI/5.jpg" alt="Image5" />
              </div>
              <div>
                <img src="../../../assets/info/HistoryMI/6.jpg" alt="Image6" />
              </div>
            </Carousel>
          </div>

          {/* Section for Myocardial Infarction ECG */}
          <div class="inspiration" id="MI">
            <div class="pt-5 d-flex justify-content-center">
              <div class="title position-relative">
                <span class="text-uppercase border-bottom border-custom">Let's Learn about!</span>
                <h2>Myocardial Infraction ECG</h2>
              </div>
            </div>
          </div>
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
                <img src="../../../assets/info/MI/4.jpg" alt="Image4" />
              </div>
              <div>
                <img src="../../../assets/info/MI/5.jpg" alt="Image5" />
              </div>
              <div>
                <img src="../../../assets/info/MI/6.jpg" alt="Image6" />
              </div>
            </Carousel>
          </div>
        </div>
        : <Loading />} {/* Show Loading component if loading state is true */}
    </>
  );
}
