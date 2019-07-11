import React from "react";
import { storiesOf } from "@storybook/react";
import { Table, TableCell, TableRow } from "../../../components";

storiesOf("Table", module)
  .addWithJSX("default", () => (
    <Table>
      <TableRow>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
    </Table>
  ))
  .addWithJSX("with head", () => (
    <Table
      head={
        <TableRow>
          <TableCell heading>Heading 1</TableCell>
          <TableCell heading>Heading 2</TableCell>
          <TableCell heading>Heading 3</TableCell>
        </TableRow>
      }
    >
      <TableRow>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
    </Table>
  ))
  .addWithJSX("with foot", () => (
    <Table
      foot={
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
          <TableCell>Footer 3</TableCell>
        </TableRow>
      }
    >
      <TableRow>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
    </Table>
  ))
  .addWithJSX("with caption", () => (
    <Table caption="Hello">
      <TableRow>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
    </Table>
  ))
  .addWithJSX("with alternate row", () => (
    <Table caption="Hello" stripedRow stripColor="#CCC">
      <TableRow>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell rowSpan="2">Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ backgroundColor: "#CCC" }}>
          <button
            onClick={() => {
              alert("delete");
            }}
          >
            delete
          </button>
        </TableCell>
        <TableCell style={{ backgroundColor: "#CCC" }}>Cell 3</TableCell>
      </TableRow>
    </Table>
  ));
