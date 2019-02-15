import React from "react";
import List from "./List";

const ListContainer = () => {
  const raw = window.localStorage.getItem("items");
  const items = raw && raw.length ? JSON.parse(raw) : [];
  return <List items={items} />;
};

export default ListContainer;
