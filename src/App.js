import React, { Component } from "react";
import "./App.css";

import Counter from "./counter";

class App extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <h1> Welcome to My Redux Counter </h1>
        </div>
        <Counter />;
      </div>
    );
  }
}

export default App;
