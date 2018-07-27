import React from 'react';
import axios from "axios";


class Bill extends React.Component {
state = {
    food: []
};

componentDidMount(){
    
    axios.get(`/api/bills/1`).then(response => {
        // console.log("what is thisssssssss",response)
        // console.log("what is this also tell us", response.data)
        // console.log("is this the billllllllsssssss", response.data[0].Bills)

        this.setState({
            food: response.data[0].Bills
        }, () => {
            console.log("is this all of my items from the bill or is it not??!!?!?!",this.state.food)
            

            this.state.food.map(item =>{

                console.log("is this the price?",item.price)

                console.log("this will be the qty", item.qty)
                
                var price = item.price;
                var totalPrice = 0;
                totalPrice += price

                console.log("is this the total price of all the items on my bill??????", totalPrice)
            })
            // console.log("is this the price?", this.state.food)
        })
    })
}


//have to somehow figure out how to have multiple people on here is it socket ? 



splitBillEqually = () => {
    //the qty and the price need to be calculated to get the total and then the total needs to be split equally based on how many people are on the bill
}

claimItem = () => {
    //move the item to the person that chose it 
}

    render() {
        console.log("hi")
        return (
        <div className="container">
        <div className="card">
        <div className="card-header text-center">*Restaurant Name Placeholder* Bill </div>
            {
                this.state.food.map((item) => {
                    return (
                        <div key={item.id}>
                        
                        <div className="card-body">
                    <p><span>Qty: {item.qty}</span>     Item: {item.items} <span> Price: ${item.price}</span></p>
                
                <button 
                    className="btn btn-outline-primary btn-sm" 
                    // onClick={this.buyOne}
                    // disabled={this.state.item.quantity <= 0}
                >
                    Split Equally
                </button>
                <button 
                    className="btn btn-outline-primary btn-sm" 
                    // onClick={this.buyOne}
                    // disabled={this.state.item.quantity <= 0}
                >
                    Claim Item
                </button>
                </div>
                </div>
                    );
                })
            }
        </div>
      </div>
        )
    }
}


export default Bill;