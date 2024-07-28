import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src='images/logoskr.png' alt="Logo"  style={{width:'200px', height:'200px'}} />
      </div>
      <div className="header-right">
        <p>
          <a href="mailto:skrbusinesssolution@gmail.com">Email</a> | 
          <Link to="/contact">Contact</Link> | 
          <a href="/enquiry">Send Query</a>
        </p>
        <img src="images/add-ress.png" alt="Right Top" style={{width:'300px', height:'100px'}}/>
      </div>
    </div>
  );
};

export default Header;  
