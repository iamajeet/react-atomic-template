import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const styles = css`
  text-align: left;
  padding: 0.75em;
`;

const Th = styled.th`
  ${styles}
`;
const Td = styled.td`
  ${styles}
`;

const TableCell = ({ heading, children, ...props }) => {
  console.log("---------------- ", props);
  //return React.createElement(heading ? Th : Td, props, children);
  if (heading) {
    return <th {...props}>{children}</th>;
  } else {
    return <td {...props}>{children}</td>;
  }
};

TableCell.propTypes = {
  heading: PropTypes.bool,
  children: PropTypes.any
};

export default TableCell;
