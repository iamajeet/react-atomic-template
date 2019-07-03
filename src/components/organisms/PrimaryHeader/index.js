import React, { Component } from "react";
import styled from "styled-components";
import { palette } from "styled-theme";
import { Navbar, Media } from "react-bootstrap";
import { PrimaryNavigation, Avatar, Block } from "../../../components";
const LINKS = [
  {
    name: "HomePage",
    link: "/",
    icon: "fa fa-tachometer",
    title: "Home Page",
    style: {
      marginLeft: "5px"
    }
  },
  {
    name: "SamplePage",
    link: "/sample-page",
    icon: "fa fa-video-camera",
    title: "Sample Page",
    style: {
      marginLeft: "5px"
    }
  }
];
const NavBarWrapper = styled(Navbar)`
  &.bg-dark {
    background-color: ${palette("grayscale", 8)} !important;
  }
`;
const TopNavigation = styled(Block)`
  display: flex;
  flex-grow: 1;
`;

class Header extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <NavBarWrapper
        bg="dark"
        variant="dark"
        expand="lg"
        style={{ height: "60px" }}
      >
        <Navbar.Brand href="#home">
          <Media>
            <img
              width={
                props.logoImage && props.logoImage.w ? props.logoImage.w : 40
              }
              height={
                props.logoImage && props.logoImage.h ? props.logoImage.h : 40
              }
              className="mr-3"
              src={
                props.logoImage && props.logoImage.src
                  ? props.logoImage.src
                  : "assets/images/brand-logo.png"
              }
              alt={
                props.logoImage && props.logoImage.alt
                  ? props.logoImage.alt
                  : "Brand Logo"
              }
            />
          </Media>
        </Navbar.Brand>
        <PrimaryNavigation />
        <TopNavigation />
        <Avatar navOptions={LINKS} />
      </NavBarWrapper>
    );
  }
}

export default Header;
