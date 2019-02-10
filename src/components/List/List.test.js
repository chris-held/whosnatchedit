import React from "react";
import List from "./List";
import { render, cleanup, fireEvent } from "react-testing-library";
const items = [
  {
    who: "Foo",
    what: "Bar",
    id: 1
  }
];

describe("<List/>", () => {
  afterEach(cleanup);

  it("should render the initial list", () => {
    const { getAllByTestId } = render(<List items={items} />);
    expect(getAllByTestId("ListItem")).toHaveLength(1);
  });

  it("should add a list item", () => {
    const { getAllByTestId, getByTestId } = render(<List items={items} />);
    fireEvent.click(getByTestId("List.Add"));
    expect(getAllByTestId("ListItem")).toHaveLength(2);
  });

  it("should remove a list item", () => {
    const { queryByTestId, getByTestId } = render(<List items={items} />);
    fireEvent.click(getByTestId("ListItem.Remove"));
    expect(queryByTestId("ListItem")).toBeNull();
  });

  it("should edit a list item", () => {
    const { getByTestId, getByValue } = render(<List items={items} />);
    fireEvent.change(getByTestId("ListItem.WhoInput"), {
      target: { value: "Testing" }
    });
    expect(getByValue("Testing")).toBeTruthy();
  });
});
