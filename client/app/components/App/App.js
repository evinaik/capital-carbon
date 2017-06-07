import React, { Component } from 'react';

import Header from '../Header/Header';
import CarbonLive from '../CarbonLive/CarbonLive';
import Footer from '../Footer/Footer';

const App = ({ children }) => (
  <div>
    <Header />

    <CarbonLive />

    <main>
      {children}
    </main>

    <Footer />
  </div>
);

export default App;
