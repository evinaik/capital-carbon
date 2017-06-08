import React from 'react';
import './Header.css';


const Header = () => (


  <div className="container">
    <header>
      <h1>Insider Trading</h1>
      <h5>Carbon2017</h5>
      <select name="company" className="choose">
        <option value="aapl">AAPL</option>
        <option value="googl">GOOGL</option>
      </select>
    </header>
  </div>

);



export default Header;
