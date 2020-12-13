import React, { Component } from "react";
import { Counter } from "./Counter";

export class Counters extends Component {

  state = {
    counters: [{ id: 1, value: 1 }, { id: 2, value: 0 }, { id: 3, value: 3 }]
  };

  deleteHandler = counterId => {
    console.log("delete handler is " + counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  resetCounters = () => {
    console.log("reset..");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log(" ---- Counters class comp ----- ");
    return (
      <div>
        {this.state.counters.map(c => (
          <Counter key={c.id} onDelete={this.deleteHandler} counter={c} />
        ))}
        <button onClick={this.resetCounters} className="btn btn-light btn-sm">
          Reset
        </button>
      </div>
    );
  }
}
