import React from "react";
import styled from "styled-components";
import { Block } from "../../../components";
import { Navbar } from "react-bootstrap";
import { size, palette } from "styled-theme";
const SubContainer = styled(Block)`
  display: grid;
  width: 100%;
  text-align: center;
  font-size: ${size("s14px")};
  color: ${palette("white", 0)};
  padding: ${size("iconPadding")};
`;
const NavBarWrapper = styled(Navbar)`
  &.bg-dark {
    background-color: ${palette("grayscale", 8)} !important;
  }
`;
const Footer = props => {
  return (
    <NavBarWrapper bg="dark" variant="dark" expand="lg">
      <SubContainer>Copy Rights</SubContainer>
    </NavBarWrapper>
  );
};

export default Footer;
