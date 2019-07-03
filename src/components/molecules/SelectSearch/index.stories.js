import React from "react";
import { storiesOf } from "@storybook/react";
import { SelectSearch } from "../../../components";

const handleDropdownSelection = (option, property) => {
  console.log("------- ", property, ": ", option);
};

const genderCollection = [
  { name: "Male", code: "Male" },
  { name: "Female", code: "Female" },
  { name: "Other", code: "Other" }
];
storiesOf("SelectSearch", module)
  .addWithJSX("default", () => (
    <SelectSearch
      name="gender"
      properties={{
        options: genderCollection,
        selectedValue: undefined,
        optionDisplayNameKey: "name",
        optionValueKey: "name"
      }}
      onOptionSelect={e => handleDropdownSelection(e, "gender")}
    />
  ))
  .addWithJSX("select value", () => (
    <SelectSearch
      reverse
      name="gender"
      properties={{
        options: genderCollection,
        selectedValue: "Female",
        optionDisplayNameKey: "name",
        optionValueKey: "name"
      }}
      onOptionSelect={e => handleDropdownSelection(e, "gender")}
    />
  ));
