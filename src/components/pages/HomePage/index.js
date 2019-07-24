// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, ProgressBar } from "react-bootstrap";
import {
  PageTemplate,
  Header,
  Footer,
  LeftNavigation,
  InfoWidget,
  LineChart,
  TrayCarousel
} from "../../../components";
const DetailsStyled = styled.div`
  width: 100%;
  display: flex;
  font-size: 50px;
`;
const ShortDetailsStyled = styled.div`
  width: 100%;
  display: unset;
  font-size: 20px;
  text-align: left;
`;
const OtherDetailsStyled = styled.div`
  width: 100%;
  display: flex;
`;
const TitleStyled = styled.div`
  width: 100%;
  display: flex;
`;
const ExampleCard = styled.h1`
  background: #00558b;
  color: #fff;
  line-height: 100px;
  text-align: center;
  font-size: 36px;
  margin: 10px;
  padding: 2%;
  position: relative;
  box-shadow: 0 1px 2px 0 #00111b;
`;

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
            md={6}
            lg={3}
            style={{
              paddingTop: "10px",
              paddingLeft: "0px",
              paddingRight: "10px"
            }}
          >
            <InfoWidget
              style={{ boxShadow: "2px 2px 2px #CCC" }}
              responsive={true}
              width="100%"
              breakpoint={768}
              title={<TitleStyled>My Products</TitleStyled>}
              details={<DetailsStyled>15</DetailsStyled>}
              bgcolor="#59d4e8"
              cardminheight="150px"
            />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={3}
            style={{
              paddingTop: "10px",
              paddingLeft: "0px",
              paddingRight: "10px"
            }}
          >
            <InfoWidget
              style={{ boxShadow: "2px 2px 2px #CCC" }}
              responsive={true}
              width="100%"
              breakpoint={768}
              progress={
                <ProgressBar
                  variant="info"
                  striped={false}
                  now="30"
                  style={{ height: "5px" }}
                />
              }
              title={<TitleStyled>Expiring Soon</TitleStyled>}
              details={<DetailsStyled>2</DetailsStyled>}
              bgcolor="#ea7dc7"
              otherdetails={
                <OtherDetailsStyled>2 out of 15</OtherDetailsStyled>
              }
              cardminheight="150px"
            />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={3}
            style={{
              paddingTop: "10px",
              paddingLeft: "0px",
              paddingRight: "10px"
            }}
          >
            <InfoWidget
              style={{
                boxShadow: "2px 2px 2px #CCC"
              }}
              responsive={true}
              width="100%"
              breakpoint={768}
              progress={
                <ProgressBar
                  variant="info"
                  striped={false}
                  now="30"
                  style={{ height: "5px" }}
                />
              }
              title={<TitleStyled>Expired Products</TitleStyled>}
              details={<DetailsStyled>5</DetailsStyled>}
              bgcolor="#e42c64"
              otherdetails={
                <OtherDetailsStyled>5 out of 15</OtherDetailsStyled>
              }
              cardminheight="150px"
            />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={3}
            style={{
              paddingTop: "10px",
              paddingLeft: "0px",
              paddingRight: "10px"
            }}
          >
            <InfoWidget
              style={{
                boxShadow: "2px 2px 2px #CCC",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
              }}
              responsive={true}
              width="100%"
              breakpoint={768}
              bgcolor="#FFF"
              cardminheight="150px"
              cardmaxheight="150px"
              details={
                <LineChart
                  canvasStyle={{
                    width: "100%",
                    height: "100%"
                  }}
                  data={{
                    labels: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec"
                    ],
                    datasets: [
                      {
                        label: "All",
                        data: [0, 2, 0, 1, 0, 4, 0, 0, 0, 0, 0, 0],
                        backgroundColor: "transparent",
                        borderColor: "red"
                      },
                      {
                        label: "Expired",
                        data: [0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                        backgroundColor: "transparent",
                        borderColor: "blue"
                      }
                    ]
                  }}
                  options={{
                    responsive: false,
                    // This chart will not respond to mousemove, etc
                    events: ["click"],
                    onClick: (e, item) => {
                      console.log("----- ", e.targets);
                      console.log("----- ", item);
                    }
                  }}
                />
              }
            />
          </Col>

          <Col
            xs={12}
            md={6}
            lg={3}
            style={{
              paddingTop: "10px",
              paddingLeft: "0px",
              paddingRight: "10px"
            }}
          >
            <InfoWidget
              style={{ boxShadow: "2px 2px 2px #CCC" }}
              responsive={true}
              width="100%"
              breakpoint={768}
              title={<TitleStyled>My Service Requests</TitleStyled>}
              details={<ShortDetailsStyled>15</ShortDetailsStyled>}
              bgcolor="#59d4e8"
              cardminheight="60px"
            />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={3}
            style={{
              paddingTop: "10px",
              paddingLeft: "0px",
              paddingRight: "10px"
            }}
          >
            <InfoWidget
              style={{ boxShadow: "2px 2px 2px #CCC" }}
              responsive={true}
              width="100%"
              breakpoint={768}
              title={<TitleStyled>Request Pending</TitleStyled>}
              details={<ShortDetailsStyled>2</ShortDetailsStyled>}
              bgcolor="#f7b71d"
              cardminheight="60px"
            />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={3}
            style={{
              paddingTop: "10px",
              paddingLeft: "0px",
              paddingRight: "10px"
            }}
          >
            <InfoWidget
              style={{ boxShadow: "2px 2px 2px #CCC" }}
              responsive={true}
              width="100%"
              breakpoint={768}
              title={<TitleStyled>Request Resolved</TitleStyled>}
              details={<ShortDetailsStyled>5</ShortDetailsStyled>}
              bgcolor="#32ff6a"
              cardminheight="60px"
            />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={3}
            style={{
              paddingTop: "10px",
              paddingLeft: "0px",
              paddingRight: "10px"
            }}
          >
            <InfoWidget
              style={{ boxShadow: "2px 2px 2px #CCC" }}
              responsive={true}
              width="100%"
              breakpoint={768}
              bgcolor="#e42c64"
              cardminheight="60px"
              title={<TitleStyled>Request Rejected</TitleStyled>}
              details={<ShortDetailsStyled>0</ShortDetailsStyled>}
            />
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              paddingTop: "10px",
              paddingLeft: "0px",
              paddingRight: "10px"
            }}
          >
            <TrayCarousel
              dots={true}
              paging={false}
              scrollOnDevice
              showSides
              autoCycle={true}
              breakpoints={[
                {
                  breakpoint: 500,
                  settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToScroll: 1,
                    slidesToShow: 3
                  }
                }
              ]}
              sideSize={0.1}
              sidesOpacity={0.5}
              slidesToScroll={1}
              slidesToShow={4}
              onNextClick={() => {
                console.log("onNextClick");
              }}
              onPreviousClick={() => {
                console.log("onPreviousClick");
              }}
            >
              <ExampleCard>1</ExampleCard>
              <ExampleCard>2</ExampleCard>
              <ExampleCard>3</ExampleCard>
              <ExampleCard>4</ExampleCard>
              <ExampleCard>5</ExampleCard>
              <ExampleCard>6</ExampleCard>
              <ExampleCard>7</ExampleCard>
              <ExampleCard>8</ExampleCard>
              <ExampleCard>9</ExampleCard>
              <ExampleCard>10</ExampleCard>
            </TrayCarousel>
          </Col>
        </Row>
      </PageTemplate>
    );
  }
}

export default HomePage;
