import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const StyledUL = styled.ul`
  position: absolute;
  left: 50%;
  bottom: -40px;
  padding: 0;
  transform: translateX(-50%);
`;
const StyledButton = styled.button`
  display: inline-block;
  list-style: none;
  margin: 0 5px;
  border: 0;
  background: none;
  cursor: pointer;
`;
const StyledIcon = styled.i`
  display: block;
  background-color: #e5e5e5;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;
const StyledIconActive = styled.i`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #48799a;
`;

function TrayCarouselDots({ numberOfDots, activePage, onClick }) {
  const dots = [];

  for (let i = 0; i < numberOfDots; i += 1) {
    dots.push(
      <StyledButton data-index={i} key={i + 1} onClick={onClick}>
        {i === activePage ? <StyledIconActive /> : <StyledIcon />}
      </StyledButton>
    ); // eslint-disable-line react/jsx-closing-tag-location
  }

  return <StyledUL>{dots}</StyledUL>;
}

TrayCarouselDots.propTypes = {
  numberOfDots: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default TrayCarouselDots;
