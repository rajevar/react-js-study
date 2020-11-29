import React, { Component } from "react";

export class Hello extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello World!'
    }
  }
  subscribe(c) {
    console.log("thank you for the sub.");
    this.setState({
      message: "Thank you for subscribing."
    })
    this.props.parentFunction(c);
  }

  render() {
    return (
      <div>
        <br />
        <p> {this.state.message} </p>
        <button className="btn btn-info btn-sm" onClick={() => this.subscribe('Child')}>Sub</button>
      </div>
    );
  }
}
