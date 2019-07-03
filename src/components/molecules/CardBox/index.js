import React from "react";
import styled, { css } from "styled-components";
import { ifProp, prop } from "styled-tools";
import { palette } from "styled-theme";
import { Card } from "react-bootstrap";

const cardWidth = ({ width }) => (width ? width : "100%");
const cardMinHeight = ({ minheight }) => (minheight ? minheight : "100%");
const bgColor = ({ bgcolor }) => (bgcolor ? bgcolor : palette("grayscale", 5));
const CardWapper = styled(Card)`
  .card {
    background-color: ${bgColor};
    width: ${cardWidth};
    min-height: ${cardMinHeight};
    padding: 10px;
    margin: auto;
    ${ifProp(
      "responsive",
      css`
        @media screen and (max-width: ${prop("breakpoint")}px) {
          width: 100%;
        }
      `
    )}
  }
`;

const CardBox = ({ children, ...props }) => (
  <CardWapper {...props}>
    <Card {...props}>{children}</Card>
  </CardWapper>
);

export default CardBox;
