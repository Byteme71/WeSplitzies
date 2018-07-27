import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      {" "}
      <Link to="/signup">Sign-Up</Link>
      {" "}
      <Link to="/login">Log-in</Link>
      {" "}
      <Link to="/bill">Bill</Link>
      {" "}
      <Link to="/payment">Payment</Link>
    </header>
  );
};

export default Header;