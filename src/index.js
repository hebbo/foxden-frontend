// @flow
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component<{}, {}> {
  render() {
    return <div>Hello World!</div>;
  }
}

const appRoot = document.getElementById("root");
appRoot && ReactDOM.render(<App />, appRoot);
