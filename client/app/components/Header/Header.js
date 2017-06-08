import React from 'react';
import s from './Header.css';


const Header = () => (

<header className="w3-container w3-theme w3-padding" id="myHeader">
        <i onclick="w3_open()" className="fa fa-bars w3-xlarge w3-button w3-theme" /> 
        <div className="w3-center">
          <h4>CARBON 2017</h4>
          <h1 className="w3-xxxlarge w3-animate-bottom">INSIDER TRADING</h1>
        </div>
      </header>

);



export default Header;
