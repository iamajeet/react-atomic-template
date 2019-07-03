import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { HomePage, SamplePage, NotFoundPage } from "../components";
import theme from "./themes/default";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
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
