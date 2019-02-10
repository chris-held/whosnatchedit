import React, { Component } from "react";

class List extends Component {
  state = {
    items: []
  };

  interval;

  componentDidMount = () => {
    const { items } = this.props;
    this.setState({ items });
    this.interval = setInterval(() => {
      const { items } = this.state;
      console.log("items", items);
      window.localStorage.setItem("items", JSON.stringify(items));
    }, 3000);
  };

  addItem = () => {
    const { items } = this.state;
    this.setState({
      items: [{ who: "", what: "", id: new Date().getTime() }, ...items]
    });
  };

  removeItem = id => {
    const items = Array.from(this.state.items);
    this.setState({
      items: items.filter(i => i.id !== id)
    });
  };

  handleChange = (index, prop, value) => {
    const items = Array.from(this.state.items);
    items[index][prop] = value;
    this.setState({ items });
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  render() {
    const { items } = this.state;
    return (
      <React.Fragment>
        <div className="row">
          <button
            onClick={this.addItem}
            data-testid="List.Add"
            className="btn btn-primary btn-large"
          >
            Add
          </button>
        </div>
        <React.Fragment>
          {items.map((item, index) => (
            <div className="row" key={item.id} data-testid="ListItem">
              <form className="form-inline">
                <input
                  type="text"
                  data-testid="ListItem.WhoInput"
                  className="input-small"
                  onChange={e => {
                    this.handleChange(index, "who", e.target.value);
                  }}
                  value={item.who}
                  placeholder="Who"
                />
                <input
                  type="text"
                  className="input-small"
                  onChange={e => {
                    this.handleChange(index, "what", e.target.value);
                  }}
                  value={item.what}
                  placeholder="What"
                />
                <button
                  type="button"
                  data-testid="ListItem.Remove"
                  onClick={() => {
                    this.removeItem(item.id);
                  }}
                  className="btn btn-link"
                >
                  X
                </button>
              </form>
            </div>
          ))}
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default List;
