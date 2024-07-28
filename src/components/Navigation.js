import React from 'react';



export default function Navigation  ()  {
  return(
    <ul id="nav" className='center-container'>
      <li className="current"><a href="/">Home</a></li>
      <li>
        <a href="/about-us">About Us</a>
        <ul>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="">Our Mission</a></li>
          <li><a href="">Our Vision</a></li>
          <li><a href="">Office Infrastructure</a></li>
        </ul>
      </li>
      <li>
        <a href="Aboutus.html#about">Services</a>
        <ul>
          <li><a href="Aboutus.html#about">Auditing</a></li>
          <li><a href="Mission.html#mission">Personal & Corporate Tax </a></li>
          <li><a href="Vision.html#vision">Taxation & Consultancy</a></li>
          <li><a href="Infrastructure.html#infrastructure">Management Consultancy</a></li>
          <li><a href="Infrastructure.html#infrastructure">Representation</a></li>
          <li><a href="Infrastructure.html#infrastructure">Registration</a></li>
        </ul>
      </li>
      <li>
        <a href="">Our Proprietor</a>
      </li>
      <li>
        <a href='/enquiry'>Online Enquiry</a>
      </li>
      <li>
        <a href="/contact">Contact Us</a>
      </li>
      
    </ul>
)


  
};


