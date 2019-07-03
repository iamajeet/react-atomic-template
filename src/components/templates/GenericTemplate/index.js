import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { size, palette } from "styled-theme";
import { Container } from "react-bootstrap";
import { Block } from "../../../components";

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: 920px;
`;
const ContentWrapper = styled(Block)`
  position: absolute;
  height: ${size("height")};
  overflow-y: auto;
  top: 60px;
  margin: auto;
  width: 100%;
`;
const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;
const Footer = styled.footer`
  margin-top: auto;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const GenericTemplate = ({ children, header, footer, ...props }) => {
  return (
    <Container fluid="true" {...props}>
      <Header {...props}>{header}</Header>
      <ContentWrapper {...props}>
        <Content>{children}</Content>
      </ContentWrapper>
      <Footer {...props}>{footer}</Footer>
    </Container>
  );
};

GenericTemplate.propTypes = {
  children: PropTypes.any.isRequired,
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired
};

export default GenericTemplate;
