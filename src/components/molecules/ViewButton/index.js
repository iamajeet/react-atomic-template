import React, { Component } from "react";
import PropTypes from "prop-types";
class ViewButton extends React.Component {
  constructor(props) {
    super(props);
  }
  viewItem = e => {
    alert("view " + this.props.rowData.name);
    console.log(this.props.rowData, this.props.tdData);
  };
  render() {
    return (
      <td>
        <input
          type="button"
          className="btn btn-default"
          value="View"
          onClick={e => {
            this.viewItem(e);
          }}
        />
      </td>
    );
  }
}
ViewButton.propTypes = {
  rowData: PropTypes.object,
  tdData: PropTypes.string
};

export default ViewButton;
