import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";

const App = () => (
  <Router>
    <div>
      <Header/>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>
);

export default App;
