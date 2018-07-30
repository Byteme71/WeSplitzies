import React from 'react';
// import axios from "axios";
// import Bill from './Bill';

class Payment extends React.Component {

    render() {
        console.log("this is on the payment page ", this.props)

        return (
            <div className="container">
                <h1>Your total to pay is: ${this.props.people}</h1>
                                
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