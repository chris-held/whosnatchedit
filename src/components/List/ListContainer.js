import React, { Component } from "react";
import List from "./List";

class ListContainer extends Component {
  render() {
    const raw = window.localStorage.getItem("items");
    const items = raw && raw.length ? JSON.parse(raw) : [];
    return <List items={items} />;
  }
}

export default ListContainer;
