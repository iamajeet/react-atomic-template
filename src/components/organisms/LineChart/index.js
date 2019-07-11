import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { palette } from "styled-theme";
const Chart = require("chart.js");
class LineChart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;
    console.log("----------", Chart);
    var myChart = new Chart(node, {
      type: "line",
      data: this.props.data,
      options: this.props.options
    });
  }

  render() {
    const { ...props } = this.props;
    return (
      <div>
        <canvas style={props.canvasStyle} ref={node => (this.node = node)} />
      </div>
    );
  }
}

export default LineChart;
