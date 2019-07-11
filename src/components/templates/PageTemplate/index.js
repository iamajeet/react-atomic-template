import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { size, palette } from "styled-theme";
import { Container } from "react-bootstrap";
import { Block } from "../../../components";

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;
const ContentWrapper = styled(Block)`
  position: absolute;
  height: ${size("height")};
  overflow-y: auto;
  top: 60px;
  margin: auto;
  width: 100%;
`;

const RightContent = styled(Block)`
  background: ${palette("white", 0)};
  width: auto;
  position: relative;
  height: ${size("height")};
  overflow: auto;
  padding: 0px 5px;
`;

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: auto;
  padding: 0rem 1rem;
  max-width: ${size("maxWidth")};
`;

const Footer = styled.footer`
  margin-top: auto;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const PageTemplate = ({
  header,
  children,
  footer,
  leftNavigation,
  ...props
}) => {
  return (
    <>
      <Container fluid="true">
        <Header {...props}>{header}</Header>
        <ContentWrapper>
          {leftNavigation}
          <RightContent {...props}>
            <Content>{children}</Content>
          </RightContent>
        </ContentWrapper>
        <Footer {...props}>{footer}</Footer>
      </Container>
    </>
  );
};

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  leftNavigation: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired
};

export default PageTemplate;
