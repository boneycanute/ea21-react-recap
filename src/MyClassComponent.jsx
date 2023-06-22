import React, { Component, createContext } from "react";
import { MyContext } from "./App";
import ClassChild from "./ClassChild";

export const context2 = createContext();

export class MyClassComponent extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  // Function that executes when component is mounted
  componentDidMount() {
    console.log("Class Component Mounted");
  }

  // Function executes when the component's state changes
  componentDidUpdate() {
    console.log("Class Component Updated");
  }

  // Function executes when component unmounts
  componentWillUnmount() {
    console.log("Class Component Unmounts");
  }

  render() {
    return (
      <div style={{ background: "grey" }}>
        <h1>MyClassComponent : {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          ➕
        </button>
        <MyContext.Consumer>
          {(ea21) => {
            return <h1>Data from Consumer Component :{ea21}</h1>;
          }}
        </MyContext.Consumer>
        <context2.Provider value={"123"}>
          <ClassChild />
        </context2.Provider>
      </div>
    );
  }
}

export default MyClassComponent;
