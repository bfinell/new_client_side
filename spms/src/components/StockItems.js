import React, {Component} from 'react';

class StockItems extends Component {






render() {


    return (
        <tr className={this.props.stock.name}>
        <td>{this.props.stock.symbol}</td>
        <td>{this.props.stock.price}</td>
        <td>{this.props.stock.quantity}</td>
        <td>{this.props.stock.totalPrice}</td>

        </tr>
);
}
}

export default StockItems;