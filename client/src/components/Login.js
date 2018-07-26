import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="email" placeholder="Password"></input>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}

export default Login;