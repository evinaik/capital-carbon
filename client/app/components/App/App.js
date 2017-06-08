import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import StockTable from '../StockTable/StockTable';
import CarbonLive from '../CarbonLive/CarbonLive';

import './App.css';

var axios = require('axios');

class Holder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      all: '',
      value: 'aapl',
    }
    // this.getData = this.getData.bind(this);
    // this._handleChange = this._handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  componentDidMount() {
    // setInterval(() => {
    //   axios.get("/api/info/2015/06/08")
    //   .then((response) => {
    //     console.log(response.data);
    //     this.setState({
    //       all: response.data,
    //     })
    //   })
    //   .catch((err) => {
    //     // console.log(err)
    //   });
    // }, 5000);
  }

  render() {
    return (
      <div>
        <Header />
        <select name="company" className="choose" value={this.state.value} onChange={this.handleChange}>
            <option value="aapl">AAPL</option>
            <option value="googl">GOOGL</option>
            <option value="amzn">AMZN</option>
            <option value="fb">FB</option>
            <option value="amd">AMD</option>
            <option value="cof">COF</option>
            <option value="tsla">TSLA</option>
            <option value="twtr">TWTR</option>
          </select>
        <div className="table-center">
          <StockTable stock={this.state.value}/>
        </div>

        <div className="center">
          <CarbonLive stock={this.state.value} type={'volume'}/>
        </div>
      </div>
    )
  }
}


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Holder />
        <Footer />
      </div>
    );
  }
}