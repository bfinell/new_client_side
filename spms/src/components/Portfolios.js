import React, {Component} from 'react';
import PortfolioItems from './PortfolioItems';

    class Portfolios extends Component{
        /*      constructor(props) {
                 super(props);
                this.state= {
                     portfolios: props.portfolios
             }
          }*/

            deletePortfolio(id){
                this.props.onDelete(id);
            }

        render() {
            let portfolioItems;
            if(this.props.portfolios) {
                console.log("hej")

                portfolioItems = this.props.portfolios.map(portfolio => {
                    //       console.log(portfolio);
                    return (
                        <PortfolioItems onDelete={this.deletePortfolio.bind(this)}
                                        key={portfolio.name} portfolio={portfolio}/>
                    );
                });
            }
            return(
            <div className={"Portfolios"}>
                <h3>My Portfolios</h3>
                {portfolioItems}
            </div>
             );

        }
    }

    export default Portfolios;