import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { font, palette } from "styled-theme";
import { prop } from "styled-tools";
import { PSSTh } from "./PSSTh";
import { PSSTd } from "./PSSTd";
import { TablePagination } from "./pagination";
import { PaginationByStep } from "./paginationByStep";
import { TableCell, TableRow } from "../../../components";
import { Caption } from "../..";
const altBackgroundColor = ({ stripedRow, stripColor }) =>
  stripedRow ? stripColor : "none";
const StyledTable = styled.table`
  font-family: ${font("primary")};
  border-collapse: collapse;
  width: 100%;
  border: 1px solid ${palette("grayscale", 1, true)};
  color: ${palette("grayscale", 0)};
  thead th {
    white-space: nowrap;
    cursor: pointer;
    position: relative;
    text-align: center;
    min-height: 40px;
    background-color: ${palette("dark", 1, true)};
    color: #fff;
    padding: 5px;
    line-height: 25px;
    height: 40px;
    border-bottom: 1px solid ${palette("grayscale", 1, true)};
  }

  thead th.sort-desc,
  thead th.sort-asc {
    background-color: #e0914c;
    border-bottom: 5px solid #c70000;
  }

  // tbody td:first-child {
  //   background-color: #f9f9f9;
  //   font-family: "Oxygen", sans-serif;
  // }
  tbody td {
    border: ${prop("cellBorder")};
  }

  tbody tr:nth-child(even) {
    background-color: ${altBackgroundColor};
  }
  tbody tr:hover {
    background-color: ${palette("primary", 1, true)};
    color: ${palette("white", 0)};
  }
`;

class PSSTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.tblData || [],
      asc: (this.props.dKey || []).reduce((acc, cur) => {
        return Object.assign({}, acc, { [cur]: null });
      }, {}),
      filter: "",
      pagers: {
        paging: this.props.paging,
        curr: 1,
        rowsPerPage: this.props.defaultRowsPerPage
      }
    };
    //constructor is only invoked when the component is first created. if data change, need to update on componentWillReceiveProps
    this.sortData = this.sortData.bind(this);
    this.filter = this.filter.bind(this);
    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.setRowsPerPage = this.setRowsPerPage.bind(this);
    if (props.defaultCSS === true) require("./index.scss");
  }

  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {
    //constructor is only invoked when the component is first created. if data change, need to update on componentWillReceiveProps
    if (nextProps.tblData !== this.state.data) {
      this.setState({ data: nextProps.tblData });
    }
  }
  componentDidUpdate(prevProps, prevState) {}
  filter(e) {
    let newData = this.props.tblData.filter(item => {
      for (let key in item) {
        let v = item[key] && item[key].toString().toLowerCase();
        if (v && v.indexOf(e.target.value.toLowerCase()) !== -1) {
          return true;
        }
      }
      return false;
    });
    this.setState({
      filter: e.target.value,
      data: newData
    });
  }
  sortData(dKey, nAsc) {
    let newAsc = this.state.asc;
    let newData = this.state.data;
    newData.sort((a, b) => {
      if (a[dKey] === b[dKey]) return 0;
      if (nAsc ? a[dKey] > b[dKey] : a[dKey] < b[dKey]) return 1;
      if (nAsc ? a[dKey] < b[dKey] : a[dKey] > b[dKey]) return -1;
      return 0;
    });
    for (let prop in newAsc) {
      newAsc[prop] = null;
    }
    this.setState({
      asc: Object.assign({}, newAsc, { [dKey]: nAsc }),
      data: newData
    });
  }
  setCurrentPage(i) {
    let index = parseInt(i);
    this.setState({
      pagers: Object.assign({}, this.state.pagers, { curr: index })
    });
  }
  setRowsPerPage(i) {
    let index = parseInt(i);
    let nCurr = this.state.pagers.curr;
    let pagesCount = Math.ceil(this.state.data.length / index);
    //console.log(this.state.pagers.curr, pagesCount, index);
    if (this.state.pagers.curr >= pagesCount) nCurr = pagesCount - 1;
    this.setState({
      pagers: Object.assign({}, this.state.pagers, {
        rowsPerPage: index,
        curr: nCurr
      })
    });
  }
  render() {
    let pageData = this.state.data;
    let pagers = this.state.pagers;
    let pagesCount = Math.ceil(this.state.data.length / pagers.rowsPerPage);
    if (pagers.paging) {
      pageData = pageData.slice(
        (pagers.curr - 1) * pagers.rowsPerPage,
        pagers.curr * pagers.rowsPerPage
      );
    }
    return (
      <div className="table-responsive">
        <div className="sortable-table">
          {this.props.search && (
            <div className="search-box">
              Search:{" "}
              <input
                className="search"
                type="text"
                name=""
                value={this.state.filter}
                placeholder="Filter Result"
                onChange={this.filter}
              />
            </div>
          )}
          {pagers.paging ? (
            <>
              {!this.props.paginationByStep ? (
                <TablePagination
                  curr={pagers.curr}
                  totalPage={pagesCount}
                  setCurrentPage={this.setCurrentPage}
                  showPerPageOption={this.props.showPerPageOption}
                  setRowsPerPage={this.setRowsPerPage}
                  totalsCount={this.state.data.length}
                  rowPerPage={pagers.rowsPerPage}
                  showTotal={this.props.showTotal}
                  nextText={this.props.nextText}
                  prevText={this.props.prevText}
                />
              ) : (
                <PaginationByStep
                  curr={pagers.curr}
                  totalPage={pagesCount}
                  setCurrentPage={this.setCurrentPage}
                  rowPerPage={pagers.rowsPerPage}
                  nextText={this.props.nextText}
                  prevText={this.props.prevText}
                  step={this.props.step}
                />
              )}
            </>
          ) : (
            ""
          )}
          <StyledTable {...this.props}>
            <thead>
              <TableRow>
                {this.props.dKey.map((item, id) => {
                  return (
                    <PSSTh
                      key={id}
                      sortData={this.sortData}
                      asc={this.state.asc[item]}
                      dataKey={item}
                      sortable={this.props.sortable}
                    >
                      {this.props.tHead[parseInt(id)]}
                    </PSSTh>
                  );
                })}
              </TableRow>
            </thead>
            <tbody>
              {pageData.map((item, id) => {
                return (
                  <PSSTd
                    key={id}
                    tdData={item}
                    {...this.props}
                    dKey={this.props.dKey}
                    customTd={this.props.customTd}
                  />
                );
              })}
            </tbody>
          </StyledTable>
        </div>
      </div>
    );
  }
}
PSSTable.propTypes = {
  tblData: PropTypes.array,
  tHead: PropTypes.array,
  dKey: PropTypes.array,
  customTd: PropTypes.array,
  paging: PropTypes.bool,
  search: PropTypes.bool,
  defaultCSS: PropTypes.bool,
  showPerPageOption: PropTypes.bool,
  defaultRowsPerPage: PropTypes.number,
  stripedRow: PropTypes.bool,
  stripColor: PropTypes.string,
  cellBorder: PropTypes.string,
  showTotal: PropTypes.bool,
  nextText: PropTypes.string,
  prevText: PropTypes.string,
  sortable: PropTypes.bool,
  paginationByStep: PropTypes.bool,
  step: PropTypes.number
};

PSSTable.defaultProps = {
  tblData: [],
  tHead: [],
  dKey: [],
  customTd: [],
  paging: true,
  search: true,
  defaultCSS: true,
  showPerPageOption: true,
  defaultRowsPerPage: 5,
  stripedRow: true,
  stripColor: "#CCC",
  cellBorder: "1px solid #000",
  showTotal: true,
  nextText: "Next",
  prevText: "Prev",
  sortable: true,
  paginationByStep: false,
  step: 3
};

export default PSSTable;
