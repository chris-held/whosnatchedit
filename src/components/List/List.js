import React, { Component } from "react";

class List extends Component {
  state = {
    items: []
  };

  componentDidMount = () => {
    const { items } = this.props;
    this.setState({ items });
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

  render() {
    const { items } = this.state;
    return (
      <React.Fragment>
        <div className="row">
          <button onClick={this.addItem} className="btn btn-primary btn-large">
            Add
          </button>
        </div>
        <React.Fragment>
          {items.map((item, index) => (
            <div className="row" key={item.id}>
              <form className="form-inline">
                <input
                  type="text"
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
