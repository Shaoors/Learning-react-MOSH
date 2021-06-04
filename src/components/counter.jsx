import React, { Component } from "react";

class Counter extends Component {
  //   constructor() {
  //     super();
  //     console.log(this);
  //   }

  // handleIncreement = () => {
  //   this.setState({ value: this.props.counter.value + 1 });
  // };
  componentDidUpdate() {
    console.log("Updated");
  }
  componentWillUnmount() {
    console.log("Unmounted");
  }
  render() {
    console.log("Counter");
    return (
      <div className="row">
        <div className="col-1 ">
          <span className={this.classesForSpan()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={() => this.props.onIncreement(this.props.counter)}
          >
            +
          </button>
          <button
            className="btn btn-secondary btn-sm"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
            onClick={() => this.props.onDecreement(this.props.counter)}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </div>
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
