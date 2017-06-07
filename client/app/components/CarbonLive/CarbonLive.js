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
            Cost: Math.random()
            // Bus: Math.random()
        };

        var chart = {
            point: {
                show: false
            }
        };

        var fields = ['Cost'];
    
        return <RTChart
                chart={chart}
                fields={fields}
                data={data} />
    }
}

export default CarbonLive;