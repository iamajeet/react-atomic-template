import React from "react";
import PropTypes from "prop-types";
import { CardBox } from "../../../components";
const InfoWidget = ({ ...props }) => {
  return (
    <CardBox
      width={props.width}
      responsive={props.responsive}
      breakpoint={props.breakpoint}
      bgcolor={props.bgcolor}
      minheight={props.cardminheight}
      maxheight={props.cardmaxheight}
      style={props.style}
    >
      {props.title}
      {props.details}
      {props.progress}
      {props.otherdetails}
    </CardBox>
  );
};
InfoWidget.propTypes = {
  style: PropTypes.object,
  responsive: PropTypes.bool,
  bgcolor: PropTypes.string,
  width: PropTypes.string,
  breakpoint: PropTypes.number,
  progress: PropTypes.object,
  title: PropTypes.object,
  details: PropTypes.object,
  otherdetails: PropTypes.object,
  cardminheight: PropTypes.string,
  cardmaxheight: PropTypes.string
};

export default InfoWidget;
