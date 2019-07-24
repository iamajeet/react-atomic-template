import { reversePalette } from "styled-theme/composer";

const theme = {};

theme.palette = {
  primary: ["#1976d2", "#2196f3", "#71bcf7", "#c2e2fb"],
  secondary: ["#c2185b", "#e91e63", "#f06292", "#f8bbd0"],
  danger: ["#d32f2f", "#f44336", "#f8877f", "#ffcdd2"],
  alert: ["#ffa000", "#ffc107", "#ffd761", "#ffecb3"],
  success: ["#388e3c", "#4caf50", "#7cc47f", "#c8e6c9"],
  white: ["#fff", "#fff", "#eee"],
  grayscale: [
    "#212121",
    "#414141",
    "#616161",
    "#9e9e9e",
    "#bdbdbd",
    "#e0e0e0",
    "#eeeeee",
    "#ffffff",
    "#343a40",
    "#364150"
  ]
};

theme.reversePalette = reversePalette(theme.palette);

theme.fonts = {
  primary: "Helvetica Neue, Helvetica, Roboto, sans-serif",
  pre: "Consolas, Liberation Mono, Menlo, Courier, monospace",
  quote: "Georgia, serif"
};

theme.sizes = {
  iconPadding: "5px",
  height: "calc(100vh - 106px)",
  maxWidth: "100%",
  s1em: "1em",
  s2em: "2em",
  s12px: "12px",
  s14px: "14px",
  s16px: "16px",
  s18px: "18px",
  s20px: "20px",
  s22px: "22px",
  s24px: "24px"
};

export default theme;
