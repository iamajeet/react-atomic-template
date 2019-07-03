import React from "react";
import { storiesOf } from "@storybook/react";
import { InfoWidget } from "../../../components";

storiesOf("InfoWidget", module).addWithJSX("default", () => (
  <InfoWidget
    responsive={true}
    width="100%"
    breakpoint="768"
    progress="60"
    progressstriped={false}
    progressvariant="primary"
    title="My Product"
    details="10"
    bgcolor="#c0c0c0"
  />
));
