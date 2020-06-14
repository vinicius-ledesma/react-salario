import React, { Component } from "react";
import Fields from "./components/fields/Fields";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      salBruto: 0,
    };
  }

  render() {
    return (
      <div className="container">
        <h1>React Salário</h1>
        <Fields />
      </div>
    );
  }
}
