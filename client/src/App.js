import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header.js";

const App = () => (
  <Router>
    <div>
      <Header/>
      {/* <Route exact path="/" component={Home} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/product/:id" component={Product} /> */}
    </div>
  </Router>
);

export default App;
