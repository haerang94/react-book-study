import React, { Component } from "react";

class LifeCycleMethod extends Component {
  state = {
    number: 0,
    color: null
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  render() {
    return <div></div>;
  }
}

export default LifeCycleMethod;
