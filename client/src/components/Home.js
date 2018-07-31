import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hometab from "./main/Hometab/Hometab.js";
import Menu from "./main/Menu/Menu.js";
import Login from "./pages/Login/Login.js";
import Signup from "./pages/Signup/Signup.js";

const Home = () => (
  <div>
    <Hometab />
    <Router>
      <div className="container">
        <Route exact path="/" component={Menu} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </div>
    </Router>
  </div>
);

export default Home;