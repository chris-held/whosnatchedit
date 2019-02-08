import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ListContainer from "./components/List/ListContainer";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <ListContainer />
      </div>
    );
  }
}

export default App;
