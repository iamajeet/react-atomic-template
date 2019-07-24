import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { palette, size } from "styled-theme";
import { StarRating } from "../../../components";

const ItemWrapper = styled.div`
  width: 100%;
  height: auto;
  background: ${palette("white", 0)};
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 ${palette("grayscale", 9)},
    0 6px 20px 0 ${palette("grayscale", 9)};
`;

const bgImage = ({ details }) => `url("${details.imageSrc}")`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  text-align: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left center;
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

const TitleWrapper = styled.div`
  width: auto;
  height: 45px;
  overflow: hidden;
  margin: 2px 0;
  padding: 0px 5px;
  font-size: ${size("s14px")};
  font-weight: bold;
  text-align: left;
  border: 1px solid ${palette("grayscale", 5)};

  border-radius: 5px;
  color: ${palette("grayscale", 0)};
`;

const CodeWrapper = styled.div`
  width: auto;
  height: auto;
  padding: 0px 5px;
  font-size: ${size("s12px")};
  border: 1px solid ${palette("grayscale", 5)};

  border-radius: 5px;
  color: ${palette("grayscale", 0)};
  display: flex;
  justify-content: space-between;
`;

const RatingWrapper = styled.div`
  width: auto;
  padding: 5px;
  margin: 2px;
  text-align: left;
  color: #ccc;
`;

const ItemBox = ({
  palette,
  rating,
  reverse,
  transparent,
  addToCartClick,
  ...props
}) => {
  return (
    <ItemWrapper onClick={props.itemClick}>
      <ImageWrapper
        {...props}
        style={{ backgroundPosition: "center center" }}
      />

      <TitleWrapper>{props.details.name}</TitleWrapper>
      <CodeWrapper>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          Serial No. - {props.details.serialNo}
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          |
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          Order No. - {props.details.orderNo}
        </span>
      </CodeWrapper>
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
  itemClick: PropTypes.func,
  addToCartClick: PropTypes.func
};
export default ItemBox;
