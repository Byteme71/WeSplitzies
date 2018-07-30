import React from 'react';
// import axios from "axios";


class People extends React.Component {
state = {
   people: 0
};

handleInputChange = (event) => {
    console.log(event.target.value)

    this.setState({
        people: event.target.value
    })
}


    render() {
        console.log("hi")

        return (
            <div>
            <div className="form-group">
                     <label htmlFor="sel1">Select amount of people on the bill:</label>
                     <select className="form-control" id="people"onChange={this.handleInputChange}>
                     <option value= "1">1</option>
                     <option value= "2">2</option>
                    <option value= "3">3</option>
                     <option value= "4">4</option>
                    </select>
            <button /*onClick= {this.numberOfParty}*/>
                submit
            </button>
             </div>
            </div>
        )
    }
}


export default People;