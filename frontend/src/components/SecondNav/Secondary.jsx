import React, { useEffect, useState } from 'react'
import './Secondary.css'
export default function Secondary() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsSticky(scrollTop > 100);  // Change the 100 value as per your requirement
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  return (
    <nav className={`secnavbar ${isSticky ? 'sticky' : ''}`}>
    <ul>
      <li><a href="#normal">Normal</a></li>
      <li><a href="#abnormal">Abnormal</a></li>
      <li><a href="#MI">Myocardial Infraction</a></li>
      <li><a href="#HMI">History of MI</a></li>
    </ul>
  </nav>
  )
}
