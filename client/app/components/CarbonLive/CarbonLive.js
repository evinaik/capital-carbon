import React from 'react';
import RTChart from 'react-rt-chart';

var axios = require('axios');

class CarbonLive extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company: 'aapl',
      volume: 1000,
      price: 0,
      toreset: false,
      modifier: 0,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      toreset: (this.props.stock !== nextProps.stock),
    });
  }

  componentDidMount() {
    setInterval(() => {
      axios.get('/api/info/' + this.props.stock + '/2017/06/07')
        .then((response) => {
          if (response.data && (Math.abs(this.state[this.props.type] - response.data.volume) < 1000 || this.state[this.props.type] === 1000)) {
            this.setState(response.data);
            this.setState({
              modifier: this.state.modifier + (Math.random() > .5 ? -1 : 1) * (Math.random() * 3),
              toreset: false,
            })
          }
        })
        .catch((err) => {
        })
    }, 500);
  }

  render() {
    console.log(this.props.stock);
    // console.log(JSON.stringify(this.props));
    // var res = this.props.data.length > 0 ? this.props.data.find(x => x.company.toLowerCase() === this.props.stock) : temp;

    var data = {
      date: new Date(),
      Volume: this.state.volume + this.state.modifier,
      colors: {
        Volume: '#ff0000',
      }
      // Bus: Math.random()
    };

    var pric = {
      date: new Date(),
      Price: this.state.price,
      colors: {
        Price: '#00ffff',
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

    var chartp = {
      point: {
        show: false
      },
      axis: {
        x: {
          // show: false
          type: 'timeseries',
        },
        y: {
          label: 'Price',
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
    var newf = ['Price'];

    return (
      <div>
        <RTChart
          chart={
            chart
          }
          fields={
            fields
          }
          data={
            data
          }
          maxValues={80}
          reset={this.state.toreset}
        /><br/><br/><br/><br/><br/><br/><br/>
        <RTChart
          chart={
            chartp
          }
          fields={
            newf
          }
          data={
            pric
          }
          maxValues={80}
          reset={this.state.toreset}
        />
      </div>
    )
  }
}

export default CarbonLive;
