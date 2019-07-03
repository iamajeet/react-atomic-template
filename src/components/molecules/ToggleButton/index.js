import React from "react";
import styled from "styled-components";
import { ifProp } from "styled-tools";
import { Block } from "../../../components";
import { palette } from "styled-theme";

const StyledButton = styled(Block)`
  width: ${ifProp("hasText", "auto", "2.5em")};
  padding: ${ifProp("hasText", "0 0.4375em", 0)};
  flex: 0 0 2.5em;
  box-sizing: border-box;
  cursor: pointer;
`;
const StyledSpan = styled.span`
  display: block;
  width: 20px;
  height: 2px;
  margin: 0 auto;
  background-color: ${props =>
    props.collapsed ? palette("white", 0) : palette("grayscale", 3)};
  border-radius: 1px;
  transition: all 0.15s;
  opacity: 0.7;

  + .icon-bar {
    margin-top: 4px;
  }
`;
const StyledSpanMargin = styled.span`
  display: block;
  width: 20px;
  height: 2px;
  margin: 0 auto;
  background-color: ${props =>
    props.collapsed ? palette("white", 0) : palette("grayscale", 3)};
  border-radius: 1px;
  transition: all 0.15s;
  opacity: 0.7;
  margin-top: 4px;
`;

const ToggleButton = props => {
  return (
    <StyledButton {...props}>
      <StyledSpan {...props} />
      <StyledSpanMargin {...props} />
      <StyledSpanMargin {...props} />
    </StyledButton>
  );
};

export default ToggleButton;
