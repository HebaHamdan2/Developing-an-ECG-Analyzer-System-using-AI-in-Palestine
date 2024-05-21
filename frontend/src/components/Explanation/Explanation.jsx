import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'
import style from'./Explanation.module.css'
import { AuthContext } from '../../contexts/Auth.context.jsx';
export default function Explanation() {
  let navigate=useNavigate();
  let{setAuthUser}=useContext(AuthContext)
  function logOut(){
    localStorage.removeItem('user');
    setAuthUser(null);
    navigate('../home');
  }

  return (
<>
<Helmet>
    <meta charSet="utf-8" />
    <title>Explanation</title>
   <meta name='explanation' content='this is explanation page that contains information about diseases can be detect from the ecg image ' />
</Helmet>
<div className={style.expla}>
<div className=" container">
        <nav className="navbar navbar-expand-lg  bg-transparent">
  <div className="container-fluid">
    <Link className="navbar-brand" to="../explanation">
    <img  src="../../../assets/logo.jpg"  className={`${style.logo}`}  alt="logo" />
    <span className={`${style.ecg} `}>ECG Analyzer</span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto">
      <li className="nav-item">
          <Link to='../uploadImage' className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={logOut}>Logout</button>
        </li>
      
  
      </ul>
    </div>
  </div>
</nav>
    <div className="d-flex row justify-content-between m-3 ">
      <div className= { `${style.welcome} col-md-12`} >
{/* <img src="../../../assets/home.jpg" className={style.img} alt="Rhythmical Excitation of the Heart" /> */}
<h1>Welcome Student!</h1>
      </div>
      <div className="col-md-12">
      <h2 className=' mb-4'>Rhythmical Excitation of the Heart</h2>
       <p>The heart is endowed with
a special system for <b> generating rhythmical electrical
impulses to cause rhythmical contraction of the heart
muscle</b> and <b>conducting these impulses rapidly
through the heart.</b> <br/> When this system functions normally,
the atria contract about one sixth of a second ahead of ventricular contraction, which allows filling of the ventricles
before they pump the blood through the lungs and peripheral circulation.<br/> Another special importance of the system
is that it allows all portions of the ventricles to contract
almost simultaneously, which is essential for most effective pressure generation in the ventricular chambers.
<br/>
This rhythmical and conductive system of the heart
is susceptible to damage by heart disease, especially by
ischemia of the heart tissues resulting from poor coronary blood flow.<br/> The effect is often a bizarre heart rhythm
or abnormal sequence of contraction of the heart chambers, and the pumping effectiveness of the heart often is
affected severely, even to the extent of causing death.</p>
      </div>
      </div>   
       
        </div>
</div>

</>
  )
}
