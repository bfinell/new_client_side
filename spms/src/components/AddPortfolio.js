import React ,{Component} from 'react';
import uuid from 'uuid';

class AddPortfolio extends Component{
    constructor(props) {
        super(props);
        this.state={
            newPortfolio:{}
        }
    }
    handleSubmit(e){
        if (this.refs.name.value===''){
            alert('Name is required')
        }
        else if (this.props.amount > 10){
            alert("you cannot create over 10 portofolios")
        }
        else{
            this.setState({newPortfolio:{
                //    amount:this.props.amount+1,
                    id: uuid.v4(),
                    name: this.refs.name.value
                }},function (){
                this.props.addPortfolio(this.state.newPortfolio);
            });
        }
        e.preventDefault();
    }
    render() {
        return(
        <div className={"addPortfolio"}>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Name</label>
                <input type={"text"} ref={"name"}/>
                <input type={"submit"} value={"Add Portfolio"}/>
            </form>
        </div>
        )
    }
}

export default AddPortfolio;