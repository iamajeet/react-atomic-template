import React, { Component } from "react";
import styled from "styled-components";
import { size, palette, font } from "styled-theme";
import Arrow from "./arrow.svg";
import Link from "./link";
const StyledUL = styled.ul`
  list-style: none;
  list-style-type: none;
  list-style-image: none;
  color: ${palette("grayscale", 0)};
`;
const LI = styled.li`
  padding: 5px 0;
  margin: 2px 0;
`;
class Tree extends Component {
  render() {
    const { tree, id } = this.props;
    return (
      <>
        <Link
          itemClick={e => {
            this.props.itemClick(e);
          }}
          data={tree}
          to="#"
          displayName={tree[this.props.displayNameKey]}
          id={id}
          img={Arrow}
          level={
            tree[this.props.rootNameKey] &&
            tree[this.props.rootNameKey].length > 0
              ? false
              : true
          }
        />
        <StyledUL id={`children_${id}`} className="tree-close">
          {tree[this.props.rootNameKey].map((tree, index) => {
            return (
              <LI
                key={index}
                id={id + "_" + index}
                className={
                  tree[this.props.rootNameKey] &&
                  tree[this.props.rootNameKey].length > 0
                    ? "link-with-icon"
                    : ""
                }
              >
                {tree[this.props.rootNameKey] &&
                tree[this.props.rootNameKey].length > 0 ? (
                  <Tree
                    tree={tree}
                    id={id + "_" + index}
                    rootNameKey={this.props.rootNameKey}
                    displayNameKey={this.props.displayNameKey}
                    itemClick={this.props.itemClick}
                  />
                ) : (
                  <Link
                    itemClick={e => {
                      this.props.itemClick(e);
                    }}
                    data={tree}
                    displayName={tree[this.props.displayNameKey]}
                    id={id + "_" + index}
                    to="#"
                    level={
                      tree[this.props.rootNameKey] &&
                      tree[this.props.rootNameKey].length > 0
                        ? false
                        : true
                    }
                  />
                )}
              </LI>
            );
          })}
        </StyledUL>
      </>
    );
  }
}

export default Tree;
