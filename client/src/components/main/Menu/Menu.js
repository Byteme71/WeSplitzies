import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Menu = () => (
    <Card>
        <CardContent>
        <Button variant="contained" color="primary" classNames="btn-click login-btn" component="a" href="./login">
          Login
        </Button>
        <Button variant="contained" color="primary" classNames="btn-click signup-btn" component="a" href="./signup">
          Sign Up
        </Button>
          <Typography component="p">
            Text Placeholder Text
          </Typography>
        </CardContent>
    </Card>
);

export default Menu;
