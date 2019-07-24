import PropTypes from "prop-types";
import styled from "styled-components";
import { palette } from "styled-theme";

const backgroundColor = ({ filled, colorPalette }) =>
  palette(colorPalette ? colorPalette : "grayscale", filled ? 1 : 0, true);

const TableRow = styled.tr`
  background-color: ${backgroundColor};
`;

TableRow.propTypes = {
  filled: PropTypes.bool,
  reverse: PropTypes.bool,
  colorPalette: PropTypes.string
};

export default TableRow;
