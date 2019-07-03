import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { palette } from "styled-theme";
import { ItemBox } from "../../../components";
import { Row, Col } from "react-bootstrap";

const ItemListWrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid #ccc;
  padding: 5px;
  overflow-y: auto;
  overflow-x: hidden;
`;
const ItemList = props => {
  const {
    itemList,
    btnTransparent,
    btnReverse,
    btnPalette,
    itemClick,
    addToCartClick
  } = props;
  console.log("props .............. ", props);
  return (
    <ItemListWrapper>
      <Row>
        {itemList.map((item, key) => (
          <Col xs={12} md={4} lg={3} key={key} style={{ margin: "10px 0px" }}>
            <ItemBox
              details={item.itemDetails}
              rating={item.itemRating}
              palette={btnPalette}
              transparent={btnTransparent}
              reverse={btnReverse}
              addToCartClick={addToCartClick}
              onClick={e => {
                itemClick(item.itemDetails);
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
        price: PropTypes.string,
        desc: PropTypes.string,
        status: PropTypes.string,
        quantity: PropTypes.number,
        thumbimgsrc: PropTypes.string,
        imgsrc: PropTypes.string,
        imggallery: PropTypes.arrayOf(PropTypes.string),
        currency: PropTypes.string
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
