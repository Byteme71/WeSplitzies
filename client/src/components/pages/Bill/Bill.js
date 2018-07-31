import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Modal from './Modal';

class Bill extends React.Component {
    state = {
        food: [],
        total: 0,
        item: 0,
        splitAmount: 0,
        subTotal: 0,
        show: false
    };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
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

        let splittingTotal = this.state.total;
        let splitEqual = splittingTotal / people;

        console.log("this.state.total: ", splittingTotal);
        console.log("people: ", people);
        console.log("splitEqual: ", splitEqual);

        this.setState({ 
            people: people,
            splitAmount: splitEqual
        });

        this.props.setPeople(people)
    }

    claimItem = (price, quantity, id) => {

        let party = this.state.people;
        let subTotal = price * quantity;
        let subTotalTwo = subTotal / party;

        let foods = this.state.food.filter(item => item.id !== id);

        console.log("this.state.people: ", party);



        this.setState({
            subTotal: this.state.subTotal += subTotalTwo,
            clicked: true,
            food: foods
        })

    };

    handleHowMany = (item) => {
        console.log("CURRENT ITEMS: ", item);
    }

    peopleInParty = (people) => {
        var peopleInParty = [];

        for (let i = 0; i < people; i++) {
            peopleInParty.push(
                <div className="text-center" key={i}>
                   <Link to="/payment" className="btn btn-outline-primary btn-sm"  onClick={(e) => this.peopleInParty(this.state.peopleInParty)}>
                        Person {i + 1}: ${this.state.subTotal}
                    </Link>
                </div>);
        }

        return peopleInParty;
    }

    splitEachItem = (price, quantity, id) => {
        
        // console.log("waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaah", this.state.people)
        let party = this.state.people
        // console.log("for splitting each individual item", price)
        // console.log("is this the qty for each item for splitting", quantity)
        let subTotal = price * quantity
        let subTotalTwo = subTotal/party
        // console.log("we have to multiple the qty by the price", subTotal)
        // console.log("is this the split amnt for the individual person", subTotalTwo)
  

        let foods = this.state.food.filter(item => item.id !== id);

        console.log("this.state.food: ", this.state.food);
        console.log("this is fooooooooooooooooooooods ", foods);

        this.setState({
            subTotal: this.state.subTotal += subTotalTwo,
            clicked: true,
            food: foods
        })
    }

    render() {
        console.log("this is coming from the bill page", this.state)
        // console.log("fbDBDFBAEBer", this.state.total)
        // console.log("is this the amount of people we need for the splitting of the bill", this.state.people)
        return (
            <div>
                <div className="container">
                    <div className="form-group">
                        <label htmlFor="sel1">Select amount of people on the bill:</label>
                        <select className="form-control" id="people" onChange={this.handleInputChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="card">
                    <div className="card-header text-center">*Restaurant Name Placeholder* Bill
                </div>
                {
                    this.state.food.filter(item => {
                        <Modal show={this.state.show} handleClose={this.hideModal}>
                            <h1>How many would you like to claim?</h1>
                            <select onChange={this.handleInputChange}>
                                {this.handleHowMany(item)}
                            </select>
                            <button onClick={() => this.claimItem}>OK</button>
                        </Modal>
                    })
                }

                {
                    this.state.food.map(item => {
                        return (
                            <div>
                                <div key={item.id}>
                                    <div className="card-body">
                                        <p>
                                            <span>Qty: {item.qty} </span>
                                            Item: {item.items}
                                            <span>
                                                Price: ${item.price} </span>
                                        </p>
                                        <button className="btn btn-outline-primary btn-sm" onClick={() => this.splitEachItem(item.price, item.qty,item.id)}>
                                            Split Equally
                                            </button>
                                        <button className="btn btn-outline-primary btn-sm" onClick={this.showModal}>
                                            {/*() => this.claimItem(item.price, item.qty, item.id)}*/}
                                            Claim Item
                                            </button>
                                    </div>
                                </div>
                            </div>
                        );            
                    })
                }
        
                    <form className="split">
                        <div className="text-center">Total Price : {this.state.total}
                            <Link to="/payment" className="btn btn-outline-primary btn-sm" onClick={(e) => this.splitBillEquall(this.state.splitAmount)}>Split Equally</Link> 
                        </div> 
                    </form> 
                </div>
            </div>

            <br />

                {
                    this.peopleInParty(this.state.people)
                }

            <br />

            </div>
        )
    }
}

export default Bill;
