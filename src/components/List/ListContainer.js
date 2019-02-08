import React, { Component } from "react";
import List from "./List";

class ListContainer extends Component {
  render() {
    const items = [
      {
        who: "Irene",
        what: "Car Seat",
        id: 1
      },
      {
        who: "Katie",
        what: "Giraffe Costume",
        id: 2
      },
      {
        who: "Brian",
        what: "Sawzal",
        id: 3
      }
    ];
    return <List items={items} />;
  }
}

export default ListContainer;
