import React from "react";
import PropTypes from "prop-types";
import { TableCell, TableRow } from "../../../components";
const PSSTd = props => {
  let CustomTd = props.customTd;
  return (
    <>
      {props.dKey.map((item, id) => {
        let CustomTdComponent = null;
        CustomTdComponent =
          CustomTd &&
          CustomTd.filter(i => {
            return i.keyItem === item;
          }).reduce((result, item) => {
            return item;
          }, {}).custd;

        if (!CustomTd)
          return <TableCell key={id}>{props.tdData[item]}</TableCell>;

        if (CustomTdComponent) {
          return (
            <CustomTdComponent
              key={id}
              {...props}
              tdData={props.tdData[item]}
              field={item}
              rowData={props.tdData}
            />
          );
        }

        return <TableCell key={id}>{props.tdData[item]}</TableCell>;
      })}
    </>
  );
};
PSSTd.propTypes = {
  tdData: PropTypes.object,
  dKey: PropTypes.array,
  customTd: PropTypes.array
};

export { PSSTd };
