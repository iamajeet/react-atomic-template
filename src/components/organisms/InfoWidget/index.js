import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { palette } from "styled-theme";
import { CardBox } from "../../../components";
import { ProgressBar } from "react-bootstrap";
const TitleStyled = styled.div`
  width: 100%;
  display: flex;
`;
const DetailsStyled = styled.div`
  width: 100%;
  display: flex;
  font-size: 50px;
`;
const ProgressBarStyled = styled(ProgressBar)`
  width: 100%;
  display: flex;
  height: 5px;
`;
const OtherDetailsStyled = styled.div`
  width: 100%;
  display: flex;
`;

const InfoWidget = ({ ...props }) => {
  return (
    <CardBox
      width={props.width}
      responsive={props.responsive}
      breakpoint={props.breakpoint}
      bgcolor={props.bgcolor}
      minheight={props.cardminheight}
    >
      {props.title && <TitleStyled>{props.title}</TitleStyled>}
      {props.details && <DetailsStyled> {props.details}</DetailsStyled>}
      {props.progress && (
        <ProgressBarStyled
          variant={props.progressvariant}
          striped={props.progressstriped}
          now={props.progress}
        />
      )}
      {props.otherdetails && (
        <OtherDetailsStyled>{props.otherdetails}</OtherDetailsStyled>
      )}
    </CardBox>
  );
};
InfoWidget.propTypes = {
  responsive: PropTypes.bool,
  bgcolor: PropTypes.string,
  width: PropTypes.string,
  breakpoint: PropTypes.number,
  progress: PropTypes.number,
  progressstriped: PropTypes.bool,
  progressvariant: PropTypes.string,
  title: PropTypes.string,
  details: PropTypes.string,
  otherdetails: PropTypes.string,
  cardminheight: PropTypes.string
};

export default InfoWidget;
