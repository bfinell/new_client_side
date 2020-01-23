import React, { Component } from 'react';
import AddPortfolio from './components/AddPortfolio';
import uuid from 'uuid';

import './App.css';
import PortfolioItem from "./components/PortfolioItem";

class App extends Component {
  constructor(){
    super();
    this.state={
      portfolios:[]
    }}

    getPortfolios(){
      this.setState({portfolios:[
          {
            id:uuid.v4(),
            name:"tes1",
            amount:1
          }
        ]});
    }

  componentWillMount() {
      this.getPortfolios();
  }
  handleAddPortfolio(portfolio){
    let portfolios=this.state.portfolios;
    portfolios.push(portfolio);
    this.setState({portfolios:portfolios});
    this.setState({amount:this.state.amount+1});
  }
  handleDeletePortfolio = (id) => {
    let portfolios = this.state.portfolios;
    let index = portfolios.findIndex(x => x.id === id);
    portfolios.splice(index,1);
    this.setState({portfolios:portfolios});
    this.setState({amount: this.state.amount -1});
  };

  render() {
    console.log(this.state.portfolios);
    return (
      <div className="App">
          <AddPortfolio addPortfolio={this.handleAddPortfolio.bind(this)}/>
        {this.state.portfolios.map((portfolio) => (
        <PortfolioItem key={portfolio.id} portfolio={portfolio} onDelete={this.handleDeletePortfolio}/>
        ))}
      </div>
    );
  }
}

export default App;
