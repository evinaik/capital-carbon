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
      all: [],
    }
    // this.getData = this.getData.bind(this);
    // this._handleChange = this._handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      axios.get("/api/info/2015/06/08")
      .then((response) => {
        this.setState({
          all: JSON.parse(response.data),
        })
      })
      .catch((err) => {
        // console.log(err)
      });
    }, 5000);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="table-center">
          <StockTable data={this.state.all} />
        </div>

        <div className="center">
          <CarbonLive data={this.state.all} />
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