import React from 'react';
import axios from "axios";
// import Bill from './Bill';

class Payment extends React.Component {

    state = {
        food: [],
        total: 0
    }


    componentDidMount() { 
     
        axios.get(`/api/payment/1`).then(response => {
            console.log("aree these the resposnes form the payment page?! ",response.data)
            
                this.setState({
                    food: response.data
                }, () => {
                    console.log("we need just the claimed items to appear on the payment page!", this.state.food)
                    })
            
             this.getTotalPersonOne();
        })
       
    }


    getTotalPersonOne = () => {
        this.state.food.map(item => {
            let qty = item.qty;
            let price = item.price;
            let totalPrice = qty * price

            console.log(totalPrice)


            this.setState({
                total: this.state.total += totalPrice
            }, () => {
                console.log("is this the total for the person 1 on the payment page?!?!?!!?", this.state.total)
            })

        })
    }


    render() {
        console.log("this is on the payment page ", this.props)
        console.log("is this the updated foooooooooooooooooood",this.state.food)
        return (
            <div className="container">
                <h1>Your total to pay is: ${this.props.people}</h1>
                <h2>Items Claimed by Person 1:</h2>
                {this.state.food.map(item => {
                    return (
                    <div className="text-center" key={item.id}>
                        <ul>
                            <li>{item.items}</li>
                        </ul>
                    </div>
                    )
                })}
                
               <h2> Total for person 1 = ${this.state.total} </h2>
                
                <div className="creditCardForm">
                    <div className="heading">
                        <h4>Enter Card Info</h4>
                    </div>
                    <div className="payment">
                        <form>
                            <div className="form-group owner">
                                <label htmlFor="owner">Owner</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group CVV">
                                <label htmlFor="cvv">CVV</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cardNumber">Card Number</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Expiration Date</label>
                                <select>
                                    <option value="01">January</option>
                                    <option value="02">February </option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                <select>
                                    <option value="18"> 2018</option>
                                    <option value="19"> 2019</option>
                                    <option value="20"> 2020</option>
                                    <option value="21"> 2021</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button onClick={()=>{ alert('Paid!'); }} type="submit" className="btn btn-default">Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>    
            </div>
        )
    }
}

export default Payment;