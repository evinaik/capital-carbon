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
    console.log(this.props.stock);

    function byVal(o) {
      return o.company === this.props.stock.toUpperCase();
    }

    var temp = {
      volume: 10000,
    }

    console.log(JSON.stringify(this.props));
    // var res = this.props.data.length > 0 ? this.props.data.find(x => x.company.toLowerCase() === this.props.stock) : temp;
    var data = {
      date: new Date(),
      Volume: temp.volume,
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
    maxValues = {80}
    />
  }
}

export default CarbonLive;
