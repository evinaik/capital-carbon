import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import StockTable from '../StockTable/StockTable';
import CarbonLive from '../CarbonLive/CarbonLive';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="table-center">
        <StockTable />
        </div>
        <div className="center">
        <CarbonLive />
        </div>
        <Footer />
      </div>
    );
  }
}
