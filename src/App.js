import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Pages from "./pages";
import NotFoundPage from "./pages/NotFoundPage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Pages} exact />
        <Route path="/pages" component={Pages} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default App;
