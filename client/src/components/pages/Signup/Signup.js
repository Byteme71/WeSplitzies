import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { AllStates } from './States.js';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            password: "",
            address: "",
            city: "",
            state: "",
            zip: 0,
            formErrors: {
                fullName: '',
                email: '',
                password: '',
                zip: 0
            },
            fullNameValid: false,
            emailValid: false,
            passwordValid: false,
            zipValid: false
        };
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        }, () => { this.validateField(name, value) });
    };

    validateField = (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors;
        let fullNameValid = this.state.fullNameValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let zipValid = this.state.zip;

        switch (fieldName) {
            case 'fullName':
                fullNameValid = value.match(/^[a-z ,.'-]+$/i);
                fieldValidationErrors.fullName = fullNameValid ? '' : ' needs your full name!';
                break;
            case 'email':
                emailValid = value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                fieldValidationErrors.email = emailValid ? '' : ' is an invalid email!';
                break;
            case 'password':
                passwordValid = value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{4,}$/);
                fieldValidationErrors.password = passwordValid ? '' : ' does not meet the minimum requirements!';
                break;
            case 'zip':
                zipValid = value.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/);
                fieldValidationErrors.zip = zipValid ? '' : ' is an invalid ZIP code!';
                break;
            default:
                break;
        };

        this.setState({
            formErrors: fieldValidationErrors,
            fullNameValid: fullNameValid,
            emailValid: emailValid,
            passwordValid: passwordValid,
            zipValid: zipValid
        }, this.validateForm);
    };

    validateForm = () => {
        this.setState({
            formValid: this.state.fullNameValid && this.state.emailValid && this.state.passwordValid && this.state.zipValid
        });
    };

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };

    errorClass = (error) => {
        return (error.length === 0 ? '' : 'has-error');
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
        };

        console.log("NEW USER: ", newUser);

        axios.post('/signup', newUser).then(response => {
            if (response.data.code === 304) {
                window.location.href = '/signup';
            } else {
                window.location.href = '/qr';
            }
        }).catch(error => {
            throw error;
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
                <br />
            </form>
        );
    };
};

export default Signup;