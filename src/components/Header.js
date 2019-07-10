import React from "react";
import logo from "../logo.svg";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">What's going on, bud!</h1>
        <p>
          {this.props.username} is {this.props.age} years old!
        </p>
      </header>
    );
  }
}

export default Header;
