import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Menu.css';

const Menu = () => (
    <Card>
        <CardContent id="btn-card">
        <img src={require("../../../images/Logo.png")} width={"auto"} height={100} alt="Login-Logo" />
      <br />
        <Button variant="contained" color="primary" id="login-btn" classNames="btn-click" component="a" href="./login">
          Login
        </Button>
        <Button variant="contained" color="primary" id="signup-btn" classNames="btn-click" component="a" href="./signup">
          Sign Up
        </Button>
      <br />
        <Typography component="p">
          You get a tab! And you get a tab! And YOU get a tab!
        </Typography>
        </CardContent>
    </Card>
);

export default Menu;
