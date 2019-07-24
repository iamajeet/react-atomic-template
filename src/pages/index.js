import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../themes/default";
import PageTemplate from "../templates/PageTemplate";
import HomePage from "./HomePage";
import Catalog from "./CatalogPage";
import AllServiceRequest from "./AllServiceRequest";
import SamplePage from "./SamplePage";
import { Header, Footer, LeftNavigation } from "../components";
class Pages extends Component {
  state = {
    collapsedStatus: false
  };
  avatarLinks = [
    {
      name: "Home",
      link: "/",
      icon: "fa fa-tachometer",
      title: "Home Page",
      style: {
        marginLeft: "5px"
      }
    },
    {
      name: "All Catalog",
      link: "/pages/catalog/all",
      icon: "fa fa-tachometer",
      title: "All Catalog",
      style: {
        marginLeft: "5px"
      }
    },
    {
      name: "Service Requests",
      link: "/pages/service-request",
      icon: "fa fa-tachometer",
      title: "Service Requests",
      style: {
        marginLeft: "5px"
      }
    },
    {
      name: "SamplePage",
      link: "/pages/sample-page",
      icon: "fa fa-video-camera",
      title: "Sample Page",
      style: {
        marginLeft: "5px"
      }
    }
  ];
  onLeftNavCollapse = () => {
    this.setState({ collapsedStatus: !this.state.collapsedStatus });
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <PageTemplate
          header={
            <Header
              logoImage={{ src: "/assets/images/brand-logo.png" }}
              onLeftNavCollapse={this.onLeftNavCollapse}
              collapsedStatus={this.state.collapsedStatus}
              avatarLinks={this.avatarLinks}
            />
          }
          footer={<Footer />}
          leftNavigation={
            <LeftNavigation
              collapsedStatus={this.state.collapsedStatus}
              breakPoint={1024}
              containerWidth={250}
              responsive={true}
              defaultActiveKey="/home"
              links={[
                { title: "Home", to: "/pages/home", icon: "fa fa-home" },
                {
                  title: "All Catalog",
                  to: "/pages/catalog/all",
                  icon: "fa fa-diamond"
                },
                {
                  title: "Service Requests",
                  to: "/pages/service-request",
                  icon: "fa fa-diamond"
                },
                {
                  title: "Sample Page",
                  to: "/pages/sample-page",
                  icon: "fa fa-diamond"
                }
              ]}
            />
          }
        >
          <Route exact path={this.props.match.path} component={HomePage} />
          <Route path={`${this.props.match.path}/home`} component={HomePage} />
          <Route
            path={`${this.props.match.path}/catalog/:id`}
            component={Catalog}
          />
          <Route
            path={`${this.props.match.path}/service-request`}
            component={AllServiceRequest}
          />
          <Route
            path={`${this.props.match.path}/sample-page`}
            component={SamplePage}
          />
        </PageTemplate>
      </ThemeProvider>
    );
  }
}

export default Pages;
