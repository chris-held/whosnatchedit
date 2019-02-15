import React, { useEffect, useState } from "react";

const List = ({ items: initialItems }) => {
  const [items, setItems] = useState(initialItems);

  const addItem = () => {
    setItems([{ who: "", what: "", id: new Date().getTime() }, ...items]);
  };

  const removeItem = id => {
    const copy = Array.from(items);
    setItems(copy.filter(i => i.id !== id));
  };

  const handleChange = (index, prop, value) => {
    const copy = Array.from(items);
    copy[index][prop] = value;
    setItems(copy);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("items", items);
      window.localStorage.setItem("items", JSON.stringify(items));
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <React.Fragment>
      <div className="row">
        <button
          onClick={addItem}
          data-testid="List.Add"
          className="btn btn-primary btn-lg"
        >
          Add
        </button>
      </div>
      <React.Fragment>
        {items.map((item, index) => (
          <div className="row" key={item.id} data-testid="ListItem">
            <form>
              <input
                type="text"
                data-testid="ListItem.WhoInput"
                className="input-small"
                onChange={e => {
                  handleChange(index, "who", e.target.value);
                }}
                value={item.who}
                placeholder="Who"
              />
              <input
                type="text"
                className="input-small"
                onChange={e => {
                  handleChange(index, "what", e.target.value);
                }}
                value={item.what}
                placeholder="What"
              />
              <button
                type="button"
                data-testid="ListItem.Remove"
                onClick={() => {
                  removeItem(item.id);
                }}
                className="btn btn-outline-danger"
              >
                X
              </button>
            </form>
          </div>
        ))}
      </React.Fragment>
    </React.Fragment>
  );
};

export default List;
