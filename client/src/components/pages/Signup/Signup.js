import React from 'react';
import axios from 'axios';

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
                window.location.href = '/';
            }
        }).catch(error => {
            throw error;
        });

    };


    render() {
        return (
            <form className="form" onSubmit={this.handleSignUp}>
                <div className={`form-group ${this.errorClass(this.state.formErrors.fullName)}`}>
                    <input value={this.state.value} name="fullName" onChange={this.handleInputChange} type="text" className="form-control" placeholder="Full name"></input>
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                    <input value={this.state.value} name="email" onChange={this.handleInputChange} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"></input>
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                    <input value={this.state.value} name="password" onChange={this.handleInputChange} type="password" className="form-control" placeholder="Password"></input>
                </div>
                <div className="form-group">
                    <input value={this.state.value} name="address" onChange={this.handleInputChange} type="text" className="form-control" placeholder="Street address"></input>
                </div>
                <div className="form-group">
                    <input value={this.state.value} name="city" onChange={this.handleInputChange} type="text" className="form-control" placeholder="City"></input>
                </div>
                <div className="form-group">
                    <select value={this.state.state} name="state" onChange={this.handleInputChange} className="form-control">
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
                <div className={`form-group ${this.errorClass(this.state.formErrors.zip)}`}>
                    <input value={this.state.value} name="zip" onChange={this.handleInputChange} type="text" className="form-control" placeholder="ZIP code"></input>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Submit</button>
                </div>
                <br />
            </form>
        );
    };
};

export default Signup;