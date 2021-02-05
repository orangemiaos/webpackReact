import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "../views/login";

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
