import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Block } from "../../../components";
import { size, palette } from "styled-theme";

const linkColor = ({ color }) => (color ? color : palette("grayscale", 0));
const StyledLink = styled(Link)`
  margin: ${size("iconPadding")};
  cursor: pointer;
  color: ${linkColor};
  &:hover {
    text-decoration: none;
    color: ${linkColor};
  }
  &:visited {
    text-decoration: none;
    color: ${linkColor};
  }
`;

const StyledBlock = styled(Block)`
  border-bottom: 1px solid #d3d4df;
  margin: 5px 0px;
`;

const Text = styled.span`
  padding: 5px;
`;

const IconLink = ({ ...props }) => {
  const { link, color } = props;

  return (
    <StyledBlock>
      <StyledLink to={link ? link.link : "/"} color={color ? color : ""}>
        <i className={link ? link.icon : ""} />
        <Text>{link ? link.name : ""}</Text>
      </StyledLink>{" "}
    </StyledBlock>
  );
};

export default IconLink;
