import React, { Component } from "react";
import PropTypes from "prop-types";
import { ButtonGroup, Button } from "react-bootstrap";
class GridListToggle extends Component {
  constructor(props) {
    super(props);
    this.state = { selectOption: props.default };
  }
  onToggle = name => {
    this.setState({ selectOption: name });
    this.props.onToggle(name);
  };
  render() {
    return (
      <ButtonGroup
        style={this.props.style}
        aria-label={this.props.ariaLabel}
        className={this.props.className}
      >
        <Button
          title="Grid View"
          variant={this.props.variant}
          onClick={() => {
            this.onToggle("grid");
          }}
          active={this.state.selectOption === "grid"}
        >
          <i className="fa fa-th" />
        </Button>
        <Button
          title="List View"
          variant={this.props.variant}
          onClick={() => {
            this.onToggle("list");
          }}
          active={this.state.selectOption === "list"}
        >
          <i className="fa fa-list" />
        </Button>
      </ButtonGroup>
    );
  }
}
GridListToggle.defaultProps = {
  ariaLabel: "",
  default: "grid",
  variant: "secondary"
};
GridListToggle.propTypes = {
  className: PropTypes.string,
  default: PropTypes.string,
  onToggle: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
  variant: PropTypes.string,
  style: PropTypes.object
};
export default GridListToggle;
