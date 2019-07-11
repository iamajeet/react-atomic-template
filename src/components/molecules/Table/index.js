import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { font, palette } from "styled-theme";

import { Caption } from "../../../components";
const altBackgroundColor = ({ stripedRow, stripColor }) =>
  stripedRow ? stripColor : "none";
const StyledTable = styled.table`
  font-family: ${font("primary")};
  border-collapse: collapse;
  width: 100%;
  border: 1px solid ${palette("grayscale", 1, true)};
  color: ${palette("grayscale", 0)};
  tr:nth-child(even) {
    background-color: ${altBackgroundColor};
  }
`;

const Table = ({ caption, head, foot, children, ...props }) => {
  const { reverse } = props;
  return (
    <StyledTable {...props}>
      {caption && <Caption reverse={reverse}>{caption}</Caption>}
      {head && <thead>{head}</thead>}
      {foot && <tfoot>{foot}</tfoot>}
      <tbody>{children}</tbody>
    </StyledTable>
  );
};

Table.propTypes = {
  caption: PropTypes.string,
  head: PropTypes.node,
  foot: PropTypes.node,
  children: PropTypes.any,
  reverse: PropTypes.bool,
  stripedRow: PropTypes.bool,
  stripColor: PropTypes.string
};

export default Table;
