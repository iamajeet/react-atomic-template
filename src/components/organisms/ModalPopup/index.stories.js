import React from "react";
import { storiesOf } from "@storybook/react";
import { ModalPopup } from "../../../components";
let show = true;
storiesOf("ModalPopup", module).addWithJSX("default", () => (
  <ModalPopup
    size="lg"
    show={show}
    headerTitle="Hello"
    onHide={() => {
      show = false;
    }}
  />
));
