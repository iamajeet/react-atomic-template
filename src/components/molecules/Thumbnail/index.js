import React, { Component } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Block } from "../../../components";
import { ifProp, prop } from "styled-tools";

const StyledBlock = styled(Block)`
  min-height: 100px;
  min-width: 100px;
  border: 1px solid #ccc;
  ${ifProp(
    "backgroundImagePath",
    css`
      background-image: url('${prop("backgroundImagePath")}');
      background-position: center center;
      background-size: contain;
      background-repeat: no-repeat;
    `
  )};
`;
class Thumbnail extends Component {
  state = {};
  render() {
    return (
      <StyledBlock
        className={this.props.className}
        style={this.props.style}
        {...this.props}
      >
        {this.props.enlarge && (
          <i
            onClick={() => {
              this.props.onEnlarge();
            }}
            className="fa fa-expand"
            aria-hidden="true"
            style={{
              position: "fixed",
              zIndex: "900",
              right: "0",
              cursor: "pointer"
            }}
          />
        )}
        {this.props.children}
      </StyledBlock>
    );
  }
}
Thumbnail.protoTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  backgroundImagePath: PropTypes.string,
  style: PropTypes.object,
  enlarge: PropTypes.bool,
  onEnlarge: PropTypes.func
};
export default Thumbnail;
