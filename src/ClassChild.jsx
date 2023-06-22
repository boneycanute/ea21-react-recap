import React, { Component } from "react";
import { context2 } from "./MyClassComponent";

export class ClassChild extends Component {
  render() {
    return (
      <div>
        ClassChild :
        <context2.Consumer>
          {(value) => {
            console.log("ClassChild : ", value);
            return <h1>{value}</h1>;
          }}
        </context2.Consumer>
      </div>
    );
  }
}

export default ClassChild;
