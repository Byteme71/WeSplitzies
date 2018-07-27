import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
    state = {
        fullName: "",
        email: "",
        password: "",
        address: "",
        city: "",
        state: "",
        zip: 0,
        card: 0,
        month: 0,
        year: 0,
        cvv: 0
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleSignUp = (event) => {
        event.preventDefault();

        let newUser = {
            fullName: this.state.fullName,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            card: this.state.card,
            month: this.state.month,
            year: this.state.year,
            cvv: this.state.cvv
        }

        console.log("NEW USER: ", newUser);

        axios.post('/signup', newUser).then(response => {
            if (response.data.code === 304) {
                alert("An account already exists with that email address.");
                window.location.href='/signup';
            } else {
                alert("Account has been created. Welcome!");
                window.location.href = '/';
            }
        }).catch(error => {
            console.log("POST ERROR: ", error);
        });
        
    };


    render() {
        return (
            <form className="form" onSubmit={this.handleSignUp}>
                <div className="form-group">
                    <input value={this.state.value} name="fullName" onChange={this.handleInputChange} type="text" className="form-control" id="fullName" placeholder="Full name"></input>
                </div>
                <div className="form-group">
                    <input value={this.state.value} name="email" onChange={this.handleInputChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
                </div>
                <div className="form-group">
                    <input value={this.state.value} name="password" onChange={this.handleInputChange} type="password" className="form-control" id="password" placeholder="Password"></input>
                </div>
                <div className="form-group">
                    <input value={this.state.value} name="address" onChange={this.handleInputChange} type="text" className="form-control" id="address" placeholder="Street address"></input>
                </div>
                <div className="form-group">
                    <input value={this.state.value} name="city" onChange={this.handleInputChange} type="text" className="form-control" id="city" placeholder="City"></input>
                </div>
                <div className="form-group">
                    <select value={this.state.state} name="state" onChange={this.handleInputChange} className="form-control" id="state">
                        <option select="true" disabled="disabled">State:</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
                <div className="form-group">
                    <input value={this.state.value} name="zip" onChange={this.handleInputChange} type="number" className="form-control" id="zip" placeholder="ZIP"></input>
                </div>
                <div className="form-group">
                    <input value={this.state.value} name="card" onChange={this.handleInputChange} type="text" className="form-control" id="card" placeholder="Debit/Credit Card"></input>
                </div>
                <div className="form-group">
                    <input value={this.state.value} name="month" onChange={this.handleInputChange} type="text" className="form-control" id="month" placeholder="Exp. Month"></input>
                </div>
                <div className="form-group">
                    <input value={this.state.value} name="year" onChange={this.handleInputChange} type="text" className="form-control" id="year" placeholder="Exp. Year"></input>
                </div>
                <div className="form-group">
                    <input value={this.state.value} name="cvv" onChange={this.handleInputChange} type="text" className="form-control" id="cvv" placeholder="CVV"></input>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}

export default Signup;