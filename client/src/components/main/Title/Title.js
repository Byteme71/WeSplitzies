import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from "../../pages/Account/index.js";
import Bill from "../../pages/Bill/index.js";
import Help from "../../pages/Help/index.js";
import History from "../../pages/History/index.js";
import Payment from "../../pages/Payment/index.js";
import QR from "../../pages/QR/index.js";
import Settings from "../../pages/Settings/index.js";
import Login from "../../pages/Login/index.js";
import Signup from "../../pages/Signup/index.js";

const Title = () => (
    <Router>
        <div className="container">
            <Route exact path="/account" component={Account} />
            <Route exact path="/bill" component={Bill} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/history" component={History} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/qr" component={QR} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
        </div>
    </Router> 
);

export default Title;
