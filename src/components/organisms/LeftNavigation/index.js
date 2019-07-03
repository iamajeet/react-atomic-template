import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Block } from "../../../components";
import { ifProp, prop } from "styled-tools";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { size, palette } from "styled-theme";
const collapsed = ({ collapsedStatus, containerWidth }) =>
  collapsedStatus ? "0px" : containerWidth + "px";
const ContentContainer = styled(Block)`
  background: ${palette("grayscale", 9)};
  // border: 0.5px solid ${palette("grayscale", 0)};
  width: ${collapsed};
  position: relative;
  font-size: ${size("s12px")};
  float: left;
  height: ${size("height")};
  overflow-y: auto;
  overflow-x: hidden;
  transition: width 0.25s ease-out;
  z-index: 0;
  ${ifProp(
    "responsive",
    css`
      @media screen and (max-width: ${prop("breakPoint")}px) {
        position: absolute;
        z-index: 99;
      }
    `
  )}
`;
const linkColor = ({ color }) => (color ? color : palette("white", 0));
const StyledLink = styled(Link)`
  padding: 5px 10px;
  cursor: pointer;
  color: ${linkColor};
  height: 40px;
  line-height: 30px;
  overflow: hidden;
  border-bottom: 0.5px solid ${palette("grayscale", 8)};
  &:hover {
    text-decoration: none;
    color: ${palette("white", 0)};
    background: ${palette("grayscale", 8)};
  }
  &:visited {
    text-decoration: none;
  }
`;

const LeftNavigation = ({ ...props }) => {
  console.log("---------------- ", props);
  return (
    <ContentContainer {...props}>
      <Nav defaultActiveKey={props.defaultActiveKey} className="flex-column">
        {props.links.map((link, key) => (
          <StyledLink to={link.to} key={key}>
            {link.icon && <i className={link.icon} />} {link.title}
          </StyledLink>
        ))}
      </Nav>
    </ContentContainer>
  );
};
LeftNavigation.propTypes = {
  collapsedStatus: PropTypes.bool.isRequired,
  breakPoint: PropTypes.number.isRequired,
  containerWidth: PropTypes.number.isRequired,
  responsive: PropTypes.bool.isRequired,
  defaultActiveKey: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    })
  )
};

export default LeftNavigation;
