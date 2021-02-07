import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "../views/login";
// observer,把无状态函数组件变成响应式组件
// import { observer } from "mobx-react";

// @observer 的识别，需要 decorators-legacy 的插件
// @observer
class Index extends Component {
  constructor(props) {
    super(props);
  }
  clickCopy = () => {
    console.log(111);
  };

  render() {
    return (
      <div>
        <Link to="/login">Home</Link>
        <span></span>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Index;
