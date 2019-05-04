import store, { INCREMENT, DECREMENT, RESET } from "./store";
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super();
    this.state = {
      store: store.getState()
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        store: store.getState()
      });
    });
  }
  increment(amount) {
    store.dispatch({ amount, type: INCREMENT });
  }
  decrement(amount) {
    store.dispatch({ amount, type: DECREMENT });
  }
  reset() {
    store.dispatch({ type: RESET });
  }
  render() {
    const { currentValue } = this.state.store;
    console.log(currentValue);
    console.log(this.state.store);
    return (
      <div className="counter">
        <section>
          <div className="zero">
            <h1>{currentValue}</h1>
          </div>
          <div className="btn">
            <button onClick={() => this.decrement(1)}>- 1</button>
            <button
              onClick={() => {
                this.reset();
              }}
            >
              RESET
            </button>
            <button onClick={() => this.increment(1)}>+ 1</button>
          </div>
        </section>
        <section />
      </div>
    );
  }
}

export default Counter;
