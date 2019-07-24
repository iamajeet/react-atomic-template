import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
class PaginationByStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPage: this.props.curr,
      rowPerPage: this.props.rowPerPage,
      step: this.props.step,
      size: this.props.totalPage
    };
    this.code = "";
    this.e = {};
    // this.setPage = this.setPage.bind(this);
    // this.addPagge = this.addPagge.bind(this);
    // this.subPage = this.subPage.bind(this);
    // this.setCurrentPage = this.setCurrentPage.bind(this);
    // this.setRowsPerPage = this.setRowsPerPage.bind(this);
  }
  componentWillReceiveProps = nextProps => {
    //constructor is only invoked when the component is first created. if data change, need to update on componentWillReceiveProps
    if (nextProps.curr !== this.state.currPage) {
      this.setState({ currPage: nextProps.curr });
    }
    if (nextProps.rowPerPage !== this.state.rowPerPage) {
      this.setState({ rowPerPage: nextProps.rowPerPage });
    }
    if (nextProps.totalPage !== this.state.size) {
      this.setState({ size: nextProps.totalPage });
      setTimeout(() => {
        this.Init(document.getElementById("paginationByStep"), {
          size: nextProps.totalPage, // pages size
          page: nextProps.curr, // selected page
          step: this.state.step // pages before and after current
        });
      }, 0);
    }
  };
  componentDidMount = () => {
    this.Init(document.getElementById("paginationByStep"), {
      size: this.state.size, // pages size
      page: this.state.currPage, // selected page
      step: this.state.step // pages before and after current
    });
  };
  // --------------------
  // Utility
  // --------------------

  // converting initialize data
  Extend = data => {
    data = data || {};
    this.setState({ size: data.size || 300 });
    this.setState({ currPage: data.page || 1 });
    this.setState({ step: data.step || 3 });
  };

  // add pages by number (from [s] to [f])
  Add = (s, f) => {
    for (var i = s; i < f; i++) {
      this.code += "<button>" + i + "</button>";
    }
  };

  // add last page with separator
  Last = () => {
    this.code += "<i>...</i><button>" + this.state.size + "</button>";
  };

  // add first page with separator
  First = () => {
    this.code += "<button>1</button><i>...</i>";
  };

  // --------------------
  // Handlers
  // --------------------

  // change page
  Click = e => {
    this.setPage(+e.currentTarget.innerHTML);
    // this.state.currPage = +e.currentTarget.innerHTML;
    this.Start();
  };

  // previous page
  Prev = e => {
    //this.state.currPage--;
    this.setPage(--this.state.currPage);
    if (this.state.currPage < 1) {
      this.setPage(1);
    }
    this.Start();
  };

  // next page
  Next = e => {
    //this.state.currPage++;
    this.setPage(++this.state.currPage);
    if (this.state.currPage > this.state.size) {
      this.setPage(this.state.size);
    }
    this.Start();
  };
  setPage(i) {
    this.props.setCurrentPage(i);
    this.setState({
      currPage: i
    });
  }
  // --------------------
  // Script
  // --------------------

  // binding pages
  Bind = () => {
    var a = this.e.getElementsByTagName("button");
    for (var i = 0; i < a.length; i++) {
      if (+a[i].innerHTML === this.state.currPage) a[i].className = "current";
      a[i].addEventListener(
        "click",
        e => {
          this.Click(e);
        },
        this
      );
    }
  };

  // write pagination
  Finish = () => {
    this.e.innerHTML = this.code;
    this.code = "";
    this.Bind();
  };

  // find pagination type
  Start = () => {
    if (this.state.size < this.state.step * 2) {
      this.Add(1, this.state.size + 1);
    } else if (this.state.currPage < this.state.step * 2 - 1) {
      this.Add(1, this.state.step * 2 + 1);
      this.Last();
    } else if (this.state.currPage > this.state.size - this.state.step * 2) {
      this.First();
      this.Add(this.state.size - this.state.step * 2 + 1, this.state.size + 1);
    } else {
      this.First();
      this.Add(
        this.state.currPage - this.state.step + 2,
        this.state.currPage + this.state.step
      );
      this.Last();
    }
    this.Finish();
  };

  // create skeleton
  Create = e => {
    this.e = e.getElementsByTagName("span")[0];
  };

  // init
  Init = (e, data) => {
    this.Extend(data);
    this.Create(e);
    this.Start();
  };
  render() {
    let nextDisableStyle = this.state.currPage >= this.props.totalPage;
    let prevDisableStyle = this.state.currPage <= 1;
    return (
      <div id="paginationByStep">
        <button
          disabled={prevDisableStyle}
          onClick={e => {
            this.Prev(e);
          }}
        >
          {this.props.prevText}
        </button>
        <span />
        <button
          disabled={nextDisableStyle}
          onClick={e => {
            this.Next(e);
          }}
        >
          {this.props.nextText}
        </button>
      </div>
    );
  }
}
PaginationByStep.propTypes = {
  curr: PropTypes.number.isRequired,
  rowPerPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  totalPage: PropTypes.number.isRequired,
  nextText: PropTypes.string,
  prevText: PropTypes.string,
  step: PropTypes.number.isRequired
};

export { PaginationByStep };
