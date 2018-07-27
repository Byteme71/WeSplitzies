import React from 'react';
import axios from "axios";

class Bill extends React.Component {
    state = {
        food: [],
        total: 0,
        people: 1,
        item: 0
    };

    componentDidMount() {

        axios.get(`/api/bills/1`).then(response => {

                this.setState({
                    food: response.data[0].Bills
                }, () => {
                    console.log("is this all of my items from the bill or is it not??!!?!?!", this.state.food)

                })

                this.totalPrice();

            })
    }

    //have to somehow figure out how to have multiple people on here is it socket ?

    totalPrice = () => {

        this.state.food.map((item) => {

                console.log("is this the price?", item.price)

                console.log("this will be the qty", item.qty)

                let qty = item.qty;
                let price = item.price;
                let totalPrice = 0;
                totalPrice = price * qty

                this.setState({
                    total: this.state.total += totalPrice
                }, () => {
                    console.log("is this the total price of all the items on my bill??????", this.state.total)
                })

            })
    }

    handleInputChange = (event) => {
        console.log(event.target.value)

        // this.setState({people: event.target.value})

        let people = event.target.value

        this.splitBillEqually(people);

    }

    splitBillEqually = (people) => {
        console.log("we need the total to divide it equally", this.state.total)
        let splittingTotal = this.state.total
        console.log("splitBillEqually (PEOPLE): ", people);

        this.setState({people: people})

        //total/people
        let splitEqual = splittingTotal / people

        console.log("blaaaaaaaaaaaaaaaaaaaaa", splitEqual)
        
        // the qty and the price need to be calculated to get the total and then the
        // total needs to be split equally based on how many people are on the bill
    }

    claimItem = () => {
        //move the item to the person that chose it
    }

    splitEachItem = (price, quantity) => {
        
        console.log("am i able to grab the amount of people here",this.state.people)
        console.log("for splitting each individual item", price)
        console.log("is this the qty for each item for splitting", quantity)
        let subTotal = price * quantity
        console.log("we have to multiple the qty by the price", subTotal)
    }

    render() {
        console.log(this.state)
        // console.log("fbDBDFBAEBer", this.state.total)
        // console.log("is this the amount of people we need for the splitting of the bill", this.state.people)
        return (
            <div className="container">
            <div className="form-group">
                <label htmlFor="sel1">Select amount of people on the bill:</label>
                <select className="form-control" id="people" onChange={this.handleInputChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div> < div className = "card" > <div className="card-header text-center">*Restaurant Name Placeholder* Bill
            </div>
            {
            this.state.food.map((item) => {
                    return (
                        <div key={item.id}>

                            <div className="card-body">
                                <p>
                                    <span>Qty: {item.qty}</span>
                                    Item: {item.items}
                                    <span>
                                        Price: ${item.price}</span>
                                </p>

                                <button className="btn btn-outline-primary btn-sm" onClick={()=>this.splitEachItem(item.price, item.qty)}>
                                    Split Equally
                                </button>
                                <button className="btn btn-outline-primary btn-sm" /*onClick={this.buyOne} disabled={this.state.item.quantity <= 0}*/>
                                    Claim Item
                                </button>
                            </div>
                        </div>
                    );
                })
        } 
        <form className = "split" > <div className = "text-center"> Total Price : {
            this.state.total
        } <button className = "btn btn-outline-primary btn-sm" onClick= {()=>this.splitBillEqually}> Split Equally </button>
        </div> 
        </form> 
        </div>
      </div>)
    }
}

export default Bill;