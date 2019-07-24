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
  border-bottom: 2px solid ${palette("grayscale", 8)};
`;
class Tree extends Component {
  render() {
    const { tree, id } = this.props;
    return (
      <>
        <Link
          serialNo={tree.serialNo}
          id={id}
          img={Arrow}
          name={tree.name}
          level={tree.children && tree.children.length > 0 ? false : true}
        />
        <StyledUL id={`children_${id}`} className="tree-close">
          {tree.children.map((tree, index) => {
            return (
              <LI
                key={index}
                id={id + "_" + index}
                className={
                  tree.children && tree.children.length > 0
                    ? "link-with-icon"
                    : ""
                }
              >
                {tree.children && tree.children.length > 0 ? (
                  <Tree
                    tree={tree}
                    id={id + "_" + index}
                    onItemClick={this.props.onItemClick}
                  />
                ) : (
                  <Link
                    id={id + "_" + index}
                    name={tree.name}
                    serialNo={tree.serialNo}
                    level={
                      tree.children && tree.children.length > 0 ? false : true
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
