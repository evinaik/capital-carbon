import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

function priceFormatter(cell, row) {
    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

export default class StockTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var products = [{
            id: 1,
            name: "Item name 1",
            price: 100
        }, {
            id: 2,
            name: "Item name 2",
            price: 100
        },];
        // It's a data format example.
        return (
            <BootstrapTable data={products} striped={true} hover={true}>
                <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
            </BootstrapTable>
        );
    }
};