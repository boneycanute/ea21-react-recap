import React, { Component } from "react";

export class Comp1 extends Component {
  constructor() {
    super();
    this.state = "Data From Child Comp1";
    // console.log("Constructor");
  }
  componentDidMount() {
    console.log("Life cycle Method : ");
    this.props.getValue(this.state);
  }
  render() {
    // console.log("Render");
    return <div style={{ background: "cyan" }}>Comp1 :</div>;
  }
}

export default Comp1;
