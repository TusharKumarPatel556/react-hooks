import React from "react";
import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <p>Count:{this.state.count}</p>
        <button type="" onClick={this.incrementCount}>
          click
        </button>
      </div>
    );
  }
}

export default Counter;
