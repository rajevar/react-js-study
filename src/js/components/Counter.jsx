import React, { Component } from "react";

export class Counter extends Component {
  state = {
    count: this.props.counter.value
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  getBadgeClasses = () => {
    var classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  divStyle = {
    margin: "3px",
  };

  render() {
    return (
      <div style={this.divStyle}>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-md"
        >
          Increment
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }
}
