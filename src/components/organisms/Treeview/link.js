import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import styled from "styled-components";

const A = styled(NavLink)`
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  line-height: 24px;
  height: 24px;
  text-decoration: none;
  color: inherit;
  display: inline-block;
  white-space: nowrap;
  padding: 0 4px 0 1px;
  margin: 0;
  vertical-align: top;
`;
const IMG = styled.img`
  height: 12px;
  line-height: 24px;
  background-repeat: no-repeat;
  background-color: transparent;
  display: inline-block;
  text-decoration: none;
  margin: 0;
  padding: 5px;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
`;
const Link = props => {
  const { level, to, id, img, displayName, data } = props;
  return (
    <>
      {img && (
        <IMG
          id={`icon_${id}`}
          src={img}
          alt={displayName}
          style={{ height: "20px" }}
        />
      )}
      {level && (
        <A
          data-tree={JSON.stringify(data)}
          aria-label={displayName}
          title={displayName}
          id={`link_${id}`}
          to="#"
          activeClassName="tree-active"
          exact
          strict
          onClick={props.itemClick}
        >
          {displayName}
        </A>
      )}
      {!level && (
        <A
          data-tree={JSON.stringify(data)}
          id={`link_${id}`}
          title={displayName}
          aria-label={displayName}
          exact
          strict
          activeClassName="tree-active"
          to="#"
          onClick={props.itemClick}
        >
          {displayName}
        </A>
      )}
    </>
  );
};
export default Link;
