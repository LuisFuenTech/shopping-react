import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      onDelete,
      onIncrement,
      onDecrement,
      onAddProduct,
      counters
    } = this.props;
    return (
      <div>
        <button onClick={onAddProduct} className="btn btn-primary btn-sm m-2">
          New product
        </button>
        <button onClick={onReset} className="btn btn-secondary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          //Passing arguments to children component
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDelete={onDelete}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
