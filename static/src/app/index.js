import React from "react";
import ReactDOM from "react-dom";
import App from "./routes";
// import { Router } from "react-router-dom";
// 路由分为 BrowserRouter，HashRouter
// 刷新时：BrowserRouter 与服务端交互，HashRouter不与服务端交互
import { BrowserRouter as Router } from "react-router-dom";
// import { HashRouter as Router } from "react-router-dom";
// const ThemeContext = React.createContext("light");

ReactDOM.render(
    <Router>
      <App />
    </Router>,
  document.getElementById("root")
);
