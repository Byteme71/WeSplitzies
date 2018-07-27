import React from 'react';
// import axios from "axios";
import Bill from './Bill';

class Payment extends React.Component {
    // state = {};

//     componentDidMount() {}

//     //have to somehow figure out how to have multiple people on here is it socket ?

//     handleInputChange = () => {}

    render() {
        console.log(this.props)

        return (
            <div className="container">
                {/* <h1 className="display-1">
                    PAY YO BILL
                </h1>
                <div>
                    <Bill ={this.props.splitAmount} />
                </div> */}
                number is {this.props.people}
            </div>
        )
    }
}

export default Payment;