import React from 'react'
import './Notfound.css'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
export default function Notfound() {
  return (
    <>
       <Helmet>
                <meta charSet="utf-8" />
                <title>404</title>
               <meta name='notfoundpage' content='this is  not found page' />
            </Helmet>
 <div className="page-not-found">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h2>404</h2>
        <h3>Page Not Found!</h3>
        <p>We're sorry, but the page you were looking for doesn't exist.</p>
      </div>
   
    </div>
    <Link  className='back'  to='../home'>Back Home</Link>
  </div>
</div>


    </>
  )
}
