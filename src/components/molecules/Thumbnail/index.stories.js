import React from "react";
import { storiesOf } from "@storybook/react";
import { Thumbnail } from "../../../components";

storiesOf("Thumbnail", module)
  .addWithJSX("default", () => (
    <Thumbnail
      enlarge={true}
      onEnlarge={() => {
        console.log("enlarge");
      }}
    />
  ))
  .addWithJSX("With Children", () => (
    <Thumbnail
      enlarge={true}
      onEnlarge={() => {
        console.log("enlarge");
      }}
    >
      <span>test content</span>
    </Thumbnail>
  ))
  .addWithJSX("With background", () => (
    <Thumbnail
      enlarge={true}
      onEnlarge={() => {
        console.log("enlarge");
      }}
      backgroundImagePath="https://picsum.photos/1200/300"
    />
  ));
