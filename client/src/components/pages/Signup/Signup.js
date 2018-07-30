import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { AllStates } from './States.js';

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

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
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
                    <TextField value={this.state.value} name="fullName" onChange={this.handleInputChange} type="text" className="form-control" id="fullName" placeholder="Full name"></TextField>
                </div>
                <div className="form-group">
                    <TextField value={this.state.value} name="email" onChange={this.handleInputChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></TextField>
                </div>
                <div className="form-group">
                    <TextField value={this.state.value} name="password" onChange={this.handleInputChange} type="password" className="form-control" id="password" placeholder="Password"></TextField>
                </div>
                <div className="form-group">
                    <TextField value={this.state.value} name="address" onChange={this.handleInputChange} type="text" className="form-control" id="address" placeholder="Street address"></TextField>
                </div>
                <div className="form-group">
                    <TextField value={this.state.value} name="city" onChange={this.handleInputChange} type="text" className="form-control" id="city" placeholder="City"></TextField>
                </div>
                <div className="form-group">
                    <TextField value={this.state.value} name="zip" onChange={this.handleInputChange} type="number" className="form-control" id="zip" placeholder="ZIP"></TextField>
                </div>
                <div>
                    <TextField id="select-state" select label="Select" value={this.state.states} onChange={this.handleChange('states')} helperText="Please select your state" margin="normal" >
                        {AllStates.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className="form-group">
                    <Button type="submit" className="btn btn-primary">Submit</Button>
                </div>
            </form>
        )
    }
}

export default Signup;