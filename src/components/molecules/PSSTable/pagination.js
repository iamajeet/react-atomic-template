import React from 'react';
import PropTypes from 'prop-types';
class TablePagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPage: this.props.curr,
      rowPerPage: this.props.rowPerPage
    };
    this.setPage = this.setPage.bind(this);
    this.addPagge = this.addPagge.bind(this);
    this.subPage = this.subPage.bind(this);
    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.setRowsPerPage = this.setRowsPerPage.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    //constructor is only invoked when the component is first created. if data change, need to update on componentWillReceiveProps
    if (nextProps.curr !== this.state.currPage) {
      this.setState({ currPage: nextProps.curr });
    }
    if (nextProps.rowPerPage !== this.state.rowPerPage) {
      this.setState({ rowPerPage: nextProps.rowPerPage });
    }
  }
  setCurrentPage(e) {
    this.setPage(parseInt(e.target.value));
  }
  addPagge() {
    if (this.state.currPage >= this.props.totalPage) return;

    this.setPage(this.state.currPage + 1);
  }
  subPage() {
    if (this.state.currPage < 1) return;

    this.setPage(this.state.currPage - 1);
  }
  setPage(i) {
    this.props.setCurrentPage(i);
    this.setState({
      currPage: i
    });
  }
  setRowsPerPage(e) {
    let i = parseInt(e.target.value);
    if (i === 'All' || isNaN(i)) i = this.props.totalsCount;
    this.props.setRowsPerPage(i);
    this.setState({
      rowPerPage: i
    });
  }
  render() {
    let nextDisableStyle = this.state.currPage >= this.props.totalPage;
    let prevDisableStyle = this.state.currPage <= 1;
    let rowPerPage = this.props.totalPage === 1 ? 'All' : this.props.rowPerPage;

    return (
      <div className="row" style={{ marginLeft: '0px', marginRight: '0px' }}>
        <div
          className="pager col-12 col-sm-7 col-md-8 col-lg-8"
          style={{ paddingLeft: '0px', paddingRight: '0px' }}
        >
          <input
            type="button"
            className="btn btn-dark form--control btn--margin-right"
            name=""
            disabled={prevDisableStyle}
            onClick={this.subPage}
            value={this.props.prevText}
          />
          <select
            onChange={this.setCurrentPage}
            value={this.state.currPage}
            className="form-control page-select form--control"
          >
            {Array.from(new Array(this.props.totalPage), (x, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <input
            type="button"
            className="btn btn-dark form--control btn--margin-left"
            name=""
            disabled={nextDisableStyle}
            onClick={this.addPagge}
            value={this.props.nextText}
          />
        </div>
        {this.props.showPerPageOption && (
          <div
            className="right col-12 col-sm-5 col-md-4 col-lg-4"
            style={{ paddingLeft: '0px', paddingRight: '0px' }}
          >
            <select
              id="rowsPerPage"
              onChange={this.setRowsPerPage}
              value={rowPerPage}
              className="form-control page-select form--control"
            >
              {[5, 10, 20, 50, 'All'].map((item, id) => {
                return (
                  <option key={id} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            <label className="SortableTblLabel">rows per page </label>
          </div>
        )}

        {this.props.showTotal && (
          <div className="desc col-sm-12 col-xs-12">
            <div>
              Page {this.state.currPage + 1} of totals {this.props.totalPage},
              totals {this.props.totalsCount} rows
            </div>
          </div>
        )}
      </div>
    );
  }
}
TablePagination.propTypes = {
  curr: PropTypes.number.isRequired,
  rowPerPage: PropTypes.number.isRequired,
  totalsCount: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setRowsPerPage: PropTypes.func.isRequired,
  showPerPageOption: PropTypes.bool,
  showTotal: PropTypes.bool,
  nextText: PropTypes.string,
  prevText: PropTypes.string
};

export { TablePagination };
