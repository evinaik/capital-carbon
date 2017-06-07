import React, { Component } from 'react';

import Header from '../Header/Header';
import Chart from '../Chart/Chart';
import Footer from '../Footer/Footer';

const App = ({ children }) => (
  <div>
    <Header />

    <Chart />

    <main>
      {children}
    </main>

    <Footer />
  </div>
);

export default App;
