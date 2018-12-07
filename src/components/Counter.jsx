import React, { Component } from "react";

class Counter extends Component {
  /**
   * Inicialiize state
   * Values shown when render is done.
   * this.props contains all parameters
   * passed by father component
   */

  //Evetn just read a reference of function

  /**
   * this.props.children contains <values/> passed by father
   * in format:
   * <Component>
   *  <values/>
   * </Component>
   */
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Add
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Pull off
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  //Get a badge class depends value
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  //Show a state wheb value is zero or greater than
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
