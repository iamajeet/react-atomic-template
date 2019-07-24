import React from "react";
import { storiesOf } from "@storybook/react";
import { BarChart } from "../../../components";

storiesOf("BarChart", module)
  .addWithJSX("default", () => (
    <BarChart
      canvasStyle={{ width: 800, height: 300 }}
      data={{
        labels: ["All", "Expired", "Expiring Soon"],
        datasets: [
          {
            label: "Products",
            data: [22, 19, 3],
            backgroundColor: "blue"
          }
        ]
      }}
      options={{
        // This chart will not respond to mousemove, etc
        events: ["click"],
        onClick: (e, item) => {
          if (item && item.length > 0 && item[0]._index) {
            console.log("----- ", item[0]._index);
          }
        }
        // scales: {
        //   xAxes: [
        //     {
        //       gridLines: {
        //         drawOnChartArea: false
        //       }
        //     }
        //   ],
        //   yAxes: [
        //     {
        //       gridLines: {
        //         drawOnChartArea: false
        //       }
        //     }
        //   ]
        // }
      }}
    />
  ))
  .addWithJSX("Multiple dataset", () => (
    <BarChart
      canvasStyle={{ width: 800, height: 300 }}
      data={{
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            label: "Expired",
            data: [0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
            backgroundColor: "red",
            borderColor: "red"
          }
        ]
      }}
      options={{
        // This chart will not respond to mousemove, etc
        events: ["click"],
        onClick: (e, item) => {
          console.log("----- ", e.targets);
          console.log("----- ", item);
        }
      }}
    />
  ));
