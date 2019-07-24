import React, { Component } from "react";
import { PrimaryHeader, Footer, Login } from "../../components";
import GenericTemplate from "../../templates/GenericTemplate";
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
