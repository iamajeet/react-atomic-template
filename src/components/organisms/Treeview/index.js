import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { size, palette, font } from "styled-theme";
import Tree from "./tree";
import Link from "./link";
import "./tree.css";

const DIV = styled.div`
  max-width: 100%;
  overflow: auto;
  font: 12px ${font("primary")};
  height: auto;
`;
const UL = styled.ul`
  list-style: none;
  list-style-type: none;
  list-style-image: none;
  color: ${palette("grayscale", 0)};
  padding: 5px 5px 5px 25px;
`;
const LI = styled.li`
  margin-left: 0;
  margin-right: 0;
  padding: 5px 0;
  margin: 2px 0;
`;

class TreeView extends Component {
  state = { expand: false };
  static propTypes = {
    treeData: PropTypes.array.isRequired,
    rootNameKey: PropTypes.string.isRequired,
    displayNameKey: PropTypes.string.isRequired,
    onExpandedNode: PropTypes.func,
    onSelectedNode: PropTypes.func,
    variant: PropTypes.string,
    expandAll: PropTypes.bool
  };

  static defaultProps = {
    search: false,
    variant: "secondary",
    rootNameKey: "children",
    displayNameKey: "name",
    onExpandedNode: () => undefined,
    onSelectedNode: () => undefined,
    expandAll: false
  };

  getId = id => {
    if (!id) return false;
    id = id.split("_");
    id.shift();
    return id.join("_");
  };

  updateClassOnNode = element => {
    // debugger;
    if (element.classList) {
      element.classList.toggle("tree-open");
    } else {
      let classes = element.className.split(" ");
      let i = classes.indexOf("tree-open");
      if (i >= 0) classes.splice(i, 1);
      else classes.push("tree-open");
      element.className = classes.join(" ");
    }
  };
  updateAllClassOnNode = element => {
    let classes = element.className.split(" ");
    let i = classes.indexOf("tree-open");
    if (!this.state.expand) {
      if (i >= 0) classes.splice(i, 1);
      classes.push("tree-open");
    } else {
      if (i >= 0) classes.splice(i, 1);
    }
    element.className = classes.join(" ");
    // }
  };
  expandAllNode = e => {
    e.preventDefault();
    let ex = !this.state.expand;
    this.setState({ expand: ex });
    let element = document.getElementById("treeviewul");
    this.nestedChild(element);
  };
  nestedChild = element => {
    let child = element.getElementsByTagName("ul");
    console.log("child ", child.length);
    for (let i = 0; i < child.length; i++) {
      this.updateAllClassOnNode(child[i]);
    }

    let imgElements = element.getElementsByTagName("IMG");
    for (let i = 0; i < imgElements.length; i++) {
      this.rotateAll(imgElements[i], imgElements[i].nodeName);
    }
  };
  getTargetNode = async event => {
    event.preventDefault();
    const elementId = this.getId(event.target.id),
      element = document.getElementById(`children_${elementId}`);
    if (element) {
      if (event.target && event.target.nodeName) {
        this.rotate(event.target, event.target.nodeName);
      }

      this.updateClassOnNode(element);
      if (event.target.dataset.tree) {
        this.props.onExpandedNode({
          elementId,
          details: JSON.parse(event.target.dataset.tree)
        });
      }
    } else {
      if (event.target.dataset.tree) {
        this.props.onSelectedNode({
          elementId,
          details: JSON.parse(event.target.dataset.tree)
        });
      }
    }
  };

  rotate = (node, nodeName) => {
    if (nodeName === "IMG") {
      node.classList.toggle("rotate");
    } else {
      if (node.previousSibling && node.previousSibling.nodeName === "IMG") {
        node.previousSibling.classList.toggle("rotate");
      }
    }
  };
  rotateAll = (node, nodeName) => {
    if (nodeName === "IMG") {
      // node.classList.toggle("rotate");
      let classes = node.className.split(" ");
      innerRotate(classes, this.state.expand);
      node.className = classes.join(" ");
    } else {
      if (node.previousSibling.nodeName === "IMG") {
        // node.previousSibling.classList.toggle("rotate");
        let classes = node.previousSibling.className.split(" ");
        innerRotate(classes, this.state.expand);
        node.previousSibling.className = classes.join(" ");
      }
    }
    function innerRotate(classes, expand) {
      let i = classes.indexOf("rotate");
      if (!expand) {
        if (i >= 0) classes.splice(i, 1);
        classes.push("rotate");
      } else {
        if (i >= 0) classes.splice(i, 1);
      }
    }
  };

  render() {
    const {
      treeData,
      className,
      style,
      rootNameKey,
      expandAll,
      variant,
      displayNameKey
    } = this.props;
    return (
      <div className={className} style={style}>
        {expandAll && (
          <div className="expand-collapse-button">
            <Button
              variant={variant}
              onClick={e => {
                this.expandAllNode(e);
              }}
            >
              {this.state.expand && <i className="fa fa-minus-square-o " />}
              {!this.state.expand && <i className="fa fa-plus-square-o" />}
            </Button>
          </div>
        )}
        <DIV className="tree-view-container">
          <UL id="treeviewul">
            {treeData &&
              treeData.map((tree, index) => {
                return (
                  <LI
                    key={index}
                    id={index}
                    className={
                      tree[rootNameKey] && tree[rootNameKey].length > 0
                        ? "link-with-icon"
                        : ""
                    }
                  >
                    {tree[rootNameKey] && tree[rootNameKey].length > 0 ? (
                      <Tree
                        tree={tree}
                        id={index}
                        rootNameKey={rootNameKey}
                        displayNameKey={displayNameKey}
                        itemClick={this.getTargetNode}
                      />
                    ) : (
                      <Link
                        itemClick={e => this.getTargetNode(e)}
                        data={tree}
                        displayName={displayNameKey}
                        id={index}
                        to="#"
                        level={tree[rootNameKey].length > 0 ? false : true}
                      />
                    )}
                  </LI>
                );
              })}
          </UL>
        </DIV>
      </div>
    );
  }
}

export default TreeView;
