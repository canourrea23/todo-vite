import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Router, Switch, Route } from "react-router-dom";
import { NewTodo } from "./components/NewTodo";
import { Login } from "./components/Login";
import { ForgotPassword } from "./components/ForgotPassword";
import { SignUp } from "./components/SignUp";
import { createBrowserHistory } from "history";

const appHistory = createBrowserHistory();
function MyRouter() {
  return (
    <Router history={appHistory}>
      {/* <Switch> */}
      <Route exact path="/">
        <div style={{ height: 20, width: 20, background: "blue" }}>Main</div>
      </Route>
      <Route exact path="/login">
        <Login></Login> 
      </Route>
      <Route exact path="/signup">
        <SignUp></SignUp>
      </Route>
      <Route exact path="/forgotpassword">
        <ForgotPassword></ForgotPassword>
      </Route>
      <Route exact path="/main">
        <NewTodo></NewTodo>
      </Route>
      {/* </Switch> */}
    </Router>
  );
}

// ReactDOM.createRoot(document.getElementById("root")).render(<MyRouter />);
ReactDOM.render(<MyRouter />, document.getElementById("root"));
