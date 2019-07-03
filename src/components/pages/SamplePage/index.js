import React, { Component } from "react";
import { Login } from "../../../components";
import { GenericTemplate, PrimaryHeader, Footer } from "../../../components";
class SamplePage extends Component {
  handleLogin = (username, password, responseCallback) => {
    console.log("from samplepage", username, password);
    const response = {
      redirectUrl: "/"
    };
    responseCallback(response);
  };

  render() {
    return (
      <GenericTemplate header={<PrimaryHeader />} footer={<Footer />}>
        <Login handleLogin={this.handleLogin} width="50%" />;
      </GenericTemplate>
    );
  }
}

export default SamplePage;
