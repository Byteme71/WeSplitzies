import React from "react";
import "./main/Redirect/Redirect.js";
import Navbar from "./Navbar.js";

class Auth extends React.Component {  
    componentDidMount() {
      const { isLoggedIn, redirectToLogin } = this.props;
      if (!isLoggedIn) {
        redirectToLogin();
      }
    }
  
    render() {
      const { isLoggedIn, sidebar } = this.props;
      if (isLoggedIn) {
        return (
            <Navbar />
        );
      }
      return null;
    }
}

export default Auth;