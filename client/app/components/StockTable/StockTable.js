import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import './react-bootstrap-table-all.min.css';
import './StockTable.css';

function priceFormatter(cell, row) {
    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

export default class StockTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var products = [{
            stock: "AAPL",
            low: 10.00,
            high: 20.00,
            close: 15.00,
            avg: 100,
        }, {
            stock: "GOOGL",
            low: 10.00,
            high: 20.00,
            close: 15.00,
            avg: 100,
        },];
        // It's a data format example.
        return (
            <BootstrapTable data={products} striped={true} hover={true} condensed>
                <TableHeaderColumn dataField="stock" isKey={true} dataAlign="center" dataSort={true}>Stock</TableHeaderColumn>
                <TableHeaderColumn dataField="low" >Low</TableHeaderColumn>
                <TableHeaderColumn dataField="high" dataFormat={priceFormatter}>High</TableHeaderColumn>
                <TableHeaderColumn dataField="close" dataFormat={priceFormatter}>Close</TableHeaderColumn>
                <TableHeaderColumn dataField="avg" >Avg. Volume</TableHeaderColumn>
            </BootstrapTable>
        );
    }
};