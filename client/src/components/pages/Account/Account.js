import React from 'react';
import Menu from '../../main/Menu/Menu.js';
import axios from "axios";

class Account extends React.Component {

  componentDidMount = () => {
    axios.get('/api/account').then(response => {
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        <Menu />
      </div>
    )
  }
}

export default Account;