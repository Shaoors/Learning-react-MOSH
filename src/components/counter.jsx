import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };
  //   constructor() {
  //     super();
  //     console.log(this);
  //   }
  handleIncreement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.classesForSpan()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncreement}
        >
          Increement
        </button>
      </div>
    );
  }
  classesForSpan() {
    let classes = "badge  m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
