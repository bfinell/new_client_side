import React, {Component} from 'react';
import Stocks from './Stocks';
import AddStock from './AddStock';



class PortfolioItems extends Component{
    constructor() {
        super();
        this.state = {
            stocks: [],
            amount: 0,
            currency: "usd",
        }
    }
    handleAddStocks(stock, amount){
        let stocks = this.state.stocks;
        stocks.push(stock);
        this.setState({stocks:stocks, amount: parseFloat(amount).toFixed(2)});
    }

    deletePortfolioItems(id){
        this.props.onDelete(id);
    }
    deleteStocks(id){
        this.props.onDelete(id);
    }
    selectedStock(id) {
        let selectedStocks = this.state.selectedStocks;
        selectedStocks.push(id);
        this.setState({selectedStocks:selectedStocks})
    }


    render() {
        return(
            <div>
            <li className={"Portfolio"}>
                <strong>{this.props.portfolio.name}</strong><a href={'#'} onClick={this.deletePortfolioItems.bind(this, this.props.portfolio.id)}>x</a>
                <AddStock addStock={this.handleAddStocks.bind(this)} id={this.props.portfolio.id} amount={this.props.amount}/>
                <Stocks stocks={this.state.stocks} name={this.props.portfolio.name} stockSelect={this.selectedStock.bind(this)}/>
            </li>
            </div>
          );
    }

}    export default PortfolioItems;
