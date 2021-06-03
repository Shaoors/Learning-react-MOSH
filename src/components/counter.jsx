import React, { Component } from "react";

class Counter extends Component {
  //   constructor() {
  //     super();
  //     console.log(this);
  //   }

  // handleIncreement = () => {
  //   this.setState({ value: this.props.counter.value + 1 });
  // };

  render() {
    return (
      <div>
        <span className={this.classesForSpan()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncreement(this.props.counter)}
        >
          Increement
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  classesForSpan() {
    let classes = "badge  m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
