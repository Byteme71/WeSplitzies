import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact.js";
import Current from "./pages/Current/Current.js";
import Help from "./pages/Help/Help.js";
import History from "./pages/History/History.js";
import Payment from "./pages/Payment/Payment.js";
import QR from "./pages/QR/QR.js";
import Settings from "./pages/Settings/Settings.js";

const Page = () => (
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

export default Page;
