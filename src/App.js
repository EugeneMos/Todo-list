import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MemeHeader from "./components/MemeHeader.js";
import MemeGenerator from "./components/MemeGenerator.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MemeGenerator />
        <MemeHeader />
        />{" "}
      </div>
    );
  }
}

export default App;
