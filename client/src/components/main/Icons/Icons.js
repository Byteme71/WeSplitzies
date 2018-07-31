import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Receipt from '@material-ui/icons/Receipt';
import QR from '@material-ui/icons/CropFree';
import History from '@material-ui/icons/Schedule';
import Payment from '@material-ui/icons/CreditCard';
import Settings from '@material-ui/icons/BrightnessLow';
import Contact from '@material-ui/icons/AccountCircle';
import Help from '@material-ui/icons/HelpOutline';
import Logout from '@material-ui/icons/ExitToApp';
import axios from 'axios';


export const TopItems = (
  <div>
    <ListItem button component="a" href="./bill">
      <ListItemIcon>
        <Receipt />
      </ListItemIcon>
      <ListItemText primary="Bill" />
    </ListItem>

    <ListItem button component="a" href="./qr">
      <ListItemIcon>
        <QR />
      </ListItemIcon>
      <ListItemText primary="QR Scan" />
    </ListItem>

    <ListItem button component="a" href="./history">
      <ListItemIcon>
        <History />
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItem>

    <ListItem button component="a" href="./payment">
      <ListItemIcon>
        <Payment />
      </ListItemIcon>
      <ListItemText primary="Payment" />
    </ListItem>

    <ListItem button component="a" href="./settings">
      <ListItemIcon>
        <Settings />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);

export class BottomItems extends React.component {
  constructor(props) {
    super(props);
    
    this.handleLogOut = this.handleLogOut.bind(this)
  }
  
  handleLogOut = () => {
    axios.get('/logout').then(response => {
      console.log(response);
      if (response.data.code === 707) {
        alert("You are logged in.");
        window.location.href = '/';
      } else if (response.data === "") {
        alert("You are not logged in!");
        window.location.href = '/login';
      } else {
        alert("You have been logged out.");
        window.location.href = '/login';
      };
    });
  };

  render () {
  return (
  <div>
    <ListItem button component="a" href="./contact">
      <ListItemIcon>
        <Contact />
      </ListItemIcon>
      <ListItemText primary="Contact" />
    </ListItem>

    <ListItem button component="a" href="./help">
      <ListItemIcon>
        <Help />
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItem>

    <ListItem button component="a" href="./logout">
      <ListItemIcon>
        <Logout onClick={this.handleLogOut}/>
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);
  }
}