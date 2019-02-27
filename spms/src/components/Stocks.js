import React, {Component} from 'react';
import StockItems from './StockItems';



class Stocks extends Component {

    selectStock(id) {
        this.props.selectStock(id);
    }


    render() {
        let stockItems;
        if (this.props.stocks) {
            stockItems = this.props.stocks.map(stock => {

                return (
                    <StockItems key={stock.id} stock={stock} selectStock={this.selectStock.bind(this)}/>
                );


            });
        }
        return (
            <div className={"Stocks"}>
                <table className={"stockTable"}>
                    <thead className={"tableHead"}>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody className={"tableBody"}></tbody>
                    {stockItems}
                </table>

            </div>

        )

    }
}

    export default Stocks;