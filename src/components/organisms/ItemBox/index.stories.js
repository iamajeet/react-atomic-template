import React from "react";
import { storiesOf } from "@storybook/react";
import { ItemBox } from "../../../components";
const details = {
  title: "Product 1",
  price: "100",
  currency: "$",
  imgsrc: "https://picsum.photos/200/300"
};

const starRating = {
  starCount: 5,
  name: "product-rating",
  value: 4.5,
  starColor: "#ffb400",
  emptyStarColor: "#333"
};
storiesOf("ItemBox", module)
  .addWithJSX("default", () => (
    <ItemBox details={details} rating={starRating} palette="secondary" />
  ))
  .addWithJSX("reverse", () => (
    <ItemBox
      details={details}
      rating={starRating}
      palette="secondary"
      reverse
    />
  ));
