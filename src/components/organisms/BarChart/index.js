import React, { Component } from "react";
import PropTypes from "prop-types";
const Chart = require("chart.js");
class BarChart extends Component {
  constructor(props) {
    super(props);
    this.myChart = {};
  }
  componentDidMount() {
    const node = this.node;
    console.log("----------", Chart);
    this.myChart = new Chart(node, {
      type: "bar",
      data: this.props.data,
      options: this.props.options
    });
  }
  componentWillUnmount = () => {
    this.myChart = {};
  };

  render() {
    const { ...props } = this.props;
    return (
      <div>
        <canvas style={props.canvasStyle} ref={node => (this.node = node)} />
      </div>
    );
  }
}
BarChart.propTypes = {
  canvasStyle: PropTypes.object,
  data: PropTypes.object,
  options: PropTypes.object
};
export default BarChart;
