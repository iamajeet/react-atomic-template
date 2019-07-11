import React from "react";
import PropTypes from "prop-types";
import { TableCell } from "../../../components";
class PSSTh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortCssClass: "fa fa-sort"
    };
    this.sort = this.sort.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    //constructor is only invoked when the component is first created. if data change, need to update on componentWillReceiveProps
    let a = "fa fa-sort";
    switch (nextProps.asc) {
      case null:
        a = "fa fa-sort";
        break;
      case true:
        a = "fa fa-sort-amount-asc";
        break;
      case false:
        a = "fa fa-sort-amount-desc";
        break;
    }
    //console.log(a);
    if (nextProps.asc !== this.props.asc) {
      this.setState({ sortCssClass: a });
    }
  }
  sort() {
    this.props.sortData(this.props.dataKey, !this.props.asc);
  }
  render() {
    return (
      <>
        {this.props.sortable && (
          <TableCell heading onClick={this.sort}>
            {this.props.children}{" "}
            <i className={this.state.sortCssClass} aria-hidden="true" />
          </TableCell>
        )}
        {!this.props.sortable && (
          <TableCell heading>{this.props.children}</TableCell>
        )}
      </>
    );
  }
}
PSSTh.propTypes = {
  asc: PropTypes.bool,
  sortData: PropTypes.func.isRequired,
  dataKey: PropTypes.string,
  children: PropTypes.node,
  sortable: PropTypes.bool
};

export { PSSTh };
