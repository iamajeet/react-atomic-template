import React from "react";
import styled from "styled-components";

import ProductDetails from "./ProductDetails";
import ProductTabs from "./ProductTabs";
import "./product.css";

const ProductBlock = styled.div`
  background-color: #fff;
  padding: 0 10px;
`;
function Product(props) {
  const {
    productTabs: { tabs }
  } = props;
  const { productDetails } = props;
  return (
    <ProductBlock>
      <ProductDetails productDetails={productDetails} />
      <ProductTabs tabs={tabs} />
    </ProductBlock>
  );
}
export default Product;
