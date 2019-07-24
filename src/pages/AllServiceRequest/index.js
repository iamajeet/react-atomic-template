import React, { Component } from "react";
import { PSSTable, Block, CardBox } from "../../components";

import styled from "styled-components";
import { getAllServiceRequest } from "../../common/serviceRequestHelper";
import { ButtonGroup, Button } from "react-bootstrap";
import "./styles.scss";

const col = [
  "product",
  "type",
  "desc",
  "createddate",
  "closeddate",
  "response",
  "currentstatus"
];
const tHead = [
  "Product ID",
  "Service Type",
  "Query Desc",
  "Created Date",
  "Close Date",
  "Service Response",
  "Status"
];
const StyledBlock = styled(Block)`
  height: 40px;
  background: #e6e6e6;
  line-height: 40px;
  padding: 0 5px;
  text-align: center;
  font-weight: bold;
`;
const CardBoxStyled = styled(CardBox)`
  .card-body {
    padding: 0px;
  }
`;
class AllServiceRequest extends Component {
  state = {
    myServices: [],
    allServiceRequest: [],
    currentFilter: "all"
  };

  componentDidMount() {
    fetch("/assets/data/servicerequest.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        let sList = getAllServiceRequest(data.children);
        this.setState({
          allServiceRequest: sList,
          currentFilter: "all"
        });
        this.setState({ myServices: sList });
      });
  }

  getServiceRequest(filterType) {
    if (filterType === "all") {
      this.setState({ currentFilter: "all" });
      this.setState({ myServices: this.state.allServiceRequest });
    } else if (filterType === "pending") {
      this.setState({ currentFilter: "pending" });
      const { allServiceRequest } = this.state;
      const result = allServiceRequest.filter(
        request => request.currentstatus === "pending"
      );
      if (result.length) {
        this.setState({ myServices: result });
      }
    } else if (filterType === "closed") {
      this.setState({ currentFilter: "closed" });
      const { allServiceRequest } = this.state;
      const result = allServiceRequest.filter(
        request => request.currentstatus === "closed"
      );
      if (result.length) {
        this.setState({ myServices: result });
      }
    }
  }

  render() {
    const { myServices, currentFilter } = this.state;
    console.log("myServices", myServices);
    return (
      <>
        <StyledBlock>Service Requests</StyledBlock>

        {myServices.length && (
          <CardBoxStyled style={{ margin: "10px 0px", padding: "0 5px" }}>
            <ButtonGroup
              aria-label="Service Requests"
              className="btn-group--position"
            >
              <Button
                variant="secondary"
                active={currentFilter === "all"}
                onClick={() => {
                  this.getServiceRequest("all");
                }}
              >
                All
              </Button>
              <Button
                variant="secondary"
                active={currentFilter === "pending"}
                onClick={() => {
                  this.getServiceRequest("pending");
                }}
              >
                Pending
              </Button>
              <Button
                variant="secondary"
                active={currentFilter === "closed"}
                onClick={() => {
                  this.getServiceRequest("closed");
                }}
              >
                Closed
              </Button>
            </ButtonGroup>

            <PSSTable
              tblData={myServices}
              tHead={tHead}
              dKey={col}
              search={true}
              defaultCSS={true}
              stripedRow={true}
              stripColor="#CCC"
              cellBorder="1px solid #000"
              showPerPageOption={true}
              showTotal={false}
              nextText=">"
              prevText="<"
              sortable={true}
              paginationByStep={false}
              step={2}
            />
          </CardBoxStyled>
        )}
      </>
    );
  }
}

export default AllServiceRequest;
