import React from "react";

function ProductDescription(props) {
  const {desc} = props;
  return (
    <>
      <hr />
      <p className="content-desc">
        {desc || 
        `Paprika is a ground spice made from dried red fruits of the larger and
        sweeter varieties of the plant Capsicum annuum, caled bell pepper or
        sweet pepper. The most common variety used for making paprika is tomato
        pepper, sometimes with the addition of more pungent varieties, called
        chili peppers, and cayenne pepper.`}
      </p>
    </>
  );
}
export default ProductDescription;
