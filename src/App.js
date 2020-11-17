import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import login from "./Pages/login";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        {/* <Redirect to="/login" />  */}
        Dashboard
      </Route>
      <Route exact path="/login" component={login} />
      <Route path="*" render={() => "404 Not found!"} />
    </Switch>
  );
}

export default App;
