import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const StyledButton = styled.button`
  display: block;
  background: none;
  border: none;
  position: absolute;
  top: 50%;
  z-index: 2;
  outline: none;
  transform: translateY(-50%);
  cursor: pointer;
`;
const StyledButtonNext = styled(StyledButton)`
  left: auto;
  right: 15px;
`;
const StyledButtonPrev = styled(StyledButton)`
  left: 15px;
  right: auto;
`;
const StyledIcon = styled.i`
  display: inline-block;
  padding: 10px;
  border: solid #e5e5e5;
  border-width: 0 5px 5px 0;
`;
const StyledIconNext = styled(StyledIcon)`
  transform: rotate(-45deg);
`;
const StyledIconPrev = styled(StyledIcon)`
  transform: rotate(135deg);
`;

function TrayCarouselArrow({ next, onClick }) {
  let navigationButton;
  if (next) {
    navigationButton = (
      <StyledButtonNext onClick={onClick}>
        <StyledIconNext />
      </StyledButtonNext>
    );
  } else {
    navigationButton = (
      <StyledButtonPrev onClick={onClick}>
        <StyledIconPrev />
      </StyledButtonPrev>
    );
  }

  return <> {navigationButton}</>;
}

TrayCarouselArrow.propTypes = {
  next: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

TrayCarouselArrow.defaultProps = {
  next: true
};

export default TrayCarouselArrow;
