import React from 'react';
import './Header.css';


class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Insider Trading</h1>
          <h5>Carbon2017</h5>
          <select name="company" className="choose" value={this.state.value} onChange={this.handleChange}>
            <option value="aapl">AAPL</option>
            <option value="googl">GOOGL</option>
          </select>
        </header>
      </div>
    );
  }

}



export default Header;
