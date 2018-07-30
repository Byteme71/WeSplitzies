import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends React.Component {
    state = {
        email: "",
        password: ""
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleLogIn = (event) => {
        event.preventDefault();

        let existingUser = {
            email: this.state.email,
            password: this.state.password
        };

        console.log("CURRENT USER: ", existingUser);

        axios.post('/login', existingUser).then(response => {
            if (response.data.code === 504) {
                alert("Please revise your credentials.");;
                window.location.href='/login'
            } else {
                alert("You have been logged in!");
                window.location.href='/';
            }
        });
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleLogIn}>
                <div className="form-group">
                    <TextField value={this.state.value} name="email" onChange={this.handleInputChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></TextField>
                </div>
                <div className="form-group">
                    <TextField value={this.state.value} name="password" onChange={this.handleInputChange} type="password" className="form-control" id="password" placeholder="Password"></TextField>
                </div>
                <div className="form-group">
                    <Button type="submit" className="btn btn-primary">Log in</Button>
                </div>
            </form>
        )
    }
}

export default Login;