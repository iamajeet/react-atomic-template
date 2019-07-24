import React from "react";
import { storiesOf } from "@storybook/react";
import { GridListToggle } from "../../../components";

storiesOf("GridListToggle", module).addWithJSX("default", () => (
  <GridListToggle
    default="list"
    onToggle={data => {
      alert(data);
    }}
  />
));
