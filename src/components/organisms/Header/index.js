import React, { Component } from "react";
import styled from "styled-components";
import { palette } from "styled-theme";
import { Navbar, Media } from "react-bootstrap";
import { ToggleButton, Avatar, Block } from "../../../components";
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
        <ToggleButton
          aria-controls="basic-navbar-nav"
          collapsed={props.collapsedStatus}
          onClick={() => {
            props.onLeftNavCollapse();
          }}
        />
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse> */}
        <TopNavigation />
        <Avatar navOptions={LINKS} />
      </NavBarWrapper>
    );
  }
}

export default Header;
