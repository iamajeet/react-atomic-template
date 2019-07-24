import React from "react";
import { storiesOf } from "@storybook/react";
import { TrayCarousel } from "../../../components";
import styled from "styled-components";
const responsive = [
  { breakPoint: 1024, cardsToShow: 2 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 760, cardsToShow: 2 }
];
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
storiesOf("TrayCarousel", module).addWithJSX("default", () => (
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
));
