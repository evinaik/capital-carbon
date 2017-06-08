import React from 'react';
import './Header.css';


class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }

    // this.handleChange = this.handleChange.bind(this);
  }


  render() {
    return (
      <div className="container">
        <header>
          <h1>CAPITAL: Creating A Proprietary Investment Trading and Analytical Liason</h1>
          <h5>Carbon2017</h5>
        </header>
      </div>
    );
  }

}



export default Header;
