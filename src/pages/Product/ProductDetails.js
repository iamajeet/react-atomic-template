import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { palette, size } from "styled-theme";
import { Row, Col } from "react-bootstrap";
import { getProductExpiryDate } from "../../common/productHelper";
const Link = styled.div`
  background-color: #fff;
  z-index: 999;
  box-shadow: 1px 1px 1px 1px #dcd8d8;
  position: relative;
  top: 5px;
  left: 5px;
  width: 25px;
  height: 25px;
  border-top-right-radius: 50% !important;
  border-bottom-right-radius: 50% !important;
  border-top-left-radius: 50% !important;
  border-bottom-left-radius: 50% !important;
  text-align: center;
  font-size: 20px;
  padding: 0px;
  line-height: 1.3;
  font-weight: bolder;
`;
const bgImage = ({ productDetails }) => `url("${productDetails.imageSrc}")`;
const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: auto;
  text-align: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: ${bgImage};
  border: 1px solid ${palette("grayscale", 5)};
  border-radius: 5px;
  @media screen and (max-width: 1024px) {
    height: 120px;
  }
  @media screen and (max-width: 500px) {
    height: 150px;
  }
`;
const DetailsWrapper = styled.div`
  width: auto;
  height: auto;
  overflow: hidden;
  margin: 2px 0;
  padding: 0px 5px;
  font-size: ${size("s14px")};
  font-weight: bold;
  text-align: left;

  color: ${palette("grayscale", 0)};
`;
const StyledRow = styled(Row)`
  border-radius: 5px;
  padding: 20px 0px;
  border: 1px solid ${palette("grayscale", 5)}};
  margin-left: 0px;
  margin-right: 0px;
`;
const TitleWrapper = styled.div`
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px;
  background: ${palette("grayscale", 6)}};
`;
class ProductDetails extends Component {
  state = { productExpiryDate: "" };
  componentWillReceiveProps(nextProps) {
    if (nextProps.productDetails) {
      const productExpiryDate = getProductExpiryDate(nextProps.productDetails);
      this.setState({ productExpiryDate: productExpiryDate });
    }
  }
  render() {
    return (
      <div>
        {/* <div
          style={{
            height: "40px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >

          <button
            className="btn btn-info btn-small"
            style={{ marginTop: "5px" }}
            onClick={() => {
              this.props.history.push(
                `/page/service-request/${this.props.productDetails.serialNo}`
              );
            }}
          >
            <span>Service Request</span>
          </button>
        </div> */}
        <Row>
          <Col>
            <TitleWrapper>
              <h5>{this.props.productDetails.name}</h5>
            </TitleWrapper>
          </Col>
        </Row>
        <StyledRow>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div style={{ width: "100%" }}>
              <ImageWrapper {...this.props} />
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <DetailsWrapper>
              <h5>
                <small>
                  <b>Model Number</b> : {this.props.productDetails.modelNo}
                </small>
              </h5>
              <h5>
                <small>
                  <b>Serial Number</b> : {this.props.productDetails.serialNo}
                </small>
              </h5>

              <h5>
                <small>
                  <b>IMEI Number</b> : {this.props.productDetails.imei}
                </small>
              </h5>
              <h5>
                <small>
                  <b>Price</b> : {this.props.productDetails.price}
                </small>
              </h5>
              <h5>
                <small>
                  <b>Discount</b> : {this.props.productDetails.discount}
                </small>
              </h5>
              <h5>
                <small>
                  <b>Amount Paid</b> : {this.props.productDetails.amountPaid}
                </small>
              </h5>
            </DetailsWrapper>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <DetailsWrapper>
              <h5>
                <small>
                  <b>Order Number</b> : {this.props.productDetails.orderNo}
                </small>
              </h5>
              <h5>
                <small>
                  <b>Ordered Date</b> : {this.props.productDetails.orderedDate}
                </small>
              </h5>
              <h5>
                <small>
                  <b>Delivered Date</b> :{" "}
                  {this.props.productDetails.deliveryDate}
                </small>
              </h5>

              <h5>
                <small>
                  <b>Warranty Period</b> :{" "}
                  {this.props.productDetails.warrantyPeriod}
                </small>
              </h5>
              <h5>
                <small>
                  <b>Extended Warranty</b> :{" "}
                  {this.props.productDetails.extendedWarranty}
                </small>
              </h5>
              <h5>
                <small>
                  <b>Expiry Date</b> :{this.state.productExpiryDate}
                </small>
              </h5>
            </DetailsWrapper>
          </Col>
        </StyledRow>
      </div>
    );
  }
}
export default withRouter(ProductDetails);
