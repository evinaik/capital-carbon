import React, { Component } from 'react';
import RTChart from 'react-rt-chart';

class Chart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setInterval(() => this.forceUpdate(), 1000);
    }

    render() {
        var data = {
            date: new Date(),
            Car: Math.random()
            // Bus: Math.random()
        };

        var chart = {
            point: {
                show: false
            }
        };

        var fields = ['Car'];
    
        return <RTChart
                chart={chart}
                fields={fields}
                data={data} />
    }
}

export default Chart;