import React, { Component } from "react";
import styled from "styled-components";
import { palette } from "styled-theme";
import { ButtonToolbar, OverlayTrigger, Popover } from "react-bootstrap";
import { IconLink, Block } from "../../../components";

const StyledAvatarIcon = styled(Block)`
  padding: 0 5px;
  cursor: pointer;
  & i {
    font-size: 26px !important;
    padding: 10px 0px;
    color: ${palette("white", 0)};
  }
`;
const PopoverWrapper = styled(Popover)`
  background-color: ${palette("grayscale", 5)};
  & .arrow::after,
  .bs-popover-bottom > .arrow::after {
    border-bottom-color: ${palette("grayscale", 5)};
  }
  &.bs-popover-bottom {
    margin-top: 0px !important;
  }
`;
class Avatar extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <ButtonToolbar>
        <OverlayTrigger
          trigger="click"
          key="bottom"
          placement="bottom"
          rootClose
          overlay={
            <PopoverWrapper
              id="popover-positioned-bottom"
              title={
                props.userProfile &&
                props.userProfile.firstName + " " + props.userProfile.lastName
              }
            >
              {props.navOptions &&
                props.navOptions.map((link, index) => {
                  return <IconLink link={link} key={index} />;
                })}
            </PopoverWrapper>
          }
        >
          <StyledAvatarIcon>
            <i className="fa fa-user-circle" />
          </StyledAvatarIcon>
        </OverlayTrigger>
      </ButtonToolbar>
    );
  }
}
export default Avatar;
