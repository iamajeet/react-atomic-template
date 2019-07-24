import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage, SamplePage, NotFoundPage } from "../components";
import maintheme from "./themes/maintheme";
import { ThemeProvider } from "styled-components";
class App extends Component {
  render() {
    console.log("theme------", maintheme);
    return (
      <ThemeProvider theme={maintheme}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/home" component={HomePage} exact />
          <Route path="/sample-page" component={SamplePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </ThemeProvider>
    );
  }
}

export default App;
