import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ItemBox } from "../../../components";
import { Row, Col } from "react-bootstrap";

const ItemListWrapper = styled.div`
  width: calc(100% - 40px);
  height: calc(100vh - 110px);
  padding: 5px;
  margin: 0 20px;
`;
const ItemList = props => {
  const { itemList, itemClick } = props;
  console.log("props .............. ", props);
  return (
    <ItemListWrapper>
      <Row>
        {itemList.map((item, key) => (
          <Col
            xs={6}
            md={4}
            lg={3}
            key={key}
            style={{ margin: "10px 0px 10px 0px", padding: "10px" }}
          >
            <ItemBox
              key={key}
              details={item}
              itemClick={e => {
                itemClick(item);
              }}
            />
          </Col>
        ))}
      </Row>
    </ItemListWrapper>
  );
};

ItemList.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      itemRating: PropTypes.shape({
        value: PropTypes.number.isRequired,
        emptyStarColor: PropTypes.string.isRequired,
        starColor: PropTypes.string.isRequired,
        starCount: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      }),
      itemDetails: PropTypes.shape({
        title: PropTypes.string,
        code: PropTypes.string,
        desc: PropTypes.string,
        status: PropTypes.number,
        quantity: PropTypes.number,
        thumbimgsrc: PropTypes.string,
        imgsrc: PropTypes.string,
        imggallery: PropTypes.arrayOf(PropTypes.string)
      })
    })
  ),
  btnTransparent: PropTypes.bool,
  btnReverse: PropTypes.bool,
  btnPalette: PropTypes.string,
  itemClick: PropTypes.func,
  addToCartClick: PropTypes.func
};
export default ItemList;
