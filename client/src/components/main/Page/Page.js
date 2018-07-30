import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact.js";
import Current from "./pages/Current/Current.js";
import Help from "./pages/Help/Help.js";
import History from "./pages/History/History.js";
import Payment from "./Payment";
import QR from "./pages/QR/QR.js";
import Settings from "./pages/Settings/Settings.js";
import Bill from "./Bill"
import Contact from "../../pages/Contact/Contact.js";
import Current from "../../pages/Current/Current.js";
import Help from "../../pages/Help/Help.js";
import History from "../../pages/History/History.js";
import Payment from "../../pages/Payment/Payment.js";
import QR from "../../pages/QR/QR.js";
import Settings from "../../pages/Settings/Settings.js";



class Page extends React.Component {
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
// const Page = () => (
    <Router>
        <div className="container">
            <Route exact path="/contact" component={Contact} />
            {/* <Route exact path="/current" component={Current} /> */}
            <Route exact path="/help" component={Help} />
            <Route exact path="/history" component={History} />
            <Route exact path="/qr" component={QR} />
            <Route exact path="/settings" component={Settings} />
                <Route exact path="/bill" render={() => <Bill setPeople={this.setPeople} />}/>
                <Route exact path="/payment" render={() => <Payment people={this.state.people}/>}/>
        </div>
    </Router> 
// );
    )
  }

};


export default Page;
