import React from 'react';
import RTChart from 'react-rt-chart';

class CarbonLive extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setInterval(() => this.forceUpdate(), 1000);
  }

  render() {
    var data = {
      date: new Date(),
      Volume: Math.random(),
      colors: {
          Volume: '#00ffff',
      }
      // Bus: Math.random()
    };

    var chart = {
      point: {
        show: false
      },
      axis: {
        x: {
          // show: false
          type: 'timeseries',
        },
        y: {
          label: 'Volume',
        }
      },
      legend: {
        show: false
      },
      zoom: {
        enabled: true,
        rescale: true,

      }
    };

    var fields = ['Volume'];

    return <RTChart
    chart = {
      chart
    }
    fields = {
      fields
    }
    data = {
      data
    }
    />
  }
}

export default CarbonLive;
