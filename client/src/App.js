// import React from "react";

// import Navbar from "./components/Navbar.js";
// const App = () => <Navbar />;

// // const App = () => <Home />;

// export default App;


import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router'
import Home from "./components/Home.js";
import Auth from "./components/Auth.js";

class App extends React.Component {  
    render() {
        return(
            <Router>
                <Switch>
                    <Route path="/" component={Home} />
                    <Auth />
                </Switch>
            </Router>
        )
    }
}

export default App;