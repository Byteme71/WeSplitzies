import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact/index.js";
import Current from "./pages/Current/index.js";
import Help from "./pages/Help/index.js";
import History from "./pages/History/index.js";
import Payment from "./pages/Payment/index.js";
import QR from "./pages/QR/index.js";
import Settings from "./pages/Settings/index.js";

const Title = () => (
    <Router>
        <div className="container">
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/current" component={Current} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/history" component={History} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/qr" component={QR} />
            <Route exact path="/settings" component={Settings} />
        </div>
    </Router> 
);

export default Title;
