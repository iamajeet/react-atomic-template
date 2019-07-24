import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import {
  ItemList,
  Block,
  ModalPopup,
  PSSTable,
  GridListToggle,
  ViewButton,
  Thumbnail
} from "../../components";
import Product from "../Product";
import ProductViewButton from "../Product/ProductViewButton";
import styled from "styled-components";
import {
  getAllProducts,
  getExpiredProducts,
  getProductsExpiringSoon
} from "../../common/productHelper";

const StyledBlock = styled(Block)`
  height: 40px;
  background: #e6e6e6;
  line-height: 40px;
  padding: 0 5px;
  text-align: center;
  font-weight: bold;
`;
const productTabs = {
  tabs: {
    tabs: [
      {
        title: "SPECIFICATIONS",
        content: {
          heading: "Specification",
          subheading: "",
          content: {}
        }
      },
      {
        title: "INSURANCE",
        content: {
          heading: "Insurance Details",
          subheading: "",
          content: {}
        }
      },
      {
        title: "FEATURES",
        content: {
          heading: "Features",
          subheading: "",
          content: []
        }
      }
    ],
    defaultActiveKey: "SPECIFICATIONS"
  }
};
const BaseProductTblImageComponent = props => {
  return (
    <td style={{ width: "170px", minWidth: "170px", backgroundColor: "#fff" }}>
      <Thumbnail enlarge={false} backgroundImagePath={props.rowData.imageSrc} />
    </td>
  );
};

BaseProductTblImageComponent.propTypes = {
  rowData: PropTypes.object,
  tdData: PropTypes.string
};
const ViewDetailComponent = props => {
  return (
    <td align="center">
      <Button
        title="View"
        variant="secondary"
        onClick={data => {
          props.itemClick(props.rowData);
        }}
      >
        <i className="fa fa-eye" />
      </Button>
    </td>
  );
};

ViewDetailComponent.propTypes = {
  rowData: PropTypes.object,
  tdData: PropTypes.string
};
class Catalog extends Component {
  constructor(props) {
    super(props);
    this.col = [
      "imageSrc",
      "name",
      "serialNo",
      "path",
      "imei",
      "modelNo",
      "warrantyPeriod",
      "extendedWarranty",
      "view"
    ];
    this.tHead = [
      "Image",
      "Name",
      "Serial No",
      "Category",
      "IMEI",
      "Model No",
      "Warranty Period",
      "Extended Warranty",
      "View"
    ];
  }
  state = {
    myProducts: [],
    smShow: false,
    currentItem: {},
    defaultView: "grid"
  };
  onToggle = name => {
    this.setState({ defaultView: name });
  };
  componentDidMount() {
    fetch("/assets/data/products.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.getProducts(data);
      });
  }
  setSmShow = data => {
    this.setState({ smShow: data });
  };
  getProducts(data) {
    if (this.props.match.params.id === "all") {
      const allProducts = getAllProducts(data.children);
      this.setState({ myProducts: allProducts });
    }
    if (this.props.match.params.id === "expired") {
      const expiredProducts = getExpiredProducts(data.children);
      this.setState({ myProducts: expiredProducts });
    }
    if (this.props.match.params.id === "expiring") {
      const soonExpiringProducts = getProductsExpiringSoon(data.children, 150);
      this.setState({ myProducts: soonExpiringProducts });
    }
  }
  getItemDetails = details => {
    productTabs.tabs.tabs.forEach(item => {
      item.content.content = details[item.title.toLowerCase()];
    });
    this.setState({ currentItem: details });
    this.setSmShow(true);
    console.log("details ", details);
  };

  render() {
    const { myProducts } = this.state;
    return (
      <>
        <StyledBlock>
          {this.props.match.params.id === "all" && <span>All Products</span>}
          {this.props.match.params.id === "expiring" && (
            <span>Products Warranty Expiring Soon</span>
          )}
          {this.props.match.params.id === "expired" && (
            <span>Products Warranty Expired</span>
          )}
          <GridListToggle
            style={{ float: "right" }}
            default={this.state.defaultView}
            onToggle={data => {
              this.onToggle(data);
            }}
          />
        </StyledBlock>
        {this.state.defaultView === "grid" && (
          <ItemList
            itemList={myProducts}
            itemClick={data => {
              this.getItemDetails(data);
            }}
          />
        )}
        {this.state.defaultView === "list" && (
          <PSSTable
            tblData={myProducts}
            tHead={this.tHead}
            dKey={this.col}
            search={false}
            defaultCSS={true}
            stripedRow={false}
            stripColor="#CCC"
            cellBorder="1px solid #000"
            showPerPageOption={true}
            showTotal={false}
            nextText=">"
            prevText="<"
            sortable={true}
            paginationByStep={true}
            step={3}
            itemClick={data => {
              this.getItemDetails(data);
            }}
            customTd={[
              { custd: BaseProductTblImageComponent, keyItem: "imageSrc" },
              { custd: ViewDetailComponent, keyItem: "view" }
            ]}
          />
        )}
        <ModalPopup
          size="xl"
          headerTitle="Product Details"
          show={this.state.smShow}
          onHide={data => {
            this.setSmShow(data);
          }}
        >
          {" "}
          <Product
            productDetails={this.state.currentItem}
            productTabs={productTabs}
          />
        </ModalPopup>
      </>
    );
  }
}

export default Catalog;
