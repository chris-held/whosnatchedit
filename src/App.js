import React from "react";
import "./App.css";
import ListContainer from "./components/List/ListContainer";
import Header from "./components/Header/Header";

const App = () => (
  <div className="main">
    <Header />
    <ListContainer />
  </div>
);

export default App;
