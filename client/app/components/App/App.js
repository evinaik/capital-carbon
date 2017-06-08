import React, { Component } from 'react';

import Header from '../Header/Header';
import CarbonLive from '../CarbonLive/CarbonLive';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Header />

      <CarbonLive />
    </div>
    );
  }
}
