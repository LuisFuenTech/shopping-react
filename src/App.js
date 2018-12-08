import React, { Component } from "react";
import "./App.css";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    if (this.state.counters.length > 1) {
      //Get all the counters excepts the one in the given id by counterId
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters });
    }
  };

  handleReset = () => {
    //Set all value to 0
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    //Cloning the array of objects
    const counters = [...this.state.counters];
    //Found the index of the object given
    const index = counters.indexOf(counter);
    //Cloning the object given by parameters
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    if (counter.value > 0) {
      //Cloning the array of objects
      const counters = [...this.state.counters];
      //Found the index of the object given
      const index = counters.indexOf(counter);
      //Cloning the object given by parameters
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    }
  };

  handleAddProduct = () => {
    let counters = [...this.state.counters];
    let newId = counters[counters.length - 1].id + 1;
    counters.push({ id: newId, value: 1 });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          counters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onDecrement={this.handleDecrement}
            onAddProduct={this.handleAddProduct}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
