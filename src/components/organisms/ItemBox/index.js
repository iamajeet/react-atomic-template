import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { palette } from "styled-theme";
import { Button, StarRating } from "../../../components";

const ItemWrapper = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
  padding: 5px;
`;

const bgImage = ({ details }) => `url(${details.imgsrc})`;
const ImageWrapper = styled.div`
  width: auto;
  height: 200px;
  border: 1px solid #ccc;
  margin: 2px;
  text-align: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: ${bgImage};
`;
const TitleWrapper = styled.div`
  width: auto;
  border: 1px solid #ccc;
  margin: 2px;
  padding: 5px;
  text-align: left;
  color: #ccc;
`;
const PriceWrapper = styled.div`
  width: auto;
  height: auto;
  border: 1px solid #ccc;
  margin: 2px;
  padding: 5px;
  color: #ccc;
  display: flex;
  justify-content: space-between;
`;
const RatingWrapper = styled.div`
  width: auto;
  border: 1px solid #ccc;
  padding: 5px;
  margin: 2px;
  text-align: left;
  color: #ccc;
`;
const ButtonWrapper = styled(Button)`
  color: #ccc;
  position: relative;
  padding: auto 5px;
`;

const ItemBox = ({ palette, rating, reverse, addToCartClick, ...props }) => {
  return (
    <ItemWrapper>
      <ImageWrapper {...props} />
      <TitleWrapper>{props.details.title}</TitleWrapper>
      <PriceWrapper>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          {props.details.currency} {props.details.price}
        </span>
        <ButtonWrapper
          transparent
          palette={palette ? palette : "grayscale"}
          reverse={reverse}
          onClick={e => {
            addToCartClick(props.details);
          }}
        >
          <i className="fa fa-cart-plus" style={{ paddingRight: "10px" }} /> Add
          to Cart
        </ButtonWrapper>
      </PriceWrapper>
      {rating && (
        <RatingWrapper>
          <StarRating
            editing={false}
            name={rating.name}
            value={rating.value}
            emptyStarColor={rating.emptyStarColor}
            starColor={rating.starColor}
            starCount={rating.starCount}
          />
        </RatingWrapper>
      )}
    </ItemWrapper>
  );
};
ItemBox.propTypes = {
  reverse: PropTypes.bool,
  details: PropTypes.object,
  transparent: PropTypes.bool,
  rating: PropTypes.shape({
    value: PropTypes.number.isRequired,
    emptyStarColor: PropTypes.string.isRequired,
    starColor: PropTypes.string.isRequired,
    starCount: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }),
  addToCartClick: PropTypes.func
};
export default ItemBox;
