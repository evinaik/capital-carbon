import React from 'react';
import ReactTable from 'react-table';

import './StockTable.css';

var axios = require('axios');

export default class StockTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            low: 0,
            high: 0,
            open: 0,
            close: 0,
            sales: 0,
        }
    }

    componentDidMount() {
        axios.get('/api/info/' + this.props.stock + '/2017/06/08')
            .then((response) => {
                console.log(response);
                if (response.data) {
                    this.setState(response.data);
                    console.log(this.state);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    componentWillUpdate(nextProps) {
        axios.get('/api/info/' + nextProps.stock + '/2017/06/08')
            .then((response) => {
                console.log(response);
                if (response.data) {
                    this.setState(response.data);
                    console.log(this.state);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const data = [{
            company: this.props.stock.toUpperCase(),
            low: this.state.low,
            high: this.state.high,
            open: this.state.open,
            close: this.state.close,
            sales: this.state.sales,
        },];

        const columns = [{
            Header: 'Company',
            accessor: 'company' // String-based value accessors! 
        }, {
            Header: 'Low',
            accessor: 'low',
        }, {
            Header: 'High',
            accessor: 'high',
        }, {
            Header: 'Open',
            accessor: 'open',
        }, {
            Header: 'Close',
            accessor: 'close',
        }, {
            Header: 'Sales',
            accessor: 'sales',
        }]

        return (
            < ReactTable
                data={data}
                columns={columns}
                showPagination={false}
                showPageSizeOptions={false}
                defaultPageSize={1}
            />
        );
    }
};