import React,{Component} from 'react';
import uuid from 'uuid';


class AddStock extends Component {
    constructor() {
        super();
        this.state = {
            newStock: {},
            totalValue: 0,
            currency: "usd"
        }
    }

    getStocks(e){

        let total;
        let price;

        var finalUrl ='https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol='+this.refs.name.value+'&apikey=KV4MHKHP1XKOM8MJ';

        console.log(finalUrl);
        fetch(finalUrl)
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                if ('Error Message' in data) {
                    alert('Stock not found');
                    return
                }
                price = data["Global Quote"]["05. price"];
                console.log(price)
                total = price*this.refs.quantity.value;

                price = (parseFloat(price).toFixed(2))+"$";

                this.setState({ newStocks:{
                        id:uuid.v4(),
                        symbol:this.refs.symbol.value,
                        quantity: this.refs.quantity.value,
                        price:price,
                        total:total,
                    }},
                    function() {
                         this.props.addStock(this.state.newStocks, total);

                    });
                });


                e.preventDefault();
            }
    render() {

        return(
            <div className={"addStock"} id={"addStock"+this.props.id}>
                <h3> Add Stock </h3>
                <form onSubmit={this.getStocks.bind(this)}>
                    <div>
                    <label>Stock Symbol</label>
                    <input type={"text"} ref={"symbol"}/>
                    <br/>
                    <label>Amount</label>
                    <input type={"number"} ref={"quantity"}/>
                    <br/>
                    <input type={"submit"} value={"Add New Stock"}/>
                    </div>
                </form>
            </div>


        );
    }


}

export default AddStock;
