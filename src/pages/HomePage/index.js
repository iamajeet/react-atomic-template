// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, ProgressBar } from "react-bootstrap";
import { getAllProducts } from "../../common/productHelper";
import {
  InfoWidget,
  LineChart,
  TrayCarousel,
  Thumbnail
} from "../../components";
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
const TitleStyled = styled.h6`
  width: 100%;
  display: flex;
  font-weight: bold;
`;
const TitleHeading = styled.span`
  background: transparent;
  color: #000;
  text-align: center;
  width: 100%;
  font-size: 11px;
  padding: 2%;
  bottom: 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
`;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount = () => {
    fetch("/assets/data/products.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data) {
          const list = getAllProducts(data.children);
          this.setState({ items: list });
        }
      });
  };

  render() {
    return (
      <>
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
        {this.state.items && this.state.items.length && (
          <>
            <Row>
              <Col
                style={{
                  paddingTop: "10px",
                  paddingLeft: "0px",
                  paddingRight: "10px"
                }}
              >
                <TitleStyled>All Products</TitleStyled>
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
                      breakpoint: 1000,
                      settings: {
                        slidesToScroll: 1,
                        slidesToShow: 3,
                        autoCycle: this.state.items.length > 3 ? true : false
                      }
                    },
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToScroll: 1,
                        slidesToShow: 1,
                        autoCycle: this.state.items.length > 1 ? true : false
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
                  {this.state.items.map((item, index) => {
                    return (
                      <Thumbnail
                        key={index}
                        backgroundImagePath={item.imageSrc}
                        style={{ boxShadow: "0 1px 2px 0 #00111b" }}
                      >
                        <TitleHeading>{item.name}</TitleHeading>
                      </Thumbnail>
                    );
                  })}
                </TrayCarousel>
              </Col>
            </Row>
          </>
        )}
      </>
    );
  }
}

export default HomePage;
