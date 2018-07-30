import React from "react";
import Navbar from "./components/Navbar.js";

const App = () => <Navbar />;
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import Bill from "./components/Bill.js";
import Payment from "./components/Payment.js";


class App extends React.Component {
  state= {
        food: [],
        total: 0,
        people: 1,
        item: 0,
        splitAmount: 0,
        subTotal: 0,
        clicked: false
  }

  setPeople = (people) => {
    this.setState({
      people: people
    })
  }


  
  render() {
    console.log(this.state)
    return (
        <Router>
    <div>
      <Header/>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
          <Route exact path="/bill" render={() => <Bill setPeople={this.setPeople} />}/>
          <Route exact path="/payment" render={() => <Payment people={this.state.people}/>}/>
    </div>
  </Router>
    )
  }

};

export default App;
