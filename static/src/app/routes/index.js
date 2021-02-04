import React, { Component } from "react";
class Index extends Component {
  constructor(props) {
    super(props);
  }
  clickCopy = () => {
    console.log(111);
  };
  render() {
    return <div onClick={this.clickCopy}>app</div>;
  }
}

export default Index;
