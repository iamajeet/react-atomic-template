// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import {
  PageTemplate,
  Header,
  Footer,
  CardBox,
  LeftNavigation,
  InfoWidget
} from "../../../components";

class HomePage extends Component {
  state = {
    collapsedStatus: false
  };
  onLeftNavCollapse = () => {
    this.setState({ collapsedStatus: !this.state.collapsedStatus });
  };
  render() {
    return (
      <PageTemplate
        header={
          <Header
            onLeftNavCollapse={this.onLeftNavCollapse}
            collapsedStatus={this.state.collapsedStatus}
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
              { title: "Home", to: "/home", icon: "fa fa-home" },
              {
                title: "Sample Page",
                to: "/sample-page",
                icon: "fa fa-diamond"
              }
            ]}
          />
        }
      >
        {/* <Row>
          <Col xs={12} lg={6}>
            <CardBox width="100%" responsive="true" breakpoint={768}>
              Feature List
            </CardBox>
          </Col>
          <Col xs={12} lg={6}>
            <CardBox width="100%" responsive="true" breakpoint={768}>
              Feature List
            </CardBox>
          </Col>
        </Row> */}
        <Row>
          <Col
            xs={12}
            md={4}
            lg={3}
            style={{ paddingLeft: "0px", paddingRight: "5px" }}
          >
            <InfoWidget
              responsive={true}
              width="100%"
              breakpoint="768"
              title="My Products"
              details="10"
              bgcolor="#c0c0c0"
              cardminheight="150px"
            />
          </Col>
          <Col
            xs={12}
            md={4}
            lg={3}
            style={{ paddingLeft: "0px", paddingRight: "5px" }}
          >
            <InfoWidget
              responsive={true}
              width="100%"
              breakpoint="768"
              progress="30"
              progressstriped={false}
              progressvariant="primary"
              title="Expired Products"
              details="5"
              bgcolor="#c0c0c0"
              otherdetails="5 out of 15"
              cardminheight="150px"
            />
          </Col>
        </Row>
      </PageTemplate>
    );
  }
}

export default HomePage;
